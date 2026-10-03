import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

/** Route table shared by the browser entry and the prerenderer. */
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="en" element={<Home />} />
        <Route path="ar" element={<Home />} />
        <Route path="en/*" element={<NotFound />} />
        <Route path="ar/*" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
