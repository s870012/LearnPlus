import Layout from "../Layout"
import Home from "../pages/Home"
import Profile from "../pages/Profile"

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
      }
    ]
  }
]

export default routes