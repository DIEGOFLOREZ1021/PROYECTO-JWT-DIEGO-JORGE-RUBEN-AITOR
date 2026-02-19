# Mock Backend (Node + Express) — JWT + Roles

Backend mock para prácticas de **Angular** (login JWT + rutas privadas + rol admin).

## Requisitos
- Node.js 18+ (recomendado)
- npm

## Instalar y arrancar
```bash
npm install
npm start
```

Por defecto escucha en: `http://localhost:3001`

## Variables de entorno (opcional)
- `PORT` (default: 3001)
- `JWT_SECRET` (default: dev_secret_change_me)
- `JWT_EXPIRES_IN` (default: 1h)

Ejemplo:
```bash
JWT_SECRET=mi_secreto PORT=3001 npm start
```

## Usuarios de prueba
- admin@example.com / Admin123!  (role: admin)
- user@example.com / User123!    (role: user)

> Nota: las contraseñas se validan contra `password_hash` (bcrypt) en `fixtures/users.json`

## Endpoints
- GET `/health`
- POST `/api/auth/login`
- GET `/api/me` (JWT)
- GET `/api/products` (JWT)
- GET `/api/admin` (JWT + role=admin)