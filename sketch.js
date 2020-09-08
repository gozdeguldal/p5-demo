var currentElpsId = null;
var expandRate = 25;

function setup() { 
  createCanvas(1100, 500);
  ankara = loadImage("ankara_p5.jpg");
  loadAllSculptureImages(); 
}

function draw() {
  imageMode(CENTER);
  image(ankara, width/2, height/2);
  sculptureDrawer();
}

function mousePressed() {
  let isAnyOfTheExpandedSculpturesInsideClickedOn = false
  for (let i = 0; i < sculptureArray.length; i++) {
    if(sculptureArray[i].isMouseOnTheExpandedSculpture()){
      isAnyOfTheExpandedSculpturesInsideClickedOn = true;
    }
  }
  if(isAnyOfTheExpandedSculpturesInsideClickedOn){
   //buraya ne yazacaksın?
  }
  if(!isAnyOfTheExpandedSculpturesInsideClickedOn){
    closeCurrentExpand();
  }
}

function sculptureDrawer() {
  if (currentElpsId === null) {
    drawEllipses(sculptureArray);
  } else {
    let currentSculpture = getCurrentSculpture();
    let tempArrayWithoutCurSclp = sculptureArray.filter(function(sculpture) {
      return sculpture.id != currentElpsId;
    });
    drawEllipses(tempArrayWithoutCurSclp);
    drawSingleEllipse(currentSculpture, true);
  }
}

function getCurrentSculpture(){
  return sculptureArray.find(function(sculpture) {
      return sculpture.id == currentElpsId;
    });
}

function drawSingleEllipse(sculpture, isCurrentEllipse) {
  if (isCurrentEllipse) {
    sculpture.graduallyExpand(expandRate);
    sculpture.expandForMoreInfo(expandRate);
  } else {
    sculpture.resetExpand();
  }
  sculpture.showSculptureInfo();
  sculpture.showInitialPoint();
}

function drawEllipses(arrayOfSculptures) {
  for (let i = 0; i < arrayOfSculptures.length; i++) {
    drawSingleEllipse(arrayOfSculptures[i], false);
  }
}

function closeCurrentExpand() {
  if (currentElpsId !== null) {
    getCurrentSculpture().resetExpand();
    return currentElpsId = null;
  }
}