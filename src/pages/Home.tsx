import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className='space-y-6'>
      <h1 className='text-2xl font-semibold'>
        Dobrodošli na platformu za prijavu kolokvijuma i ispita
      </h1>
      <p className='text-gray-600'>
        Ova aplikacija radi bez backend-a: podaci se čuvaju u memoriji i
        localStorage-u.
      </p>
      <div className='grid gap-4 sm:grid-cols-2'>
        <Link
          to='/exams'
          className='rounded-xl border bg-white p-5 hover:shadow'
        >
          <h2 className='font-medium'>Ispiti</h2>
          <p className='text-sm text-gray-600'>
            Pregled svih ispita i prijava.
          </p>
        </Link>
        <Link
          to='/my-registrations'
          className='rounded-xl border bg-white p-5 hover:shadow'
        >
          <h2 className='font-medium'>Moje prijave</h2>
          <p className='text-sm text-gray-600'>
            Vaše trenutne prijave i statusi.
          </p>
        </Link>
        <Link
          to='/login'
          className='rounded-xl border bg-white p-5 hover:shadow'
        >
          <h2 className='font-medium'>Login</h2>
          <p className='text-sm text-gray-600'>
            Prijavite se sa unapred definisanim nalozima.
          </p>
        </Link>
      </div>
    </section>
  );
}
