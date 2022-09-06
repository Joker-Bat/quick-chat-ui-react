import classes from "./Button.module.scss";

/**
 *
 * @returns Button
 */
const Button = ({
  title,
  icon,
  type = "button",
  large = false,
  outlined = false,
  onClick = () => {},
}) => {
  const Icon = icon;
  return (
    <button
      className={`${classes.Button} ${large ? classes.Large : ""} ${
        outlined ? classes.Outlined : ""
      }`}
      onClick={onClick}
      type={type}
    >
      <span className={classes.Title}>{title}</span>
      {Icon && (
        <span className={classes.Icon}>
          <Icon />
        </span>
      )}
    </button>
  );
};

export default Button;
