import { MdSportsHandball } from "react-icons/md";

const Header = () => {
  return (
    <header className="shadow">
      <div className="container flex items-center h-12">
        <MdSportsHandball className="text-primary-2 h-8 w-8 mr-1" />
        <h1 className="text-primary-1 font-bold text-xl cursor-pointer">
          合太綜合體育館
          <small className="font-semibold text-sm inline-block ml-2"> 線上預約系統</small>
        </h1>
      </div>
    </header>
  );
};

export default Header;
