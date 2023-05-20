function showTime() {
    // Kullanıcıdan ismi alma
    var name = prompt("Adınızı girin:");
    if (name != null) {
      document.getElementById("myName").innerHTML = name;
    }
  
    // Tarih ve saat bilgisi alma
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
  
    // Gün adı listesi
    var days = [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi"
    ];
    var day = days[date.getDay()];
  
    // Zamanı güncelleme
    document.getElementById("myClock").innerHTML =
      hour + ":" + addZero(min) + ":" + addZero(sec) + " " + day;
  
    // Her saniye güncelleme
    setTimeout(showTime, 1000);
  }
  
  // Dakika ve saniye değerleri için sıfır ekleme
  function addZero(num) {
    return (num < 10 ? "0" : "") + num;
  }
  