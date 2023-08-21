const addbtn = document.getElementById("addnote");
const main = document.querySelector("#main")


// To Ensure system is not getting null value and if it does then don't run
if (addbtn) {
    addbtn.addEventListener("click", function () {
        AddNote();
    })
}



// <!-- <div class="note">
//                 <div class="toolbar">
//                     <ion-icon name="save" class="icons"></ion-icon>
//                     <ion-icon name="trash" class="icons"></ion-icon>
//                 </div>
//                 <textarea name="Notes" id="Notes" ></textarea>
//             </div> -->

// On click text will empty but if notepad is coming by refrence then
// text should be written on it 
const AddNote = (text = '') => {
    let note = document.createElement("div");
    note.classList.add(".note");
    note.innerHTML = `
    <div class="note">
        <div class="toolbar">
            <ion-icon name="save" class="icons save"></ion-icon>
            <ion-icon name="trash" class="icons trash"></ion-icon>
        </div>
        <textarea name="Notes" id="Notes" >${text}</textarea>
    </div> `

    note.querySelector(".trash").addEventListener("click", function () {
        note.remove();
        saveNote();// changes done can be reflect on local storage to 
    })

    note.querySelector(".save").addEventListener("click", function () {
        saveNote();
    })
    // this function let user store data when user focus got shiffted to elsewere 
    note.querySelector("textarea").addEventListener(
        "focusout",
        function () {
            saveNote()
        }
    )

    main.appendChild(note);
    saveNote();// Save even a empty notepad
}

function saveNote() {
    let data = [];
    let notes = document.querySelectorAll(".note textarea");
    // console.log(notes) ; notes is in the form of Object means we can run loop
    notes.forEach(
        (e) => {
            data.push(e.value)
        }
    )
    /* if user delete all notepad then localstorage (notes) should also be deleted */
    if (data.length == 0) {
        localStorage.removeItem("notes")
    } else {
        /* console.log(data) -> Object the stringify convert object to string then store
           local storage with the name of notes */
        localStorage.setItem("notes", JSON.stringify(data))
    }
}
// Way for self call function  which automatically run on reload 
// This function check the data present in localstorage 
(
    function () {
        // parse method used for converting string to object 
        // let lsnote = localStorage.getItem("notes"); -> is string
        let lsnote = JSON.parse(localStorage.getItem("notes"));
        // on loading page if there present no data in local storage then 
        // atleast one empty notepad still should be present at web         
        if (lsnote == null) {
            AddNote();
        } else {
            // console.log(lsnote)-> now we can use loop 
            lsnote.forEach(
                (e) => {
                    AddNote(lsnote);// to show already present data
                }
            )
        }
    }
)()