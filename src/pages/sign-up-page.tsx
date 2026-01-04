import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router';

export default function SignUpPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="font-bold text-xl">회원가입</div>
      <div className="flex flex-col gap-5 w-150">
        <Input type="email" placeholder="이메일을 입력하세요." />
        <Input type="password" placeholder="비밀번호를 입력하세요." />
      </div>
      <div className="flex flex-col gap-8 w-80">
        <Button className="cursor-pointer" variant={'outline'}>
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
