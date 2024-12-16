// libraries
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

// services
import {
  deleteLinkCard,
  getLinkCardById,
  getListCards,
} from "../services/localstorage";

// components
import LinkCard from "../components/LinkCard";

const View = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [card, setCard] = useState([]);

  useEffect(() => {
    if (id) {
      const card = getLinkCardById(id);
      setCard(card);
    }
  }, [id]);

  if (!card) {
    return <p>Loading...</p>;
  }

  const handleRemove = () => {
    deleteLinkCard(id);
    setCard(getListCards);
    navigate("/dashboard");
  };

  const handleCapture = () => {
    const element = document.getElementById("divToTakeScreenShot");

    if (!element) {
      return;
    }
    html2canvas(element, {
      allowTaint: true,
      useCORS: true,
    })
      .then((canvas) => {
        let image = canvas.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.href = image;
        link.download = "Capture.jpeg";
        link.click();
      })
      .catch((err) => {
        alert("we cannot take the screen of ", err);
      });
  };

  return (
    <div className=" p-8  w-full  mx-auto font-poppins">
      <LinkCard card={card} key={card.id} handleCapture={handleCapture} />

      <div className="grid content-center justify-center mt-3 ">
        <div className="grid grid-cols-2 gap-3 ">
          <button
            onClick={() => navigate(`/linkcard/${id}`)}
            className="bg-blue-600 text-sky-50 py-2 px-4 rounded-md max-w-40"
          >
            Generate QR Code
          </button>
          <button
            onClick={handleCapture}
            className="bg-blue-600 text-sky-50 py-2 px-4 rounded-md  max-w-40"
          >
            Share via Image
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <button
            onClick={() => navigate(`/edit/${id}`)}
            className="bg-blue-600 text-sky-50 py-2 px-4 rounded-md  max-w-40"
          >
            Edit
          </button>
          <button
            onClick={handleRemove}
            className="bg-rose-600 text-sky-50 py-2 px-4 rounded-md  max-w-40"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
