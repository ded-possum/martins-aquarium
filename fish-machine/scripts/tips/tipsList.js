import { useTips } from "./tipsdataprovider.js";
import { Tips } from "./tips.js";

export const TipsList = () => {
    const contentElement = document.querySelector("#tips-List")
    const tippies = useTips()

let tipHTMLRepresentations = ""
for (const singleTipObject of tippies) {
    tipHTMLRepresentations += Tips(singleTipObject)
}

contentElement.innerHTML += `
    <article class="tipsList">
        ${tipHTMLRepresentations}
    </article>
    `
}