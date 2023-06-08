import { PhotoFilterSearch } from "./components/homepage/PhotoFilterSearch";
import { PhotoList } from "./components/homepage/PhotoLists";
import { HeaderComponent } from "./components/navbar/HeaderComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <PhotoFilterSearch />
      <PhotoList />
    </div>
  );
}

export default App;
