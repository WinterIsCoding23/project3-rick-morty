import { cardContainer } from "../../index.js";

export const info = {
  cardImage: "",
  cardTitle: "",
  cardStatus: "",
  cardType: "",
  cardOcurrences: "",
};

export function createCharacterCard(info) {
  const card = document.createElement("li");
  card.classList.add("card");
  card.innerHTML = `<div class="card__image-container">
    <img
      class="card__image"
      src="${info.cardImage}"
      alt="Rick Sanchez"
    />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title">${info.cardTitle}</h2>
    <dl class="card__info">
      <dt class="card__info-title">Status</dt>
      <dd class="card__info-description">${info.cardStatus}</dd>
      <dt class="card__info-title">Type</dt>
      <dd class="card__info-description">${info.cardType}</dd>
      <dt class="card__info-title">Occurrences</dt>
      <dd class="card__info-description">${info.cardOcurrences}</dd>
    </dl>
  </div>`;

  cardContainer.append(card);
}
