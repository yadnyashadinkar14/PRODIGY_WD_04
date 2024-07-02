var tablinks = document.getElementsByClassName("tab_link");
        var tabcontains = document.getElementsByClassName("tab_contains");

        function opentab(tabname){
            for (tablink of tablinks){
                tablink.classList.remove("active-link");
            }

            for (tabcontain of tabcontains){
                tabcontain.classList.remove("active_tab");
            }

            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active_tab");
        }
/*Side Menu */
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0"
}
function closemenu(){
    sidemenu.style.right = "-200px"
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxmCW_7fe5uR4uVJUqL9_Et2hFTg04QVXoDJwyKkP1cIq-O8WcMFlyeN0Kc5UQ_kz27/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})