const Option = (props) => {
  
  return (
    <div className="py-1 px-2 text-primary-1 hover:bg-secondary-1 cursor-pointer" onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Option;
