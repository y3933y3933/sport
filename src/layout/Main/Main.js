import classes from "./Main.module.css";

const Main = (props) => {
  return (
    <main className={classes.main}>
      <div className="px-2 w-full ">{props.children}</div>
    </main>
  );
};

export default Main;
