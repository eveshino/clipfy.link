import classes from "./buttonLinks.module.css";

import { Button } from "../buttons/button";

export function ButtonLinks() {
  return (
    <div className={classes.links}>
      <Button
        src={"/icons/youtube.png  "}
        href={"https://www.aiyu.co.jp/about/"}
        title="足場屋"
      />
      <Button
        src={"/icons/github.png"}
        href={"http://aiyu-realestate.com/"}
        title="不動屋"
      />
      {/* <Button
        src={"/icons/linkedin.png"}
        href={"https://www.linkedin.com/in/everson-shinohara-ab7226206/"}
        title="Linkedin"
      /> */}
    </div>
  );
}
