import { useState } from "react";
import { LikedPhotos } from "./components/homepage/LikedPhotos";
import { PhotoFilterSearch } from "./components/homepage/PhotoFilterSearch";
import { HeaderComponent } from "./components/navbar/HeaderComponent";
import { catPhotos } from "./data/cat-photo";
import { PhotoCard } from "./components/homepage/PhotoCard";
import { ModalPage, Snackbar } from "./components/homepage/ModalPage";

function App() {
  const [photos, setPhotos] = useState(catPhotos);
  const [filterValue, setFilterValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);

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

  const showSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setIsSnackbarVisible(true);

    setTimeout(() => {
      setIsSnackbarVisible(false);
      setSnackbarMessage("");
    }, 5000); // Snackbar visibility duration (in milliseconds)
  };

  return (
    <main className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-backgroundImage">
      <HeaderComponent />
      <PhotoFilterSearch setFilterValue={handleFilterChange} />
      <LikedPhotos count={likedPhotoCount} />
      <section className="mt-4 mb-10 sm:max-w-[900px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9">
        {filteredPhotos.length ? (
          filteredPhotos.map((photos) => (
            <PhotoCard
              key={photos.id}
              id={photos.id}
              imgUrl={photos.imgUrl}
              title={photos.title}
              isLiked={photos.isLiked}
              likePhoto={handleLikePhotos}
            />
          ))
        ) : (
          <div className="mt-40 col-span-full text-center">
            <p className="block font-medium text-4xl">
              No Photos found. Try again, meow. 😿
            </p>
            <p className="mt-40"></p>
          </div>
        )}
      </section>
      {/* <MemberForm /> */}
      <button
        className="hover:bg-blue-500 bg-blue-700 text-white px-4 py-2 rounded-md"
        onClick={openModal}
      >
        Join Our Cat Army Now ! 😼
      </button>
      {isModalOpen && (
        <ModalPage closeModal={closeModal} showSnackbar={showSnackbar} />
      )}
      {isSnackbarVisible && <Snackbar message={snackbarMessage} />}
      <br></br>
    </main>
  );
}

export default App;
