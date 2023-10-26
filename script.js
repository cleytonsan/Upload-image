const imageUploadInput = document.getElementById('imageUploadInput');
const uploadedImage = document.getElementById('uploadedImage');


imageUploadInput.addEventListener('change', function () {
    const file = imageUploadInput.files[0];
    if(file) {
        const reader = new FileReader();
        reader.onload = function (e){
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = "block"
            uploadedImage.style.alignContent = 'center'
        };
        reader.readAsDataURL(file);
    } else {
        uploadedImage.style.display = "none";
    }
});
