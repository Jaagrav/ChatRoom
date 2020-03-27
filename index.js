var x = "";
setInterval(() => {
    var api = "https://chatroom-5a319.firebaseio.com/Texts.json";
    $.getJSON(api, gotData);
}, 1000);
function sendMsg() {
    var firebaseref = firebase.database().ref();
    firebaseref.child("Texts").push(x + ": " + document.querySelector('.textMsg').value);
}
function gotData(data) {
    var msgField = document.querySelector(".messagingArea");
    msgField.innerHTML = "";
    for (var n in data) {
        var y = data[n].substring(0, x.length).toLowerCase();
        if (x == y)
            msgField.innerHTML += "<div class='userText'>" + (data[n].substring(x.length + 2)) + "</div><div class='separator'></div>";
        else
            msgField.innerHTML += "<div class='othersText'>" + (data[n]) + "</div><div class='separator'></div>";
    }
}
function addChild() {
    var firebaseref = firebase.database().ref();
    x = (document.querySelector(".userName").value.toLowerCase());
    setInterval(() => {
        document.querySelector(".cover").style.filter = "opacity(0)";
        setInterval(() => {
            document.querySelector(".cover").style.zIndex = "-3";
        }, 500);
    }, 500);
}