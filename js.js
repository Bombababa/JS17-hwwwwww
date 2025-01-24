const textField = document.getElementById('textField');
const changeButton = document.getElementById('changeButton');

changeButton.addEventListener('click', () => {
    const newText = textField.value;
    if (newText) {
        changeButton.textContent = newText;
    } else {
        alert('Введіть текст у поле!');
    }
});



const image = document.getElementById('image');
image.src = './oleg.png'; 



const link = document.getElementById('link');
const linkImage = document.getElementById('linkImage');

link.href = 'https://github.com/'; 
linkImage.alt = 'Нове зображення, що описує посилання';



const itemList = document.getElementById('itemList');
const firstItem = itemList.querySelector('li');

firstItem.textContent = 'Змінений текст першого елемента';
