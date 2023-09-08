var xReq = new XMLHttpRequest();
xReq.open("GET", "JS/Person.json", true);

xReq.onload = function () {
  CJ = JSON.parse(xReq.responseText);
  document.querySelector("h1").innerHTML = CJ[0].name;

  document.querySelector(".job").innerHTML = CJ[0].job;

  document.querySelector(".Prese").innerHTML =
    "My name is " +
    CJ[0].name +
    " and I am " +
    CJ[0].age +
    ". I am a student at the " +
    CJ[0].study +
    ", specializing in " +
    CJ[0].speciality +
    ", but " +
    "my dream is to be a developer. I consider development the art of choosing the colors and style of the page. <br>Also, I consider it a talent, so everyone who gets it should improve and develop it.";
};

xReq.send();

var xReq1 = new XMLHttpRequest();
xReq1.open("GET", "JS/Information.json", true);

xReq1.onload = function () {
  info = JSON.parse(xReq1.responseText);
  document.querySelector(".DN").innerHTML = info[0].DN;

  info = JSON.parse(xReq1.responseText);
  document.querySelector(".Phone").innerHTML = info[0].Num;

  info = JSON.parse(xReq1.responseText);
  document.querySelector(".Loc").innerHTML = info[0].Pl;

  info = JSON.parse(xReq1.responseText);
  document.querySelector(".Lycee").innerHTML = info[0].Etu;

  info = JSON.parse(xReq1.responseText);
  document.querySelector(".Fac").innerHTML = info[0].Std;
};

xReq1.send();

var xReq2 = new XMLHttpRequest();
xReq2.open("GET", "JS/Langages.json", true);
xReq2.onload = function () {
  Lang = JSON.parse(xReq2.responseText);
  Ph5 = ""
  for (let i = 0; i < Lang.length; i++) {
    Ph5 = Ph5 + "<div class='BOX col-lg-2 col-md-3'><div class='PORSON'>"
      + Lang[i].logo +
      "</div><div class='Name'>"
      + Lang[i].Name
      + "</div><div class='Level'>"
      + Lang[i].Level +
      "</div></div>"
  }
  document.querySelector(".Lang").innerHTML = Ph5;
};

xReq2.send();


var xReq5 = new XMLHttpRequest();
xReq5.open("GET", "JS/SoftSkills.json", true);
xReq5.onload = function () {
  ss = JSON.parse(xReq5.responseText);
  Ph5 = ""
  for (let i = 0; i < ss.length; i++) {
    Ph5 = Ph5 + "<div class='BOX col-lg-2 col-md-3'>"
      + ss[i].logo +
      "<div class='name'>"
      + ss[i].name
      + "</div><div class='level'>"
      + ss[i].level +
      "</div></div>"
  }
  document.querySelector(".softS").innerHTML = Ph5;
};

xReq5.send();

var xReq6 = new XMLHttpRequest();
xReq6.open("GET", "JS/HardSkills.json", true);
xReq6.onload = function () {
  sh = JSON.parse(xReq6.responseText);
  Ph6 = ""
  for (let i = 0; i < sh.length; i++) {
    Ph6 = Ph6 + "<div class='BOX col-lg-2 col-md-3'>"
      + sh[i].logo +
      "<div class='name'>"
      + sh[i].name
      + "</div><div class='level'>"
      + sh[i].level +
      "</div></div>"
  }
  document.querySelector(".softH").innerHTML = Ph6;
};

xReq6.send();

var xReq3 = new XMLHttpRequest();
xReq3.open("GET", "JS/Services.json", true);
xReq3.onload = function () {
  serv = JSON.parse(xReq3.responseText);
  Ph0 = "";
  for (let i = 0; i < serv.length; i++) {
    Ph0 =
      Ph0 +
      "<div class='SERV col-sm-11 col-md-5 col-lg-2 col-xl-2'><div class='PORSON imgS'><img src='Image/" +
      serv[i].img +
      "'></div><p class='LinkS'><a href='" +
      serv[i].Link +
      "'>Picture Source...</a></p><div class='NameS Name'>" +
      serv[i].Name +
      "</div></div>";
  }
  document.querySelector(".BoxGServ").innerHTML = Ph0;
};

xReq3.send();

document.querySelector(".All").classList.remove("bouton");
document.querySelector(".All").classList.add("btn");

var xReq4 = new XMLHttpRequest();
xReq4.open("GET", "JS/Partfolio.json", true);
xReq4.onload = function () {
  par = JSON.parse(xReq4.responseText);
  Ph = "";
  for (let i = 0; i < par.length; i++) {
    Ph =
      Ph +
      "<div class='Preject col-sm-11 col-md-5 col-lg-2 col-xl-2'><div class='PORSON imgP'><img src='Image/" +
      par[i].Img +
      "'></div><p class='LinkP'><a href='" +
      par[i].Link +
      "' target='_blank'>Source...</a></p><div class='NameP Name'>" +
      par[i].Name +
      "</div><p class='PreProj PresenP'>" +
      par[i].Presen +
      "</p></div>";
  }
  document.querySelector(".BoxGPatf").innerHTML = Ph;
};
xReq4.send();

