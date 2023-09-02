const selectTag = document.querySelectorAll("select")
const translateBtn = document.querySelector("button")
const FromText = document.querySelector(".from-text")
const ToText = document.querySelector(".to-text")
const exchangeIcon = document.querySelector(".exchangeIcon")
const icons = document.querySelectorAll(".icons")


selectTag.forEach((tag, id) => {
    for (const countryCode in countries) {
        // Selecting English by default as FROM language and HINDI as TO language
        let selected;
        if (id == 0 && countryCode == "en-GB") {
            selected = "selected"
        }
        if (id == 1 && countryCode == "hi-IN") {
            selected = "selected"
        }
        let option = `<option value="${countryCode}" ${selected}>${countries[countryCode]}</option>`

        tag.insertAdjacentHTML("beforeend", option)// inserted option tag inside the select tag
    }
})
// EVENT LISTENERS

// Translator
translateBtn.addEventListener("click", () => {
    let Text = FromText.value;
    let fromlang = selectTag[0].value,
        tolang = selectTag[1].value;
    if(!Text) return
    let APIurl = `https://api.mymemory.translated.net/get?q=${Text}!&langpair=${fromlang}|${tolang}`
    /** fetching api response and returning it with parsing into json onj
     * and in another then method is receiving tha obj
     */
    fetch(APIurl).then(res => res.json()).then(data => {
        ToText.value = data.responseData.translatedText
    })
})

// FUNCTIONALITY

exchangeIcon.addEventListener("click", () => {
    // declaring temporary holder
    let tempText, templang;
    // Swaping of text
    tempText = FromText.value;
    FromText.value = ToText.value;
    ToText.value = tempText
    // Swaping of language
    templang = selectTag[0].value;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = templang
})

icons.forEach(icon => {
    icon.addEventListener("click", (e) => {
        // console.log(e);
        if (e.target.name == "volume-high") {
            let utterence;
            if (e.target.nextSibling.parentElement.parentElement.className =="row from"){
                utterence = new SpeechSynthesisUtterance(FromText.value);
                utterence.lang = selectTag[0].value
            }else{
                utterence = new SpeechSynthesisUtterance(ToText.value);
                utterence.lang = selectTag[1].value
            }
            speechSynthesis.speak(utterence)
        } else {
            // console.log("copy btn is clicked");
            if (e.target.nextSibling.parentElement.parentElement.className =="row from"){
                navigator.clipboard.writeText(FromText.value)
            }else{
                navigator.clipboard.writeText(ToText.value)
            }
        }
    })
})