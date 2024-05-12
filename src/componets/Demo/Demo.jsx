import React, { useEffect, useState } from 'react';
import uploadImage from '../../assets/img_upload.jpg';
import axios from 'axios';

const Demo = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [keywords, setKeywords] = useState("");
  const [user, setUser] = useState(""); // If you have user information, you can set it here

  useEffect(()=>{
    setUser("65ba9f1bda636e275d270114")
  },[])
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleKeywordsChange = (event) => {
    setKeywords(event.target.value);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    if (!title) {
      alert("Please enter a title.");
      return;
    }

    const formData = new FormData();
    formData.append('resume', selectedFile);
    formData.append('title', title);
    formData.append('keywords', keywords);
    formData.append('user', user);

    axios.post('https://crafy-server.onrender.com/works/upload', formData)
      .then((response) => {
        console.log('File uploaded successfully:', response.data);
        // Optionally, you can do something after successful upload
      })
      .catch((error) => {
        console.error('Error uploading file:', error.message);
        // Handle error
      });
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
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={handleTitleChange}
          style={{ marginTop: "10px", width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
        <input
          type="text"
          placeholder="Enter keywords"
          value={keywords}
          onChange={handleKeywordsChange}
          style={{ marginTop: "10px", width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
        <button style={{ marginTop: "10px" }} onClick={handleUpload} className="text-center border text-sm px-2 bg-gray-200 font-bold text-black rounded-[30px] py-2">
          Upload
        </button>
      </div>
    </div>
  );
};

export default Demo;
