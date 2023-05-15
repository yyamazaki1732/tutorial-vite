import classes from "./index.module.scss";
import PropTypes from "prop-types";
// import { useState } from "react";

export const Square = ({ value, onSquareClick }) => {
  // const [value, setValue] = useState(null);

  // function handleClick() {
  //   setValue("X")
  // }
  return (
    <button className={classes.square} onClick={onSquareClick}>
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string, // または適切なプロパティ型を指定する
  onSquareClick: PropTypes.any, // または適切なプロパティ型を指定する
};
