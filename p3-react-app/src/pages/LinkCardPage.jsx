// libraries
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";

// services
import { getLinkCardById } from "../services/localstorage";

// components
import LinkCard from "../components/LinkCard";

const LinkCardPage = () => {
  const { id } = useParams();

  const [card, setCard] = useState([]);

  useEffect(() => {
    if (id) {
      const card = getLinkCardById(id);
      setCard(card);
    }
  }, [id]);

  return (
    <div className=" p-8  w-full  mx-auto font-poppins">
      <LinkCard card={card} key={card.id} />
      <div className="flex justify-center mt-4">
        <QRCode value={window.location.href} size={150} />
      </div>
    </div>
  );
};

export default LinkCardPage;
