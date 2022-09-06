import classes from "./Logo.module.scss";

import QuickChatLogo from "../../../assets/images/QuickChatLogo.png";

/**
 *
 * @returns Logo
 */
const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={QuickChatLogo} alt="logo" />
      <h1>QuickChat</h1>
    </div>
  );
};

export { Logo };
