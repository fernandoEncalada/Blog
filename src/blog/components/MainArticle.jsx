import imageMobile from '../../assets/images/image-web-3-mobile.jpg'
import imageDesktop from '../../assets/images/image-web-3-desktop.jpg'
import { useEffect, useState } from 'react'
import { getPublications } from '../../helpers/getPublications'

export const MainArticle = () => {
  const [publications, setPublications ] = useState([])

  const getInitialPublications = async() => {
    const newPublications = await getPublications(1)
    setPublications(newPublications.content)
  }

  useEffect(() => {
    getInitialPublications();
  }, []);

  return (
    <section className='mb-10'>
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(min-width: 641px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="Main article image" />
      </picture>
      {
        publications.map(publication => (
          <div className='sm:flex' key={publication.id}>
          <div className='flex-1 py-6'>
            <h2 className='text-[40px] font-bold sm:text-[58px] leading-none'>{publication.title}</h2>
          </div>
          <div className='flex-1 pt-9'>
            <p className='text-[13px] mb-10 sm:text-[15px]'>
              {publication.content}
            </p>
            <button className='bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue'>
              Read More
            </button>
          </div>
        </div>
        ))
      }



    </section>
  )
}
