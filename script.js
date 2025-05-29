const photoUpload = document.getElementById('photoUpload');
const imagePreview = document.getElementById('imagePreview');

photoUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block'; // Show preview
        }
        reader.readAsDataURL(file);
    } else {
        imagePreview.src = '#';
        imagePreview.style.display = 'none'; // Hide preview
    }
});

// Basic form submission handling (can be expanded)
document.getElementById('photoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual submission for this example
    const photoFile = photoUpload.files[0];
    if (photoFile) {
        alert(`Photo "${photoFile.name}" ready for submission! (This is a demo)`);
        // In a real application, you would send the file to a server here.
    } else {
        alert('Please select a photo to upload.');
    }
});
