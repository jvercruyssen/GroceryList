
var myList = [];
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
    if(myList.indexOf(input) == -1) {
      myList.push(input);
      console.log(myList);
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
      btnClose.addEventListener("click", removeParentListItem);
      btnClose.appendChild(iconClose);
      item.appendChild(btnClose);
      item.appendChild(itemName); //plain text element as innerHTML of li element item
      list.appendChild(item); //li element(item) inside the ul
      document.getElementById("newItem").value=""; //clear text
    }
}

function removeParentListItem(){
    var mom = this.parentNode;
    var grandma = mom.parentNode;
    grandma.removeChild(mom);
    var itemRemove = mom.firstChild.textContent;
    var itemIndex = myList[itemRemove];
    myList.splice(itemIndex,1);
    console.log(myList);
}

function saveList(){
    var savedList = [];
    savedList.push(myList.toString());
    setCookie("cookieList", savedList, 1);
    console.log(getCookie("cookieList"));
}

function clearList(){
    document.getElementById("listDisplay").value="";
    myList = [];
    console.log(myList);
}
