import classes from "./ClipfyCard.module.css";

import logo from "../../../images/logoBlack.png";

import { MiniLinks } from "../../cards/links/clipfy/miniLinks";
import { ButtonLinks } from "../../cards/links/clipfy/buttonLinks";

function ClipfyCard(props) {
  return (
    <div className={classes.main}>
      <div className={classes.card}>
        <img className={classes.picture} src={props.img} alt="myself" />
        <h1 className={classes.name}>{props.name}</h1>
        <div className={classes.desc}>
          <p className={classes.text}>{props.description}</p>
        </div>
        <MiniLinks line="http://line.me/ti/p/~aiyutaniguchi" />
        <ButtonLinks />
      </div>
      <img className={classes.clipfy} src={logo} alt="logo" />
    </div>
  );
}

export default ClipfyCard;
