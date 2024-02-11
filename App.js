let input = document.getElementById("input")
let btn = document.getElementById("btn")
let api = "https://api.dictionaryapi.dev/api/v2/entries/en/"

async function getData(word) {
    const response = await fetch(api + word)
    if (response.status == 404) {

    }
    else {

        let data = await response.json()
        document.getElementById("defination1").innerHTML = "Definition :" + data[0].meanings[0].definitions[0].definition
        console.log(data[0].meanings[0].definitions[0].definition);
    }

}

btn.addEventListener("click", () => {
    let inputvalue = input.value

    if (inputvalue === "") {
        document.getElementById("error").innerHTML = "Please enter any word !!!"
    }
    else{
        document.getElementById("error").innerHTML = ""
        document.getElementById("def").classList.remove("disable")
    }


    getData(inputvalue)
})
