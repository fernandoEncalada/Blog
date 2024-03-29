import { Link } from "react-router-dom";
import DOMPurify from 'dompurify';
import { useAuthStore } from "../../hooks/useAuthStore";

export const Article = ({ id, img, title, text, date, category }) => {
  const { status } = useAuthStore();

  const sanitizedHTML = { __html: DOMPurify.sanitize(text) };
  return (
    <article className="flex w-full mx-auto flex-col items-center justify-between bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-around items-center  gap-x-4 text-xs">
        <time dateTime={date} className="text-gray-500">
          {date}
        </time>
        <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
          {category}
        </a>
      </div>
      <div className="">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          {/* 
                    {status === 'authenticated' && (
            <Link className='hover:text-SoftRed sm:text-4' to="/create">
              Create
            </Link>
          )}
          */}
          { status === 'authenticated' ? 
                    <Link to={`/edit/${id}`}>
                    {title}
                  </Link>
                  :
                  <Link to={`${id}`}>
                  {title}
                </Link>
        }
          {/* <Link to={`${id}`}>
            {title}
          </Link> */}
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600" dangerouslySetInnerHTML={sanitizedHTML} />
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img src={img} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            Owner
          </p>
        </div>
      </div>
    </article>
  );
};
