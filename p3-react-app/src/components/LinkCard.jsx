// Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const LinkCard = ({ card }) => {
  const {
    id,
    image,
    firstName,
    middleName,
    lastName,
    suffix,
    title,
    department,
    company,
    headline,
    emailLink,
    emailLabel,
    phoneNumber,
    phoneLabel,
    linkedInLink,
    linkedInDisplayText,
    websiteLink,
    websiteDisplayText,
  } = card;

  return (
    <div
      className="max-w-sm mx-auto bg-sky-200 rounded-lg shadow-lg overflow-hidden border border-gray-200"
      key={id}
      id="divToTakeScreenShot"
    >
      {image && (
        <img src={image} alt="Profile" className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h5 className="text-2xl font-bold  text-sky-950">
          {firstName} {middleName} {lastName} {suffix}
        </h5>
        <p className=" text-sky-950">{title}</p>
        <p className=" text-blue-600">
          <strong>{department}</strong>
        </p>
        <p className=" text-sky-950">
          <em>{company}</em>
        </p>
        <p className=" text-gray-600">{headline}</p>
        <div className="mt-4">
          <ul className="space-y-1">
            {phoneNumber && (
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhone} className="text-gray-600" />
                <p className=" text-sky-950">{phoneNumber}</p>
                {phoneLabel && (
                  <span className=" text-gray-600">({phoneLabel})</span>
                )}
              </li>
            )}

            {emailLink && (
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-600" />
                <p className=" text-sky-950">{emailLink}</p>
                {emailLabel && (
                  <span className=" text-gray-600">({emailLabel})</span>
                )}
              </li>
            )}

            {linkedInLink && (
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faLinkedin} className="text-gray-600" />
                <a
                  href={linkedInLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className=" text-sky-950">{linkedInDisplayText}</p>
                </a>
              </li>
            )}
            {websiteLink && (
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faGlobe} className="text-gray-600" />
                <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                  <p className=" text-sky-950">{websiteDisplayText}</p>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
