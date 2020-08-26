class Sculpture {
  constructor(id, x, y, txt, img) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.txt = txt;
    this.image = img;
    this.ellipseWidth = null;
    this.isExpanded = false;
    this.isExpandedForMoreInfo = false;
  }

  isMouseOnTheSculpture() {
    var d = dist(this.x, this.y, mouseX, mouseY);
    if (d < 6) return true;
    return false;
  }

  isMouseOnTheExpandedSculpture() {
    if (this.id === currentElpsId) {
      var d2 = dist(this.x, this.y, mouseX, mouseY);
      console.log("current dist: " + d2);
      if (d2 < 150) return true;
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
    if (this.ellipseWidth + expandRate >= 300) {
      this.ellipseWidth = 300;
      this.isExpanded = true;
    } else {
      this.ellipseWidth += expandRate;
    }
  }

  expandForMoreInfo(expandRate) {
    if (this.ellipseWidth + expandRate >= 1000) {
      this.ellipseWidth = 1000;
      this.isExpandedForMoreInfo = true;
    } else {
      this.ellipseWidth += expandRate;
    }
  }

  showSculptureInfo() {
    if (this.isMouseOnTheSculpture() && mouseIsPressed) {
      currentElpsId = this.id; // bu nesnenin id'sini currentElpsId global değişkenine ata
    }

    if (this.isExpanded) {
      image(this.image, this.x, this.y, 300, 300);
      textSize(14);
      fill(255);
      noStroke();
      text(this.txt, this.x + 100, this.y + 150);
    }
  }

  resetExpand() {
    this.ellipseWidth = 8;
    this.isExpanded = false;
  }
}