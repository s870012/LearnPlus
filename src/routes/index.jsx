import Layout from "../Layout"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Course from "../pages/Course"
import About from "../pages/About"

const routes = [
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/profile',
        element: <Profile/>
      },
      {
        path: '/course',
        element: <Course/>
      },
      {
        path:'/about',
        element: <About/>
      }
    ]
  }
]

export default routes