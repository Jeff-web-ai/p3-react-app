import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [inputValues, setInputValues] = useState(initialState);

  const resetForm = () => {
    setInputValues(initialState);
  };

  const setForm = (newValues) => {
    setInputValues(newValues);
  };

  const handleInputChange = ({ target }) => {
    setInputValues({
      ...inputValues,
      [target.name]: target.value,
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // cloudinary configuration
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "link_card");
    data.append("cloud_name", "dqrwcxrcd");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqrwcxrcd/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const uploadedImage = await res.json();

    const imageUrl = uploadedImage.url;
    setInputValues({ ...inputValues, image: imageUrl });
  };

  return {
    inputValues,
    handleInputChange,
    handleImageUpload,
    resetForm,
    setForm,
  };
};
