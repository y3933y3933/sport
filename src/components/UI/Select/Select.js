import { forwardRef } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Select = forwardRef(({ placeholder, children, open, toggle }, ref) => {
  return (
    <div ref={ref} className="relative w-full md:w-auto md:min-w-[200px] bg-white">
      <div
        className={`border 
        ${open ? "border-primary-2" : "border-[#eee]"}
        rounded px-2 py-1 text-primary-1 flex items-center cursor-pointer`}
        onClick={toggle}
      >
        {placeholder ? placeholder : "請選擇"}
        {open ? (
          <BiChevronUp className="w-6 h-6 ml-auto" />
        ) : (
          <BiChevronDown className="ml-auto w-6 h-6" />
        )}
      </div>
      {open && (
        <div className="absolute z-10 bg-white w-full rounded-br	 rounded-bl shadow-dark	">
          {children}
        </div>
      )}
    </div>
  );
});

export default Select;
