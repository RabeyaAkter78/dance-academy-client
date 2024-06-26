import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOuts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import PrivateRoute from "./PrivateRouts";
import Classes from "../Pages/Classes/Classes";
import DashBoard from "../LayOuts/DashBoard/DashBoard";
import SelectedClass from "../Pages/DashBoard/StudentDB/SelectedCLass/SelectedClass";
import EnrolledClass from "../Pages/DashBoard/StudentDB/EnrolledClass/EnrolledClass";
import Payment from "../Pages/DashBoard/StudentDB/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/StudentDB/PaymentHistory/PaymentHistory";
import ManageClasses from "../Pages/DashBoard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/DashBoard/Admin/ManageUsers/ManageUsers";
import AddClass from "../Pages/DashBoard/Instructor/AddClass/AddClass";
import MyClass from "../Pages/DashBoard/Instructor/MyClass/MyClass";
import Instructors from "../Pages/Instructors/Instructors";
import Error from "../Pages/Error/Error";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import FeedBack from "../Pages/DashBoard/Admin/ManageClasses/FeedBack";
import ContactUs from "../Pages/ContactUs";
import BookEvents from "../Pages/UpcomingEvents/BookEvents";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: 'classes',
        element: <PrivateRoute><Classes></Classes></PrivateRoute>
      },
      {
        path: 'instructors',
        element: <PrivateRoute><Instructors></Instructors></PrivateRoute>
      },
      {
        path: "/bookEvents",
        element:<BookEvents></BookEvents>
      },
    ]
  },
  {
    path: 'dashBoard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path: 'selectedClass',
        element: <SelectedClass></SelectedClass>,
        loader: ({ params }) => fetch(`https://dance-academy-server-teal.vercel.app/selectedClass/${params.id}`)
      },
      {
        path: 'enrolledClass',
        element: <EnrolledClass></EnrolledClass>
      },
      {
        path: 'payment',
        element: <Payment></Payment>,
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },

      // Admin:
      {
        path: 'manageClasses',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: 'feedBack',
        element: <FeedBack></FeedBack>
      },
      {
        path: 'manageUsers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      // Instructor:

      {
        path: 'addClass',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: 'myClass',
        element: <InstructorRoute><MyClass></MyClass></InstructorRoute>
      },
     

    ]
  },
  {
    path: "*",
    element: <Error></Error>
  }
]);