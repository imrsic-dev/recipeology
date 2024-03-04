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
    const { email, password, username } = req.body;
    /** TODO: validation */
    if (!email || !password || !username) {
      return res.status(400).json({ message: 'Missing fields.' });
    }
    
    const isUsedEmail = await User.findOne({ email: email });
    if (isUsedEmail) {
      return res.status(401).json({ message: 'Email already taken.' });
    }

    const isUsedUsername = await User.findOne({ username: username });
    if (isUsedUsername) {
      return res.status(400).json({ message: 'Username already taken.' });
    }

    const hashedPassword = await hash(password, 9);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    const dbResponse = await user.save();

    res.status(201).json({ message: 'New user created.', user: dbResponse });
  } catch (error) {
    res.status(500).json({ message: error });
    console.log({ error });
  }
}
