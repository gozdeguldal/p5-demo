class Sculpture {
  constructor(id, x, y, txt, img) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.txt = txt;
    this.image = img;
    this.ellipseWidth = null;
    this.isExpanded = false;
  }

  isMouseOnTheSculpture() {
    var d = dist(this.x, this.y, mouseX, mouseY);
    if (d < 6) return true;
    return false;
  }

  isMouseOnTheTag() {
    if (mouseX > this.x-110 && mouseX < this.x + 110 && mouseY > this.y+110 && mouseY < this.y+160) return true;
    return false;
  }
  
  isMouseOnTheExpandedSculpture() {
    if (this.id === currentElpsId) {
      var d3 = dist(this.x, this.y, mouseX, mouseY);
      if (d3 < 100) return true;
      return false;
    }
  }

  showInitialPoint() {
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(this.x, this.y, this.ellipseWidth);
  }

  graduallyExpand(expandRate) {
    if (this.ellipseWidth + expandRate >= 200) {
      this.ellipseWidth = 200;
      this.isExpanded = true;
    } else {
      this.ellipseWidth += expandRate;
    }
  }

  transformForMoreInfo() {
    if (this.isMouseOnTheExpandedSculpture() && mouseIsPressed) {
    //infobox gelsin.
    }
  }

  showSculptureInfo() {
    if (this.isMouseOnTheSculpture() && mouseIsPressed) {
      currentElpsId = this.id; // bu nesnenin id'sini currentElpsId global değişkenine ata
    }
    if (this.isExpanded) {
      image(this.image, this.x, this.y, 200, 200);
      fill(255)
      rect(this.x-110, this.y + 110,220,50);
      textSize(14);
      fill(0);
      noStroke();
      text(this.txt, this.x-100, this.y + 140);
    }
  }

  resetExpand() {
    this.ellipseWidth = 10;
    this.isExpanded = false;
  }
}