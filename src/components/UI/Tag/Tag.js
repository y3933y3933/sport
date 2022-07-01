const Tag = (props) => {
  return (
    <span
      className={`text-sm h-5 px-2  rounded-xl ${
        props.primary && "bg-red-100 text-red-400"
      }`}
    >
      {props.children}
    </span>
  );
};

export default Tag;

/*
 * type:
 *  primary
 */
