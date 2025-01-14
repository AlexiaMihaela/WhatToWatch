import React, { useState } from "react";
import "./Recommandations.css";

function Recommendations() {
  const [genre, setGenre] = useState("drama");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`https://api.tvmaze.com/shows`);
      const data = await response.json();

      const filteredShows = data.filter((show) =>
        show.genres.map((g) => g.toLowerCase()).includes(genre)
      );

      setRecommendations(filteredShows);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <h1 className="contact-title">WhatToWatch</h1>
        <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="genre">Gen preferat:</label>
          <select id="genre" name="genre" value={genre} onChange={handleGenreChange}>
            <option value="drama">Dramă</option>
            <option value="romance">Romantic</option>
            <option value="comedy">Comedie</option>
            <option value="fantasy">Fantezie</option>
            <option value="horror">Horror</option>
            <option value="action">Actiune</option>
            <option value="music">Musical</option>
            <option value="thriller">Thriller</option>
            <option value="espionage">Spionaj</option>
            <option value="crime">Crima</option>
            <option value="anime">Anime</option>
          </select>
          <button type="submit">Obține recomandări</button>
        </form>
        </div>

        {loading && <p>Se încarcă...</p>}

        {!loading && recommendations.length > 0 && (
          
          <table>
            <thead>
              <tr>
                <th>Imagine</th>
                <th>Nume</th>
                <th>Gen</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {recommendations.map((show) => (
                <tr key={show.id}>
                  <td>
                    <img
                      src={show.image?.medium || "https://via.placeholder.com/100"}
                      alt={show.name}
                      width="100"
                      height="auto"
                    />
                  </td>
                  <td>{show.name}</td>
                  <td>{show.genres.join(", ")}</td>
                  <td>{show.rating.average || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!loading && recommendations.length === 0 && <p>Nu s-au găsit rezultate.</p>}
    </div>
  );
}

export default Recommendations;
