import uuid from "react-uuid";

export const getListCards = () => {
  if (!localStorage["@linkcards"]) {
    localStorage["@linkcards"] = JSON.stringify([]);
  }

  let linkcards = JSON.parse(localStorage["@linkcards"]);

  return linkcards;
};

export const getLinkCardById = (id) => {
  const linkcards = getListCards();
  const card = linkcards.find((card) => card.id === id);
  return card;
};

export const addLinkCard = (card) => {
  const linkcards = getListCards();

  linkcards.push({ ...card, id: uuid() });
  localStorage["@linkcards"] = JSON.stringify(linkcards);
};

export const editLinkCard = (id, newLinkCard) => {
  let linkCards = getListCards();
  const cardIndex = linkCards.findIndex((card) => card.id === id);
  if (cardIndex !== -1) {
    linkCards[cardIndex] = { ...newLinkCard, id };
    localStorage["@linkcards"] = JSON.stringify(linkCards);
  }
};

export const deleteLinkCard = (id) => {
  let linkCards = getListCards();
  const newLinkCards = linkCards.filter((card) => card.id !== id);
  localStorage["@linkcards"] = JSON.stringify(newLinkCards);
};
