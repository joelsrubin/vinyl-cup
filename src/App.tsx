import "./App.css";
import * as React from "react";
import { Album } from "./components/Album/Album";
import { getCollections } from "../api";
function App() {
  const [data, setData] = React.useState<Release[]>([]);
  const [searchedAlbums, setSearchedAlbums] = React.useState<Release[]>([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selected, setSelected] = React.useState<Release | null>(null);
  async function fetchData() {
    const json = await getCollections();
    setData(json.releases);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
    const filteredAlbums = data.filter(
      (album) =>
        album.basic_information.title.toLowerCase().includes(searchTerm) ||
        album.basic_information.artists
          .map((artist) => artist.name.toLowerCase())
          .join(" ")
          .includes(searchTerm)
    );
    setSearchedAlbums(filteredAlbums);
  }

  function handleClick(album: Release) {
    setSelected(album);
  }

  React.useEffect(() => {
    !data.length && fetchData();
  }, [data]);

  React.useEffect(() => {
    if (searchTerm.length === 0) {
      setSearchedAlbums([]);
    }
  }, [searchTerm]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vinyl Library</h1>
        <input
          type="text"
          placeholder="search by artist or title"
          onChange={handleChange}
        />
      </header>
      <div className="albums">
        {searchedAlbums.map((release, i) => (
          <Album
            data={release}
            isSelected={selected?.id === release.id}
            key={i}
            clickHandler={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
