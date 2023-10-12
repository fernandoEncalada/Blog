import publicationImage from '../../assets/images/image-retro-pcs.jpg'

export const ArticleDetail = ({ title, content, category, createdAt, picture = '' }) => {
    return (
        <section>
            <h1 className="font-bold text-[42px]">{ title }</h1>
            <div className="pt-3">
                <p>Fernando</p>
                <p className='text-[14px]'>
                    <span className='text-gray-600'>Published in </span>
                    My blog | { category.name } | { createdAt }
                </p>
            </div>
            <div className='mt-5'>
                <div className='flex justify-center'>
                <img src={publicationImage} alt="Publication image" width='700' height='467' />
                </div>
                <p className='text-[20px] text-justify leading-[32px] mt-5'> { content } </p>
            </div>
        </section>
    )
}
