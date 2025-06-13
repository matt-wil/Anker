import { useState, useRef, useEffect } from "react";
import api from "../../../api/api" 

const AuthUploadWidget = ({ cloudinaryFolderPath }) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    
    useEffect(() => {
      cloudinaryRef.current = window.cloudinary;
      widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName: import.meta.env.VITE_CLOUDINARY_NAME,
        uploadPreset: 'anker_uploads',
        asset_folder: cloudinaryFolderPath
      }, function(error, result) {
        console.log(result)
      })
    }, []);

    return (
      <button 
        className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => widgetRef.current.open()}>
        Upload
      </button>
    )
  }

export default AuthUploadWidget