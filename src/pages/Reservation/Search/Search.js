import classes from "./Search.module.css";
import Select from "../../../components/UI/Select/Select";
import Option from "../../../components/UI/Select/Option/Option";
import { useState } from "react";
import useOutsideClick from "../../../hooks/use-outside-click";
import { FcInfo } from "react-icons/fc";

const optionList = [
  {
    id: 0,
    label: "3F羽球場",
    value: "3F-badminton",
  },
  {
    id: 1,
    label: "1F羽球場",
    value: "1F-badminton",
  },
  {
    id: 2,
    label: "B1桌球室",
    value: "B1-table-tennis",
  },
  {
    id: 3,
    label: "B1壁球",
    value: "B1-wall-ball",
  },
  {
    id: 4,
    label: "B109教室(桌球)",
    value: "B109-table-tennis",
  },
];

const Search = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  const handleClickOutside = () => {
    setOpen(false);
  };
  const ref = useOutsideClick(handleClickOutside);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setOpen(false);
  };

  return (
    <div className={classes.wrapper}>
      <div className="flex items-center">
        <label className="text-primary-1 font-semibold shrink-0">場地：</label>
        <Select
          ref={ref}
          toggle={toggle}
          open={open}
          placeholder={selectedOption?.label}
        >
          {optionList.map((option) => (
            <Option
              key={option.id}
              onClick={onOptionClicked(option)}
              {...option}
            >
              {option.label}
            </Option>
          ))}
        </Select>

        <FcInfo className="cursor-pointer ml-2"/>
      </div>
      <div className="flex items-center">
        <label className="text-primary-1 font-semibold shrink-0">日期：</label>
        <button>查詢</button>
      </div>
    </div>
  );
};

export default Search;
