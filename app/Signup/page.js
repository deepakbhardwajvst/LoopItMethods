"use client";
import Switch from "@mui/material/Switch";
import InputText from "../component/input/InputText";


const Signup = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className="">
      <div className="flex">
        <div className="relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/56b9/656e/4643172f5a7c37a594841c4236f29668?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ucx00rwtuqSnKBR4sj1kQyNnXkHYXX9QB8BmT10SoX8iryFX07e7Yk-5hqvgXQQYdzk1tUQxhKv8oA8QCvJ94-W9ly0N525WxRlptir4q7Zm~Q-bvbjSxDPOuUOiEysfJShLPmQt-MB7wkmIdKxbzoyyEMhbi8Qas-tKzkl1Fb7MWSA-hqlD8bFyj8z-llcrXsM~Gtvc5~Zt5t7C8IaBQ90FzMqHhsO5wl~UwFUvpGH~Zw5Nlch9qczGRp~vAkA6vtbrwCZ9TMDUKC1NQB1XDnAcKmvCXcrsw2gKof77JVpd8u1sO~cmbHCHRJHUVJTU27gPkoYJsyk2gGw-HkLBLw__"
            alt=""
            className="w-[50vw] h-screen object-cover"
          />
          <div className="flex absolute top-[40.44px] left-[58px]">
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M7.11396 5.93927L21.2052 1.23699C27.5322 -0.872012 30.9691 2.5805 28.8757 8.90749L24.1734 22.9987C21.0177 32.4814 15.8312 32.4814 12.6755 22.9987L11.2851 18.812L7.09834 17.4216C-2.36872 14.2815 -2.36872 9.11058 7.11396 5.93927Z"
                fill="#20DC49"
              />
            </svg>
            <p className="ml-2 font-[500] text-[16.93px]">Logo Here</p>
          </div>
        </div>
        <div className="w-[50vw] h-screen bg-[#e6e6e6]">
          <div className="flex justify-between m-8">
            <div className=""></div>
            <div className="flex">
              <p className="font-[300] text-sm">have an account?</p>
              <p className="text-[#20DC49] ml-2 mr-8 font-[500] text-sm">Sign in!</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-[90%]">
            <h1 className=" font-semibold text-2xl mb-2">
              Get Started With MAKER
            </h1>
            <h4 className=" text-[15.04px] mb-6">Getting started is easy</h4>
            <button
              type="button"
              className="flex justify-center items-center gap-2 w-[402px] text-[16px] font-medium py-2 px-4 bg-white text-black rounded-[10px] shadow"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2315_24)">
                  <path
                    d="M26.9431 11.5658L15.5221 11.5652C15.0178 11.5652 14.609 11.974 14.609 12.4783V16.1268C14.609 16.631 15.0178 17.0398 15.5221 17.0398H21.9536C21.2494 18.8676 19.9349 20.3982 18.2579 21.3708L21.0003 26.1181C25.3995 23.5739 28.0003 19.1098 28.0003 14.1126C28.0003 13.4011 27.9478 12.8924 27.8429 12.3197C27.7632 11.8845 27.3854 11.5658 26.9431 11.5658Z"
                    fill="#167EE6"
                  />
                  <path
                    d="M14.0002 22.5217C10.8527 22.5217 8.10502 20.802 6.62928 18.2573L1.88208 20.9935C4.2979 25.1805 8.82351 28 14.0002 28C16.5398 28 18.936 27.3163 21.0002 26.1247V26.1182L18.2578 21.3707C17.0034 22.0983 15.5518 22.5217 14.0002 22.5217Z"
                    fill="#12B347"
                  />
                  <path
                    d="M21 26.1247V26.1181L18.2576 21.3707C17.0032 22.0982 15.5516 22.5217 14 22.5217V28C16.5395 28 18.9359 27.3162 21 26.1247Z"
                    fill="#0F993E"
                  />
                  <path
                    d="M5.47827 14C5.47827 12.4486 5.90166 10.9971 6.62906 9.74273L1.88185 7.0065C0.683703 9.06423 0 11.454 0 14C0 16.546 0.683703 18.9358 1.88185 20.9935L6.62906 18.2572C5.90166 17.0029 5.47827 15.5514 5.47827 14Z"
                    fill="#FFD500"
                  />
                  <path
                    d="M14.0002 5.47827C16.0527 5.47827 17.938 6.20758 19.4106 7.42071C19.7739 7.71996 20.3019 7.69836 20.6346 7.36559L23.2197 4.78051C23.5973 4.40295 23.5704 3.78492 23.1671 3.43503C20.6998 1.29462 17.4897 0 14.0002 0C8.82351 0 4.2979 2.81952 1.88208 7.00651L6.62928 9.74274C8.10503 7.19797 10.8527 5.47827 14.0002 5.47827Z"
                    fill="#FF4B26"
                  />
                  <path
                    d="M19.4103 7.42071C19.7736 7.71996 20.3017 7.69836 20.6344 7.36559L23.2195 4.78051C23.597 4.40295 23.5701 3.78492 23.1668 3.43503C20.6996 1.29456 17.4894 0 14 0V5.47827C16.0524 5.47827 17.9378 6.20758 19.4103 7.42071Z"
                    fill="#D93F21"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2315_24">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="">Google</p>
            </button>
            <div className="my-4">
              <p className=" text-[13px]  font-normal text-black">
                Or continue with
              </p>
            </div>

            <InputText typetext={"text"} placeholdertext={"Full Name"} />
            <InputText typetext={"email"} placeholdertext={"email"} />
            <div className="relative">
              <InputText typetext={"password"} placeholdertext={"password"} />
            </div>
            <div className="relative">
              <InputText
                typetext={"password"}
                placeholdertext={"Confirm Password"}
              />
            </div>
            <div className="mt-2 flex justify-start w-[402px]">
              <label className="inline-flex items-center">
                <Switch {...label} />

                <span className="ml-2 text-lg font-semibold">Remember me</span>
              </label>
            </div>
            <button
              type="button"
              className="w-[402px] mt-4 text-[14.85px] font-normal  py-3 px-4 bg-[#4CAF50] text-white rounded-[10px]  "
            >
              Create Account
            </button>
            <p className="mt-12 font-light text-[14px]">
              By continuing you indicate that you read and agreed to the Terms
              of Use
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
