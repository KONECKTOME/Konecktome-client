import React, { Component } from "react";
import Footer from "../LandingPage/Footer";
import Navbar from "../LandingPage/Navbar";
import styles from "../../../css/Blog/Blog.module.css";
import BreadCrumbs from "../../Reusable/Breadcrumbs/BreadCrumbs";

let breadCrumbData = [
  { title: "Your HomePage", link: "/" },
  { title: "Your HomePage", link: "/" },
];
class Blog extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div className={`${styles.mainContainer}`}>
          <BreadCrumbs
            parentPages={breadCrumbData}
            currentPage="Entrepreneur Spotlight Georgina Atwell of Toppsta"
          />
          <h1 className={`${styles.title}`}>
            Entrepreneur Spotlight: Georgina Atwell of Toppsta
          </h1>
          <p className={`${styles.reference}`}>
            As part of NerdWallet&apos;s Entrepreneur Spotlight series, we spoke
            to Georgina Atwell, founder of children&apos;s book review website
            Toppsta.com. She told us about how she got started, the challenges
            she faced when setting up her own website, and what advice she would
            give to future entrepreneurs.
          </p>
          <p className={`${styles.publishDate}`}>Published on 02 March 2023.</p>
          <div className={`${styles.blogContainer}`}>
            <img
              src="https://www.nerdwallet.com/uk-cdn/ghost-images/content/images/2023/03/unnamed.jpg"
              alt="person"
            />
            <p>
              Founded in 2014 by Georgina Atwell, Toppsta.com is an online
              review site for children&apos;s books with over 300,000 visitors a
              month. The site aims to help parents pick the right books for
              their kids from the thousands released every year, while giving
              children a chance to win a book through its free giveaways.
            </p>
            <p>
              Georgina leveraged decades of experience, and the relationships
              she built over that time, into her own successful business - but
              how exactly did she do it? We spoke to her about the unusual way
              she funded her business, the challenges of switching from a
              Facebook page to your own website, and the benefits of SEO versus
              social media.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Blog;
