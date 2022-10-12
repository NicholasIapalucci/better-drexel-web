import BlackboardCourses from "./pages/blackboard/BlackboardCourses.js";
import DrexelOneHome from "./pages/drexelone/DrexelOneHome.js";

function createLoader() {
    let loading = document.createElement("div");
    loading.style.width = "100%"
    loading.style.height = "100%";
    loading.style.position = "absolute";
    loading.style.left = "0px";
    loading.style.top = "0px";
    loading.style.zIndex = "99999";
    loading.style.backgroundColor = "#22252b";
    loading.textContent = "Loading...";
    loading.style.display = "flex";
    loading.style.justifyContent = "center";
    loading.style.alignItems = "center";
    loading.style.fontSize = "48px";
    loading.style.color = "white";
    loading.setAttribute("data-loading-screen", "true");
    document.body.appendChild(loading);
}

let pages = [
    BlackboardCourses,
    DrexelOneHome
];

pages.some(page => {
    if (page.url === window.location.href && page.createLoadingScreen) {
        createLoader();
        return true;
    }
    return false;
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request);
    if (request.message === "loaded" || request.message === "tab change") {
        pages.some(page => {
            console.log(request.url);
            if (page.urls.includes(request.url)) {
                page.stylize();
                return true;
            }
            return false;
        });
    }

    if (request.message === "tab change") window.location.reload();
    console.log(request.message);
});

export default function fadeOut(element, time = 1) {
    if (!element) return;
    if (element.style.opacity === "") element.style.opacity = "1";
    if (Number(element.style.opacity) <= 0) {
        element.remove();
        return;
    }

    element.style.opacity = String(Number(element.style.opacity - 0.1));
    setTimeout(() => { fadeOut(element, time) }, time * 100);
}
