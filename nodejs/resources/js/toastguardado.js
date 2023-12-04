/*const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

  toastTrigger.addEventListener('click', () => {
    $('.toast').addClass('show');
  });*/

let x;
let toast = document.getElementById("toast");
function showToast(){
    clearTimeout(x);
    toast.style.transform = "translateX(0)";
    x = setTimeout(()=>{
        toast.style.transform = "translateX(400px)"
    }, 3000);
}
function closeToast(){
    toast.style.transform = "translateX(400px)";
}