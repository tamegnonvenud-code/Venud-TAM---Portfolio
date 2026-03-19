document.querySelector("form").addEventListener("submit", function(f){
    let nom=document.getElementById("nom").value.trim();
    let pname=document.getElementById("pname").value.trim();
    let email=document.getElementById("email").value.trim();
    let text=document.getElementById("text").value.trim();
console.log("text")
    if (!name || !pname ||  !email || !text) {
        f.preventDefault()
        alert("Prière de remplir tous les champs du présent formulaire.");
    }
});

 function darkMode(){
document.body.classList.toggle("dark");
}


    const menuBtn = document.getElementById("menu-btn");
    const menuList = document.getElementById("menu-list");

    menuBtn.addEventListener("click", () => {
      menuList.classList.toggle("active");
    });
  
    

 const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();  });

 document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const nom = document.getElementById("nom").value;
  const pname  = document.getElementById("pname").value;
  const email= document.getElementById("email").value;
  const text = document.getElementById("text").value;
  const destinataire = "tamegnonvenud@gmail.com";
 const sujetMail = encodeURIComponent("New message");
  const corpsMail = encodeURIComponent(
    `Nom : ${nom} ${pname}\nEmail : ${email}\n\nMessage :\n${text}`
  );

  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinataire}&su=${sujetMail}&body=${corpsMail}`;

  window.location.href = url;
});