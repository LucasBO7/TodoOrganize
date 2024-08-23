/* eslint-disable react/prop-types */
import "./edit-btn.css";
import editBtn from "../../../../assets/edit-btn-icon.png";

export const EditBtn = ({ onClick }) => {
  return (
    /* From Uiverse.io by vinodjangid07 */
    <button className="editBtn" onClick={onClick}>
      <img
        className="edit-btn-img"
        src={editBtn}
        width={"20px"}
        height={"20px"}
      />
    </button>
  );
};
