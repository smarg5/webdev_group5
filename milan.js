function showPhotoInfo(photoNumber) {
    const photoInfo = document.getElementById("photo-info");
    const photoDescription = document.getElementById("photo-description");
    switch (photoNumber) {
        case 1:
            photoDescription.textContent = "SHINE BRIGHT LIKE A TIGER.";
            break;
        case 2:
            photoDescription.textContent = "TIGER IS ON THE MOVE.";
            break;
        case 3:
            photoDescription.textContent = "CHILLING UNDER A TREE IN ITS NATURAL HABITANT.";
            break;
        case 4:
            photoDescription.textContent = "MAMA TIGER TRYING TO HAVE TO HAVE A LIL COVERSATION WITH BABY cub.";
            break;
        case 5:
            photoDescription.textContent = "BABY Cub IN ACTION .";
            break;
        default:
            photoDescription.textContent = "Click on a photo to see its description.";
    }
    photoInfo.style.display = "block";
}