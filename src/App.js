import "./App.css";
import {Route , Routes} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute"
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import MyProfile from "./components/core/Dashboard/MyProfile"
import Settings from "./components/core/Dashboard/Settings"
import Contact from "./pages/Contact";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart"
import MyCourses from "./components/core/Dashboard/MyCourses"
import AddCourse from "./components/core/Dashboard/AddCourse"
import EditCourse from "./components/core/Dashboard/EditCourse"
import Catalog from "./pages/Catalog"
import CourseDetails from "./pages/CourseDetails"
import ViewCourse from "./pages/ViewCourse"
import VideoDetails from "./components/core/ViewCourse/VideoDetails"
import Instructor from "./components/core/Dashboard/Instructor"
import Simran from "./pages/Simran";


import { ACCOUNT_TYPE } from "./utils/constants"

function App() {

 
  const { user } = useSelector((state) => state.profile)
  return (
    <div className="w-screen min-h-screen bg-richblack-900 font-inter flex flex-col">
     <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="courses/:courseId" element={<CourseDetails />} />
       <Route path="catalog/:catalogName" element={<Catalog />} />
       <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
    <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

   <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
    <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />

<Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        {/* Private Route - for Only Logged in User */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
      >
          {/* Route for all users */}
        <Route path="dashboard/my-profile" element={<MyProfile />} />
           <Route path="dashboard/Settings" element={<Settings />} />
           
           {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
              
          <>
          <Route path="dashboard/instructor" element={<Instructor />} />
          <Route path="dashboard/my-courses" element={<MyCourses />} />
          <Route path="dashboard/add-course" element={<AddCourse />} />
          <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
          </>
              
          )}

           {/* Route only for Students */}
           {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/cart" element={<Cart />} />
            </>
          )}
        </Route>

{/* For the watching course lectures */}
<Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>

      <Route path="/simran" element={<Simran/>} />
        
    </Routes>

    </div>
    
  );
}

export default App;
