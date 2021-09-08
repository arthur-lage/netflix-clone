import React from "react";
import "./styles.css";

//eslint-disable-next-line
export default ({ item }) => {
  let launchYear = new Date(item.first_air_date).getFullYear();

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview

  if(description.length > 200){
    description = description.substring(0, 200) + '...'
  }

  return (
    <section
      className="featured"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{launchYear}</div>
            <div className="featured--season">
              {item.number_of_seasons}{" "}
              {item.number_of_seasons === 1 ? "temporada" : "temporadas"}
            </div>
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <a className="featured--watch-button" href={`/watch/${item.id}`}>
              ▶ Assistir
            </a>
            <a
              className="featured--my-list-button"
              href={`/list/add/${item.id}`}
            >
              + Minha Lista
            </a>
          </div>
          <div className="featured--genres">
            <strong>Gêneros: </strong>
            {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};
