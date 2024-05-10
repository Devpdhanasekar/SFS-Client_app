import React from "react";
import { Link } from "react-router-dom";
const Form = () => {
  return (
    <body className="bg-gray-200 ">
      <div class="flex justify-center items-center min-h-screen bg-gray-100 antialiased">
        <div class="container sm:mt-40 mt-24 my-auto max-w-md border-2 border-gray-200 rounded-[20px] p-3  bg-blue-400">
          <div class="text-center m-6"></div>
          <div className="m-6">
            <form className="mb-3 flex justify-center flex-col  ">
              <Link to='/demo' className="text-center border   text-sm  px-2 bg-gray-200 font-bold text-black  rounded-[30px] py-2">
            
              <button>
                Upload
              </button>
              </Link>
              <br />
              <Link to='/' className="text-center border   text-sm  px-2 bg-gray-200 font-bold text-black  rounded-[30px] py-2">
              <button>
                Pay Now
              </button>
              </Link>
            
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Form;
