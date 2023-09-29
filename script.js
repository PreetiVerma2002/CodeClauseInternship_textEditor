//function to save the text file
function saveText() {
    const textAreaContent = document.getElementById("textArea").value;
    const blob = new Blob([textAreaContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement("a");
    a.href = url;
    a.download = "text.txt";
    a.click();
  
    URL.revokeObjectURL(url);
  }
  
  //function to open the file
  function openFile() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "text/plain";
    input.onchange = function (e) {
        const file = e.target.files[0];
        const reader = new FileReader();
  
        reader.onload = function () {
            const openFile = document.getElementById("textArea");
            openFile.value = reader.result;
        };
  
        reader.readAsText(file);
    };
  
    input.click();
  }
  
  //function to make the text area clear
  function clearText() {
    document.getElementById("textArea").value = "";
  }
  
  //function to make the text bold
  function boldText(){
  if(document.getElementById("textArea").style.fontWeight != "bold"){
    document.getElementById("textArea").style.fontWeight="bold";
    
  }
  else{
    document.getElementById("textArea").style.fontWeight="normal";
    
  }
  }

  //function to make the text italic
  function italicText(){
  if(document.getElementById("textArea").style.fontStyle != "italic"){
    document.getElementById("textArea").style.fontStyle="italic";
    
  }
  else{
    document.getElementById("textArea").style.fontStyle="normal";
    
  }
  }

  //function to make the text underlined
  function underlineText(){
  if(document.getElementById("textArea").style.textDecoration != "underline"){
    document.getElementById("textArea").style.textDecoration="underline";
    
  }
  else{
    document.getElementById("textArea").style.textDecoration="none";
    
  }
  }
  
  //function to make the text alignment left
  function leftAlign() { 
  document.getElementById("textArea").style.textAlign = "left";
  }
  
  //function to make the text alignment center
  function centerAlign() {
  document.getElementById("textArea").style.textAlign = "center";
  }
  
  //function to make the text alignment right
  function rightAlign() {
  document.getElementById("textArea").style.textAlign = "right";
  }
  
  //function to copy the text
  function copyText() {
  var copyText = document.getElementById("textArea");
  
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  
  navigator.clipboard.writeText(copyText.value);
  
  }

  //function to cut the text
  cutText=(e)=>{
  document.execCommand('cut');
  }
  
  //function to paste the text
  function pasteText() {
    var pasteText = document.getElementById("textArea");
  
    navigator.clipboard.readText().then(function(clipboardText) {

      pasteText.value += clipboardText;
    });
  }