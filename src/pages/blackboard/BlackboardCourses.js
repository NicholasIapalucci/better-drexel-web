import Page from "../Page.js";
import classes from "../../data/classes.js";

export default class BlackboardCourses extends Page {

    static urls = ["https://learn.dcollege.net/ultra/course"];

    static bbCounter = 0;
    static stylize() {

        if (document.styleSheets && document.styleSheets[0] && BlackboardCourses.bbCounter === 0) {
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
        }

        Array.from(document.querySelectorAll(".js-course-title-element")).forEach(element => {
            element.style.color = "white";
            element.style.fontSize = "18px";

            if ((element.innerHTML.match(/-/g) ?? []).length <= 1) return;

            let className = element.innerHTML.substring(0, element.innerHTML.indexOf("-", element.innerHTML.indexOf("-") + 1));
            element.innerHTML = `${classes[className]}`;

            let courseNumber = document.createElement("p");
            courseNumber.innerHTML = className;
            courseNumber.style.color = "#888888";
            courseNumber.style.marginTop = "5px";
            courseNumber.style.fontSize = "18px";
            element.after(courseNumber);
        });

        let clct = document.querySelector(".base-courses");
        if (clct) clct.style.backgroundColor = "#22252b";

        Array.from(document.querySelectorAll(".element-details.summary")).forEach(elem => {
            elem.style.backgroundColor = "#282C34";
            elem.style.height = "100%";
            elem.style.padding = "30px";
            elem.style.borderRadius = "12px";
        });
        Array.from(document.querySelectorAll(".element-card.course-element-card.highlight.pointer.bar.js-course-details.child-is-invokable.course-color-classic")).forEach(elem => {
            elem.style.border = "none";
            elem.style.backgroundColor = "transparent";
            elem.style.width = "100%";
            elem.style.height = "100%";
            elem.style.borderRadius = "12px";
            elem.parentElement.parentElement.style.marginBottom = "13px";
            elem.parentElement.parentElement.style.width = "calc((100vw - 300px - (6 * 26px))/4)";
            elem.parentElement.parentElement.style.aspectRatio = "1 / 1";
        });

        Array.from(document.querySelectorAll(".course-banner")).forEach(elem => elem.remove());

        Array.from(document.querySelectorAll(".multi-column-course-id")).forEach(elem => {
            elem.remove();
        });

        Array.from(document.querySelectorAll(".instructors bdi")).forEach(elem => {
            elem.style.color = "white";
            elem.style.fontSize = "14px";
        });

        Array.from(document.querySelectorAll(".user-name.username")).forEach(elem => elem.style.marginBottom = "0px");
        document.querySelector(".course-columns-header")?.remove();
        document.querySelector(".term-navigator")?.remove();
        let header = document.querySelector(".base-courses-header-container.base-header.themed-background-primary-medium-down.color-selection-live-mode");
        if (header) {
            header.style.backgroundColor = "#282C34";
            header.style.border = "none";
            header.style.position = "absolute";
            header.style.width = "calc(100vw - 300px)";
            header.style.top = "0px";
            header.style.left = "300px";
            header.style.zIndex = "2";
        }

        let headerText = document.querySelector("#main-heading");
        if (headerText) {
            headerText.style.color = "white";
            headerText.style.fontFamily = "Segoe UI";
        }

        let sidebar = document.querySelector(".hide-in-background.themed-background-primary-fill-only.left-off-canvas-menu.color-selection-live-mode");
        if (sidebar) {
            sidebar.style.width = "300px";
            sidebar.setAttribute("style", "background-color: #282C34 !important; width: 300px;");
        }

        let mainContainer = document.querySelector(".base-courses-container");
        if (mainContainer) {
            mainContainer.style.marginLeft = "100px";
            mainContainer.style.width = "calc(100vw - 300px)";
            mainContainer.style.marginTop = "105px";
            mainContainer.style.gap = "25px";
        }

        Array.from(document.querySelectorAll(".footer-link")).forEach(elem => elem.remove());

        let logo = document.querySelector(".branding.themed-logo-background-primary-fill");
        if (logo) {
            logo.setAttribute("style", "background-color: #22252b !important;");
            logo.parentElement.style.border = "none";
        }

        let courseContainer = document.querySelector(".course-org-list");
        if (courseContainer) {
            courseContainer.style.display = "flex";
            courseContainer.style.flexWrap = "wrap";
            courseContainer.style.height = "fit-content";
            courseContainer.style.paddingTop = "30px";
        }

        document.querySelector("#course-card-term-name-_641_1")?.remove();
        document.querySelector("#course-card-term-name-")?.remove();

        let favicon = document.querySelector("link[rel~='icon']");
        if (!favicon) {
            favicon = document.createElement('link');
            favicon.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(favicon);
        }

        favicon.href = "https://cdn.discordapp.com/attachments/467057117975543823/1029752295325437962/650143.png"

        Array.from(document.querySelectorAll(".link-text") ?? []).forEach(elem => elem.style.fontSize = "18px");
        if (window.onresize) window.onresize();

        if (BlackboardCourses.bbCounter == 2) BlackboardCourses.fadeOut(document.querySelector("*[data-loading-screen]"), 0.5);
        BlackboardCourses.bbCounter++;

        setTimeout(BlackboardCourses.stylize, 1500)

    }

    static fadeOut(element, time = 1) {
        if (!element) return;
        if (element.style.opacity === "") element.style.opacity = "1";
        if (Number(element.style.opacity) <= 0) {
            element.remove();
            return;
        }
    
        element.style.opacity = String(Number(element.style.opacity - 0.1));
        setTimeout(() => { BlackboardCourses.fadeOut(element, time) }, time * 100);
    }
}