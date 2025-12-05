const upload = document.querySelector('.upload');
const github = document.querySelector('.github');
const report = document.querySelector('.report');
const demo = document.querySelector('.demo');

upload.onclick = function() {
    section[1].scrollIntoView({behavior: 'smooth'});
}

github.onclick = function() {
    window.open('https://github.com/DarttGoblin/MindScan_server', '_blank');
}

report.onclick = function() {
    window.open('https://drive.google.com/file/d/174aBzocatmQW3YoMvSeCZ7j_p8emzh4e/view?usp=sharing', '_blank');
}

demo.onclick = function() {
    window.open('https://drive.google.com/file/d/1_j0gD5WEaxMWhIlNMnhSUcaUbxzzOeMU/view?usp=sharing', '_blank');
}