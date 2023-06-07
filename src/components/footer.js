import gitHubLogo from "../images/github-mark.png"

const Footer = function () {
    const parent = document.querySelector("#parent");
  
    const footer = document.createElement("div");
    footer.setAttribute("id", "footer");
    parent.appendChild(footer);
  
    const github = new Image();
    github.src = gitHubLogo;
    github.setAttribute('id', 'github-logo')
    github.setAttribute("alt", "github logo");
    footer.appendChild(github);
  
    const username = document.createElement("p");
    username.setAttribute("id", "username");
    username.innerHTML = `<a href="https://github.com/edensalt/restaurant-page">@edensalt</a>`;
    footer.appendChild(username);
  
    return footer;
  };

  export default Footer;