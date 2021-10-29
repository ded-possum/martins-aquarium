import { Fish } from "./fish.js"
import { mostHolyFish, soldierFish, nonHolyFish, useFish } from "./fishdataprovider.js"


const printFish = (FishArray) => {
    let fishHTMLRepresentations = ""
    for (const singleFishObject of FishArray) {
        fishHTMLRepresentations += Fish(singleFishObject)
    }
    return fishHTMLRepresentations
}


export const FishList = () => {
    const contentElement = document.querySelector("#fishList")
    
    const holyArray = mostHolyFish()
    const soldierArray = soldierFish()
    const regArray = nonHolyFish()

    const finishedHoly = printFish(holyArray)
    const finishedSoldier = printFish(soldierArray)
    const finishedPlebe = printFish(regArray)

    contentElement.innerHTML += `
        <article class="fishList">
        <h3>Most Holy Fish</h3>
        ${finishedHoly}
        <h3>Soldier Fish</h3>
        ${finishedSoldier}
        <h3>Regular Fish</h3>
        ${finishedPlebe}
        </article>
    `
}

