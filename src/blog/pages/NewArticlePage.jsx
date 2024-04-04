import { useEffect, useRef, useState } from "react";
import { useBlogStore } from "../../hooks/useBlogStore";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link, redirect, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getCategories } from "../../helpers/getCategories";

export const NewArticlePage = () => {
  const [showModal, setShowModal] = useState(false);

  const fileInputRef = useRef();

  const navigate = useNavigate();

  // const { article, messageSaved, isSaving } = useSelector( state => state.blog );

  const { startSavingPublication, startSavingCategory } = useBlogStore();

  const [categories, setCategories] = useState([]);

  const getInitialCategories = async () => {
    const newCategories = await getCategories();
    setCategories(newCategories);
  };
  useEffect(() => {
    getInitialCategories();
  }, []);

  const [categoryName, setCategoryName] = useState("");

  const [formValues, setFormValues] = useState({
    title: "",
    content: "",
    comments: [],
    categoryId: 1,
    picture: "",
  });

  const onInputChange = ({ target }) => {
    console.log(target);
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onInputContent = (content) => {
    setFormValues({
      ...formValues,
      content: content,
    });
  };
  const onInputCategory = (id) => {
    console.log(id);
    setFormValues({
      ...formValues,
      categoryId: id,
    });
  };

  const onCategoryInputChange = ({ target }) => {
    setCategoryName(target.value);
  };

  const createCategory = async () => {
    try {
      let category = {
        id: null,
        name: categoryName,
      };
      await startSavingCategory(category);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Category created",
        showConfirmButton: true,
      });
      setShowModal(false);
      getInitialCategories();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await startSavingPublication(formValues);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Publication created",
        showConfirmButton: true,
      });
      // navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="title"
                      className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      value={formValues.title}
                      onChange={onInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <ReactQuill
                  theme="snow"
                  id="content"
                  name="content"
                  value={formValues.content}
                  onChange={onInputContent}
                />
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <select
                    id="categoryId"
                    name="categoryId"
                    value={formValues.categoryId}
                    onChange={onInputChange}
                  >
                    {categories.map((category) => (
                      <option
                        className="mb-8 sm:mb-0"
                        key={category.id}
                        value={category.id}
                      >
                        {category.id} - {category.name}
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    className="rounded-md bg-green-700 p-2 text-white"
                    onClick={() => setShowModal(true)}
                  >
                    Create
                  </button>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <input type="file" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            to="/"
          >
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

      {/* Modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Create New Category
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-3 flex-auto">
                  <div className="col-span-full">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          name="categoryName"
                          className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          value={categoryName}
                          onChange={onCategoryInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    // onClick={() => setShowModal(false)}
                    onClick={createCategory}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
