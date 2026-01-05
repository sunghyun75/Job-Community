import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSignInWithPassword } from '@/hooks/mutations/auth/use-sign-in-password';
import { useState } from 'react';
import { Link } from 'react-router';
import githubLogo from '@/assets/github-icon.png';
import { useSignInWithOAuth } from '@/hooks/mutations/auth/use-sign-in-oauth';
import { toast } from 'sonner';
import { errorMessage } from '@/lib/error-korean';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate: signInWithPassword, isPending: isSignInWithPasswordPending } =
    useSignInWithPassword({
      onError: (error) => {
        const message = errorMessage(error);
        toast.error(message, {
          position: 'top-center',
        });
        setEmail('');
        setPassword('');
      },
    });

  const { mutate: signInWithOAuth, isPending: isSignInWithOAuth } =
    useSignInWithOAuth({
      onError: (error) => {
        const message = errorMessage(error);
        toast.error(message, {
          position: 'top-center',
        });
      },
    });

  const handleSignInWithPasswordClick = () => {
    if (email.trim() === '') return;
    if (password.trim() === '') return;

    signInWithPassword({
      email,
      password,
    });
  };

  const handleSignInWithOAuth = () => {
    signInWithOAuth('github');
  };

  const isPending = isSignInWithPasswordPending || isSignInWithOAuth;

  return (
    <div className="flex flex-col gap-10">
      <div className="font-bold text-xl">로그인</div>
      <div className="flex flex-col gap-5 w-150">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="이메일을 입력하세요."
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="비밀번호를 입력하세요."
        />
      </div>
      <div className="flex flex-col gap-8 w-80">
        <Button
          disabled={isPending}
          onClick={handleSignInWithPasswordClick}
          className="cursor-pointer"
          variant={'outline'}
        >
          로그인
        </Button>
        <Button
          disabled={isPending}
          className="cursor-pointer"
          variant={'outline'}
          onClick={handleSignInWithOAuth}
        >
          <img src={githubLogo} alt="GitHub-Logo" className="w-6" />
          GitHub로 로그인
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          className="text-muted-foreground cursor-pointer hover:underline"
          to={'/sign-up'}
        >
          회원가입이 필요하신가요?
        </Link>
        <Link
          className="text-muted-foreground cursor-pointer hover:underline"
          to={'/reset-password'}
        >
          비밀번호를 잃어버리셨나요?
        </Link>
      </div>
    </div>
  );
}
