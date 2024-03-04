import dbConnect from "@/dbConnect";
import { Inter } from "next/font/google";
import User, { IUser } from "../../models/User";
import { GetStaticProps } from "next";
import { useSession, signOut } from "next-auth/react";

import Link from "next/link";

type Props = {
  data: unknown;
};

export default function Home({ data }: Props) {
  console.log(data);
  const { data: session } = useSession();
  return (
    <div>
      <nav>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <button onClick={() => signOut()}>Sign out</button>
      </nav>
      Home
    </div>
  );
}

// Home.auth = true;

export const getStaticProps: GetStaticProps<Props> = async () => {
  await dbConnect();

  /* 
  const user = new User({
    username: "John",
    email: "john@gmail.com",
  });

  await user.save();
  */

  const result = await User.find({});

  const users = result.map((doc) => {
    const user = JSON.parse(JSON.stringify(doc));
    return user;
  });

  return {
    props: {
      data: users,
    },
  };
};
