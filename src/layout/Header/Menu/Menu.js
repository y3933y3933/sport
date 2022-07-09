import useFetch from "../../../hooks/use-fetch";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const { loading, error, fetchData } = useFetch();

  useEffect(() => {
    const transFormMenus = (data) => {
      setMenus(data.data);
    };
    fetchData("data/menu/menu.json", transFormMenus);
  }, [fetchData]);

  // const Menus = () => {
  //   // return menus.map((item) => <li className="list-none p-2 text-primary-1 hover:text-primary-2 font-semibold" key={item.text}>{item.text}</li>);
  //   return menu
  // };

  return (
    <nav className="flex">
      {menus.map((item) => (
        <MenuItem key={item.text} {...item} />
      ))}
    </nav>
  );
};

export default Menu;
