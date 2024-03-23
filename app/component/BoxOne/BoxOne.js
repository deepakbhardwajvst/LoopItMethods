import React from 'react'
import BoltIcon from "@mui/icons-material/Bolt";
const BoxOne = ({ Btext,bbgOne,bbgTwo }) => {
  return (
    <div
      className={` w-max flex items-center gap-3 rounded-[47.56px] py-2 pl-3 pr-8 ${bbgOne}`}
    >
      <div className={`rounded-[50%]  p-1 ${bbgTwo}`}>
        <BoltIcon className="text-white" />
      </div>
      <p className="text-white">{Btext}</p>
    </div>
  );
};

export default BoxOne