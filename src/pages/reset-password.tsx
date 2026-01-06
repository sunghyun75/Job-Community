import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUpdatePassword } from '@/hooks/mutations/auth/use-update-password';
import { errorMessage } from '@/lib/error-korean';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'sonner';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: updatePassword, isPending: isUpdatePasswordPending } =
    useUpdatePassword({
      onSuccess: () => {
        toast.info('비밀번호가 재설정되었습니다.', {
          position: 'top-center',
        });
        setPassword('');
      },
      onError: (error) => {
        const message = errorMessage(error);
        toast.error(message, {
          position: 'top-center',
        });
        setPassword('');
      },
    });

  const handleUpdatePassword = () => {
    if (password.trim() === '') return;
    updatePassword(password);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="font-bold text-xl">비밀번호 재설정</div>
      <div>새로운 비밀번호를 입력하세요.</div>
      <div className="flex flex-col gap-5 w-150">
        <Input
          disabled={isUpdatePasswordPending}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? 'text' : 'password'}
          placeholder="새로운 비밀번호"
        />
        <button
          disabled={isUpdatePasswordPending}
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-215 pt-1.5 muted-foreground"
        >
          {showPassword ? <EyeOff width={25} /> : <Eye width={25} />}
        </button>
      </div>
      <div className="flex flex-col gap-8 w-80">
        <Button
          disabled={isUpdatePasswordPending}
          onClick={handleUpdatePassword}
          className="cursor-pointer"
        >
          비밀번호 변경
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
          to={'/sign-in'}
        >
          아이디가 생각나셨나요?
        </Link>
      </div>
    </div>
  );
}
