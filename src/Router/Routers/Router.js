
import Main from "../../LayOut/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRouter/PrivateRouter";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/signUp',
      element:<SignUp></SignUp>
    }, 
    {
      path:'/about',
      element:<PrivateRoute><About></About></PrivateRoute>
    }, 
  ]
  }
])
export default router;