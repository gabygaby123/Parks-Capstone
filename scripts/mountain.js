document.addEventListener("DOMContentLoaded",()=>{
    populateMountains();

    const mountainList = document.getElementById("mountainSelect")
    mountainList.onchange = findMountain
})

function populateMountains(){
    const mountainList = document.getElementById("mountainSelect")
    mountainsArray.forEach(mountain => {
        const mountainOption = new Option(mountain.name)
        mountainList.add(mountainOption)
    })
}

function findMountain(){
    const mountainList = document.getElementById("mountainSelect").value
    let mountainFind;
    if(mountainList != "Select Location"){
         mountainFind=mountainsArray.find(mountain => mountain.name.includes(mountainList))
    
         console.log(mountainFind)
         displayMountainDetails(mountainFind)
    }
}

function displayMountainDetails(mountain) {
    const details = document.getElementById("content");
    details.innerHTML = "";
    addMountainImage(mountain, details);
    addMountainName(mountain, details);
    addMountainDescription(mountain, details);
    addMountainElevation(mountain, details);
    addEffort(mountain, details);
    addCoordinates(mountain, details);
}
function addMountainName(mountain, details) {
    const nameOfMountain = document.createElement("h3");
    nameOfMountain.innerText = "Mountain Name: " + mountain.name;
    details.appendChild(nameOfMountain)
}
function addMountainImage(mountain, details) {
    const mountainImage = document.createElement("img");
    mountainImage.src = "../images/" + mountain.img;
    details.appendChild(mountainImage);
}
function addMountainDescription(mountain, details) {
    const mountainDescription = document.createElement("");
    mountainDescription.innerText = "Description: " + mountain.desc;
    details.appendChild(mountainDescription)
}
function addMountainElevation(mountain, details) {
    const elevation = document.createElement("p");
    elevation.innerText = `Elevation: ${mountain.elevation}`;
    details.appendChild(elevation)
}
function addEffort(mountain, details) {
    const levelOfEffort = document.createElement("p");
    levelOfEffort.innerText = `Level Of Effort: ${mountain.effort}`;
    details.appendChild(levelOfEffort)
}
function addCoordinates(mountain, details) {
    const coordinates = document.createElement("p");
    coordinates.innerText = `Latitude: ${mountain.coords.lat}, Longitude: ${mountain.coords.lng}`;
    details.appendChild(coordinates);
}
