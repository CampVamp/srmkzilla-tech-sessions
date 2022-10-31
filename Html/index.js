let btns = document.querySelectorAll(".btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.querySelectorAll(".active");

    current[0].className = current[0].className.replace("active", "");

    this.className += " active";
  });
}

let btn1 = document.querySelector(".b1");
let btn2 = document.querySelector(".b2");
let btn3 = document.querySelector(".b3");
let btn4 = document.querySelector(".b4");

let textbold = document.querySelector(".text-bold");
let textdesc = document.querySelector(".text-desc");

btn1.addEventListener("click", function () {
  textbold.textContent = "If you can think it, we can web it.";
  textdesc.textContent =
    "SRMKZILLA has expertise in creating robust, scalable, responsive, and powerful web portals. This enables us to deliver web portals that are a perfect amalgamation of features such as e-mails, chats, news, and information.";
});

btn2.addEventListener("click", function () {
  textbold.textContent = "Painting the digital canvas with aesthetics.";
  textdesc.textContent =
    "Web design is the digital face of your organization. Quality web design helps you keep your leads on your page. The domain of web designing is one that is dynamic and is only limited by the designer's imagination. Hence, at SRMKZILLA, we strive to create aesthetically pleasing designs with a mint of creativity while still keeping up with the latest trends.";
});

btn3.addEventListener("click", function () {
  textbold.textContent =
    "You call it illustration, we call it a sweeping victory.";
  textdesc.textContent =
    "Design is thinking made visual. If the aesthetics are not spot-on, your audience will not give you a second glance. At SRMKZILLA, our graphic designing team ensures their outputs are a blend of knock-out graphics and smart marketing strategies. From a wide range of logos, brochures, banners, to design that empowers your web identity, we bring art to the cart.";
});

btn4.addEventListener("click", function () {
  textbold.textContent = "Apps that leave you in awe.";
  textdesc.textContent =
    "With the world at your fingertips, we expertise in creating unmatched user-experience for your digital solutions. We design, develop and customize cross-platform mobile applications that are robust, secure, and user-friendly. Whether you need applications for entertainment, gaming, web browsing, or communication, we are here to bring it to reality.";
});
