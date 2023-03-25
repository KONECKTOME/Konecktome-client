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
  state = {
    article: {},
    paragraphs: [],
  };

  componentDidMount = async () => {
    this.fetchArticle();
    this.impression();
  };

  fetchArticle = async () => {
    const response = await fetch(
      `https://kt-affiliate-server-9yt3t.ondigitalocean.app/article/get-article`,
      {
        method: "POST",
        body: JSON.stringify({
          articleId: this.props.match.params.articleId,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    let article = await response.json();
    this.setState({
      article: article.message,
      paragraphs: article.message.paragraphs,
    });
  };

  impression = async () => {
    const response = await fetch(
      `https://kt-affiliate-server-9yt3t.ondigitalocean.app/impressions/new-impressions`,
      {
        method: "POST",
        body: JSON.stringify({
          page: "Article",
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    let landing = await response.json();
  };
  render() {
    return (
      <>
        <Navbar />
        <div className={`${styles.mainContainer}`}>
          <BreadCrumbs
            // parentPages={breadCrumbData}
            currentPage={this.state.article.title}
          />
          <h1 className={`${styles.title}`}>{this.state.article.title}</h1>
          <p className={`${styles.reference}`}>
            {this.state.article.description}
          </p>
          {/* <p className={`${styles.publishDate}`}>Published on 02 March 2023.</p> */}
          <div className={`${styles.blogContainer}`}>
            <img src={this.state.article.image} alt="person" />
            {this.state.paragraphs.map((para) => {
              return <p>{para}</p>;
            })}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Blog;
