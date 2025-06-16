import { useState } from "react";


const CloudUploadForm = ({ setFilePath }) => {
  const [selectedValue, setSelectedValue] = useState(""); 

  const handleSelectionChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    const newPath =
      value === "WebsiteVeranstaltungen"
        ? "WebsiteVeranstaltungen"
        : `Artists/${value}`;

    setFilePath(newPath);
    console.log("Selected cloudinary upload path: ", newPath);
  };

  return (
    <section className="mb-8">
      <form className="w-auto p-10 m-10 bg-gray-800 rounded-xl shadow-lg">
        <select
          onChange={handleSelectionChange}
          value={selectedValue}
          className="bg-gray-700 p-3 rounded-lg text-white text-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-200 ease-in-out"
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
      </form>
    </section>
  );
};

export default CloudUploadForm;

