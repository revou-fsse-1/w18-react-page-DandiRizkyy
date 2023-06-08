import { catPhotos } from "../../data/cat-photo";
import { PhotoCard } from "./PhotoCard";

export const PhotoList = () => {
  return (
    <div>
      {catPhotos.map((photos) => (
        <div key={photos.id}>
          <PhotoCard imgUrl={photos.imgUrl} title={photos.title} />
        </div>
      ))}
    </div>
  );
};
