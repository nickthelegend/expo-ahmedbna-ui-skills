import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Lock } from 'lucide-react-native';
import React from 'react';

export default function LoginTemplate() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Card>
        <CardHeader>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent style={{ gap: 16 }}>
          <Input 
            placeholder="Email" 
            icon={Mail} 
            keyboardType="email-address"
          />
          <Input 
            placeholder="Password" 
            icon={Lock} 
            secureTextEntry 
          />
        </CardContent>
        <CardFooter style={{ flexDirection: 'column', gap: 12 }}>
          <Button style={{ width: '100%' }}>Login</Button>
          <Button variant="ghost" style={{ width: '100%' }}>Forgot Password?</Button>
        </CardFooter>
      </Card>
    </View>
  );
}
