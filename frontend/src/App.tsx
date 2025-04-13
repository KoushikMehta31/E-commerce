import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/merchant/Dashboard/Dashboard'
import Order from './pages/merchant/Order'
import Products from './pages/merchant/Products'
import Shipping from './pages/merchant/Shipping'
import Refund from './pages/merchant/Refund'
import Setting from './pages/merchant/Setting'
import Sidebar from './layouts/merchant/Sidebar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path='order' element={<Order />} />
          <Route path='products' element={<Products />} />
          <Route path='shipping' element={<Shipping />} />
          <Route path='refund' element={<Refund />} />
          <Route path='settings' element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
