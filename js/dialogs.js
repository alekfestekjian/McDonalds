var dialogs = document.querySelectorAll("[data-dialog]");


dialogs.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();
    
    var dialog = document.getElementById(trigger.dataset.dialog);
    dialog.classList.add("open");
    document.body.classList.add("noScroll");  // Prevent Page from Scrolling
    window.scrollTo(0, 0); // Scroll to top for mobile devices

    var exits = dialog.querySelectorAll(".dialog-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();
        dialog.classList.remove("open");
        document.body.classList.remove("noScroll");  // Remove scrolling from body

      });
    });

  });
});

function closeDialog(targetDialog){
  var dialog = document.getElementById(targetDialog);
  dialog.classList.remove("open");
  document.body.classList.remove("noScroll");  // Remove scrolling from body
  
}


function showDialog(targetDialog){
  var dialog = document.getElementById(targetDialog);
  dialog.classList.add("open");
  document.body.classList.add("noScroll");  // Prevent Page from Scrolling
  window.scrollTo(0, 0); // Scroll to top for mobile devices

  var exits = dialog.querySelectorAll(".dialog-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();
        dialog.classList.remove("open");
        document.body.classList.remove("noScroll");  // Remove scrolling from body

      });
    });
}



/* Enable this to allow escape to close modal */
/* 
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
       var opendialogs = document.querySelector('.dialog.open')
        opendialogs.classList.remove("open");
        document.body.classList.remove("noScroll");  // Remove scrolling from body
    }
};
*/