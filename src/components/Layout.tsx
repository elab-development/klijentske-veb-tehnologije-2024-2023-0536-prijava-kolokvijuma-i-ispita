import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

export default function Layout() {
  return (
    <div className='min-h-dvh bg-gray-50 text-gray-900'>
      <NavBar />
      <main className='mx-auto w-full max-w-5xl px-4 py-6'>
        <Outlet />
      </main>
    </div>
  );
}
