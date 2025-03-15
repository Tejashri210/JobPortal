import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import { IoBagCheck } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    companyId: "",
  });
  const [otp, setOtp] = useState("");
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_USER_API_END_POINT;

  useEffect(() => {
    if (!API_URL) {
      console.error("❌ API_URL is undefined. Check your .env file.");
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select a role.");
      return;
    }

    const payload = {
      role,
      fullname: formData.fullname,
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
      companyId: role === "hirer" ? formData.companyId : undefined,
    };

    try {
      const response = await axios.post(`${API_URL}/register`, payload);
      alert("✅ OTP sent to your email!");
      setUserEmail(formData.email);
      setShowOtpForm(true);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Signup failed. Try again.";
      alert(errorMessage);
      console.error("Signup Error:", errorMessage);
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();

    console.log("Sending OTP:", otp);
    console.log("User Email:", userEmail);

    if (!otp || !userEmail) {
      alert(" Please enter OTP and make sure email is provided.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/verify-otp`, {
        email: userEmail,
        otp,
      });

      console.log("✅ Verification Response:", response.data);
      alert("🎉 Registration Successful!");
      setShowOtpForm(false);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error("OTP Verification Error:", error);
      alert(error.response?.data?.message || " Invalid OTP. Please try again.");
    }
  };

  return (
    <div>
      <div className='navbar h-[calc(100dvh-90dvh)] bg-transparent flex justify-start px-6 py-6 lg:px-12 lg:py-6'>
        <div className='navleft flex items-center gap-2'>
          <Link to={"/"}>
            <IoIosArrowBack className='text-4xl' />
          </Link>
          <IoBagCheck className='text-[24px] font-semibold' />
          <h1 className='text-[23px] font-semibold'>Job Portal</h1>
        </div>
      </div>

      <div className='h-[calc(100dvh-10dvh)] bg-gradient-to-b from-[#231b17] to-[#222222] flex flex-col justify-center items-center'>
        <div className='flex flex-col'>
          <div className='border-2 border-yellow w-[450px] px-4 py-6 bg-white text-black flex flex-col rounded-3xl'>
            {showOtpForm ? (
              <form onSubmit={handleOtpVerification}>
                <input
                  className='w-full my-3 border-b-2 outline-none p-1'
                  type='text'
                  name='otp'
                  placeholder='Enter OTP'
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <button
                  type='submit'
                  className='self-center text-white w-full text-center my-5 h-10 bg-blue-600'
                >
                  Verify OTP
                </button>
              </form>
            ) : (
              <form onSubmit={handleSignup}>
                <select
                  className='w-full my-3 border-b-2 outline-none p-1'
                  value={role}
                  required
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value=''>Select Role</option>
                  <option value='seeker'>Job Seeker</option>
                  <option value='hirer'>Hirer</option>
                </select>

                {role === "hirer" && (
                  <input
                    className='w-full my-3 border-b-2 outline-none p-1'
                    type='text'
                    name='companyId'
                    placeholder='Company ID'
                    value={formData.companyId}
                    onChange={handleChange}
                    required
                  />
                )}

                <input
                  className='w-full my-3 border-b-2 outline-none p-1'
                  type='text'
                  name='fullname'
                  placeholder='Full Name'
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
                <input
                  className='w-full my-3 border-b-2 outline-none p-1'
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  className='w-full my-3 border-b-2 outline-none p-1'
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <input
                  className='w-full my-3 border-b-2 outline-none p-1'
                  type='tel'
                  name='phoneNumber'
                  placeholder='Phone Number'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />

                <button
                  type='submit'
                  className='self-center text-white w-full text-center my-5 h-10 bg-blue-600'
                >
                  Sign Up
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
