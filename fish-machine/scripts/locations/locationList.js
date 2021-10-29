import { useLocation } from "./locationdataprovider.js"
import { Location } from "./location.js"

export const LocationList = () => {
    const contentElement = document.querySelector("#fishLocations")
    const location = useLocation()

let locationHTMLRepresentations = ""
for (const singleLocationObject of location) {
    locationHTMLRepresentations += Location(singleLocationObject)
}

    contentElement.innerHTML += `
        <article class="locationList">
            ${locationHTMLRepresentations}
        </article>
    `
}
