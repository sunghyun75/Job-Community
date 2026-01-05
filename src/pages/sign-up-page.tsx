import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSignUp } from '@/hooks/mutations/auth/use-sign-up';
import { errorMessage } from '@/lib/error-korean';
import { useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'sonner';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate: signUp } = useSignUp({
    onError: (error) => {
      const message = errorMessage(error);
      toast.error(message, {
        position: 'top-center',
      });
    },
  });

  const handleSignUpClick = () => {
    if (email.trim() === '') return;
    if (password.trim() === '') return;
    signUp({
      email,
      password,
    });
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="font-bold text-xl">회원가입</div>
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
          onClick={handleSignUpClick}
          className="cursor-pointer"
          variant={'outline'}
        >
          이메일 인증 후 회원가입 하기
        </Button>
      </div>
      <div className="flex flex-col">
        <Link
          className="text-muted-foreground cursor-pointer hover:underline"
          to={'/sign-in'}
        >
          이미 아이디가 있나요?
        </Link>
      </div>
    </div>
  );
}
