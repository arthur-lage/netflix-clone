import React, { useState } from "react";
import "./styles.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

//eslint-disable-next-line
export default ({ items, title }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleNavigate = (direction) => {
    if (direction === "left") {
      let x = scrollX + Math.round(window.innerWidth / 2);
      
      if(x > 0){
        x = 0
      }

      setScrollX(x)
    } else if (direction === "right") {
      let x = scrollX - Math.round(window.innerWidth / 2)

      let totalWidth = items.results.length * 150

      if((window.innerWidth - totalWidth) > x){
        x = ((window.innerWidth - totalWidth) - 60)
      }

      setScrollX(x)
    }
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div onClick={() => handleNavigate("left")} className="movieRow--left">
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div onClick={() => handleNavigate("right")} className="movieRow--right">
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  alt={item.title}
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
