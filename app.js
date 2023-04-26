let textArea = document.querySelector("textarea");
let result;

function addText(value){
    textArea.value += value;
}

function saveText(value){
    result = textArea.value;
    console.log(result);
}

function delText(value){
    textArea.value = "";
}

