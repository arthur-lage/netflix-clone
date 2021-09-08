import React, { useEffect, useState } from "react";
import Api from "./Api";
import MovieRow from "./components/MovieRow";
import "./App.css";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

//eslint-disable-next-line
import ChangeProfile from "./components/ChangeProfile";

import UserContextProvider from "./contexts/UserContext";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener(scrollListener);
    };
  }, []);

  const scrollListener = () => {
    if (window.scrollY > 10) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  };

  useEffect(() => {
    const loadMovies = async () => {
      const list = await Api.getHomeList();
      setMovieList(list);

      let originals = list.filter((item) => item.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * originals[0].items.results.length - 1
      );

      if (randomChosen === -1) {
        randomChosen = 0;
      }

      let chosen = originals[0].items.results[randomChosen];

      console.log(randomChosen);
      console.log(chosen);

      let chosenInfo = await Api.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };

    loadMovies();
  }, []);

  return (
    <UserContextProvider>
      <div className="App">
        <Header isBlack={blackHeader} />

        {featuredData && <FeaturedMovie item={featuredData} />}

        <section className="lists">
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </section>

        {/* <ChangeProfile /> */}

        <footer>
          <p>Feito com <span role="img" aria-label="coração">❤</span></p>
          <p>Direitos de imagem para Netflix</p>
          <p>Dados pegos do site <a href="https://www.themoviedb.org/">https://www.themoviedb.org/</a></p>
        </footer>

        {movieList.length <= 0 && (
          <div className="loading">
            <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
          </div>
        )
        }
      </div>
    </UserContextProvider>
  );
}

export default App;
