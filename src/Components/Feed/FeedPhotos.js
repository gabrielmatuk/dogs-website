import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../constants";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from "./FeedPhotos.module.css";
import { ReactComponent as Triste } from "../../Assets/cara-triste.svg";

const FeedPhotos = ({ page, user, setModalPhoto, setInifinite }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const fetchPhotos = async () => {
      const total = 3;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { res, json } = await request(url, options);
      if (res && res.ok && json.length < total) setInifinite(false);
    };

    fetchPhotos();
  }, [request, user, page, setInifinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data && user && data.length === 0) {
    return (
      <div className={styles.nophoto}>
        <Triste className={styles.imgSad} />
        <p>Você ainda não tem fotos.</p>
      </div>
    );
  }
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
