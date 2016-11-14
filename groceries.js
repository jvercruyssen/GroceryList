
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function addItem() {
    var input = document.getElementById("newItem").value;
    var list = document.getElementById("listDisplay");
    var item = document.createElement("li"); //creates new list item element
    var itemName = document.createTextNode(input); //creates plain text element from the value of the input var
    var btnClose = document.createElement("btn");
    btnClose.classList.add("btn");
    btnClose.classList.add("btn-danger");
    btnClose.classList.add("btn-xs");
    var iconClose = document.createElement("span");
    iconClose.classList.add("glyphicon");
    iconClose.classList.add("glyphicon-remove");
    btnClose.appendChild(iconClose);
    item.appendChild(btnClose);
    item.appendChild(itemName); //plain text element as innerHTML of li element item
    list.appendChild(item); //li element(item) inside the ul
    document.getElementById("newItem").value=""; //clear text
}
