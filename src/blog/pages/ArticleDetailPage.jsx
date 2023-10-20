import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleDetail } from "../components/ArticleDetail";
import { getArticleById } from "../helpers/getArticleById";
import { useBlogStore } from "../../hooks/useBlogStore";

export const ArticleDetailPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { publications, getPublicationById } = useBlogStore();

  const fetchArticle = async () => {
    try {
      const articleData = getArticleById(publications, id);
      console.log(articleData);
      setArticle(articleData);
    } catch (error) {
      console.error("Error fetching article:", error);
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPublicationById(id);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <ArticleDetail {...article} />;
};
