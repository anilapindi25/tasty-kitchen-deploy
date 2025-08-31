
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { CartProvider } from './context/CartContext'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
const Login = lazy(() => import('./components/login'))
const Home = lazy(() => import('./components/Home'))
const Products = lazy(() => import('./components/Products'))
const Cart = lazy(() => import('./components/Cart'))
const ProductItemDetails = lazy(() => import('./components/ProductItemDetails'))
const PaymentSuccess = lazy(() => import('./components/PaymentSuccess'))
const PageNotFound = lazy(() => import('./components/PageNotFound'))
const App = () => (
  <BrowserRouter>
    <CartProvider>
      <Suspense >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path="/restaurants/:restrauntId"
            element={
              <ProtectedRoute>
                <ProductItemDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment-success"
            element={
              <ProtectedRoute>
                <PaymentSuccess />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </CartProvider>
  </BrowserRouter>
)

export default App