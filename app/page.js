"use client"

import Switch from "@mui/material/Switch";
import InputText from "./component/input/InputText";
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from './component/Navbar/Navbar';
import Link from "next/link";
import Category from "./component/category/Category";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";

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
const Home = () => {
   const [notes, setNotes] = useState(initialNotes);
const deleteNote = (notes, noteId) => {
  const updatedNotes = notes.map((note) => {
    if (note.id === noteId) {
      // If the current note matches the provided noteId, return null to delete it
      return null;
    } else if (note.children) {
      // If the current note has children, recursively call deleteNote on its children
      note.children = deleteNote(note.children, noteId);
    }
    return note;
  });

  // Filter out the deleted note and update the notes array
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
  const { data: session } = useSession()
  const label = { inputProps: { "aria-label": "Switch demo" } };
  if(session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <Navbar signOut={signOut} />
        <div className="w-full flex justify-center items-center mt-20">
          <input
            type="search"
            name=""
            id=""
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
        <div className="w-[50vw] h-screen bg-[#e6e6e6]">
          <div className="flex justify-between m-8">
            <div className="flex">
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
            <div className="flex">
              <p className="font-[300] text-sm">Don’t have an account?</p>
              <p className="text-[#20DC49] ml-4 font-[500] text-sm cursor-pointer">
                <Link href="/signup">Sign up!</Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-[90%]">
            <h1 className=" font-semibold text-4xl mb-2">Welcome Back</h1>
            <h4 className=" text-lg mb-6">Login into your account</h4>
            <button
              type="button"
              onClick={() => signIn("google")}
              className="flex justify-center items-center gap-2 w-[402px] text-[16px] mb-4  font-medium py-2 px-4 bg-white text-black rounded-[10px] shadow"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2315_24)">
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
              className="flex justify-center items-center gap-2 w-[402px] text-[16px] font-medium py-2 px-4 bg-white text-black rounded-[10px] shadow"
            >
              <GitHubIcon/>
              <p className="">Github</p>
            </button>
            <div className="my-4">
              <p className=" text-[13px]  font-normal text-black">
                Or continue with
              </p>
            </div>
            <InputText typetext={"email"} placeholdertext={"email"} />
            <div className="relative">
              <InputText typetext={"password"} placeholdertext={"password"} />
            </div>
            <div className="mt-2 flex justify-start w-[402px]">
              <label className="inline-flex items-center">
                <Switch {...label} />

                <span className="ml-2 text-lg font-semibold">Remember me</span>
              </label>
            </div>
            <button
              type="button"
              className="w-[402px] mt-4 text-lg font-semibold py-2 px-4 bg-transparent text-black rounded-[10px]  border border-[#5A5A5A]"
            >
              Log In
            </button>
          </div>
        </div>
        <div className="border border-black relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/f4ef/0c0d/b4a8a04df58935372c2e205396f0a75f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EeNlUceAERXK87GOxfF-OC3LU7FxFoeW5qeeTE3QSVUPfsj3ChS7nMtYiTUQduNjq2zdFIBknjU1mQvuCV8y88FZXj82qw6L4Mt4rGStkRrwBbF1nY6AU7jw8f8v25vBfp7IuPjUVluUHBwd6Bq0lEULdi1auyluCcCiIsgpTFfotNg0pQxy6ljfvU7K58YT3IpakzhGwh0Qro7yXvK9CKaq-vgbJXJ11FTOHMhBV05-GhhreDdWZlkcjHGuLen8FMZmbgkAz88X7Dh5OR30kgci8xB7UbUdKF1Bt1iYc4KCXSDd7z9UBI6yQnjT20aj7t4CddlqArgpyB6-ISxDeA__"
            alt=""
            className="w-[50vw] h-screen object-cover"
          />
          <div className="bg-[#FFF2F221] mx-24 my-8 p-8 absolute bottom-0 rounded-[10px]">
            <div className="bg-[#4CAF50]  mb-5 flex items-center gap-2 rounded-[10px] px-4 py-2 w-max">
              <img
                src="https://s3-alpha-sig.figma.com/img/27a7/295f/f9e9fd2354e36afd9e5117fb9d6d87ba?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y~LY3gEU8GwzeEzchVKUzCPBytem9D-ydV5p-93xiNO204MrIqcPP8exACyWUbNISSVnypOA6HIwMfmojePv4-j9TdWvFr1ormZpGE9rTfcUzRBtmjjdTR9UBCk2-fs0BzSnJAzyqNJl2OyLofn~4v9oakiHTXj~2zc-G9LGNr8kXM3mcxU6Kl16nMirHzpcZsx~pNa9kGXMzBB4~0sFJhWnlrX8-xuBqOAhYVnScHFmBzMxXDYZU14W5RXK76cdD943SYBUqHcJugDY7tvqDbHdeJb6V~ZWVj7njNLd28IhjVBG2jMfsHXi7OcSqu8vGbxqpEVlQb2Gwf2MhQQNJg__"
                alt=""
                className="w-[22.05px] h-[22.05px] "
              />
              <p className="text-sm text-white">Top Notch Stock Resources</p>
            </div>
            <p className="text-white">
              Today, we create innovative solutions to the challenges that
              consumers face in both their everyday lives and events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
