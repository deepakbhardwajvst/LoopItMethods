import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
const InputText = ({ typetext, placeholdertext }) => {
  return (
    <>
      <input
        className="w-[402px] my-2 py-4 px-4 block  rounded-[10px] shadow text-lg font-semibold placeholder:text-[14px] placeholder:text-[#5A5A5A] placeholder:font-normal outline-none"
        type={typetext}
        name=""
        id=""
        placeholder={placeholdertext}
      />
      {typetext === "password" && (
        <div className="absolute top-[29px] right-6">
          <VisibilityOffOutlinedIcon className="text-[#B8B8B8]" />
        </div>
      )}
    </>
  );
};

export default InputText;
