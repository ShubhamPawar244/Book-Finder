// src/App.js
import React, { useState } from "react";
import axios from "axios";
import BookList from "./components/BookList";
import './components/index.css';
import logo from './assets/abc.png'
const App = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      setBooks(response.data.items || []);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="container text-center " >

      <div className="row justify-content-between position-sticky top-0 z-1 p-1 mb-1" style={{ backgroundColor: 'rgba(20, 20, 20, 0.772)' }}>
        <div className="col-md-6 position-relative">
          <h1 className="p-2 font-serif text-white "> <img src={logo} alt="" className="w-25" /> Book Finder</h1>
        </div>

        <div className="col-md-6 mt-1 mt-md-4">
          <form onSubmit={handleSearch} className="my-4">
            <div className="input-group mb-3" >
              <input
                type="text"
                className="form-control"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for books..."
                aria-label="Book Search"
              />
              <button className="btn btn-info" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>

      </div>
      <BookList books={books} />
    </div >
  );
};

export default App;
