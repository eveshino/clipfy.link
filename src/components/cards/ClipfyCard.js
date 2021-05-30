import classes from "./ClipfyCard.module.css";
import logo from "../../images/logoBlack.png";
import self from "../../images/linkpic.jpg";
import facebook from "../../icons/facebook.png";
import instagram from "../../icons/insta.png";
import github from "../../icons/github.png";
import linkedin from "../../icons/linkedin.png";
import line from "../../icons/line.png";
import twitter from "../../icons/twitter.png";
import youtube from "../../icons/youtube.png";
import tiktok from "../../icons/tiktok.png";

function ClipfyCard() {
  return (
    <div className={classes.main}>
      <div className={classes.card}>
        <img className={classes.picture} src={self} alt="myself" />
        <h1 className={classes.name}>@Shino</h1>
        <div className={classes.links}>
          <div className={classes.desc}>
            <p className={classes.text}>Developer</p>
          </div>
          <div className={classes.minilinks}>
            <a
              href="https://line.me/R/ti/p/eveshino13"
              target="_blank"
              rel="noreferrer"
            >
              <img className={classes.minilogo} src={line} alt="line" />
            </a>
          </div>
          <div className={classes.minilinks}>
            <a
              href="https://www.instagram.com/eve_shino/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={classes.minilogo}
                src={instagram}
                alt="instagram"
              />
            </a>
          </div>
          <div className={classes.minilinks}>
            <a
              href="https://www.facebook.com/Eveshino"
              target="_blank"
              rel="noreferrer"
            >
              <img className={classes.minilogo} src={facebook} alt="facebook" />
            </a>
          </div>
          <div className={classes.minilinks}>
            <a
              href="https://twitter.com/EveShino"
              target="_blank"
              rel="noreferrer"
            >
              <img className={classes.minilogo} src={twitter} alt="twitter" />
            </a>
          </div>
        </div>

        <div className={classes.links}>
          <button className={classes.link}>
            <img className={classes.logo} src={youtube} alt="youtube" />
            <a
              href="https://www.youtube.com/channel/UC9HSbvbhFAXV8zWCcuOHaTw"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
          </button>
          <button className={classes.link}>
            <img className={classes.logo} src={tiktok} alt="tiktok" />
            <a
              href="https://www.tiktok.com/@MS4wLjABAAAAer5dAU8zL6nGeaGb-C_Zeh6yuxFQqOWmzCZ42efjw1FPJX6vKoRWdqGC1lnCR1EH?lang=pt-BR"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>
          </button>
          <button className={classes.link}>
            <img className={classes.logo} src={github} alt="github" />
            <a
              href="https://github.com/eveshino"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
          <button className={classes.link}>
            <img className={classes.logo} src={linkedin} alt="linkedin" />
            <a
              href="https://www.linkedin.com/in/everson-shinohara-ab7226206/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </button>
        </div>
        <img className={classes.clipfy} src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default ClipfyCard;
