import { useState, useEffect } from 'react';
import Layout from './assets/Layout';
import './App.css';
import FavoriteComponent from './components/FavoriteComponent';
import MovieCard from './components/MovieCard';
import SeriesCard from './components/SeriesCard';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleMovie, setToggleMovie] = useState(true);

  const searchMovie = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=403829fffc80d8184aa974d631a475c5&language=en-US&query=${query}&page=1&include_adult=false`
      );
      const data = await res.json();
      const searchData = await data.results;
      setData(searchData);
      console.log(data);
    } catch (error) {
      alert('Error while loading data. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  const searchSeries = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=403829fffc80d8184aa974d631a475c5&language=en-US&query=${query}&page=1&include_adult=false`
      );
      const data = await res.json();
      const searchData = await data.results;
      setSeriesData(searchData);
      console.log(seriesData);
    } catch (error) {
      alert('Error while loading data. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query) {
        searchSeries();
        searchMovie();
      }
    }, 500); // Adjust the delay based on your requirements

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };

  const toggleViewMovie = () => {
    setToggleMovie(!toggleMovie);
  };

  document.title = 'React Movie App';

  return (
    <Layout>
      <form className="mx-auto mb-4" style={{ width: '18rem' }}>
        <input
          className="form-control"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search Here"
        ></input>
      </form>
      <div className="text-center mb-4">
        {query.length > 1 ? (
          <>Search result for '{query}'</>
        ) : (
          <>Search for movies or series</>
        )}
      </div>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : query.length > 1 ? (
        <div className="mx-auto">
          <button
            className="btn btn-primary btn-small my-4"
            onClick={toggleViewMovie}
          >
            {toggleMovie ? 'Toggle TV results' : 'Toggle movie results'}
          </button>
          {toggleMovie ? (
            <MovieCard movieData={data} />
          ) : (
            <SeriesCard seriesData={seriesData} />
          )}
        </div>
      ) : <>Please search for movies/series using the form above</>}
    </Layout>
  );
}

export default App;
