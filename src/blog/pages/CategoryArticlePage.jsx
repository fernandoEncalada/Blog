import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBlogStore } from "../../hooks/useBlogStore";
import { Article } from "../components/Article";
import imgOne from "../../assets/images/image-retro-pcs.jpg";

export const CategoryArticlePage = () => {

  const { id } = useParams();

  const { publications, loadPublicationsByCategoryId } = useBlogStore();

  useEffect(() => {
    loadPublicationsByCategoryId(id);
  }, [id])

  return (
    <section className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {
        publications.map(publication => (
          <Article key={publication.id} img={imgOne}
          id={ publication.id } title={publication.title} text={publication.content} date={ publication.createdAt } category={ publication?.category?.name } />
        ))
      }
    </section>
  );
};
