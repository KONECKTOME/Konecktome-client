import styles from "../../../css/UpdateLandingPage/LeadingBrands.module.css";

let images = [
  {
    imgSrc:
      "https://res.cloudinary.com/nerdwallet-uk/image/upload/f_auto/nerdwallet-uk/banners/b168x60/funding-c5738268.png",
  },
  {
    imgSrc: "https://www.vectorlogo.zone/logos/instagram/instagram-ar21.png",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/nerdwallet-uk/image/upload/f_auto/nerdwallet-uk/banners/b168x60/rac.gif",
  },
  {
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/nerdwallet-uk/image/upload/f_auto/nerdwallet-uk/banners/b168x60/funding-c5738268.png",
  },
  {
    imgSrc: "https://www.vectorlogo.zone/logos/instagram/instagram-ar21.png",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/nerdwallet-uk/image/upload/f_auto/nerdwallet-uk/banners/b168x60/rac.gif",
  },
  {
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/nerdwallet-uk/image/upload/f_auto/nerdwallet-uk/banners/b168x60/funding-c5738268.png",
  },
  {
    imgSrc: "https://www.vectorlogo.zone/logos/instagram/instagram-ar21.png",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/nerdwallet-uk/image/upload/f_auto/nerdwallet-uk/banners/b168x60/rac.gif",
  },
  {
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/nerdwallet-uk/image/upload/f_auto/nerdwallet-uk/banners/b168x60/funding-c5738268.png",
  },
  {
    imgSrc: "https://www.vectorlogo.zone/logos/instagram/instagram-ar21.png",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/nerdwallet-uk/image/upload/f_auto/nerdwallet-uk/banners/b168x60/rac.gif",
  },
];

const LeadingBrands = () => {
  return (
    <div className={`${styles.leadingBrandsContainer}`}>
      <h4>Compare leading brands</h4>
      <div className={`${styles.gridContainer}`}>
        {images.map((data, index) => (
          <div key={data.imgSrc + index}>
            <img src={data.imgSrc} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadingBrands;
