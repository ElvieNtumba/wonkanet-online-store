// src/utils/getImagePath.js
const getImagePath = (imageName) => {
    try {
      return require(`../assets/${imageName}`);
    } catch (e) {
      return '../assets/default-image.png'; // Default image if the specific image is not found
    }
  };
  
  export default getImagePath;
  