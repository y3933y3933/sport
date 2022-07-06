import { MdSportsHandball } from "react-icons/md";
import { TbMenu2 } from "react-icons/tb";

const Header = () => {
  return (
    <header className="shadow">
      <div className="container flex items-center h-12">
        <MdSportsHandball className="text-primary-2 h-8 w-8 mr-1" />
        <h1 className="text-primary-1 font-bold md:text-xl cursor-pointer text-base">
          合太綜合體育館
          <small className="font-semibold text-[10px] inline-block ml-2">
            線上預約系統
          </small>
        </h1>
        <TbMenu2 className="text-primary-2 h-6 w-6 cursor-pointer ml-auto block md:hidden" />
      </div>
    </header>
  );
};

export default Header;
