import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRequestPasswordEmail } from '@/hooks/mutations/auth/use-request-password-reset-email';
import { errorMessage } from '@/lib/error-korean';
import { useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'sonner';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const { mutate: requestPasswordEmail, isPending: isRequestEmailPending } =
    useRequestPasswordEmail({
      onSuccess: () => {
        toast.info('인증 메일이 성공적으로 전송되었습니다.', {
          position: 'top-center',
        });
        setEmail('');
      },
      onError: (error) => {
        const message = errorMessage(error);
        toast.error(message, {
          position: 'top-center',
        });
        setEmail('');
      },
    });

  const handleSendEmailClick = () => {
    if (email.trim() === '') return;
    requestPasswordEmail(email);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="font-bold text-xl">비밀번호 찾기</div>
      <div>인증 요청 받을 이메일을 입력하세요.</div>
      <div className="flex flex-col gap-5 w-150">
        <Input
          disabled={isRequestEmailPending}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="이메일 입력하기"
        />
      </div>
      <div className="flex flex-col gap-8 w-80">
        <Button
          disabled={isRequestEmailPending}
          onClick={handleSendEmailClick}
          className="cursor-pointer"
        >
          인증 요청 보내기
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          className="text-muted-foreground cursor-pointer hover:underline"
          to={'/sign-in'}
        >
          비밀번호가 생각나셨나요?
        </Link>
      </div>
    </div>
  );
}
