//selecciono primero mi contenedor general
const container = document.querySelector(".container");
//selecciono al contenedor al que le voy a agregar las canciones solo lo buscare dentro de el contenedor y no dentro de el documento completo
const songsContainer = container.querySelector(".songs-container");
//seleccionare mis botones
const addButton = container.querySelector(".form__submit-btn_action_add");
const resetButton = container.querySelector(".form__submit-btn_action_reset");

function renderAdded() {
  const songs = songsContainer.querySelectorAll(".song");
  if (songs.length === 0) {
    resetButton.setAttribute("disabled", false);
    resetButton.classList.add("form__submit-btn_disabled");
  } else {
    resetButton.removeAttribute("disabled", true);
    resetButton.classList.remove("form__submit-btn_disabled");
  }
}

function addSong() {
  const artist = container.querySelector(".input__text_type_artist");
  const song = container.querySelector(".input__text_type_song");

  songsContainer.innerHTML += `<div class="song">
  <h4 class="song__artist">${artist.value}</h4>
  <p class="song__title">${song.value}</p>
  <button class="song__like"></button>
</div>`;
  artist.value = "";
  song.value = "";
}

addButton.addEventListener("click", addSong);
