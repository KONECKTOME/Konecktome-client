import styles from "../../../css/UpdateLandingPage/Articles.module.css";
import { Link } from "react-router-dom";

let images = [
  {
    imgSrc:
      "https://www.nerdwallet.com/uk-cdn/ghost-images/content/images/2023/03/GettyImages-555716673.jpeg",
    title: "'The biggest challenge for small businesses is marketing'",
    link: "#!",
  },
  {
    imgSrc:
      "https://www.nerdwallet.com/uk-cdn/ghost-images/content/images/2023/03/unnamed.jpg",
    title: "Entrepreneur Spotlight: Georgina Atwell of Toppsta",
    link: "#!",
  },
  {
    imgSrc:
      "https://www.nerdwallet.com/uk-cdn/ghost-images/content/images/2023/02/Mature-woman-using-smartphone-pension-age.jpeg",
    title: "How an Earlier Rise in the State Pension Age Could Affect You",
    link: "#!",
  },
  {
    imgSrc:
      "https://www.nerdwallet.com/uk-cdn/ghost-images/content/images/2023/03/unnamed.jpg",
    title: "Entrepreneur Spotlight: Georgina Atwell of Toppsta",
    link: "#!",
  },
  {
    imgSrc:
      "https://www.nerdwallet.com/uk-cdn/ghost-images/content/images/2023/02/Mature-woman-using-smartphone-pension-age.jpeg",
    title: "How an Earlier Rise in the State Pension Age Could Affect You",
    link: "#!",
  },
  {
    imgSrc:
      "https://www.nerdwallet.com/uk-cdn/ghost-images/content/images/2023/03/GettyImages-555716673.jpeg",
    title: "'The biggest challenge for small businesses is marketing'",
    link: "#!",
  },
];

const Articles = () => {
  return (
    <div className={`${styles.articlesContainer}`}>
      <h4>Latest Articles</h4>
      <div className={`${styles.gridContainer}`}>
        {images.map((data, index) => (
          <div key={data.imgSrc + index}>
            <a href={data.link} className={`${styles.imageWrapper}`}>
              <img src={data.imgSrc} alt="" />
            </a>
            <a href={data.link} className={`${styles.title}`}>
              <h3>{data.title}</h3>
            </a>
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
