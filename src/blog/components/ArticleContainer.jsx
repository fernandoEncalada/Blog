import { Article } from "./Article";
import imgOne from "../../assets/images/image-retro-pcs.jpg";
import { useEffect } from "react";
import { useBlogStore } from "../../hooks/useBlogStore";

export const ArticleContainer = () => {
  const { publications, loadPublications } = useBlogStore();

  useEffect(() => {
    loadPublications();
  }, []);

  return (
    <section className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {publications.map((publication) => (
        <Article
          key={publication.id}
          img={imgOne}
          id={publication.id}
          title={publication.title}
          text={publication.content}
          date={publication.createdAt}
          category={publication?.category?.name}
        />
      ))}
    </section>
  );
};
