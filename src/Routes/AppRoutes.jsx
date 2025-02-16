import React from "react";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router";

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      <Route path="/jobs" element={<JobSeek />} />
      <Route path="/jobs/:id" element={<JobDetails/>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/post-job" element={<PostJob />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/applications" element={<Application />} />
      <Route path="/saved-jobs" element={<SavedJobs />} /> 
    </>
  )
)

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default AppRoutes;