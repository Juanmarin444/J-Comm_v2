import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/App.css'

// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import ShopPage from './pages/ShopPage/ShopPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import ReviewsPage from './pages/ReviewPage/ReviewsPage.jsx';
import CartPage from './pages/CartPage/CartPage.jsx';

// Redux
import  store  from './redux/store.js';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "reviews",
        element: <ReviewsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
