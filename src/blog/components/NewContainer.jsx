import React, { useEffect, useState } from 'react'
import { NewArticle } from './NewArticle'
import { getPublications } from '../../helpers/getPublications'

export const NewContainer = () => {
  const [publications, setPublications ] = useState([])

  const getInitialPublications = async() => {
    const newPublications = await getPublications(3)
    setPublications(newPublications.content)
  }

  useEffect(() => {
    getInitialPublications();
  }, [])

  return (
    <aside className='bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px]'>
      <h1 className='text-SoftOrange text-4xl font-bold'>New</h1>
      {
        publications.map(publication => (
          <NewArticle key={publication.id}
          title={publication.title} 
          text={publication.content}
        />
        ))
      }
    </aside>
  )
}
