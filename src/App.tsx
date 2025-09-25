import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import Exams from './pages/Exams';
import MyRegistrations from './pages/MyRegistrations';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/exams' element={<Exams />} />
          <Route path='/my-registrations' element={<MyRegistrations />} />
        </Route>

        <Route path='/home' element={<Navigate to='/' replace />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
