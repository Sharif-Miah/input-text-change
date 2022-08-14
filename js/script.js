
document.getElementById('input-btn').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');

    const inputText = inputField.value;

    const changeText = document.getElementById('change-text');
    changeText.innerText = inputText;
    inputField.value = '';

});
