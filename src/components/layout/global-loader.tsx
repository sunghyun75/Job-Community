import logo from '@/assets/chat-right-quote.svg';
export default function GlobalLoader() {
  return (
    <div className="h-[100vh] w-[100vw] bg-muted flex flex-col items-center justify-center">
      <div className="flex items-center gap-3 mb-20 animate-pulse">
        <img src={logo} alt="로고" className="w-10" />
        <div className="font-bold text-xl">취준톡</div>
      </div>
    </div>
  );
}
