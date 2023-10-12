import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleDetail } from "../components/ArticleDetail";
import { getArticleById } from "../helpers/getArticleById";

export const ArticleDetailPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArticle = async () => {
    try {
      const articleData = await getArticleById(id);
      setArticle(articleData);
    } catch (error) {
      console.error("Error fetching article:", error);
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <ArticleDetail {...article} />;
};
