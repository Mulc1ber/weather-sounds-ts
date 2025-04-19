import "./style.scss";

const IMAGES_PATH = "./images/";
const SOUNDS_PATH = "./sounds/";

const audio = new Audio();
audio.loop = true;

let currentSound: string | null = null;

const buttons = document.querySelectorAll<HTMLButtonElement>(".buttons button");
const volumeControl = document.querySelector<HTMLInputElement>("#volume");

document.body.style.backgroundImage = `url('${IMAGES_PATH}summer-bg.jpg')`;

buttons.forEach((button) => {
  const images = button.getAttribute("data-image");
  images && (button.style.backgroundImage = `url('${IMAGES_PATH}${images}')`);

  button.addEventListener("click", () => handleButtonClick(button));
});

volumeControl?.addEventListener("input", () =>
  handleVolumeChange(volumeControl)
);

const handleButtonClick = (button: HTMLButtonElement) => {
  const sound = button.getAttribute("data-sound");
  const image = button.getAttribute("data-image");

  if (currentSound === sound) {
    audio?.paused ? audio?.play() : audio?.pause();
  } else {
    playNewAudio(sound, image);
  }
};

const handleVolumeChange = (volumeControl: HTMLInputElement) => {
  audio && (audio.volume = +volumeControl.value);
};

const playNewAudio = (sound: string | null, image: string | null) => {
  if (!sound) return;

  audio?.pause();

  audio.src = `${SOUNDS_PATH}${sound}.mp3`;
  volumeControl && (audio.volume = +volumeControl.value);
  audio.play();
  currentSound = sound;

  image &&
    (document.body.style.backgroundImage = `url('${IMAGES_PATH}${image}')`);
};
