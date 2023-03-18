import styles from "../../../css/UpdateLandingPage/Articles.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Articles = () => {
  let [articles, setArticles] = useState([]);

  useEffect(async () => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const response = await fetch(`http://localhost:3002/article/`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    let articles = await response.json();
    setArticles(articles.message);
  };

  return (
    <div className={`${styles.articlesContainer}`}>
      <h4>Latest Articles</h4>
      <div className={`${styles.gridContainer}`}>
        {articles.map((data, index) => (
          <div key={index}>
            <Link
              to={"/article/" + data._id}
              className={`${styles.imageWrapper}`}
            >
              <img src={data.image} alt="article-image" />
            </Link>
            <Link to={"/article/" + data._id} className={`${styles.title}`}>
              <h3>{data.title}</h3>
            </Link>
            <Link className={`${styles.readMore}`} to={"/article/" + data._id}>
              Read more &#10230;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
