import React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import type { FormEvent } from "react";

import Form from "@/components/UI/Form";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import Box from "@/components/UI/Box";
import LineStyled from "@/components/UI/Line";
import Icon from "@/components/UI/Icon";
import { PStyled, RegisterStyled } from "./style";

const Register: React.FC = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    if (response.ok) {
      const responseData = await response.json(); // Parse JSON from the response
      console.log("Registration successful:", responseData);
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <RegisterStyled>
      <Form handleSubmit={handleSubmit}>
        <Input type="text" name="username" label="User Name" required />
        <Input type="email" name="email" label="Email Address" required />
        <Input type="password" name="password" label="Password" required />
        <Input
          type="password"
          name="repeatPassword"
          label="Repeat Password"
          required
        />
        <Button type="submit">Register</Button>
        <Box $direction="row" $gap="22px">
          <Button
            type="button"
            $buttonType="social"
            onClick={handleGoogleSignIn}
          >
            <Icon name="google-icon" alt="google icon" height={18} width={18} />
          </Button>
          {/*** TO DO: Add Facebook login FUNC ***/}
          <Button type="button" $buttonType="social">
            <Icon
              name="facebook-icon"
              alt="facebook icon"
              height={18}
              width={18}
            />
          </Button>
        </Box>
        <Box>
          <LineStyled />
        </Box>
        <Box>
          <PStyled>You are already a member?</PStyled>

          <Button type="button" $buttonType="inverted" $mB="60px">
            <Link href="/login">Login</Link>
          </Button>
        </Box>
      </Form>
    </RegisterStyled>
  );
};

export default Register;
