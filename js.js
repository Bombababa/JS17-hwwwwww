//1

const button = document.getElementById('changeTextButton');
const textInput = document.getElementById('textInput');


button.addEventListener('click', () => {
   
    button.textContent = textInput.value;
});

//2

const image = document.getElementById('image');


image.src = './keda ia popal.png';