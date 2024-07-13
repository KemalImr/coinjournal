// src/app/login/page.tsx
"use client";

import { useState } from 'react';
import axios from 'axios';
import Link from "next/link";
import { useRouter } from 'next/navigation'; // Verwenden Sie 'next/navigation' für 'useRouter' in Client-Komponenten
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/user/login', { email, password });
      // Save the token in local storage or cookies
      localStorage.setItem('token', response.data.token);
      router.push('/dashboard'); // Redirect to dashboard after login
    } catch (error) {
      setMessage('Error logging in user.');
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="m@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <Button type="submit" className="w-full">Sign in</Button>
          {message && <p className="mt-4 text-center text-sm">{message}</p>}
        </form>
      </CardContent>
      <CardFooter>
        <Link href="/register" className="w-full text-center">
          <Button variant="outline" className="w-full">Sign up</Button>
        </Link>
      </CardFooter>
    </Card>
  )
};

export default LoginPage;
