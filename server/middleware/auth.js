import { UnAuthenticatedError } from '../errors/index.js';
import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnAuthenticatedError('Authentication is invalid');
  }
  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, isAdmin: payload.isAdmin };
    next();
  } catch (error) {
    throw new UnAuthenticatedError('Authentication is invalid');
  }
};

export default auth;
