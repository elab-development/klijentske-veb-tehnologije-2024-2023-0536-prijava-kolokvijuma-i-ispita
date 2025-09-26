import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { examService } from '../services/examService';

export default function Home() {
  const data = useMemo(() => examService.getData(), []);

  return (
    <section className='space-y-8'>
      <header>
        <h1 className='text-2xl font-semibold'>
          Dobrodošli na platformu za prijavu kolokvijuma i ispita
        </h1>
      </header>

      <div className='grid gap-4 sm:grid-cols-2'>
        <Link
          to='/exams'
          className='rounded-xl border bg-white p-5 hover:shadow transition'
        >
          <h2 className='font-medium'>Ispiti</h2>
          <p className='text-sm text-gray-600'>
            Pregled svih ispita i prijava.
          </p>
        </Link>
        <Link
          to='/my-registrations'
          className='rounded-xl border bg-white p-5 hover:shadow transition'
        >
          <h2 className='font-medium'>Moje prijave</h2>
          <p className='text-sm text-gray-600'>
            Vaše trenutne prijave i statusi.
          </p>
        </Link>
      </div>

      <div>
        <h2 className='mb-3 text-xl font-semibold'>Pregled ispitnih rokova</h2>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {data.sessions.map((s) => (
            <div
              key={s.id}
              className='rounded-xl border bg-white p-4 shadow-sm ring-1 ring-gray-100'
            >
              <h3 className='text-lg font-medium text-gray-900'>
                {s.name} {s.year}
              </h3>
              <ul className='mt-2 space-y-1 text-sm text-gray-700'>
                <li>
                  <span className='font-medium'>Prijave: </span>
                  {s.regStart} – {s.regEnd}
                </li>
                <li>
                  <span className='font-medium'>Ispitni period: </span>
                  {s.periodStart} – {s.periodEnd}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
