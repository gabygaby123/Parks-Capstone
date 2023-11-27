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
    //
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

    let parkAddress = document.createElement("h7");
    parkAddress.className = "card-body";
    parkAddress.innerText = ("Address:      " + park.Address );

    

    let parkCity = document.createElement("h7");
    parkCity.className = "card-body";
    parkCity.innerText = ("City:        " + park.City)

    let parkState = document.createElement("h7");
    parkState.className = "card-body";
    parkState.innerText = ("State:      " + park.State)

    let parkZipCode = document.createElement("h7");
    parkZipCode.className = "card-body";
    parkZipCode.innerText = ("Zip:      " + park.ZipCode);
    
    let parkPhone  = document.createElement("h7");
    parkPhone.className = "card-body";
    parkPhone.innerText = ("Phone:      " + park.Phone);

    let parkFax  = document.createElement("h7");
    parkFax.className = "card-body";
    parkFax.innerText = ("Fax:        " + park.Fax);

    let parkLatitude  = document.createElement("h7");
    parkLatitude.className = "card-body";
    parkLatitude.innerText = ("Latitude:       " + park.Latitude);

    let parkLocation  = document.createElement("h7");
    parkLocation.className = "card-body";
    parkLocation.innerText = ("Coordinates:        " + park.Location.coordinates);

    let parkType  = document.createElement("h7");
    parkType.className = "card-body";
    parkType.innerText = ("Type:        " + park.Location.type);
    

    cardBody.appendChild(parkName);
    cardBody.appendChild(parkAddress);
    cardBody.appendChild(parkCity);
    cardBody.appendChild(parkState);
    cardBody.appendChild(parkZipCode);
    cardBody.appendChild(parkPhone);
    cardBody.appendChild(parkFax);
    cardBody.appendChild(parkLatitude);
    cardBody.appendChild(parkLocation);
    cardBody.appendChild(parkType);
    parkCard.appendChild(cardBody);
}





