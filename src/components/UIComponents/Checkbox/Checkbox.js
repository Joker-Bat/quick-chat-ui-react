import classes from "./Checkbox.module.scss";

/**
 *
 * @param {Object} p
 * @param {Boolean=} p.checked
 * @param {Function=} p.onChange
 * @returns Checkbox
 */
const Checkbox = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      className={classes.Checkbox}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
