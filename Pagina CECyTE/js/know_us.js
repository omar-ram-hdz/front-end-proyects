const $buttons = document.querySelectorAll("button[data-audio]"),
  $description = document.getElementById("descriptionModal"),
  $dialogWindow = document.getElementById("dialogMessage"),
  $closeM = document.getElementById("closeModal");

const objAud = {
  vision: new Audio("../assets/vision.mp3"),
  mision: new Audio("../assets/mision.mp3"),
  historia: new Audio("../assets/historia.mp3"),
};
let aux = "";
const actionMedia = (status, audio, description) => {
  console.log(aux);
  console.log(status);
  console.log(audio);
  console.log(description);
  console.log("\n\n");
  if (description == status) return false;
  if (aux !== "") {
    if (!(aux == audio)) return false;
  }
  status == "stop"
    ? (() => {
        objAud[`${audio}`].pause();
        objAud[`${audio}`].currentTime = 0;
        if (aux == audio) {
          aux = "";
          desc = "";
        }
      })()
    : (() => {
        objAud[`${audio}`].play();
        desc = status;
        aux = audio;
      })();
  return true;
};

function showM(txt) {
  $description.innerText = txt;
  $dialogWindow.showModal();
  $dialogWindow.classList.add("showDialog");
}
let desc = "",
  bol = false;
$buttons.forEach((el) => {
  el.addEventListener("click", () => {
    if (
      actionMedia(
        el.getAttribute("data-status"),
        el.getAttribute("data-audio"),
        desc
      )
    ) {
    } else {
      showM("Ya se esta reproduciendo un audio");
    }
  });
});

$closeM.addEventListener("click", (e) => {
  $description.innerText = "";
  $dialogWindow.classList.remove("showDialog");
  $dialogWindow.close();
});
