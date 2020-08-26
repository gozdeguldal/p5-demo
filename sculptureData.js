var sculptureArray = null;

function loadAllSculptureImages() {
  sculptureArray =
    [
      new Sculpture(0, 400, 180, 'Güven Anıtı | 1935 | Anton Hanak, Joseph Thorak', loadImage("hasat.png")),
      new Sculpture(1, 360, 210, 'Hasat Sonu | 1989 | Burhan Alkar', loadImage("güven.png")), 
      new Sculpture(2, 390, 265, 'İnsan Hakları Anıtı | ... | Metin Yurdanur', loadImage("hasat.png")), 
      new Sculpture(3, 405, 280, 'Memur | ... | ...', loadImage("insan.png")), 
      new Sculpture(4, 445, 195, 'Su perileri | ... | ...', loadImage("memur.png")), 
      new Sculpture(5, 407, 550, 'Oturan Teyze | ... | Burhan ...', loadImage("periler.png")), 
      new Sculpture(6, 424, 155, 'Tralala | ... | Kuzgun Acar', loadImage("kadin.png")), 
      new Sculpture(7, 425, 198, 'Meçhul Öğretmen | ... | Burhan Alkar', loadImage("türkiye.png")), 
      new Sculpture(8, 460, 190, 'Ayakkabı Boyacısı | ... | ...', loadImage("güven.png")),
      new Sculpture(9, 475, 185, 'Çiçekçi Kız | ... | ...', loadImage("güven.png")),
    ]
}
