import styles from "../../../css/UpdateLandingPage/Articles.module.css";
import { Link } from "react-router-dom";

let images = [
  {
    imgSrc:
      "https://www.nerdwallet.com/uk-cdn/ghost-images/content/images/2023/03/GettyImages-555716673.jpeg",
    title: "'The biggest challenge for small businesses is marketing'",
    link: "/blog",
  },
  {
    imgSrc:
      "https://www.nerdwallet.com/uk-cdn/ghost-images/content/images/2023/03/unnamed.jpg",
    title: "Entrepreneur Spotlight: Georgina Atwell of Toppsta",
    link: "/blog",
  },
  {
    imgSrc:
      "https://www.nerdwallet.com/uk-cdn/ghost-images/content/images/2023/02/Mature-woman-using-smartphone-pension-age.jpeg",
    title: "How an Earlier Rise in the State Pension Age Could Affect You",
    link: "/blog",
  },
  {
    imgSrc:
      "https://www.nerdwallet.com/uk-cdn/ghost-images/content/images/2023/03/unnamed.jpg",
    title: "Entrepreneur Spotlight: Georgina Atwell of Toppsta",
    link: "/blog",
  },
  {
    imgSrc:
      "https://www.nerdwallet.com/uk-cdn/ghost-images/content/images/2023/02/Mature-woman-using-smartphone-pension-age.jpeg",
    title: "How an Earlier Rise in the State Pension Age Could Affect You",
    link: "/blog",
  },
  {
    imgSrc:
      "https://www.nerdwallet.com/uk-cdn/ghost-images/content/images/2023/03/GettyImages-555716673.jpeg",
    title: "'The biggest challenge for small businesses is marketing'",
    link: "/blog",
  },
];

const Articles = () => {
  return (
    <div className={`${styles.articlesContainer}`}>
      <h4>Latest Articles</h4>
      <div className={`${styles.gridContainer}`}>
        {images.map((data, index) => (
          <div key={data.imgSrc + index}>
            <Link to={data.link} className={`${styles.imageWrapper}`}>
              <img src={data.imgSrc} alt="" />
            </Link>
            <Link to={data.link} className={`${styles.title}`}>
              <h3>{data.title}</h3>
            </Link>
            <Link className={`${styles.readMore}`} to={"/article"}>
              Read more &#10230;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
