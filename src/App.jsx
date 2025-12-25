import './App.css'
import Home from './components/Home/Home'
import Fruits from './components/Fruits/Fruits'
import Dairy from '../src/components/Dairy/Dairy'
import Seafood from '../src/components/SeaFood/Seafood'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProducts from './components/AllProducts/AllProducts'
import Layout from '../src/components/Layout/Layout'

const router = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      { path: "/", element: <Home /> },
      { path: "/fruits", element: <Fruits /> },
      { path: "/dairy", element: <Dairy /> },
      { path: "/seaFood", element: <Seafood /> },
      { path: "/allProducts", element: <AllProducts /> },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
