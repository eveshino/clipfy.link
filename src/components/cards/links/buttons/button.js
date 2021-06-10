import classes from "./button.module.css";

export function Button(props) {
  return (
    <>
      <button className={classes.link}>
        {/* <img className={classes.logo} src={props.src} alt="logo" /> */}
        <a href={props.href} target="_blank" rel="noreferrer">
          {props.title}
        </a>
      </button>
    </>
  );
}
