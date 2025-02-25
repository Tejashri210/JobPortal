import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Landing from "../pages/Landing/LandingPage";
import SignUp from "../pages/SignUp/SignUpPage";
import Login from "../pages/Login/LoginPage";
import JobSeek from "../pages/JobSeek/JobSeek";
import JobDetails from "../pages/jobDetails/JobDetails";
import Application from "../pages/Application/Application";
import SavedJobs from "../pages/Saved/Saved";
import Profile from "../pages/Profile/Profile";
import Dashboard from "../pages/Dashboard/Dashboard";
import PostJob from "../pages/Post/PostJob"; 

// ✅ Define routes correctly
const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/jobs", element: <JobSeek /> },
  { path: "/jobs/:id", element: <JobDetails /> },
  { path: "/profile", element: <Profile /> },
  { path: "/post-job", element: <PostJob /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/applications", element: <Application /> },
  { path: "/saved-jobs", element: <SavedJobs /> }
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
