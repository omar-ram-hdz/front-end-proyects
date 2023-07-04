const $sendBtn = document.getElementById("sendMsj"),
  $inputMsj = document.getElementById("inMsj"),
  $description = document.getElementById("descriptionModal"),
  $dialogWindow = document.getElementById("dialogMessage"),
  $closeM = document.getElementById("closeModal");
$sendBtn.addEventListener("click", (e) => {
  if (!$inputMsj.value) {
    $description.innerText = "No has ingresado un mensaje";
    $dialogWindow.showModal();
    $dialogWindow.classList.add("showDialog");
  } else {
    $dialogWindow.classList.remove("showDialog");
    open(
      `https://wa.me/+522461584312?text=${$inputMsj.value
        .split(" ")
        .join("%20")}`
    );
    $inputMsj.value = "";
  }
});

$closeM.addEventListener("click", (e) => {
  $description.innerText = "";
  $dialogWindow.classList.remove("showDialog");
  $dialogWindow.close();
});
