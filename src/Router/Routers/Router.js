
import Main from "../../LayOut/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Media from "../../Pages/Media/Media";
import Postdetails from "../../Pages/Media/Postdetails";
import Message from "../../Pages/Message/Message";
import DisplayError from "../../Pages/Shered/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRouter/PrivateRouter";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
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
      path:'/media',
      element:<Media></Media>
    }, 
    {
      path:'/details/:id',
      element:<PrivateRoute><Postdetails></Postdetails></PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:5000/allposts/${params.id}`)
    }, 
    {
      path:'/message',
      element:<Message></Message>
    }, 
    {
      path:'/about',
      element:<PrivateRoute><About></About></PrivateRoute>
    }, 
  ]
  }
])
export default router;