import { NavLink } from 'react-router-dom';

const linkBase = 'px-3 py-2 rounded-lg text-sm font-medium transition';
const linkActive = 'bg-blue-600 text-white';
const linkIdle = 'text-gray-700 hover:bg-gray-200';

export default function NavBar() {
  return (
    <header className='bg-white border-b'>
      <div className='mx-auto flex max-w-5xl items-center gap-4 px-4 py-3'>
        <div className='text-lg font-semibold'>e-Student</div>
        <nav className='flex items-center gap-2'>
          <NavLink
            to='/'
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            Početna
          </NavLink>
          <NavLink
            to='/exams'
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            Ispiti
          </NavLink>
          <NavLink
            to='/my-registrations'
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            Moje prijave
          </NavLink>
          <NavLink
            to='/sessions'
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            Rokovi
          </NavLink>
        </nav>

        <div className='ml-auto'>
          <NavLink
            to='/login'
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </header>
  );
}
