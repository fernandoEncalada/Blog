import publicationImage from '../assets/images/image-retro-pcs.jpg'

export const ArticleDetail = () => {
    return (
        <section>
            <h1 className="font-bold text-[42px]">The Power of Mentors</h1>
            <div className="pt-3">
                <p>Melchor Tatlonghari</p>
                <p className='text-[14px]'>
                    <span className='text-gray-600'>Published in </span>
                    My blog | Backend | 2023/07/18
                </p>
            </div>
            <div className='mt-5'>
                <div className='flex justify-center'>
                <img src={publicationImage} alt="Publication image" width='700' height='467' />
                </div>
                <p className='text-[20px] text-justify leading-[32px] mt-5'>
                    Don’t dismiss the idea of having a mentor until you’ve tried it. I used to be skeptical and couldn’t see the value of having one. I thought, “Why do I need a mentor when there are so many online resources available for learning?” It wasn’t until someone invested in my growth without expecting anything in return, simply because they saw potential in me, that I truly understood the value of having a mentor. I realized the true impact and benefits of having a mentor on my journey.

                    Be Wary of Blanket Advice
                    I was watching a YouTube video about finances, and their advice was to be careful about taking advice from videos. It was an oxymoron. They then started explaining why this was the case. The people talking in these videos come from their perspectives and journey. So, advice coming from someone living in New York in his mid-thirties may not be applicable for, say, a more elderly person living in Asia. The power of compounding holds for the most part, but if you’re already retired, it’s a different ball game. A single mother of two, for example, would have completely different priorities compared to someone who graduated from an Ivy League school and is just starting their career.

                    When advice is given, it’s usually a reflection of themselves. Something they wish they’d done sooner or something they feel someone with a similar background to them should do at their stage in life. Nobody gives advice that covers all types of perspectives; there’s just too many.
                </p>
            </div>
        </section>
    )
}
