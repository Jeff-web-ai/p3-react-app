// libraries
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

// hooks
import { useForm } from "../hooks/useForm";

// services
import {
  addLinkCard,
  getLinkCardById,
  editLinkCard,
} from "../services/localstorage";

// components
import LinkCard from "./LinkCard";

// Create and Edit LinkCard
const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    inputValues,
    handleInputChange,
    resetForm,
    handleImageUpload,
    setForm,
  } = useForm({
    id: "",
    image: "",
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    title: "",
    department: "",
    company: "",
    headline: "",
    emailLink: "",
    emailLabel: "",
    phoneNumber: "",
    phoneLabel: "",
    linkedInLink: "",
    linkedInDisplayText: "",
    websiteLink: "",
    websiteDisplayText: "",
  });

  useEffect(() => {
    if (id) {
      const card = getLinkCardById(id);
      setForm(card);
    } else {
      resetForm();
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      editLinkCard(id, inputValues);
    } else {
      addLinkCard(inputValues);
    }
    resetForm();
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="grid">
        <div className="justify-self-center">
          <h1 className="text-center mt-6 text-3xl font-semibold ">
            {id ? "Edit" : "Create"} Link Card
          </h1>
        </div>
        <div className="justify-self-start ">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-600 text-sky-50 py-2 px-4 rounded-md mt-4 ml-40 "
          >
            Back
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        {inputValues && (
          <div className="w-full md:w-1/3 rounded-lg p-4 flex flex-col items-center">
            <LinkCard card={inputValues} key={inputValues.id} />
          </div>
        )}

        <div className="w-full md:w-2/3 rounded-lg p-6">
          <form
            onSubmit={handleSubmit}
            className="bg-sky-200 p-8 rounded-md shadow-md w-full max-w-4xl mx-auto"
          >
            <h3 className="text-sky-950 text-lg font-semibold mb-4">
              Personal
            </h3>
            <hr className=" mb-6" />

            <div className="grid grid-cols-4 gap-2 mb-6">
              <div>
                <label className="block text-sm font-medium text-sky-950 mb-1">
                  First Name
                </label>
                <input
                  className="border border-gray-300 p-2 rounded-md w-full"
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={inputValues.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sky-950 mb-1">
                  Middle Name
                </label>
                <input
                  className="border border-gray-300 p-2 rounded-md w-full"
                  type="text"
                  name="middleName"
                  id="middleName"
                  value={inputValues.middleName}
                  onChange={handleInputChange}
                  placeholder="Enter your Middle Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sky-950 mb-1">
                  Last Name
                </label>
                <input
                  className="border border-gray-300 p-2 rounded-md w-full"
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={inputValues.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your Last Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sky-950 mb-1">
                  Suffix Name
                </label>
                <input
                  className="border border-gray-300 p-2 rounded-md w-full"
                  type="text"
                  name="suffix"
                  id="suffix"
                  value={inputValues.suffix}
                  onChange={handleInputChange}
                  placeholder="Enter your Suffix"
                />
              </div>
            </div>

            <h3 className="text-sky-950 text-lg font-semibold mb-4">
              Affiliation
            </h3>
            <hr className="mb-6" />

            <div className="grid grid-cols-4 gap-2 mb-6">
              <div>
                <label className="block text-sm font-medium text-sky-950 mb-1">
                  Title
                </label>
                <input
                  className="border border-gray-300 p-2 rounded-md w-full"
                  type="text"
                  name="title"
                  id="title"
                  value={inputValues.title}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sky-950 mb-1">
                  Department
                </label>
                <input
                  className="border border-gray-300 p-2 rounded-md w-full"
                  type="text"
                  name="department"
                  id="department"
                  value={inputValues.department}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sky-950 mb-1">
                  Company
                </label>
                <input
                  className="border border-gray-300 p-2 rounded-md w-full"
                  type="text"
                  name="company"
                  id="company"
                  value={inputValues.company}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sky-950 mb-1">
                  Headline
                </label>
                <input
                  className="border border-gray-300 p-2 rounded-md w-full"
                  type="text"
                  name="headline"
                  id="headline"
                  value={inputValues.headline}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <h3 className="text-sky-950 text-lg font-semibold mb-4">Fields</h3>
            <hr className="mb-6" />

            <div className="grid grid-cols-4 gap-2 mb-6">
              <div>
                <label className="block text-sm font-medium text-sky-950 mb-1">
                  Phone
                </label>
                <input
                  className="border border-gray-300 p-2 rounded-md w-full"
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={inputValues.phoneNumber}
                  onChange={handleInputChange}
                />
                <select
                  className="mt-2 border border-gray-300 p-2 rounded-md w-full"
                  name="phoneLabel"
                  id="phoneLabel"
                  value={inputValues.phoneLabel}
                  onChange={handleInputChange}
                >
                  <option value=""></option>
                  <option value="personal">personal</option>
                  <option value="work">work</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-sky-950 mb-1">
                  Email
                </label>
                <input
                  className="border border-gray-300 p-2 rounded-md w-full"
                  type="email"
                  name="emailLink"
                  id="emailLink"
                  value={inputValues.emailLink}
                  onChange={handleInputChange}
                />
                <select
                  className="mt-2 border border-gray-300 p-2 rounded-md w-full"
                  name="emailLabel"
                  id="emailLabel"
                  value={inputValues.emailLabel}
                  onChange={handleInputChange}
                >
                  <option value=""></option>
                  <option value="personal">personal</option>
                  <option value="work">work</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-sky-950 mb-1">
                  LinkedIn
                </label>
                <input
                  className="border border-gray-300 p-2 rounded-md w-full"
                  type="url"
                  name="linkedInLink"
                  id="linkedInLink"
                  value={inputValues.linkedInLink}
                  onChange={handleInputChange}
                  placeholder="www.linkedin.com/in/"
                />
                <input
                  className="mt-2 border border-gray-300 p-2 rounded-md w-full"
                  type="text"
                  name="linkedInDisplayText"
                  id="linkedInDisplayText"
                  value={inputValues.linkedInDisplayText}
                  onChange={handleInputChange}
                  placeholder="Display text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sky-950 mb-1">
                  Website
                </label>
                <input
                  className="border border-gray-300 p-2 rounded-md w-full"
                  type="url"
                  name="websiteLink"
                  id="websiteLink"
                  value={inputValues.websiteLink}
                  onChange={handleInputChange}
                  placeholder="www.samplelink.com"
                />
                <input
                  className="mt-2 border border-gray-300 p-2 rounded-md w-full"
                  type="text"
                  name="websiteDisplayText"
                  id="websiteDisplayText"
                  value={inputValues.websiteDisplayText}
                  onChange={handleInputChange}
                  placeholder="Display text"
                />
              </div>
            </div>
            <h3 className="text-sky-950 text-lg font-semibold mb-4">Image</h3>
            <hr className="mb-6" />

            <div className="grid grid-cols-2 gap-2 mb-6">
              <div>
                <label className="block text-sm font-medium text-sky-950 mb-1">
                  Upload
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="image"
                  onChange={handleImageUpload}
                  className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-sky-950
              hover:file:bg-blue-100"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-600 text-sky-50 py-2 px-4 rounded-md mt-4"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
