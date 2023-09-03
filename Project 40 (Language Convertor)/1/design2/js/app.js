const selectTag = document.querySelectorAll('select');
const translateBtn = document.querySelector('button');
const fromText = document.querySelector('.From-text');
const toText = document.querySelector('.to-text');
const exchangeIcon = document.querySelector('.exchange-icon');
const icons = document.querySelectorAll('.icons');

selectTag.forEach((tag, id) => {
    for (const countryCode in countries) {
        //  // Selecting English by default as FROM language and HINDI as TO language
        let selected;
        if (id == 0 && countryCode == 'en-GB') {
            selected = 'selected';
        }
        if (id == 1 && countryCode == 'hi-IN') {
            selected = 'selected';
        }
        let option = ` <option value="${countryCode}" ${selected}>${countries[countryCode]}</option>`;
        // Add country list inside the select tag just before end part
        tag.insertAdjacentHTML('beforeend', option);
    }
});

// EVENT LISTENER

// Translator
translateBtn.addEventListener('click', () => {
    let Text = fromText.value;
    let fromlang = selectTag[0].value,
        tolang = selectTag[1].value;

    let apiURl = `https://api.mymemory.translated.net/get?q=${Text}!&langpair=${fromlang}|${tolang}`;
    /** fetching api response and returning it with parsing into json onj
     * and in another then method is receiving tha obj
     */
    fetch(apiURl)
        .then((res) => res.json())
        .then((data) => {
            toText.value = data.responseData.translatedText;
        });
});

// FUNCTIONALITY

exchangeIcon.addEventListener('click', () => {
    let tempText, tempLang;
    // SWAPPING

    // Of Texts
    tempText = fromText.value;
    fromText.value = toText.value;
    toText.value = tempText;
    // Of Language
    tempLang = selectTag[0].value;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});

icons.forEach((icons) => {
    icons.addEventListener('click', (e) => {
        if (e.target.name === 'volume-high') {
            let utterence;
            if (
                e.target.nextSibling.parentElement.parentElement.className == 'row from'
            ) {
                utterence = new SpeechSynthesisUtterance(fromText.value);
                utterence.lang = selectTag[0].value;
            } else {
                utterence = new SpeechSynthesisUtterance(toText.value);
                utterence.lang = selectTag[1].value;
            }
            speechSynthesis.speak(utterence);
        } else {
            if (
                e.target.nextSibling.parentElement.parentElement.className == 'row from'
            ) {
                navigator.clipboard.writeText(fromText.value);
            } else {
                navigator.clipboard.writeText(toText.value);
            }
        }
    });
});
