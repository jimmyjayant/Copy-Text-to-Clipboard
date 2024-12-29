// Write Text to Clipboard 
function copytext()
{
    let copytext = document.getElementById("text").value;
    /*
    if(copytext)
    {
        console.log(copytext);
    }
    */
    if(navigator.clipboard)
    {
        navigator.clipboard.writeText(copytext)
        .then(() => { alert("Copied to Clipboard!")});
        //console.log("success");
    }
}

// Read Text from Clipboard 
function pastetext()
{
    let pastedText = document.getElementById("pastetextfromclipboard");
    if(navigator.clipboard)
    {
        navigator.clipboard.readText()
        .then(copiedtext => {
            pastedText.value = copiedtext;
        });
    }
}

// Reset the value of the first textarea 
function resetfirsttext()
{
    let copytext1 = document.getElementById("text");
    copytext1.value = "";
}

// Reset the value of the second textarea 
function resetsecondtext()
{
    let pastedText = document.getElementById("pastetextfromclipboard");
    pastedText.value = "";
}
