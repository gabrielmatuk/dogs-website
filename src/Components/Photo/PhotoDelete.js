import React from "react";
import styles from "./PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  return (
    <div>
      <button className={styles.delete}>Deleter</button>
    </div>
  );
};

export default PhotoDelete;
