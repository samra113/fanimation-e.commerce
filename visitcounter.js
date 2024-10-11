const visiter = document.getElementById("visiter");

increcount()

function increcount() {
    let visi;
    if (!localStorage.getItem("visi"))
        localStorage.setItem("visi", 1);
      
    counter = +localStorage.getItem("visi");
    const increse = counter + 1;
    localStorage.setItem("visi", increse);
    visiter.innerText = localStorage.getItem("visi");
}