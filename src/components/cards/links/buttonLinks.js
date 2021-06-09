import classes from "./buttonLinks.module.css";

import { Button } from "./buttons/button";

export function ButtonLinks() {
  return (
    <div className={classes.links}>
      <Button
        src={"/icons/youtube.png  "}
        href={"https://www.youtube.com/channel/UC9HSbvbhFAXV8zWCcuOHaTw"}
        title="Youtube"
      />
      <Button
        src={"/icons/github.png"}
        href={"https://github.com/eveshino"}
        title="Github"
      />
      <Button
        src={"/icons/linkedin.png"}
        href={"https://www.linkedin.com/in/everson-shinohara-ab7226206/"}
        title="Linkedin"
      />
    </div>
  );
}
