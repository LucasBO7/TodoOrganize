import "./remove-btn.css";

export const RemoveBtn = ({ onClick }) => {
  return (
    /* From Uiverse.io by javierBarroso */
    <button className="button" onClick={onClick}>
      <span className="X"></span>
      <span className="Y"></span>
      <div className="close">Close</div>
    </button>
  );
};
