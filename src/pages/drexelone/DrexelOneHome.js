import Page from "../Page.js";

export default class DrexelOneHome extends Page {

    static urls = ["https://one.drexel.edu/", "https://one.drexel.edu/web/university/welcome/", "https://one.drexel.edu/web/university/welcome"];
    static createLoadingScreen = false;

    static stylize() {
        document.styleSheets[0].insertRule(`
            *::-webkit-scrollbar {
                width: 0px;
            }
        `);

        document.styleSheets[0].insertRule(`
            *::-webkit-scrollbar-track {
                width: 0px;
            }
        `);

        document.querySelector("#main-content").style.backgroundColor = "#22252b";
        document.querySelector("#page-wrapper").style.backgroundColor = "#22252b";

        Array.from(document.querySelectorAll(".portlet.portlet-container")).forEach(block => {
            block.style.border = "none";
            block.style.borderRadius = "12px";
            block.style.paddingTop = "15px";
            block.style.backgroundColor = "#282C34";
        });

        Array.from(document.querySelectorAll(".portlet-content")).forEach(block => {
            block.style.backgroundColor = "#282C34";
            block.style.color = "#AAAAAA";
            block.style.borderBottomLeftRadius = "12px";
            block.style.borderBottomRightRadius = "12px";
        });

        Array.from(document.querySelectorAll(".portlet-topper")).forEach(heading => {
            heading.style.backgroundColor = "#282C34";
        });

        Array.from(document.querySelectorAll(".custom-portlet-content-item")).forEach(text => {
            text.style.color = "#AAAAAA";
        });

        document.querySelector(".row.border-bottom.top-navigation").setAttribute("style", "border: none !important;");

        Array.from(document.querySelectorAll(".portlet-title-text")).forEach(header => {
            header.style.fontSize = "18px";
        });

        Array.from(document.querySelectorAll(".portlet-boundary")).forEach(block => {
            block.style.borderRadius = "12px";
        });

        Array.from(document.querySelectorAll(".targetedContentText")).forEach(element => {
            Array.from(element.children).forEach(child => {
                if (child.tagName.toLowerCase() === "hr") child.remove();
            });
        });

        Array.from(document.querySelectorAll("li.nscItem")).forEach(li => {
            li.style.border = "none";
        });

        Array.from(document.querySelectorAll(".nscState")).forEach(icon => {
            icon.remove();
        })

        Array.from(document.querySelectorAll(".col-xs-12")).forEach(element => {
            element.style.backgroundColor = "#282C34";
        });

        Array.from(document.querySelectorAll(".col-xs-12 a")).forEach(link => {
            link.style.color = "royalblue";
        });

        document.querySelector("#footer").remove();

        Array.from(document.querySelectorAll(".nscStatus.nscComplete")).forEach(checkmark => {
            let checkText = document.createElement("span");
            checkText.innerHTML = "&#10004;&nbsp;&nbsp;";
            checkmark.replaceWith(checkText);
            checkText.style.color = "mediumspringgreen";
        });

        Array.from(document.querySelectorAll(".nscStatus.nscIncomplete")).forEach(x => {
            let xText = document.createElement("span");
            xText.innerHTML = "&#10006;&nbsp;&nbsp;";
            xText.style.color = "tomato";
            x.replaceWith(xText);
        });

        document.querySelector("#nscChangeState").remove();
        let mentalHealth = document.querySelector(".alert.alert-warning");
        mentalHealth.style.backgroundColor = "#282C34";
        mentalHealth.style.border = "none";
        mentalHealth.style.color = "#AAAAAA";

        let links = [];
        Array.from(document.querySelectorAll(".nav.navbar-nav a")).forEach(link => {
            links.push({
                href: link.href,
                text: link.textContent
            });
        });

        document.querySelector("#navbar-container").remove();
        document.querySelector("#duSearch").remove();

        let navbar = document.createElement("div");
        navbar.style.display = "flex";
        navbar.style.alignItems = "center";
        navbar.style.justifyContent = "center";
        navbar.style.gap = "50px";
        navbar.style.flexGrow = "1";

        links.forEach(link => {
            let linkElement = document.createElement("a");
            linkElement.href = link.href;
            linkElement.textContent = link.text;
            linkElement.style.color = "white";
            linkElement.style.fontSize = "18px";
            linkElement.style.cursor = "pointer";
            navbar.appendChild(linkElement);
        });

        let right = document.querySelector(".right");
        right.style.backgroundColor = "transparent";

        document.querySelector("#_145_dockbarbodyContent").parentElement.style.backgroundColor = "#282C34";
        document.querySelector(".portlet-boundary.portlet-boundary_145_.portlet-static.portlet-static-end.portlet-dockbar").style.margin = "0px";
        document.querySelector(".portlet-boundary.portlet-boundary_145_.portlet-static.portlet-static-end.portlet-dockbar").style.paddingRight = "15px";


        let header = document.querySelector("#header-row");
        header.style.backgroundColor = "#282C34";
        header.style.height = "75px";
        header.style.display = "flex";
        header.style.alignItems = "center";
        header.insertBefore(navbar, right);

        document.querySelector("#siteLogo").remove();
    }

}