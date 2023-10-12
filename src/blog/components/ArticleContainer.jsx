import { Article } from "./Article"
import imgOne from '../../assets/images/image-retro-pcs.jpg'
import { useEffect, useState } from "react"
import { getPublications } from "../../helpers/getPublications"

export const ArticleContainer = () => {

  const [publications, setPublications ] = useState([]);

  const getInitialPublications = async() => {
    const newPublications = await getPublications(10);
    setPublications(newPublications.content);
  }

  useEffect(() => {
    getInitialPublications();
  }, [])

  return (
    <section className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {
        publications.map(publication => (
          <Article key={publication.id} img={imgOne} 
          id={ publication.id } title={publication.title} text={publication.content} date={ publication.createdAt } category={ publication.category.name } />
        ))
      }
    </section>
  )
}
