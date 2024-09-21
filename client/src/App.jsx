import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  Home,
  SinglePost,
  CreatePost,
  Register,
  Login,
  SharedLayout,
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post/:id',
        element: <SinglePost />,
      },
      {
        path: '/create',
        element: <CreatePost />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
