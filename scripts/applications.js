document.addEventListener("DOMContentLoaded", ()=>{
    populateStates();
    populateParkType();

   const statesList = document.getElementById("statesList");
   statesList.onchange = filterParks
   const typeList = document.getElementById("typeList");
    typeList.onchange = filterParks

})


function populateStates(){
    const statesList = document.getElementById("statesList");
    locationsArray.forEach(state => {
        const stateOption = new Option(state)
        statesList.add(stateOption)
    });
}

function populateParkType(){
    const typeList = document.getElementById("typeList");
    parkTypesArray.forEach(type =>{
        const typeOption = new Option(type)
        typeList.add(typeOption)
    })
}

function filterParks(){
    const selectState = document.getElementById("statesList").value 
    //console.log(selectState)
    const selectType = document.getElementById("typeList").value;

    let parksFilter = nationalParksArray 
    if(selectState != "Select Location"){
        parksFilter = parksFilter.filter(park=>park.State==selectState)        
    }
    //console.log(parksFilter)
    if(selectType != "Select Type"){
        parksFilter = parksFilter.filter(park => park.LocationName.includes(selectType))
    }
    console.log(parksFilter)

    displayNationalParks(parksFilter)
}

function displayNationalParks(parkList) {
    const parksContainer = document.querySelector("#content");
    parksContainer.innerHTML = "";
    parkList.forEach(park => displayNationalPark(park, parksContainer));
}

function displayNationalPark(park,parksContainer){
    let parkDiv = document.createElement("div") 
    addParkName(park,parkDiv)
    parksContainer.appendChild(parkDiv)
}

function addParkName(park,parkDiv){
    let parkName = document.createElement("h6")
    parkName.innerText=park.LocationName
    parkDiv.appendChild(parkName)
}




