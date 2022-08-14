document.getElementById('post-btn').addEventListener('click', function () {
    const textWrite = document.getElementById('text-write');
    const textValue = textWrite.value;

    const sectionDiv = document.getElementById('section-div');
    const p = document.createElement('p');
    p.innerText = textValue;
    sectionDiv.appendChild(p)

    textWrite.value = '';
})