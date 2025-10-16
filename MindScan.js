const file_input = document.querySelector('.file-input');
const preview_image = document.querySelector('.preview-image');
const prompt_input = document.querySelector('.prompt-input');
const submit = document.querySelector('.submit');

file_input.onchange = function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview_image.src = e.target.result;
            preview_image.style.display = 'flex'; 
        };
        reader.readAsDataURL(file);
    }
};

submit.onclick = async function() {
    const file = file_input.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    formData.append('prompt', prompt_input.value);

    const response = await fetch('http://127.0.0.1:5000/edit', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();
    console.log(data);
};