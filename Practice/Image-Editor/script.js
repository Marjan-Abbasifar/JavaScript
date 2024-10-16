const filterA = document.getElementById("blur");
const filterB = document.getElementById("contrast");
const filterC = document.getElementById("hue-rotate");
const filterD = document.getElementById("sepia");


const noFlipBtn = document.getElementById("no-flip");
const FlipXBtn = document.getElementById("flip-x");
const noFlipYBtn = document.getElementById("flip-y");

const uploadButton = document.getElementById("upload-button");
const image = document.getElementById("chosen-image");
const downloadButton = document.getElementById("download-button");


function resetFilter(){
    filterA.value = "0";
    filterB.value = "100";
    filterC.value = "0";
    filterD.value = "0";

    addFilter();
    flipImage();
}

uploadButton.onchange = () =>{
    resetFilter();
    document.querySelector(".image-container").computedStyleMap.display = "block";
     const reader = new FileReader();
     reader.readAsDataURL(uploadButton.files[0]);
     reader.onload = () =>{
        image.setAttribute("src" , reader.result);
     }
}





