import classes from "./Main.module.css";

const Main = (props) => {
  return (
    <main className={classes.main}>
      <div className="container ">{props.children}</div>
    </main>
  );
};

export default Main;
