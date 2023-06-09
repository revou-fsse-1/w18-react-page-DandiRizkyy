import { useState } from "react";
import { LikedPhotos } from "./components/homepage/LikedPhotos";
import { PhotoFilterSearch } from "./components/homepage/PhotoFilterSearch";
import { HeaderComponent } from "./components/navbar/HeaderComponent";
import { catPhotos } from "./data/cat-photo";
import { PhotoCard } from "./components/homepage/PhotoCard";
import { MemberForm } from "./components/homepage/MemberForm";

function App() {
  const [photos, setPhotos] = useState(catPhotos);
  const [filterValue, setFilterValue] = useState("");
  function handleLikePhotos(id: number, isLiked: boolean) {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        photo.isLiked = isLiked;
      }
      return photo;
    });
    setPhotos(newPhotos);
  }
  const likedPhotoCount = photos.filter((photo) => photo.isLiked).length;

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
  };

  const filteredPhotos = catPhotos.filter((photo) =>
    photo.title.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <div>
      <HeaderComponent />
      <PhotoFilterSearch setFilterValue={handleFilterChange} />
      <LikedPhotos count={likedPhotoCount} />
      {filteredPhotos.map((photos) => (
        <div key={photos.id}>
          <PhotoCard
            id={photos.id}
            imgUrl={photos.imgUrl}
            title={photos.title}
            isLiked={photos.isLiked}
            likePhoto={handleLikePhotos}
          />
        </div>
      ))}
      <MemberForm />
    </div>
  );
}

export default App;
