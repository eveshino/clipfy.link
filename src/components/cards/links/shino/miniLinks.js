import classes from "./miniLinks.module.css";

import { Links } from "../link/links";

export function MiniLinks(props) {
  return (
    <div className={classes.links}>
      <Links
        href={"https://line.me/R/ti/p/eveshino13"}
        src={"/icons/line.png"}
      />
      <Links
        href={"https://www.instagram.com/eve_shino/"}
        src={"/icons/insta.png"}
      />
      <Links
        href={"https://www.facebook.com/Eveshino"}
        src={"/icons/facebook.png"}
      />
      <Links href={"https://twitter.com/EveShino"} src={"/icons/twitter.png"} />
    </div>
  );
}
