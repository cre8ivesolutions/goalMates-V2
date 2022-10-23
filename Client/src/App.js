import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";

import logo from "./public/success.jpg";
import UserGallery from "./components/UserGallery";


// require('dotenv').config()

function App() {
  
  let [search, setSearch] = useState("");
  let [message, setMessage] = useState("Search goalMates!");
  let [data, setData] = useState([]);
  
  // const PG_URI = process.env.PG_URI;
  
  useEffect(() => {
    const PG_URI = process.env.PG_URI;
    if (search) {
      const fetchData = async () => {
        document.title = `${search} Search goalMates`;
        const response = await fetch(PG_URI + '/search?term=' + search);
        const resData = await response.json();
        console.log(resData.results)

        if (resData.results.length > 0) {
          return setData(resData.results);
        } else {
          return setMessage("Not Found");
        }

      };

      fetchData();
    }
  }, [search]);


  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term);
  };


  console.log({ data });
  

  return (
    <div className="App">
      <div className="App-header">
      {message}
        <Router>
          <Routes>
            <Route path="/" element={ 
                <div>
                  <SearchBar handleSearch={handleSearch} />
                  <UserGallery data={data} />
                  {/* <Register/> */}
                </div>
              }
            />
            <Route path="/register" element={
              <div>
                <SearchBar handleSearch={handleSearch}/>
                <Register />
              </div>
            }></Route>
            {/* <Route path="/album/:id" element={<AlbumView />} /> */}
            {/* <Route path="/artist/:id" element={<ArtistView />} /> */}
          </Routes>
        </Router>
        {/* <Register /> */}

        {/* <Routes/>  */}
        <br />
        <hr />
        <img src={logo} size="100x100" className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.meetup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out Our Model Site 'Meetup.com'
        </a>
      </div>
    </div>
  );
}

export default App;
