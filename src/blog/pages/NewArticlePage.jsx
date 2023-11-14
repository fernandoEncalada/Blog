import { useRef, useState } from 'react';
import { useBlogStore } from '../../hooks/useBlogStore';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link, redirect, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const NewArticlePage = () => {

    const fileInputRef = useRef();

    const navigate = useNavigate();

    // const { article, messageSaved, isSaving } = useSelector( state => state.blog );

    const { startSavingPublication } = useBlogStore();

    const [ formValues, setFormValues ] = useState({
        title: '',
        content: '',
        comments: [],
        categoryId: 1,
        picture: ''
    });

    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onInputContent = (content) => {
        console.log(content);
        setFormValues({
            ...formValues,
            content: content
        })
    }

    const onSubmit = async( event ) => {
        event.preventDefault();
        try{
            await startSavingPublication( formValues )
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Publication created",
                showConfirmButton: true
            });
            navigate('/')
        } catch (error) {
            console.log(error);
        }


    }

    return (
        <>
            <form onSubmit={ onSubmit }>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Title
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="title"
                                            className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            value={ formValues.title }
                                            onChange={ onInputChange }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full">

                            <ReactQuill theme="snow" id="content"
                                        name="content" value={ formValues.content } onChange={ onInputContent } />
                            </div>

                            {/* <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                    Content
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="content"
                                        name="content"
                                        rows={20}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={ formValues.content }
                                        onChange={ onInputChange }
                                    />
                                </div>
                            </div> */}

                            <div className="col-span-full">
                                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Photo
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    {/* <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button> */}
                                    <input type="file" />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Link type="button" className="text-sm font-semibold leading-6 text-gray-900" to='/'>
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    )
}
