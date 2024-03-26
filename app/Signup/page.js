"use client";
import Switch from "@mui/material/Switch";
import { useState } from "react";

import InputText from "../component/input/InputText";
import BoxOne from './../component/BoxOne/BoxOne';
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Category from "../component/category/Category";
import Navbar from "../component/Navbar/Navbar";
import GitHubIcon from '@mui/icons-material/GitHub';
const initialNotes = [
  {
    id: 1,
    content: "Category",
    children: [
      {
        id: 2,
        content: "Sub Category",
        children: [
          {
            id: 3,
            content: "main sub category",
            children: [
              {
                id: 4,
                content: "main sub sub categiry",
              },
            ],
          },
        ],
      },
      {
        id: 5,
        content: "nasted lavel",
      },
    ],
  },
];
const Signup = () => {

  const [notes, setNotes] = useState(initialNotes);
  const deleteNote = (notes, noteId) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === noteId) {
        // If the current note matches the provided noteId, returning null to delete it
        return null;
      } else if (note.children) {
        // If the current note has children, recursively calling deleteNote on its children
        note.children = deleteNote(note.children, noteId);
      }
      return note;
    });

    // Filtering out the deleted note and updating the notes array
    return updatedNotes.filter((note) => note !== null);
  };
  const editNote = (notes, noteId, newContent) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === noteId) {
        note.content = newContent;
      } else if (note.children) {
        note.children = editNote(note.children, noteId, newContent);
      }
      return note;
    });
    return updatedNotes;
  };

  const createChildNote = (notes, parentId) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === parentId) {
        const newChild = {
          id: Date.now(),
          content: "New Note",
          children: [],
        };
        note.children = [...(note.children || []), newChild];
      } else if (note.children) {
        note.children = createChildNote(note.children, parentId);
      }
      return note;
    });
    return updatedNotes;
  };
  const handleDelete = (noteId) => {
    const updatedNotes = deleteNote(notes, noteId);
    setNotes(updatedNotes);
  };

  const handleEdit = (noteId, newContent) => {
    const updatedNotes = editNote(notes, noteId, newContent);
    setNotes(updatedNotes);
  };

  const handleCreateChild = (parentId) => {
    const updatedNotes = createChildNote(notes, parentId);
    setNotes(updatedNotes);
  };
  const { data: session } = useSession();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <Navbar signOut={signOut} />
        <div className="w-full flex justify-center items-center mt-20">
          <input
            type="search"
            name=""
            id="search"
            placeholder="Enter text..."
            className="w-[35%] border border-[#5A5A5A] p-4 outline-none"
          />
          <button className=" bg-[#4CAF50] p-[1.1rem] border-none ml-1 text-white">
            Create Note
          </button>
        </div>
        <div className="container mx-auto p-4 mt-10 w-[50%]">
          <div>
            {notes.map((note) => (
              <Category
                key={note.id}
                note={note}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onSave={handleEdit}
                onCreateChild={handleCreateChild}
              />
            ))}
          </div>
        </div>
        {/* <Category /> */}
      </>
    );
  }
  return (
    <div className="">
      <div className="flex">
        <div className="relative border border-black">
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
          <div className=" absolute top-80 left-[72px]">
            <BoxOne
              Btext="Royal Stock Images"
              bbgOne="bg-[#4CAF50]"
              bbgTwo="bg-[#2e6930]"
            />
            <div className="bg-[#0900003e]  my-4 p-8 w-[346px] h-[158.04px]  rounded-[10px]">
              <div className="bg-[#000000]  mb-5 flex items-center gap-2 rounded-[10px] px-3 py-2 w-max">
                <div className="w-[25px] h-[27px] ">
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5642 12.8957C16.2648 12.8957 15.9653 12.7458 15.7906 12.4835L11.7978 6.51177C11.6605 6.29939 11.6106 6.04953 11.6605 5.81216C11.7104 5.57479 11.8477 5.3499 12.0598 5.21248L19.1222 0.477597C19.6712 0.102805 20.3325 -0.02211 20.9813 0.102821C21.6302 0.227751 22.1917 0.602539 22.566 1.15223L24.837 4.53784C25.5981 5.67471 25.2986 7.22386 24.1507 7.98594L17.1008 12.7208C16.9261 12.8458 16.7514 12.8957 16.5642 12.8957ZM13.8815 6.24942L16.8263 10.6595L23.1026 6.44928C23.3895 6.26188 23.4644 5.87461 23.2648 5.59976L20.9938 2.21415C20.9065 2.07673 20.7692 1.98929 20.607 1.95181C20.4448 1.91433 20.2826 1.95178 20.1453 2.03923L13.8815 6.24942Z"
                      fill="white"
                    />
                    <path
                      d="M10.2132 16.2939C9.91375 16.2939 9.61428 16.144 9.43959 15.8817L6.24528 11.1092C5.95829 10.6845 6.07059 10.0973 6.50731 9.80994L12.4717 5.81214C12.6838 5.67472 12.9334 5.62473 13.1704 5.6747C13.42 5.72467 13.6321 5.86211 13.7694 6.07449L16.9637 10.8469C17.2507 11.2717 17.1384 11.8589 16.7016 12.1462L10.7373 16.144C10.5751 16.2439 10.3879 16.2939 10.2132 16.2939ZM8.31659 10.8469L10.4628 14.0577L14.8674 11.1092L12.7212 7.88602L8.31659 10.8469Z"
                      fill="white"
                    />
                    <path
                      d="M4.39825 19.5172C3.6995 19.5172 3.00075 19.1799 2.57651 18.5428L1.16654 16.4439C0.842116 15.9567 0.729814 15.382 0.842113 14.8073C0.954413 14.2326 1.27883 13.7454 1.76546 13.4206L6.69415 10.1224C7.11839 9.83508 7.70485 9.94755 7.99183 10.3848L10.7868 14.5575C11.0738 14.9823 10.9615 15.5694 10.5248 15.8568L5.59611 19.1549C5.23426 19.3923 4.81002 19.5172 4.39825 19.5172ZM6.95618 12.1838L2.81359 14.9573C2.67634 15.0572 2.62643 15.2446 2.72625 15.3945L4.13622 17.4934C4.23604 17.6308 4.42321 17.6807 4.57294 17.5808L8.71553 14.8073L6.95618 12.1838Z"
                      fill="white"
                    />
                    <path
                      d="M7.2435 26.9256C7.11872 26.9256 6.98147 26.9006 6.85669 26.8381C6.38254 26.6257 6.18289 26.0635 6.39501 25.6013L11.9975 13.358C12.2096 12.8833 12.7711 12.6833 13.2328 12.8957C13.707 13.1081 13.9066 13.6703 13.6945 14.1326L8.09198 26.3759C7.92977 26.7257 7.59287 26.9256 7.2435 26.9256Z"
                      fill="white"
                    />
                    <path
                      d="M18.3239 26.9255C17.962 26.9255 17.6251 26.7256 17.4754 26.3758L11.9353 14.1325C11.7232 13.6578 11.9353 13.1081 12.397 12.8957C12.8586 12.6833 13.4201 12.8957 13.6323 13.358L19.1724 25.6012C19.3845 26.076 19.1724 26.6257 18.7107 26.8381C18.5859 26.9005 18.4611 26.9255 18.3239 26.9255Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-white">
                Best Stock Photos and Videos from across the internet.
              </p>
            </div>
          </div>
          <div className=" absolute bottom-40 right-[-3.7rem]">
            <BoxOne
              Btext="Image Editor"
              bbgOne="bg-[#5a5a5a]"
              bbgTwo="bg-[#9c9c9c]"
            />
          </div>
        </div>
        <div className="w-[50vw] h-screen bg-[#e6e6e6]">
          <div className="flex justify-between m-8">
            <div className=""></div>
            <div className="flex">
              <p className="font-[300] text-sm">have an account?</p>
              <p className="text-[#20DC49] ml-2 mr-8 font-[500] text-sm cursor-pointer">
                <Link href="/">Sign in!</Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-[90%]">
            <h1 className=" font-semibold text-2xl mb-2">
              Get Started With MAKER
            </h1>
            <h4 className=" text-[15.04px] mb-6">Getting started is easy</h4>
            <button
              type="button"
              onClick={() => signIn("google")}
              className="flex justify-center items-center gap-2 w-[402px] text-[16px] font-medium py-2 px-4 bg-white text-black rounded-[10px] mb-4 shadow"
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
            <button
              type="button"
              onClick={() => signIn("github")}
              className="flex justify-center items-center gap-2 w-[402px] text-[16px] font-medium py-2 px-4 bg-white text-black rounded-[10px] shadow "
            >
              <GitHubIcon />
              <p className="">Github</p>
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
              <label className="inline-flex items-center cursor-pointer">
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
