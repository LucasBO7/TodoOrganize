import "./remove-btn.css";
import removeIcon from "../../../../assets/remove-img.png";

export const RemoveBtn = ({ onClick }) => {
  return (
    /* From Uiverse.io by javierBarroso */
    <button className="button" onClick={onClick}>
      <img className="imgBtn" src={removeIcon} />
    </button>
  );
};
