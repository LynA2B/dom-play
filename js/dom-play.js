// grab spans in #play
const spans = document.querySelectorAll("#play span.actor");

// add event listeners to each actor span
for (const mySpan of spans) {
    
    const actor = mySpan.dataset.actor;

    mySpan.addEventListener("click", function (){
        highlightActor(actor);
    });
}

// hightlight all lines for the clicked actor
function highlightActor(actorName) {

    for (const s of spans) {
        if (s.dataset.actor === actorName) {
            s.style.backgroundColor = "yellow";
            s.style.fontWeight = "bold";
        } else {
            s.style.backgroundColor = "white";
            s.style.fontWeight = "normal";
        }
    }
}
      
