import { useState } from "react";
import { LikedPhotos } from "./components/homepage/LikedPhotos";
import { PhotoFilterSearch } from "./components/homepage/PhotoFilterSearch";
import { HeaderComponent } from "./components/navbar/HeaderComponent";
import { catPhotos } from "./data/cat-photo";
import { PhotoCard } from "./components/homepage/PhotoCard";
import { ModalPage } from "./components/homepage/ModalPage";

function App() {
  const [photos, setPhotos] = useState(catPhotos);
  const [filterValue, setFilterValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <HeaderComponent />
      <PhotoFilterSearch setFilterValue={handleFilterChange} />
      <LikedPhotos count={likedPhotoCount} />
      <section className="mt-4 mb-10 max-w-[900px] grid sm:grid-cols-2 md:grid-cols-4 gap-9">
        {filteredPhotos.map((photos) => (
          <PhotoCard
            key={photos.id}
            id={photos.id}
            imgUrl={photos.imgUrl}
            title={photos.title}
            isLiked={photos.isLiked}
            likePhoto={handleLikePhotos}
          />
        ))}
      </section>
      {/* <MemberForm /> */}
      <button
        className="hover:bg-blue-500 bg-blue-700 text-white px-4 py-2 rounded-md"
        onClick={openModal}
      >
        Join Our Cat Army Now ! 😼
      </button>
      {isModalOpen && <ModalPage closeModal={closeModal} />}
      <br></br>
    </main>
  );
}

export default App;
