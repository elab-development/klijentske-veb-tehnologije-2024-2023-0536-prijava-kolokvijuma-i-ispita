import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className='space-y-3'>
      <h1 className='text-2xl font-semibold'>404 – Stranica nije pronađena</h1>
      <p className='text-gray-600'>
        Proverite URL ili se vratite na početnu stranicu.
      </p>
      <Link
        to='/'
        className='inline-block rounded-lg bg-blue-600 px-4 py-2 text-white'
      >
        Početna
      </Link>
    </section>
  );
}
