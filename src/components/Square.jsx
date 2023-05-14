import classes from "./index.module.scss";
// import { useState } from "react";
import PropTypes from "prop-types";

export const Square = ({ value, onSquareClick }) => {
  return (
    <button className={classes.square} onClick={onSquareClick}>
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string, // または適切なプロパティ型を指定する
  onSquareClick: PropTypes.func,
};
