

function maxExposantInBaseTwo(num) {
    for (let i=0; i < num; i++) {
        if (2**i >= num) {
            return i
        }
    }
}

function convertBase (event) {
    event.preventDefault()

    const base = document.getElementById("selectbase").value
    const num = document.getElementById("inputnumber").value

    if (num < 0) {return}

    let number = num
    let converted = ""
    // CONVERT
    if (base == 2) {
        let exposant = maxExposantInBaseTwo(num)  
        while (exposant >= 0) {
            if (2**exposant > number) {
                converted += "0"
            }
            else {
                converted += "1"
                number -= 2**exposant
            }
            exposant -=1
        }
    }

    else if (base == 16) {
        const indexHexa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']        
        while (number != 0) {        
            converted += indexHexa[number % 16]
            number = Math.floor(number / 16)
        }
        let temp = ""
        for (e of converted) {
            temp = e + temp
        }
        converted = temp
    }

    // Display the results
    let newP = document.createElement('p')
    newP.classList.add(`base${base}`)
    newP.textContent = `${num} has been converted in base ${base} and the results are in: ${converted}`
    document.getElementById("results").appendChild(newP)
}

/* ---------------------------- STYLE CODE ---------------------------- */

function getRandomInt(min, max) {
    /*Returns a random number, not including maximum (because lists... Like lists...) */
    return Math.floor(Math.random() * (max - min)) + min;
}

for (let i=0; i<20; i++) {
    let newDiv = document.createElement('div')
    newDiv.classList.add(`background-hex`)
    
    let r = getRandomInt(7,14)
    let w = "#"
    for (let j=0; j<r; j++) {
        w += ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'][getRandomInt(0,16)]
    }
    newDiv.textContent = w
    newDiv.style.color = "#a0f171"
    newDiv.style.writingMode = "vertical-lr"
    newDiv.style.rotate = "180deg"
    newDiv.style.opacity = 0.5

    newDiv.style.position = "absolute"
    newDiv.style.left = getRandomInt(0, window.innerWidth-100).toString() + "px"
    newDiv.style.top = getRandomInt(0, window.innerHeight-100).toString() + "px"
    document.body.appendChild(newDiv)
}