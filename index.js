const rectangle__area = document.getElementById("rectangle__area");
const LShapeArea = document.getElementById("l-shape-area");
const annulusArea = document.getElementById("annulus__area");
const sectorMinusTriangle = document.getElementById("sector-minus-triangle");
const starPolygon = document.getElementById("star-polygon");
function rectangle() {
    var rectWidth = document.getElementById("rectWidth").value;
    var rectLength = document.getElementById("rectLength").value;
    var rectWidth = parseInt(rectWidth);
    var rectLength = parseInt(rectLength);
    var area = rectWidth * rectLength;
    alert(area);
}

rectangle__area.addEventListener("click", rectangle);

function areaLShape(width1, width2, height1, height2) {
    // Assumes the L-shape is oriented like a capital L
    width1 = document.getElementById("width__1").value;
    width2 = document.getElementById("width__2").value;
    height1 = document.getElementById("height__1").value;
    height2 = document.getElementById("height__2").value;
    let areaRect1 = width1 * height1;
    let areaRect2 = width2 * (height2 - height1); 
    alert(areaRect1 + areaRect2);
}

LShapeArea.addEventListener("click", areaLShape);

function areaAnnulus(outerRadius, innerRadius) {
    // Area of the outer circle minus the area of the inner circle
    outerRadius = document.getElementById("outerRadius").value;
    innerRadius = document.getElementById("innerRadius").value;
    let outerArea = Math.PI * outerRadius**2;
    let innerArea = Math.PI * innerRadius**2;
    alert(outerArea - innerArea);
}

annulusArea.addEventListener("click", areaAnnulus);

function areaSectorMinusTriangle(radius, angle, triangleBase) {
    // Area of the sector minus the area of the isosceles triangle
    radius = document.getElementById("radius").value;
    angle = document.getElementById("angle").value;
    triangleBase = document.getElementById("triangleBase").value;

    let sectorArea = (angle / 360) * Math.PI * radius**2;
    let triangleHeight = Math.sqrt(radius**2 - (triangleBase/2)**2);
    let triangleArea = 0.5 * triangleBase * triangleHeight;
    alert(sectorArea - triangleArea);
}

sectorMinusTriangle.addEventListener("click", areaSectorMinusTriangle);

function areaStarPolygon(outerRadius, innerRadius, numPoints) {
    // Area based on the number of points and inner/outer radii
    outerRadius = document.getElementById("regular__outerRadius").value;
    innerRadius = document.getElementById("regular__innerRadius").value;
    numPoints = document.getElementById("numbPoints").value;  

    let angle = Math.PI / numPoints;
    let area = numPoints * 0.5 * (outerRadius**2 - innerRadius**2) * Math.sin(2 * angle);
    alert(area);
}

starPolygon.addEventListener("click", areaStarPolygon);