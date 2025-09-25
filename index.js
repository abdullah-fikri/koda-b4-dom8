const $input = $("#input")
const $btn = $("#btn")

let allData = []

async function main(){
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character")
        allData = response.data.results
        showdata(allData)
    } catch (error) {
        console.log("error", error)
    }
}

function showdata(data){
    const $main = $("#main")
    $main.html("") 

    data.forEach(element => {
        const $box = $("<div></div>").addClass("flex border items-center bg-white rounded-[20px] flex-col")
        const $img = $("<img>").attr("src", element.image).addClass("w-[80%]")
        const $name = $("<h3></h3>").text(element.name)

        $box.append($img)
        $box.append($name)

        $main.append($box)
    })
}

$btn.on("click", function(e){
    e.preventDefault()
    const inputUsr = $input.val().toLowerCase()
    const hasil = allData.filter(item =>
        item.name.toLowerCase().includes(inputUsr)
    )
    showdata(hasil)
})

main()
