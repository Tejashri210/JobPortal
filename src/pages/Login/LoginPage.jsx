import React, { useState } from "react";
import { IoBagCheck } from "react-icons/io5";
import Stripes from "../../components/Stripes";
import { Link ,useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

const LoginPage = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const App_URL = import.meta.env.VITE_USER_API_END_POINT;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setformData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      email: formData.email,
      password: formData.password,
    };
    try {
      const response = await axios.post(`${App_URL}/login`, payload);
      alert("Login done");
      console.log(response.data);

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      alert("Login failed");
      console.error(error);
    }
  };
  return (
    <div>
      <div className='navbar h-[calc(100dvh-90dvh)] bg-tranparent flex justify-between px-6 py-6 lg:px-12 lg:py-6 '>
        <div className='navleft flex items-center gap-2'>
          <Link to={"/"}>
            <IoIosArrowBack className='text-4xl' />
          </Link>
          <IoBagCheck className='text-[24px] font-semibold' />
          <h1 className='text-[23px] font-semibold'>Job Portal</h1>
        </div>
      </div>
      <div className='h-[calc(100dvh-10dvh)] bg-gradient-to-b from-[#231b17] to-[#222222] flex flex-col justify-center items-center '>
        <div className='flex flex-col '>
          <div className='border-2 border-yellow h-[250px] w-[450px] px-4 bg-white text-black flex flex-col items-center rounded-3xl '>
            <form onSubmit={handleLogin}>
              <input
                className='w-full my-3 border-b-2 outline-none p-1 mt-4'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
              />
              <input
                className='w-full my-3 border-b-2 outline-none p-1'
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='Password'
              />
              <button
                type='submit'
                className='self-center text-white w-full text-center my-5 h-10 bg-blue-600'
              >
                login
              </button>
            </form>
          </div>
          <div className='mt-auto '>
            <Stripes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
