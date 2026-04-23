const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));


// supabase client for database
const supabase = createClient(
  process.env.SUPABASE_URL, 
  process.env.SUPABASE_SERVICE_KEY
);

// auth middleware using jwt
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']; // get payload from header
  const token = authHeader && authHeader.split(' ')[1]; // get token from header: bearer <token>

  if(!token) return res.status(401).json({ message: 'Unauthorized' }); // no token provided

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid or expired token' }); // invalid token
    req.user = decoded; // decoded token
    next(); // continue to next middleware
  });
}

// REGISTER route
app.post('/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists
    const { data: existing } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .maybeSingle();

    if (existing) return res.status(400).json({ message: 'Email already registered or invalid' });
 

    const password_hash = await bcrypt.hash(password, 10);

    const { data: newUser, error } = await supabase
      .from('users')
      .insert([{ name, email, password_hash }])
      .select('id, name, email, created_at')
      .single();

    if (error) throw error;

    res.status(201).json({ message: 'Account created', user: newUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


  // LOGIN route
app.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .maybeSingle();

    if (!user || error) return res.status(400).json({ message: 'User not found' });

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) return res.status(400).json({ message: 'Wrong password' });

    // sign jwt token
    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

