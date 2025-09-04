import Layout from "../Layout"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Course from "../pages/Course"

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
      }
    ]
  }
]

export default routes