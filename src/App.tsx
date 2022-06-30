import "./App.css";
import * as React from "react";
import { Album } from "./components/Album/Album";
import { getCollections } from "../api";
function App() {
  const [data, setData] = React.useState<Release[]>([]);

  async function fetchData() {
    const json = await getCollections();
    setData(json.releases);
  }

  React.useEffect(() => {
    !data.length && fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vinyl Library</h1>
      </header>
      <div className="albums">
        {data.map((release, i) => (
          <Album data={release} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
