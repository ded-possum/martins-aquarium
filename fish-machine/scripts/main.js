console.log("Welcome to the main module")
// import { mostHolyFish, nonHolyFish, soldierFish, useFish } from "./fish/fishdataprovider.js"
import { FishList } from "./fish/fishList.js"
import { useLocation } from "./locations/locationdataprovider.js";
import { LocationList } from "./locations/locationList.js";
import { useTips } from "./tips/tipsdataprovider.js";
import { TipsList } from "./tips/tipsList.js";


// const allTheFish = useFish()

// for (const fish of allTheFish) {
//     console.log(fish)
// }

// const allTheHoly = mostHolyFish()

// for (const fish of allTheHoly) {
//     console.log(fish)
// }
// const allTheSoldiers = soldierFish()

// for (const fish of allTheSoldiers) {
//     console.log(fish)
// }
// const allThePlebes = nonHolyFish()

// for (const fish of allThePlebes) {
//     console.log(fish)
// }

const allLocations = useLocation()

for (const location of allLocations) {
    console.log(location)
}

const allTips = useTips()

for (const tips of allTips) {
    console.log(tips)
}

FishList()
mostHolyFish()
soldierFish()
nonHolyFish()
LocationList()
TipsList()