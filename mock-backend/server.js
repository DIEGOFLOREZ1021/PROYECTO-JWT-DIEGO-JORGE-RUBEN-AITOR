const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const users = require('./fixtures/users.json');
const products = require('./fixtures/products.json');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

function requireAuth(req) {
  const header = req.headers.authorization || '';
  const [scheme, token] = header.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return { ok: false, status: 401, error: 'Missing or invalid Authorization header' };
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return { ok: true, payload };
  } catch (e) {
    return { ok: false, status: 401, error: 'Invalid or expired token' };
  }
}

app.get('/health', (req, res) => res.json({ ok: true }));

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ error: 'email and password are required' });
  }

  const user = users.find(u => u.email.toLowerCase() === String(email).toLowerCase());
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const match = await bcrypt.compare(password, user.password_hash);
  if (!match) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign(
    { id: user.id, role: user.role, email: user.email },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  res.json({
    token,
    user: { id: user.id, name: user.name, email: user.email, role: user.role }
  });
});

app.get('/api/me', (req, res) => {
  const auth = requireAuth(req);
  if (!auth.ok) return res.status(auth.status).json({ error: auth.error });

  const user = users.find(u => u.id === auth.payload.id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  res.json({ id: user.id, name: user.name, email: user.email, role: user.role });
});

app.get('/api/products', (req, res) => {
  const auth = requireAuth(req);
  if (!auth.ok) return res.status(auth.status).json({ error: auth.error });

  res.json(products);
});

app.get('/api/admin', (req, res) => {
  const auth = requireAuth(req);
  if (!auth.ok) return res.status(auth.status).json({ error: auth.error });

  if (auth.payload.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden: admin only' });
  }

  res.json({ message: 'Admin access granted', serverTime: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Mock backend running on http://localhost:${PORT}`);
  console.log(`JWT_SECRET=${JWT_SECRET}`);
});
