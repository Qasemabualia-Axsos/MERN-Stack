import axios from "axios";
import { useState, useEffect } from "react";

const Api = () => {
  const [animes, setAnimes] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime?page=${page}`)
      .then((response) => {
        setAnimes((prev) => [...prev, ...response.data.data]);
        setHasNext(response.data.pagination.has_next_page);
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <><div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
      {animes.map((anime) => (
        <div style={{width:"400px"}} key={anime.mal_id}>
          <h3>{anime.title}</h3>
          <img
            src={anime.images?.jpg?.image_url}
            alt={anime.title}
            width="150"
          />
        </div>
      ))}

      {hasNext && (
        <button onClick={() => setPage(page + 1)}>
          Load More
        </button>
      )}
      </div>
    </>
  );
};

export default Api;
