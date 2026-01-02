import { Link, Outlet } from 'react-router';
import logo from '@/assets/chat-right-quote.svg';
import sun from '@/assets/sun.svg';
import profile from '@/assets/person-circle.svg';

export default function GlobalLayout() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <header className="border-b">
        <div className="flex justify-between h-full max-w-180 w-full m-auto px-4">
          <Link to={'/'} className="flex gap-2 pt-3">
            <img src={logo} alt="logo" className="h-9 pb-2" />
            <div className="font-bold">취준톡</div>
          </Link>
          <div className="flex items-center">
            <div className="cursor-pointer rounded-full p-3 hover:bg-gray-100">
              <img src={sun} alt="sun" className="h-7" />
            </div>
            <img src={profile} alt="profile" className="h-7" />
          </div>
        </div>
      </header>
      <main className="max-w-250 w-full m-auto px-4 py-6 flex-1">
        <Outlet />
      </main>
      <footer className="border-t py-5 text-center text-muted-forground">
        @sunghyun
      </footer>
    </div>
  );
}
