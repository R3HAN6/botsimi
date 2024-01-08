function cari() {
  const inputText = document.querySelector("input").value;
  const ApiUrl = `https://rest-api.akuari.my.id/ai/gpt-v3?chat=${inputText}`;
  const resultP = document.querySelector("p");
  fetch(ApiUrl)
  .then(res => {
    if (!res.ok) {
      throw new Error(`Gagal Mengambil Respon Dari Api ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    resultP.textContent = `${data["respon"]} 
    
Terimakasih Telah Menggunakan BOT RehanDev!!!`;
  })
  .catch(error => {
    console.log(`Maaf Lagi Ada Kesalahan Sistem ${error}`);
  })
}

const url = "https://api.github.com/users/R3HAN6";

$.get(url, function (data, status) {
  $("#profile").attr("src", data.avatar_url);
});

$(document).ready(function(){
  $(".preloader").fadeOut();
})
