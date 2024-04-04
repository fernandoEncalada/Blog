import React from "react";
import { MainArticle } from "../components/MainArticle";
import { NewContainer } from "../components/NewContainer";
import { ArticleContainer } from "../components/ArticleContainer";

export const ArticlePage = () => {
  return (
    <div className="lg:flex lg:flex-col lg:gap-6">
      {/* <MainArticle /> */}
      {/* <NewContainer /> */}
      <ArticleContainer/>
    </div>
  );
};
