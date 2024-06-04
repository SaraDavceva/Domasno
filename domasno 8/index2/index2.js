const fetchCharacter = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    const characterContainer = document.getElementById("character-container");

    data.results.forEach((character) => {
      const characterCard = document.createElement("div");
      characterCard.classList.add("character-card");
      const characterImage = document.createElement("img");
      characterImage.src = character.image;

      const characterName = document.createElement("p");
      characterName.textContent = character.name;

      const characterGender = document.createElement("p");
      characterGender.textContent = character.gender;

      const characterStatus = document.createElement("p");
      characterStatus.textContent = character.status;
      if (character.status === "Alive") {
        characterStatus.classList.add("status-alive");
      } else if (character.status === "Dead") {
        characterStatus.classList.add("status-dead");
      } else {
        characterStatus.classList.add("status-unknown");
      }

      const numOfEpisodes = document.createElement("p");
      numOfEpisodes.textContent = `Episodes ${character.episode.length}`;

      characterCard.appendChild(characterImage);
      characterCard.appendChild(characterName);
      characterCard.appendChild(characterGender);
      characterCard.appendChild(characterStatus);
      characterCard.appendChild(numOfEpisodes);

      characterContainer.appendChild(characterCard);

      // return characterCard;
    });
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

fetchCharacter();
