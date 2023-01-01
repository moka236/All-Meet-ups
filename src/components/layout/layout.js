import mainNavigation from "./mainNavigation";
import classes from "./layout.module.css";

function layout(props) {
  return (
    <div>
      <mainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default layout;
