const textarea = document.getElementById("textarea");
const Clear = document.getElementById("clear");
const Copy = document.getElementById("copy");
const Typed_char  = document.getElementById("Typed_char");
const Remaining  = document.getElementById("Remaining");
const Capitalize  = document.getElementById("capitalize");
const Uppercase  = document.getElementById("uppercase");

textarea.addEventListener("keyup",function(){
    const typed_word = textarea.value.length;
    Typed_char.innerText = `Typed Character : ${typed_word}`;

    const remain_word = textarea.getAttribute("maxlength");
    Remaining.innerText = `Remaining : ${remain_word - typed_word}`;
});

Capitalize.addEventListener("click",function(){
    cap(textarea.value);
});

function cap(str){
let str1 = str.split(" ");
let str3;
let newstrset = [];

for(let i = 0; i<str1.length; i++){
  let str2 = str1[i].slice(0,1).toUpperCase() + str1[i].slice(1).toLowerCase();
    newstrset[i] = str2;
}
str3 = newstrset.join(" ");
textarea.value = str3;
}

Uppercase.addEventListener("click",function(){
    Upper(textarea.value);
});

function Upper(str){
let done = str.toUpperCase();
textarea.value = done;
}

Clear.addEventListener("click",function(){
    textarea.value = "";
});

Copy.addEventListener("click",function(){
textarea.select();
// textarea.setSelectionRange(0, 99999);
navigator.clipboard.writeText(textarea.value);
alert("Copied the text: " + textarea.value);
});