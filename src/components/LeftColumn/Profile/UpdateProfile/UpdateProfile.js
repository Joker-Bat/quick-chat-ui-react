import classes from "./UpdateProfile.module.scss";

import { useSelector } from "react-redux";
import { GrUpdate } from "react-icons/gr";
import { AiOutlineSave } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import Button from "../../../UIComponents/Button/Button";

/**
 *
 * @returns UpdateProfile
 */
const UpdateProfile = ({ handleClose }) => {
  const { name, picture, status } = useSelector((state) => state.user);

  const handleCloseModel = () => {
    handleClose();
  };

  return (
    <div className={classes.Container} onClick={handleCloseModel}>
      <div
        className={classes.UpdateProfile}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.CloseIcon} onClick={handleCloseModel}>
          <IoMdClose />
        </div>

        <div className={classes.Picture}>
          <img src={picture} alt={name} />
          <span className={classes.Icon}>
            <GrUpdate />
          </span>
        </div>

        <input type="text" defaultValue={name} spellCheck="false" />
        <input type="text" defaultValue={status} spellCheck="false" />

        <div className={classes.Button}>
          <Button title="Update" icon={AiOutlineSave} large />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
