// libraries
import { useState, useEffect } from "react";

// Components
import CardList from "../components/CardList";

const Dashboard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cards")) || [];
    setCards(storedData);
  }, []);

  return (
    <section className="font-poppins">
      <h1 className="text-center mt-6 text-3xl font-semibold text-sky-950">
        Manage LinkCard
      </h1>
      <CardList cards={cards} />
    </section>
  );
};

export default Dashboard;
