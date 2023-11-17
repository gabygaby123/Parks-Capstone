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
         displayMountain(mountainFind)
    }
}
