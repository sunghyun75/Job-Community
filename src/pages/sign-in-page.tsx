import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Link } from 'react-router';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <Button className="cursor-pointer" variant={'outline'}>
          로그인
        </Button>
        <Button className="cursor-pointer" variant={'outline'}>
          카카오 계정으로 로그인
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
