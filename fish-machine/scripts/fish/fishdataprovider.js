const fishCollection = [
    {
        name: "Bart",
        species: "clownfish",
        length: 1,
        food: "crustaceans",
        location: "Barboursville Community Pool"

    },
    {
        name: "George",
        species: "goldfish",
        length: 2,
        food: "cornflakes",
        location: "Ohio River"
    },
    {
        name: "Ted",
        species: "Pirahna",
        length: 3,
        food: "George",
        location: "the creek"
    },
    {
        name: "Putin",
        species: "Betta fish",
        length: 3,
        food: "other Betta fish",
        location: "Bob's Safe Pets"
    },
    {
        name: "Harvey",
        species: "eel",
        length: 4,
        food: "souls",
        location: "Styx River"
    },
    {
        name: "Blinky",
        species: "Three-eyed fish",
        length: 3,
        food: "Toxic Waste",
        location: "Springfield River"
    },
    {
        name: "Fresco",
        species: "Gooberfish",
        length: 5,
        food: "Wasabi peas",
        location: "Yangtze River"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // multiples of 3
    const holyFish = []

    for (let holyLength of fishCollection) {
        if (holyLength.length % 3 === 0){
            holyFish.push(holyLength)
        }
    }
console.log(holyFish)
    return holyFish
}

export const soldierFish = () => {
    // multiples of 5
        const soldiers = []

    for (let soldierLength of fishCollection) {
        if (soldierLength.length % 5 === 0 && soldierLength.length % 3 !== 0){
            soldiers.push(soldierLength)
        }
    }
console.log(soldiers)
    return soldiers
}

export const nonHolyFish = () => {

        const regularFish = []
    for (let regLength of fishCollection) {
    // not 3 or 5
        if (regLength.length % 3 !== 0 && regLength.length % 5 !== 0){
            regularFish.push(regLength)
        }
    }
console.log(regularFish)
    return regularFish
}
