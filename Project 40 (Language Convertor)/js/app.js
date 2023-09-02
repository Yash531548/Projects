const selectTag = document.querySelectorAll("select")

selectTag.forEach((tag,id)=>{
    for (const countryCode in countries) {
        // Selecting English by default as FROM language and HINDI as TO language
        let selected;
        if(id == 0 && countryCode == "en-GB"){
            selected = "selected"
        }
        if(id == 1 && countryCode == "hi-IN"){
            selected = "selected"
        }
        let option = `<option value="${countryCode}" ${selected}>${countries[countryCode]}</option>`
        tag.insertAdjacentHTML("beforeend",option)// inserted option tag inside the select tag
    }
})

