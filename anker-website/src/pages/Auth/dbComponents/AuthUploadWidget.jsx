import { useState, useRef, useEffect } from "react";
import { uploadCloudinaryImageUrlToDatabase } from "../../../api/auth/cloudinary";

const AuthUploadWidget = ({ cloudinaryFolderPath, description, category }) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    const extractArtistName = (folderPath) => {
      const parts = folderPath.split("/");
      return parts[parts.length - 1];
    }

    
    useEffect(() => {
      cloudinaryRef.current = window.cloudinary;
      widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName: import.meta.env.VITE_CLOUDINARY_NAME,
        uploadPreset: 'anker_uploads',
        asset_folder: cloudinaryFolderPath,
      }, async function(error, result) {
        if (!error && result.event === "success") {
          const uploadedUrl = result.info.secure_url;
          const artistName = extractArtistName(cloudinaryFolderPath);
          
          // DB model for Aktionen not yet implemented
          if (artistName === "WebsiteVeranstaltungen") {
            console.log("Skipping DB upload")
            return
          }

          try {
            await uploadCloudinaryImageUrlToDatabase({ 
              imgUrl: uploadedUrl,
              artistName,
              description,
              category
             });
          } catch (error) {
            console.error(error)
          }
        }
      })
      return () => {
        if (widgetRef.current) {
          widgetRef.current.destroy();
        }
      }
    }, [cloudinaryFolderPath, description, category]);

    return (
      <button 
        className="text-3xl cursor-pointer bg-gray-800 hover:bg-gray-700 text-white font-bold px-8 py-4 rounded"
        onClick={() => widgetRef.current.open()}>
        Upload
      </button>
    )
  }

export default AuthUploadWidget