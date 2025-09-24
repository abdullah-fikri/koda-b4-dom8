const input = document.getElementById("input")
const btn = document.getElementById("btn")

let allData = []
async function main(){
    const req = await fetch("https://rickandmortyapi.com/api/character")
    const data = await req.json()
    allData = data.results
    showdata(allData)
}

function showdata(data){
    const main = document.getElementById("main")
    main.innerHTML = ""
    data.forEach(element => {
        const box = document.createElement("div")
        box.classList.add("card")
        box.innerHTML += `<img src="${element.image}">
        <h3>${element.name}</h3>`
        
        main.append(box)
    })

}
btn.addEventListener("click", (e)=>{
    e.preventDefault()
    const inputUsr = input.value.toLowerCase()
    const hasil = allData.filter(item =>
        item.name.toLowerCase().includes(inputUsr)
    )
    showdata(hasil)
})


main()