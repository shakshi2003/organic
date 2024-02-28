import { createHashRouter, RouterProvider } from "react-router-dom";
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import ProductPage from "./pages/Product";
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProfilePage from './pages/Profile';
import CheckoutPage from './pages/Checkout';
import ErrorPage from './pages/Error';

const router = createHashRouter([{
  path: '/',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    { index: true, element: <HomePage /> },
    { path: 'shop', element: <ShopPage category="ALL" /> },
    // { path: 'product-category', children: [
    //   { path: 'groceries', element: <ShopPage category="GROCERIES" />},
    //   { path: 'juice', element: <ShopPage category="JUICE" />},
    // ]},
    { path: 'product/:productId', element: <ProductPage />},
    { path: 'about', element: <AboutPage /> },
    { path: 'contact', element: <ContactPage /> },
    { path: 'profile', element: <ProfilePage /> },
    { path: 'checkout', element: <CheckoutPage />}
  ],
}])

const App = () => {

  return (
    <RouterProvider router={router} />
  );
};

export default App;