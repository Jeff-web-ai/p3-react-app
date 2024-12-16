//libraries
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// services
import { getListCards } from "../services/localstorage";

// components
import LinkCard from "./LinkCard";

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(getListCards());
  }, []);
  return (
    <div className="flex justify-center mt-8">
      {cards.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <Link to={`/view/${card.id}`}>
              <LinkCard card={card} key={card.id} />
            </Link>
          ))}
        </div>
      ) : (
        <h3 className="mt-6 text-3xl font-normal text-sky-950">
          No LinkCards found{" "}
        </h3>
      )}
    </div>
  );
};

export default CardList;