function selection(ch) {
  if (ch == "All") {
    document.querySelector(".Front-end").classList.remove("btn");
    document.querySelector(".Front-end").classList.add("bouton");

    document.querySelector(".LogoD").classList.remove("btn");
    document.querySelector(".LogoD").classList.add("bouton");

    document.querySelector(".Back-end").classList.remove("btn");
    document.querySelector(".Back-end").classList.add("bouton");

    document.querySelector(".Full-Stack").classList.remove("btn");
    document.querySelector(".Full-Stack").classList.add("bouton");

    document.querySelector(".All").classList.remove("bouton");
    document.querySelector(".All").classList.add("btn");
    var xReq4 = new XMLHttpRequest();
    xReq4.open("GET", "JS/Partfolio.json", true);
    xReq4.onload = function () {
      par = JSON.parse(xReq4.responseText);
      Ph = "";
      for (let i = 0; i < par.length; i++) {
        Ph =
          Ph +
          "<div class='Preject col-sm-11 col-md-5 col-lg-2 col-xl-2'><div class='PORSON imgP'><img src='Image/" +
          par[i].Img +
          "'></div><p class='LinkP'><a href='" +
          par[i].Link +
          "' target='_blank'>Source...</a></p><div class='NameP Name'>" +
          par[i].Name +
          "</div><p class='PreProj PresenP'>" +
          par[i].Presen +
          "</p></div>";
      }
      document.querySelector(".BoxGPatf").innerHTML = Ph;
    };
    xReq4.send();
  } else {
    var xReq4 = new XMLHttpRequest();
    xReq4.open("GET", "JS/Partfolio.json", true);
    xReq4.onload = function () {
      par = JSON.parse(xReq4.responseText);
      Ph = "";
      for (let i = 0; i < par.length; i++) {
        if (par[i].Dom == ch) {
          if (ch == "Front-end") {
            document.querySelector(".All").classList.remove("btn");
            document.querySelector(".All").classList.add("bouton");

            document.querySelector(".LogoD").classList.remove("btn");
            document.querySelector(".LogoD").classList.add("bouton");

            document.querySelector(".Back-end").classList.remove("btn");
            document.querySelector(".Back-end").classList.add("bouton");

            document.querySelector(".Full-Stack").classList.remove("btn");
            document.querySelector(".Full-Stack").classList.add("bouton");

            document.querySelector(".Front-end").classList.remove("bouton");
            document.querySelector(".Front-end").classList.add("btn");
          } else if (ch == "Logo-Designer") {
            document.querySelector(".Front-end").classList.remove("btn");
            document.querySelector(".Front-end").classList.add("bouton");

            document.querySelector(".Back-end").classList.remove("btn");
            document.querySelector(".Back-end").classList.add("bouton");

            document.querySelector(".All").classList.remove("btn");
            document.querySelector(".All").classList.add("bouton");

            document.querySelector(".Full-Stack").classList.remove("btn");
            document.querySelector(".Full-Stack").classList.add("bouton");

            document.querySelector(".LogoD").classList.remove("bouton");
            document.querySelector(".LogoD").classList.add("btn");
          } else if (ch == "Back-end") {
            document.querySelector(".Front-end").classList.remove("btn");
            document.querySelector(".Front-end").classList.add("bouton");

            document.querySelector(".LogoD").classList.remove("btn");
            document.querySelector(".LogoD").classList.add("bouton");

            document.querySelector(".All").classList.remove("btn");
            document.querySelector(".All").classList.add("bouton");

            document.querySelector(".Full-Stack").classList.remove("btn");
            document.querySelector(".Full-Stack").classList.add("bouton");

            document.querySelector(".Back-end").classList.remove("bouton");
            document.querySelector(".Back-end").classList.add("btn");
          } else if (ch == "Full-Stack") {
            document.querySelector(".Front-end").classList.remove("btn");
            document.querySelector(".Front-end").classList.add("bouton");

            document.querySelector(".LogoD").classList.remove("btn");
            document.querySelector(".LogoD").classList.add("bouton");

            document.querySelector(".Back-end").classList.remove("btn");
            document.querySelector(".Back-end").classList.add("bouton");

            document.querySelector(".All").classList.remove("btn");
            document.querySelector(".All").classList.add("bouton");

            document.querySelector(".Full-Stack").classList.remove("bouton");
            document.querySelector(".Full-Stack").classList.add("btn");
          }

          Ph =
            Ph +
            "<div class='Preject col-sm-11 col-md-5 col-lg-2 col-xl-2'><div class='PORSON imgP'><img src='Image/" +
            par[i].Img +
            "'></div><p class='LinkP'><a href='" +
            par[i].Link +
            "'  target='_blank'>Source...</a></p><div class='NameP Name'>" +
            par[i].Name +
            "</div><p class='PreProj PresenP'>" +
            par[i].Presen +
            "</p></div>";
        }
      }
      document.querySelector(".BoxGPatf").innerHTML = Ph;
    };
    xReq4.send();
  }
}
