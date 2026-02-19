export interface TokenPayload {
  id: number;
  role: 'admin' | 'user';
  email: string;
  iat: number;
  exp: number;
}
