document.addEventListener("DOMContentLoaded",()=>{
    populateMountains();

    const mountainList = document.getElementById("mountainSelect")
    mountainList.onchange = displayMountain
})

function populateMountains(){
    const mountainList = document.getElementById("mountainSelect")
    mountainsArray.forEach(mountain => {
        const mountainOption = new Option(mountain.name)
        mountainList.add(mountainOption)
    })
}

function displayMountain(){
    
}
