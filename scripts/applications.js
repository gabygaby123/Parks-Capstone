document.addEventListener("DOMContentLoaded", () => {
    populateStates();
    populateParkType();

    const statesList = document.getElementById("statesList");
    statesList.onchange = filterParks;
    const typeList = document.getElementById("typeList");
    typeList.onchange = filterParks;
});

function populateStates() {
    const statesList = document.getElementById("statesList");
    locationsArray.forEach(state => {
        const stateOption = new Option(state);
        statesList.add(stateOption);
    });
}

function populateParkType() {
    const typeList = document.getElementById("typeList");
    parkTypesArray.forEach(type => {
        const typeOption = new Option(type);
        typeList.add(typeOption);
    });
}

function filterParks() {
    const selectState = document.getElementById("statesList").value;
    const selectType = document.getElementById("typeList").value;

    let parksFilter = nationalParksArray;
    if (selectState != "Select Location") {
        parksFilter = parksFilter.filter(park => park.State == selectState);
    }
    if (selectType != "Select Type") {
        parksFilter = parksFilter.filter(park => park.LocationName.includes(selectType));
    }

    displayNationalParks(parksFilter);
}

function displayNationalParks(parkList) {
    const parksContainer = document.getElementById("content");
    parksContainer.innerHTML = "";
    parkList.forEach(park => displayNationalPark(park, parksContainer));
}

function displayNationalPark(park, parksContainer) {
    let parkCard = document.createElement("div");
    parkCard.className = "card mt-3";
    addParkName(park, parkCard);
    parksContainer.appendChild(parkCard);
}

function addParkName(park, parkCard) {
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    
    let parkName = document.createElement("h6");
    parkName.className = "card-title";
    parkName.innerText = park.LocationName;

    cardBody.appendChild(parkName);
    parkCard.appendChild(cardBody);
}





