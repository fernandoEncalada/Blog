import { Article } from "./Article"
import imgOne from '../assets/images/image-retro-pcs.jpg'
import { useEffect, useState } from "react"
import { getPublications } from "../helpers/getPublications"

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
    <section className="mt-6 md:flex md:flex-wrap md:gap-10">
      {
        publications.map(publication => (
          <Article key={publication.id} img={imgOne} 
          num='01' title={publication.title} text={publication.content}/>
        ))
      }
    </section>
  )
}
