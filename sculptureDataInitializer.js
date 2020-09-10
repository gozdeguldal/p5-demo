var sculptureArray = [];
var data = [];

function preload() {
  console.log("preload() çağrıldı");
  fetch('assets/sculptureData.json') // tek satırla kullanılan API'yı değiştir
  .then(response => response.json())
  .then(json => {
    data = json["sculptures"];
    loadAllSculptureImages();
  });
}

function loadAllSculptureImages() {
  console.log("loadAllSculptureImages() çağrıldı");
  let id = 0;
  data.forEach(element => {
    sculptureArray.push(
        new Sculpture(
          id,
          parseInt(element.x),
          parseInt(element.y), 
          element.name, 
          element.sculptor, 
          element.info, 
          element.year, 
          loadImage(element.imagePath))
      );
        id++;
  });
  
}
