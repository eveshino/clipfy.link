import classes from "./miniLinks.module.css";

import { Links } from "../link/links";

export function MiniLinks(props) {
  return (
    <div className={classes.links}>
      <Links
        href={"https://line.me/R/ti/p/aiyutaniguchi"}
        src={"/icons/fbBlack.png"}
      />
      <Links
        href={"https://www.instagram.com/aiyu.0808/"}
        src={"/icons/instaBlack.png"}
      />
      <Links
        href={"https://www.facebook.com/aiyu2021/"}
        src={"/icons/line.png"}
      />
      <p className={classes.text}>
        建築やリフォームを中⼼に、 ⾜場を組む会社です。
      </p>
      {/* <Links href={"https://twitter.com/EveShino"} src={"/icons/twitter.png"} /> */}
    </div>
  );
}
