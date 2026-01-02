import { MdArrowOutward } from "react-icons/md";

const ArrowSign = ({ className }) => {
  return (
    <div
      className={`h-10 w-10 bg-bg2 rounded-full flex items-center justify-center text-2xl text-baseColor transition-all duration-300 group-hover:rotate-45 ${className}`}
    >
      <MdArrowOutward />
    </div>
  );
};

export default ArrowSign;
