import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import { Main } from './pages/landing/Main.tsx'
import Login from './pages/auth/sign-in/login.tsx'
import Register from './pages/auth/sign-up/register.tsx'
import RegisterWali from './pages/auth/sign-up-wali/register.tsx'
import DashboardStudent from './pages/student/dashboard/dashboard.tsx'
import DashboardAdmin from './pages/admin/dashboard/dashboard.tsx'
import JurusanAdmin from './pages/admin/dashboard/jurusan.tsx'
import DataPeserta from './pages/admin/dashboard/peserta.tsx'
import FormAddJurusan from './pages/admin/dashboard/formaddjurusan.tsx'
import Announcement from './pages/student/dashboard/announcement.tsx'
import FormPendaftaranJurusan from './pages/student/dashboard/FormPendaftaran.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register/student' element={<Register />} />
          <Route path='/register/wali' element={<RegisterWali />} />
          <Route path='/student/dashboard/:id' element={<DashboardStudent />} />
          <Route path='/student/dashboard/:id/announcement' element={<Announcement />} />
          <Route path='/admin/dashboard' element={<DashboardAdmin />} />
          <Route path='/admin/dashboard/jurusan' element={<JurusanAdmin />} />
          <Route path='/admin/dashboard/datapeserta' element={<DataPeserta />} />
          <Route path='/admin/dashboard/addjurusan' element={<FormAddJurusan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
