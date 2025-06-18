import { useState } from "react";


const CloudUploadForm = ({ setFilePath, setImageDescriptionProp, setCategoryProp, imageDescription, category }) => {
  const [selectedValue, setSelectedValue] = useState(""); 


  const generateDescription = (artist, selectedCategory) => {
    if (artist === "WebsiteVeranstaltungen") {
      return "Image of a Tattoo and Piercing Event Hosted by Anker Tattoo and Piercing Freiburg im Breisgau";
    }
    if (artist && selectedCategory) {
      return `Image of a ${selectedCategory} done by Professional ${selectedCategory} Artist ${artist} at Anker Tattoo and Piercing Freiburg im Breisgau`;
    }
    if (artist) {
      return `Image of a Tattoo or Piercing Professional Artist ${artist} at Anker Tattoo and Piercing Freiburg im Breisgau`;
    }
    return ""
  }


  const handleSelectionChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    const newPath =
      value === "WebsiteVeranstaltungen"
        ? "WebsiteVeranstaltungen"
        : `Artists/${value}`;

    setFilePath(newPath);
    console.log("Selected cloudinary upload path: ", newPath);

    setImageDescriptionProp(generateDescription(value, category));
    if (value === "WebsiteVeranstaltungen") {
      setCategoryProp("");
    }
  };


  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategoryProp(newCategory);
    setImageDescriptionProp(generateDescription(selectedValue, newCategory));
  }



  return (
    <section className="mb-8">
      <form className=" flex flex-col justify-center items-centerw-auto p-10 m-10 bg-gray-800 rounded-xl shadow-lg gap-5">
        <select
          onChange={handleSelectionChange}
          value={selectedValue}
          className="bg-gray-700 p-3 rounded-lg text-white text-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-200 ease-in-out cursor-pointer"
        >
          <option disabled value="">
            Select an Option
          </option>
          <option value="Sabrina">Sabrina</option>
          <option value="Fatou">Fatou</option>
          <option value="Laura">Laura</option>
          <option value="Karo">Karo</option>
          <option value="WebsiteVeranstaltungen">Aktion</option>
        </select>

        {selectedValue !== "WebsiteVeranstaltungen" && selectedValue !== "" &&
        <select
          value={category}
          onChange={handleCategoryChange}
          className="bg-gray-700 p-3 rounded-lg text-white text-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-200 ease-in-out cursor-pointer"
        >
          <option disabled value="">Select a Category</option>
          <option value="Tattoo">Tattoo</option>
          <option value="Piercing">Piercing</option>
        </select>
        }
        <textarea 
          type="text" 
          placeholder="Beschreibung" 
          value={imageDescription} 
          onChange={(e) => setImageDescriptionProp(e.target.value)} 
          className="w-full p-2 mb-4 bg-gray-700 rounded text-white text-lg"/>
      </form>
    </section>
  );
};

export default CloudUploadForm;

