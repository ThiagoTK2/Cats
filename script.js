function fetchRandomCat() {
    fetch(' https://api.thecatapi.com/v1/images/search?limit=10')
      .then(response => response.json())
      .then(data => {
        const catImage = document.getElementById('catImage');
        catImage.src = data[0].url;