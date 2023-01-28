import React from "react";
import { PHOTO_DELETE } from "../../constants";
import useFetch from "../../Hooks/useFetch";
import styles from "./PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { res } = await request(url, options);
      if (res.ok) window.location.reload();
    }
  };

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Deleter
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deleter
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
