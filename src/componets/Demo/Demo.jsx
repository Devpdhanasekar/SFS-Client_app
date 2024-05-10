import React, { useState } from 'react';
import { Link } from "react-router-dom";
import uploadImage from '../../assets/img_upload.jpg';

const Demo = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className='h-screen flex justify-center items-center' style={{ backgroundColor: '#f4f8fe' }}>
      <div className="bg-white p-5 rounded-lg shadow-lg w-full h-full sm:w-[50%] sm:h-[50%] flex flex-col justify-center items-center">
        <h5 style={{ fontWeight: "bold" }}>Upload your file</h5>
        <div className="text-sm leading-6 text-gray-600 mt-2 flex justify-center rounded-lg border border-dashed border-indigo-600 px-6 py-10">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-mdfocus-within:outline-none hover:text-indigo-500"
          >
            <span>Drag And Drop Your File Here</span>
            <img src={uploadImage} alt="" style={{ textAlign: "center", marginLeft: "30px" }} className='w-[100px] h-[100px]' />
            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
          </label>
        </div>
        {selectedFile && (
          <p style={{ marginTop: "10px" }}>Selected file: {selectedFile.name}</p>
        )}
        <Link style={{ marginTop: "10px" }} to='/demo' className="text-center border text-sm px-2 bg-gray-200 font-bold text-black rounded-[30px] py-2">
          <button>Upload</button>
        </Link>
      </div>
    </div>
  );
};

export default Demo;