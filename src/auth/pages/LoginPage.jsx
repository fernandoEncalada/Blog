import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm"
import { startLoginWithUsernameAndPassword } from "../../store/auth/thunks";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useEffect } from "react";
import Swal from "sweetalert2";

const formData = {
  username: 'fertrix',
  password: '123456'
}

export const LoginPage = () => {

  const { startLogin, errorMessage } = useAuthStore();
  const { username, password, onInputChange } = useForm( formData );

  const onSubmit = ( event ) => {
    event.preventDefault();
    startLogin({ username, password });
  }

  useEffect(() => {
    if(errorMessage !== undefined) {
      Swal.fire('Authentication Error', errorMessage, 'error');
    }
  }, [errorMessage])
  
  return (
    <form onSubmit={ onSubmit } className="flex w-full mx-auto flex-col items-center justify-between bg-white p-6 rounded-lg shadow-md">
      <div>
        <div className="col-span-full">
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                  type="text"
                  name="username"
                  className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  value={ username }
                  onChange={ onInputChange }
              />
            </div>
          </div>
        </div>
        <div className="col-span-full mt-2">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                  type="password"
                  name="password"
                  className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  value={ password }
                  onChange={ onInputChange }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-full mt-2">
        <button
          type="submit" 
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
      </div>
      
    </form>
  )
}
