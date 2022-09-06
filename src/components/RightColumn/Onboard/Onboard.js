import classes from "./Onboard.module.scss";

import { AiOutlineLink } from "react-icons/ai";

import Button from "../../UIComponents/Button/Button";
import LinkLogo from "../../../assets/images/LinkLogo.png";

/**
 *
 * @returns Onboard
 */
const Onboard = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.LinkLogo}>
        <img src={LinkLogo} alt="LinkLogo" />
      </div>
      <h1>Onboard Clients</h1>
      <p>Share the link with prospects and discuss all stuff</p>
      <div className={classes.Button}>
        <Button title="Copy Link" icon={AiOutlineLink} large />
      </div>
    </div>
  );
};

export default Onboard;
