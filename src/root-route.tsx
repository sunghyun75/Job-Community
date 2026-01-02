import { Navigate, Route, Routes } from 'react-router';
import SignInPage from './pages/sign-in-page';
import SignUpPage from './pages/sign-up-page';
import IndexPage from './pages/index-page';
import PostDetailPage from './pages/post-detail-page';
import ProfileDetailPage from './pages/profile-detail-page';
import ResetPassword from './pages/reset-password';
import ForgetPassword from './pages/forget-password';
import GlobalLayout from './components/layout/global-layout';
export default function RootRoute() {
  return (
    <div>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/forget-password" element={<ForgetPassword />} />

          <Route path="/" element={<IndexPage />} />
          <Route path="/post/:postId" element={<PostDetailPage />} />
          <Route path="/profile/:userId" element={<ProfileDetailPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </div>
  );
}
