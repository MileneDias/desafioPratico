import Home from '@/pages/home'
import { Routes, Route, Navigate } from 'react-router-dom'

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}