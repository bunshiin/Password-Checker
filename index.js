var passBox = document.getElementById("password");
var passText = document.getElementById("message");
var passStr = document.getElementById("str");
var passShow = document.getElementById("passShow");

//passShow idsine sahip butona tıklandığı zaman şifrenin gizlenip gösterilmesini sağlıyor
passShow.addEventListener('click', () => {
    if (passBox.type === "password") {
        passBox.type = "text"
    } else {
        passBox.type = "password"


    }
})

passBox.addEventListener("input", () => {
    //Şifrenin değeri 1'den büyükse "Password is" yazısının ekranda görünmesini sağladık.
    if (passBox.value.length > 0) {
        passText.style.display = "block";
    } else {
        //Veri girişi yoksa ekranda "Password is" yazısını gizle.
        //Şifrenin uzunluğu 1 den küçükse rengini #ccc yaptık.
        passText.style.display = "none";
        passBox.style.borderColor = "#ccc";
    }

    //Şifrenin uzunluğu 1 ile 4 arasında ise
    //Yazı,Input borderini kırmızı yaptı ayrıca "Password is Weak" yazısını eklemiş olduk.
    if (passBox.value.length >= 1 && passBox.value.length <= 4) {
        passStr.innerHTML = "Weak";
        passBox.style.borderColor = "red";
        passStr.style.color = "red";
    }
    //Şifrenin uzunluğu 4 ile 8 arasında ise
    //Yazı,Input borderini sarı yaptı ayrıca "Password is Medium" yazısını eklemiş olduk.
    if (passBox.value.length > 4 && passBox.value.length < 8) {
        passStr.innerHTML = "Medium";
        passBox.style.borderColor = "gold";
        passStr.style.color = "gold";
    }
    //Şifrenin uzunluğu 8'e eşit yada büyükse
    //Yazı,Input borderini yeşil yaptı ayrıca "Password is Strong" yazısını eklemiş olduk.
    if (passBox.value.length >= 8) {
        passStr.innerHTML = "Strong";
        passBox.style.borderColor = "lime";
        passStr.style.color = "lime";
    }



});