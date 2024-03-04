import type { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcrypt';
import dbConnect from '@/dbConnect';
import User, { Role } from '../../../../models/User';

export default async function registerUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    const { email, password } = req.body;
    /** TODO: validation */
    // console.log(email, password);
    // check if email is used
    // const query = User.where({ email: email });
    // await query.findOne();
    const isUsedEmail = await User.findOne({ email: email });
    if (isUsedEmail) {
      return res.status(401).json({ message: 'Email already taken.' });
    }
    const hashedPassword = await hash(password, 9);

    const user = new User({
      name: 'fake',
      email: email,
      password: hashedPassword,
    });

    const dbResponse = await user.save();

    res.status(201).json({ message: 'New user created.', user: dbResponse });
  } catch (error) {
    res.status(500).json({ message: error });
    console.log({ error });
  }
}
