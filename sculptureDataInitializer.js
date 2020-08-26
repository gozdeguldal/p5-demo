var sculptureArray = [];

// function preload() {
//   console.log("in preload");
//     let url = 'sculptureData.json';
//     let rawData = loadJSON(url);
//     let mockId = 0;
//      for(let i = 0; i < rawData.length; i++) {
//       sculptureArray.push(
//         new Sculpture(
//           mockId,
//            rawData[i].x,
//            rawData[i].y, 
//            rawData[i].name, 
//            rawData[i].sculptor, 
//            rawData[i].info, 
//            rawData[i].year, 
//           loadImage(rawData[i].imagePath))
//       );
//       mockId++;
//      }
// }

function loadAllSculptureImages() {
  sculptureArray =
    [
      new Sculpture(0, 400, 180, 'Güven Anıtı | 1935 | Anton Hanak, Joseph Thorak', loadImage("hasat.png")),
      new Sculpture(1, 360, 210, 'Hasat Sonu | 1989 | Burhan Alkar', loadImage("guven.png")), 
      new Sculpture(2, 390, 265, 'İnsan Hakları Anıtı | ... | Metin Yurdanur', loadImage("hasat.png")), 
      new Sculpture(3, 405, 280, 'Memur | ... | ...', loadImage("insan.png")), 
      new Sculpture(4, 445, 195, 'Su perileri | ... | ...', loadImage("memur.png")), 
      new Sculpture(5, 407, 550, 'Oturan Teyze | ... | Burhan ...', loadImage("periler.png")), 
      new Sculpture(6, 424, 155, 'Tralala | ... | Kuzgun Acar', loadImage("kadin.png")), 
      new Sculpture(7, 425, 198, 'Meçhul Öğretmen | ... | Burhan Alkar', loadImage("türkiye.png")), 
      new Sculpture(8, 460, 190, 'Ayakkabı Boyacısı | ... | ...', loadImage("guven.png")),
      new Sculpture(9, 475, 185, 'Çiçekçi Kız | ... | ...', loadImage("guven.png")),
    ]
}
