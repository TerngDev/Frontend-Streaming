import styles from "./Popular.module.css";
import React, { useRef, useState, useEffect } from "react";

const Popular = () => {
  const containerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (containerRef.current) {
      setIsAtStart(containerRef.current.scrollLeft === 0);
      setIsAtEnd(
        containerRef.current.scrollLeft + containerRef.current.clientWidth >=
          containerRef.current.scrollWidth
      );
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollPosition();
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", checkScrollPosition);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  return (
    <>
      <div className={`${styles.curved_div_container}`}>
        <div className={`${styles.curved_div}`}></div>
      </div>
      <div className={`${styles.popularContentContainer}`}>
        <div className={`${styles.innerPolularContentContainer}`}>
          <div className={`${styles.popularContainer}`}>
            <h1>กำลังฮิต</h1>

            <div className={`${styles.arrowContainer}`}>
              {!isAtStart && (
                <button
                  className={`${styles.scrollButton} ${styles.scrollButtonLeft}`}
                  onClick={scrollLeft}
                >
                  &#10094;
                </button>
              )}
              <ul
                className={`${styles.popularCardContainer}`}
                ref={containerRef}
              >
                <li>
                  <label>1</label>
                  <div
                    style={{
                      backgroundImage: `url(https://m.media-amazon.com/images/I/81ai6zx6eXL._AC_SL1304_.jpg)`,
                    }}
                  ></div>
                </li>
                <li>
                  <label>2</label>
                  <div
                    style={{
                      backgroundImage: `url(https://m.media-amazon.com/images/I/71eHZFw+GlL._AC_UF894,1000_QL80_.jpg)`,
                    }}
                  ></div>
                </li>
                <li>
                  <label>3</label>
                  <div
                    style={{
                      backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCJZwCJ7Az7gAV5TQxNRHJtPX5St-3G5HWw&s)`,
                    }}
                  ></div>
                </li>
                <li>
                  <label>4</label>
                  <div
                    style={{
                      backgroundImage: `url(https://i.pinimg.com/736x/8e/0d/ab/8e0dab8699be85720ce55845065bf6dc.jpg)`,
                    }}
                  ></div>
                </li>
                <li>
                  <label>5</label>
                  <div
                    style={{
                      backgroundImage: `url(https://www.originalfilmart.co.uk/cdn/shop/products/avatar_2009_advance_styleC_original_film_art_5000x.webp?v=1671134076)`,
                    }}
                  ></div>
                </li>
                <li>
                  <label>6</label>
                  <div
                    style={{
                      backgroundImage: `url(https://vice-press.com/cdn/shop/files/Jaws-film-vault-poster-matt-ferguson-florey.jpg?v=1687347055&width=1100)`,
                    }}
                  ></div>
                </li>
                <li>
                  <label>7</label>
                  <div
                    style={{
                      backgroundImage: `url(https://preview.redd.it/p2jkf3490ta61.jpg?width=640&crop=smart&auto=webp&s=ee4cd0ff493f18149d6c88f5bb503e51507a0531)`,
                    }}
                  ></div>
                </li>
                <li>
                  <label>8</label>
                  <div
                    style={{
                      backgroundImage: `url(https://wallpapercave.com/wp/wp8872777.jpg)`,
                    }}
                  ></div>
                </li>
                <li>
                  <label>9</label>
                  <div
                    style={{
                      backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/144/450/423/star-wars-movies-star-wars-the-last-jedi-poster-wallpaper-preview.jpg)`,
                    }}
                  ></div>
                </li>
                <li>
                  <label>10</label>
                  <div
                    style={{
                      backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg)`,
                    }}
                  ></div>
                </li>
              </ul>
              {!isAtEnd && (
                <button
                  className={`${styles.scrollButton} ${styles.scrollButtonRight}`}
                  onClick={scrollRight}
                >
                  &#10095;
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
