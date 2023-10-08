let formm = document.getElementById("input-form");
let output = document.querySelector(".output-text");
let outputHead = document.querySelector(".output-heading");
function countChars(obj) {
  document.getElementById("charNum").innerHTML =
    obj.value.length + " Characters..";
  if (obj.value.length === 1000) {
    document.getElementById("charNum").style.color = "red";
  } else {
    document.getElementById("charNum").style.color = "#005523";
  }
  if (obj.value.length != 0) {
    outputHead.innerText = "";
    output.innerText = "";
    output.style.fontSize = "17px";
    outputHead.style.fontSize = "20px";
    output.style.textAlign = "justify";
    output.style.marginTop = "0px";
  }
}
formm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = e.submitter.id;
  let formData = new FormData(formm);
  const plainFormData = Object.fromEntries(formData.entries());
  const message = plainFormData.inputMessage;

  if (message === undefined || message.length === 0) {
    outputHead.innerText = "🙁🙁PS...";
    output.innerText = "Please enter a message 👾 👾  ";
    output.style.fontSize = "25px";
    output.style.textAlign = "center";
    output.style.marginTop = "100px";
    outputHead.style.fontSize = "28px";
  } else {
    try {
      const data = await axios.post("/api/v1", plainFormData);
      revoke();
      const json = data.data;
      success(json, id);
    } catch (error) {
      revoke();
      eror();
    }
  }

  function success(json, id) {
    const msg = json.msg;
    // console.log(id);
    output.innerText = msg;
    if (id === "e") {
      outputHead.innerText = "Encrypted Message";
    } else if (id === "d") {
      outputHead.innerText = "Decrypted Message";
    }
  }
  function revoke() {
    outputHead.innerText = "";
    output.innerText = "";
    output.style.fontSize = "17px";
    outputHead.style.fontSize = "20px";
    output.style.textAlign = "justify";
    output.style.marginTop = "0px";
  }
  function eror() {
    outputHead.innerText = "😓😓PS...";
    output.innerText =
      "Sorry some Error was caused , Please try again later 👋 👋 ";
    output.style.fontSize = "28px";
    output.style.textAlign = "center";
    output.style.marginTop = "100px";
    outputHead.style.fontSize = "30px";
  }
});

function copy() {
  const text = output.innerText;
  navigator.clipboard.writeText(text);
  alert("Text was copied");
}
