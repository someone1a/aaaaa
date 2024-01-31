let numbers = "1234567891"
const app = (numbers) => {
    let sortNumbers = Math.floor(Math.random() * numbers.length)
    var randomNumber = numbers.charAt(sortNumbers);
    console.log(randomDigit);
    let userAnswer = document.getElementById("userAnswer").value
    if (userAnswer === randomDigit){
        alert("Felicidades, acertaste")
    }else(
        alert(`upsss, le erraste. el numero era ${randomDigit}`)
    )
}