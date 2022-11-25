const meterFeet = 3.281
const literGallon = 0.264
const kilogramPound = 2.204

const input = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")

const outputMass = document.getElementById("output-mass")
const outputVolume= document.getElementById("output-volume")
const outputLength = document.getElementById("output-length")

convertBtn.addEventListener("click", function() {
    const value = input.value;
    
    outputLength.textContent =`${value} meters = ${(value*meterFeet).toFixed(3)} feet | ${value} feet = ${(value/meterFeet).toFixed(3)} meters`
    
    outputVolume.textContent =`${value} liters = ${(value*literGallon).toFixed(3)} gallons | ${value} gallons = ${(value/literGallon).toFixed(3)} liters`
    
    outputMass.textContent =`${value} kilograms = ${(value*kilogramPound).toFixed(3)} pounds | ${value} pounds = ${(value/kilogramPound).toFixed(3)} kilograms`
    
})