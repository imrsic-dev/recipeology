import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { FormEvent } from 'react';
import Link from 'next/link';

import Form from '@/components/UI/Form';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import Box from '@/components/UI/Box';
import Icon from '@/components/UI/Icon';
import LineStyled from '@/components/UI/Line';
import {
  LoginStyled,
  TitleStyled,
  LinkTextStyled,
  PStyled,
} from './style';

const Login = () => {
  const router = useRouter();

  const handleGitHubSignIn = async () => {
    await signIn('github', { callbackUrl: '/' });
  };

  const handleGoogleSignIn = async () => {
    await signIn('google', { callbackUrl: '/' });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });
    if (response?.ok) {
      // Signed in
      router.push('/');
    }

    console.log('response: ', response);
  };

  return (
    <LoginStyled>
      {/* Your custom UI elements */}
      <TitleStyled>Welcome Back!</TitleStyled>
      <Form handleSubmit={handleSubmit}>
        <Input label="Email Address" type="email" name="email" required />
        <Input label="Password" type="password" name="password" required />
        <Box $gap="18px">
          <Button type="submit" $buttonType="primary">
            Login
          </Button>
          <Link href="/#">
            <LinkTextStyled>Forgot Password?</LinkTextStyled>
          </Link>
        </Box>
        <Box $direction="row" $gap="22px">
          <Button type="button" $buttonType="social" onClick={handleGoogleSignIn}>
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
          <PStyled>You are new here?</PStyled>

          <Button type="button" $buttonType="inverted" $mB="60px">
            <Link href="/register">Sign Up</Link>
          </Button>
        </Box>
      </Form>
    </LoginStyled>
  );
};

export default Login;
