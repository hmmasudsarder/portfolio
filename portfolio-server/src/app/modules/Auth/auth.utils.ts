import jwt from 'jsonwebtoken';

export const createToken = (
  jwtPayload: { userId: string; role: string },
  secret: string,
  expiresIn: string,
) => {
  // console.log('creating token with payload:', jwtPayload);
  // console.log('using secret:', secret);
  // console.log('token expires in:', expiresIn);
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};
