import jwt from 'jsonwebtoken';

export const createToken = (
  jwtPayload: { userId: string; role: string },
  secret: string,
  expiresIn: string,
) => {
  console.log('creating token with payload:', jwtPayload);
  console.log('using secret:', secret);
  console.log('token expires in:', expiresIn);
  const token = jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
  return token
};

// const token = jwt.sign(
//   { userId: user._id, role: user.role },
//   process.env.JWT_SECRET,
//   { expiresIn: '1h' }
// );