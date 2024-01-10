import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'
const StudentPortal = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  });

// Adding the useState according to show password
  const [showPassword, setShowPassword] = useState(false);


  const onRectangleClick = useCallback(() => {
    navigate("/create-profile")
  }, [navigate]);


  const onNeedAnAccountClick = useCallback(() => {
    navigate("/student-signup")// Please sync "Student Sign up" to the project
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/create-profile")// Please sync "Create Profile" to the project
  }, [navigate]);

  const onIcsharpArrowBackIconClick = useCallback(() => {
    navigate("/signin-dashboard");
  }, [navigate]);


  //adding the function toggle password
  const togglePassword = ()  => {
          setShowPassword(!showPassword)
    
  } 

  // Function to handle input value change
  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name] : e.target.value,
    });
  };

  return (
    <div className="relative bg-white w-full h-[832px] text-left text-3xl text-darkgray font-sen">
      <img
        className="absolute top-[-27px] left-[-348px] w-[988px] h-[857px] object-cover"
        alt=""
        src="/rectangle-41@2x.png"

      />
      <img
        className="absolute top-[-5px] left-[-7px] w-[694px] h-[837px] object-cover cursor-pointer"
        alt=""
        src="/rectangle-37@2x.png"
        onClick={onRectangleClick}
      />
      <div className="absolute top-[0px] left-[484px] rounded-tl-16xl rounded-tr-none rounded-br-none rounded-bl-16xl bg-whitesmoke-200 w-[894px] h-[832px]" />
      {/* <div className="absolute top-[0px] left-[484px] rounded-tl-13xl rounded-tr-none rounded-br-none rounded-bl-13xl [background:linear-gradient(160.89deg,_rgba(181,_116,_245,_0.09),_rgba(116,_131,_207,_0.09)_48.44%,_rgba(83,_189,_235,_0.09))] shadow-[32.1px_-32.1px_32.07px_rgba(165,_165,_165,_0.09)_inset,_-32.1px_32.1px_32.07px_rgba(255,_255,_255,_0.09)_inset] [backdrop-filter:blur(29.5px)] w-[796px] h-[832px]" /> */}
      {/* <div className="absolute top-[387px] left-[626px] rounded-3xs bg-steelblue shadow-[32.1px_-32.1px_32.07px_rgba(165,_165,_165,_0.09)_inset,_-32.1px_32.1px_32.07px_rgba(255,_255,_255,_0.09)_inset] [backdrop-filter:blur(29.5px)] w-[511px] h-[383px] opacity-[0.5] mix-blend-screen" /> */}

      <div className="absolute top-[448px] left-[671px] w-[422px] h-[53px]">

        {/* <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray-100 box-border border-[1.5px] border-solid border-darkgray" /> */}

        {/* <div className="absolute h-[58.3%] w-[27.77%] top-[21.7%] right-[68.06%] bottom-[20%] left-[4.17%] bg-gray-100" /> */}
        {/* <div className="absolute h-2/5 w-[28.06%] top-[30%] left-[8.06%] inline-block"> */}
        {/* <label htmlFor="myInput">Input Text:</label> */}
        <input
          className="absolute h-full w-full top-[0%] right-[68.06%] bottom-[0%] left-[0%] rounded-3xs bg-gray-100 box-border border-[1.5px] border-solid border-darkgray text-lg px-2 text-2xl" style={{ fontSize: '18px' }}
          type="email"
          name='email'
          id="myInput"
          value={inputValues.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        Email
        {/* </div> */}
      </div>
      <div className="absolute top-[267px] left-[658px] text-[35px] [text-decoration:underline] font-semibold font-sora text-gray-300 text-center inline-block w-[447px]">
        Student Portal
      </div>
      <div className="absolute top-[535px] left-[670px] w-[422px] h-[53px]">
        {/* <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray-100 box-border border-[1.5px] border-solid border-darkgray" />
        <div className="absolute h-[58.3%] w-[27.77%] top-[21.7%] right-[68.06%] bottom-[20%] left-[4.17%] bg-gray-100" />
        <div className="absolute h-[38.3%] w-[42.99%] top-[30%] left-[7.16%] inline-block"> */}
        <input
          className="absolute h-full w-full top-[0%] right-[68.06%] bottom-[0%] left-[0%] rounded-3xs bg-gray-100 box-border border-[1.5px] border-solid border-darkgray text-lg px-2 text-2xl" style={{ fontSize: '18px' }}
          type={showPassword ? "text" : "password"}
          id="myInput"
          name='password'
          value={inputValues.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
        {/* </div> */}
      </div>
      <img
        className="absolute h-[2.26%] w-[2.24%] top-[66.47%] right-[16.17%] bottom-[31.27%] left-[81.59%] max-w-full max-h-full object-cover"
        alt=""
        src={showPassword ? "/-icon-eye-slash@2x.png" : "/-icon-eye-slash@2x.png"}
        onClick={togglePassword}
      />
      <div className="absolute top-[40px] left-[calc(50%_+_198px)] text-25xl font-semibold font-poppins text-darkslateblue inline-block w-[219px] h-[39px]">
        Log In
      </div>
      <img
        className="absolute top-[64px] left-[calc(50%_+_338px)] rounded-3xs max-h-full w-[106px] object-cover"
        alt=""
        src="/vector-2@2x.png"
      />
      <img
        className="absolute top-[64px] left-[calc(50%_+_49px)] rounded-3xs max-h-full w-[106px] object-cover"
        alt=""
        src="/vector-2@2x.png"
      />
      <div
        className="absolute top-[719px] left-[671px] text-sm text-dimgray inline-block w-[275px] h-[27px] cursor-pointer"
        onClick={onNeedAnAccountClick}
      >
        <span className="font-sen">Need an Account?</span>
        <b>{` `}</b>
        <b>
          <span className="[text-decoration:underline]">Sign Up</span>
        </b>
      </div>
      <div
        className="absolute top-[648px] left-[744px] rounded-[14px] [background:linear-gradient(90deg,_rgba(107,_99,_172,_0.73)_4.69%,_rgba(105,_107,_177,_0.68)_27.78%,_rgba(99,_121,_187,_0.75)_50%,_rgba(92,_133,_196,_0.68)_71.01%,_rgba(36,_113,_168,_0.61)_97.92%)] w-[287px] h-11 cursor-pointer"
        onClick={onRectangle8Click}
      />
      <div  className="absolute top-[654px] left-[790px] text-[24px] flex text-whitesmoke-100 text-center items-center justify-center w-[185px] h-[27px]">
        Log In
      </div>
      <img
        className="absolute top-[140px] left-[calc(50%_+_166px)] w-[139px] h-28 object-cover"
        alt=""
        src="/image-5@2x.png"
      />
      <div className="absolute top-[600px] left-[957px] text-sm text-dimgray inline-block w-40 h-[27px]">
        Forgot Password?
      </div>
      <img
        className="absolute top-[43px] left-[523px] w-[46px] h-[43px] object-cover cursor-pointer"
        alt=""
        src="/icsharparrowback@2x.png"
        onClick={onIcsharpArrowBackIconClick}
      />
    </div>
  );
};

export default StudentPortal;
