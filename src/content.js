const classes = {

    // Computing & Informatics 
    "CI-101": "Computing & Informatics Design I",
    "CI-102": "Computing & Informatics Design II",
    "CI-103": "Computing & Informatics Design III",
    "CI-106": "Computing & Informatics Design Project",
    "CI-120": "Transfer Student Seminar",
    "CI-489": "Seminar In Computing and Informatics",
    "CI-490": "Undergraduate Research Experience in Computing and Informatics",
    "CI-491": "Senior Project I",
    "CI-492": "Senior Project II",
    "CI-493": "Senior Project III",

    // Co-Operative Education
    "COOP-101": "Career Management & Professional Development",

    // Computer Science
    "CS-150": "Computer Science Principles",
    "CS-164": "Introduction to Computer Science",
    "CS-171": "Computer Programming I",
    "CS-172": "Computer Programming II",
    "CS-175": "Advanced Computer Programming I",
    "CS-176": "Advanced Computer Programming II",
    "CS-190": "Selected Computer Language",
    "CS-260": "Data Structures",
    "CS-265": "Advanced Programming Tools and Techniques",
    "CS-270": "Mathematical Foundations of Computer Science",
    "CS-277": "Algorithms and Analysis",
    "CS-281": "Systems Architecture",
    "CS-283": "Systems Programming",
    "CS-300": "Applied Symbolic Computation",
    "CS-303": "Algorithmic Number Theory and Cryptography",
    "CS-314": "Computing in the Small",
    "CS-338": "Graphical User Interfaces",
    "CS-341": "Serious Game Development",
    "CS-342": "Experimental Game Development",
    "CS-345": "Computer Game Design and Development",
    "CS-352": "Processor Architecture & Analysis",
    "CS-360": "Programming Language Concepts",
    "CS-361": "Concurrent Programming",
    "CS-370": "Operating Systems",
    "CS-375": "Web Development",
    "CS-377": "Software Security",
    "CS-380": "Artificial Intelligence",
    "CS-383": "Machine Learning",
    "CS-385": "Evolutionary Computing",
    "CS-387": "Game AI Development",
    "CS-429": "Software Defined Radio Labratory",
    "CS-430": "Computer Graphics",
    "CS-431": "Advanced Rendering Techniques",
    "CS-432": "Interactive Computer Graphics",
    "CS-435": "Computational Photography",
    "CS-440": "Theory of Computation",
    "CS-441": "Compiler Implementation",
    "CS-457": "Data Structures and Algorithms I",
    "CS-458": "Data Structures and Algorithms II",
    "CS-460": "Theory Reading Group",
    "CS-461": "Database Systems",
    "CS-465": "Privacy and Trust",
    "CS-472": "Computer Networks: Theory, Applications, and Programming",
    "CS-475": "Network Security",
    "CS-476": "High Performance Computing",
    "CS-479": "Advanced Network Security",
    "CS-481": "Advanced Artificial Intelligence",
    "CS-486": "Topics in Artificial Intelligence",
    "CS-I199": "Independent Study in CS",
    "CS-I299": "Independent Study in CS",
    "CS-I399": "Independent Study in CS",
    "CS-I499": "Independent Study in CS",
    "CS-T180": "Special Topics in Computer Science",
    "CS-T280": "Special Topics in Computer Science",
    "CS-T380": "Special Topics in Computer Science",
    "CS-T480": "Special Topics in Computer Science",

    // Computing Technology
    "CT-140": "Network Administration I",
    "CT-200": "Server I",
    "CT-201": "Information Technology Security I",
    "CT-210": "Open Server I",
    "CT-212": "Computer Forensics I: Fundamentals",
    "CT-250": "IT Security Awareness",
    "CT-301": "Information TechnologyS Security II",
    "CT-310": "Open Server II",
    "CT-312": "Access Control and Intrusion Detection Technology",
    "CT-315": "Security Management Practice",
    "CT-320": "Server II",
    "CT-330": "Network Administration II",
    "CT-335": "Mobile Applications",
    "CT-353": "Virtual Environments and Cloud Security",
    "CT-355": "Wireless Network Security Technology",
    "CT-362": "Network Auditing Tools",
    "CT-382": "Applied Cryptography",
    "CT-388": "Topics in Computing Technology I",
    "CT-389": "Topics in Computing Technology II",
    "CT-393": "Information Technology Security Risk Assessment",
    "CT-400": "Network Security",
    "CT-412": "Information Technology Security Policies",
    "CT-414": "Ethical Hacking and Penetrating Testing",
    "CT-415": "Disaster Recovery and Continuity Planning",
    "CT-432": "Information Technology Security Systems Audits",
    "CT-491": "Senior Project I",
    "CT-496": "Senior Project II",
    "CT-I199": "Independent Study in CST",
    "CT-I299": "Independent Study in CST",
    "CT-I399": "Independent Study in CST",
    "CT-I499": "Independent Study in CST",

    // Data Science
    "DSCI-351": "Recommender Systems",
    "DSCI-471": "Applied Deep Learning",

    // Exam Periods
    "EXAM-081": "Exam Period",

    // Information Science & Systems 

    // Mathematics
    "MATH-201": "Linear Algebra"
};

if (
    window.location.href === "https://learn.dcollege.net/ultra/course" ||
    window.location.href === "https://learn.dcollege.net/ultra/calendar"
) {
    createLoader();
}

function createLoader() {
    loading = document.createElement("div");
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

let initialized = false;
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "loaded" || request.message === "tab change") {
        if (request.url === "https://learn.dcollege.net/ultra/course") initBlackboard();
        else if (request.url === "https://learn.dcollege.net/ultra/calendar") initBlackboardCalendar();
    }

    if (request.message === "tab change") window.location.reload();
});

let bbCounter = 1;
function initBlackboard() {

    if (document.styleSheets && document.styleSheets[0] && !initialized) {
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
        elem.parentElement.parentElement.style.width = "calc((100vw - 300px - (6 * 25px))/4)";
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
        header.style.zIndex = "9999";
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
        courseContainer.style.paddingRight = "30px";
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

    if (bbCounter == 2) fadeOut(document.querySelector("*[data-loading-screen]"), 0.5);
    bbCounter++;
    initialized = true;

    setTimeout(initBlackboard, 1500)

}

let bbCalendarCounter = 0;
function initBlackboardCalendar() {
    document.querySelector("#main-content-inner").style.marginLeft = "100px";


    if (bbCalendarCounter == 2) document.querySelector("*[data-loading-screen]").remove();
    bbCalendarCounter++;

    setTimeout(initBlackboardCalendar, 1500)
}

function fadeOut(element, time = 1) {
    if (!element) return;
    if (element.style.opacity === "") element.style.opacity = "1";
    if (Number(element.style.opacity) <= 0) {
        element.remove();
        return;
    }

    element.style.opacity = String(Number(element.style.opacity - 0.1));
    setTimeout(() => { fadeOut(element, time) }, time * 100);
}