import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Landing from './pages/landing.jsx'
import Dashboard from './pages/dashboard.jsx'
import GroupPage from './pages/groups.jsx'
import FamilyDash from './pages/familyDash.jsx'
import Login from './pages/login.jsx'
import SignUp from './pages/signup.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

const router=createBrowserRouter([
  {
    path:'/',
    children:[
      {
        path:"",
        element:<Landing/>
      },
      {
        path:"dashboard/personal",
        element:<Dashboard/>
      },
      {
        path:"forms/login",
        element:<Login/>
      },
      {
        path:"forms/signup",
        element:<SignUp/>
      },
      {
        path:"groups",
        element:<GroupPage/>
      },
      {
        path:"/dashboard/Family",
        element:<FamilyDash/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
