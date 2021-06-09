import classes from "./links.module.css";

export function Links(props) {
  return (
    <div className={classes.minilinks}>
      <a href={props.href} target="_blank" rel="noreferrer">
        <img className={classes.minilogo} src={props.src} alt="logo" />
      </a>
    </div>
  );
}

//
