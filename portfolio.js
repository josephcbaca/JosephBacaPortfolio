$('.flip').hover(function () {
    $(this).find('.card').toggleClass('darkened-image');
});

$("#copy-text").on("click", function () {
    copyToClipBoard("josephcbaca@gmail.com");
    popUpClipBoard()
});

const copyToClipBoard = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
};

function popUpClipBoard() {
    $("#popUp").show();
    setTimeout(function () {
        $("#popUp").hide();
    }, 300);

}

// portfolio-row
// Projects

let projects = [
    {
        id: 1,
        img: "./assets/projects/brewr.jpg",
        alt: "Screenshot of brewR project.",
        h5: "brewR",
        siteHref: "https://brewrs.herokuapp.com/",
        ghHref: "https://github.com/JMantis0/brewR"
    }, {
        id: 2,
        img: "./assets/projects/DecisionsDecisions.jpg",
        alt: "Screenshot of Decisions Decisions project.",
        h5: "Decisions Decisions",
        siteHref: "https://josephcbaca.github.io/DecisionsDecisions/",
        ghHref: "https://github.com/josephcbaca/DecisionsDecisions"
    }, {
        id: 3,
        img: "./assets/projects/burgermeister.jpg",
        alt: "Screenshot of The Burgermeister project.",
        h5: "The Burgermeister",
        siteHref: "https://immense-thicket-40150.herokuapp.com/",
        ghHref: "https://github.com/josephcbaca/Burgermeisterz-Revenge"
    }, {
        id: 4,
        img: "./assets/projects/DayPlanner.jpg",
        alt: "Screenshot of Personal Day Planner project.",
        h5: "Personal Day Planner",
        siteHref: "https://josephcbaca.github.io/PersonalDayPlanner/",
        ghHref: "https://github.com/josephcbaca/PersonalDayPlanner"
    }, {
        id: 5,
        img: "./assets/projects/WeatherDashboard.jpg",
        alt: "Screenshot of Weather Dashboard project.",
        h5: "Weather Dashboard",
        siteHref: "https://josephcbaca.github.io/WeatherDashboard/",
        ghHref: "https://github.com/josephcbaca/WeatherDashboard"
    }
];

let otherProjects = [{
    id: 1,
    img: "./assets/other_projects/totems.jpg",
    alt: "Four squares stacked on top of eachother and the word Totems at the bottom.",
    h5: "Totems",
    siteHref: "https://josephcbaca.github.io/Totems/",
    ghHref: "https://github.com/josephcbaca/Totems/settings"
}
];

renderProjects();

function renderProjects() {
    $(".portfolio-row").empty();
    $(".projectDiv").empty();

    let projectH1 = $("<h1>");
    projectH1.text("Projects");
    projectH1.addClass("col-5");
    $(".projectDiv").append(projectH1);

    let toOtherProjectsButton = $("<button>");
    toOtherProjectsButton.text("Art Projects");
    toOtherProjectsButton.addClass("col-2 btn btn-dark mt-2");
    toOtherProjectsButton.attr("id", "toOtherProjectsButton")
    $(".projectDiv").append(toOtherProjectsButton);

    for (let i = 0; i < projects.length; i++) {

        let divCol = $("<div>")
        divCol.addClass("col-4 mb-2");
        divCol.attr("id", `div-col-${projects[i].id}`)
        $(".portfolio-row").append(divCol);

        let imgHead = $("<img>");
        imgHead.addClass("card-img");
        imgHead.attr("src", `${projects[i].img}`);
        imgHead.attr("alt", `${projects[i].alt}`);
        $(`#div-col-${projects[i].id}`).append(imgHead);

        let divOverlay = $("<div>");
        divOverlay.addClass("card-img-overlay");
        divOverlay.attr("id", `div-overlay-${projects[i].id}`)
        $(`#div-col-${projects[i].id}`).append(divOverlay);

        let divCarouselCap = $("<div>");
        divCarouselCap.addClass("carousel-caption caption-edit");
        divCarouselCap.attr("id", `carousel-${projects[i].id}`)
        $(`#div-overlay-${projects[i].id}`).append(divCarouselCap);

        let imgH5 = $("<h5>");
        imgH5.text(`${projects[i].h5}`);
        imgH5.attr(`text-${projects[i].id}`);
        $(`#carousel-${projects[i].id}`).append(imgH5);

        let siteRef = $("<a>");
        siteRef.addClass("col-6")
        siteRef.attr("target", "_blank")
        siteRef.text("Website");
        siteRef.attr("href", `${projects[i].siteHref}`);
        $(`#carousel-${projects[i].id}`).append(siteRef);

        let ghRef = $("<a>");
        ghRef.addClass("col-6")
        ghRef.attr("target", "_blank")
        ghRef.text("GitHub");
        ghRef.attr("href", `${projects[i].ghHref}`);
        $(`#carousel-${projects[i].id}`).append(ghRef);
    };
};

function renderOtherProjects() {
    $(".portfolio-row").empty();
    $(".projectDiv").empty();

    let blankDiv = $("<div>");
    blankDiv.addClass("col-5");
    $(".projectDiv").append(blankDiv);

    let toProjectsButton = $("<button>");
    toProjectsButton.text("Projects");
    toProjectsButton.addClass("col-2 btn btn-dark mt-2");
    toProjectsButton.attr("id", "toProjectsButton")
    $(".projectDiv").append(toProjectsButton);

    let otherProjectH1 = $("<h1>");
    otherProjectH1.text("Art Projects");
    otherProjectH1.addClass("col-5  text-right");
    $(".projectDiv").append(otherProjectH1);

    for (let i = 0; i < otherProjects.length; i++) {

        let divCol = $("<div>")
        divCol.addClass("col-4 mb-2");
        divCol.attr("id", `div-col-${otherProjects[i].id}`)
        $(".portfolio-row").append(divCol);

        let imgHead = $("<img>");
        imgHead.addClass("card-img");
        imgHead.attr("src", `${otherProjects[i].img}`);
        imgHead.attr("alt", `${otherProjects[i].alt}`);
        $(`#div-col-${otherProjects[i].id}`).append(imgHead);

        let divOverlay = $("<div>");
        divOverlay.addClass("card-img-overlay");
        divOverlay.attr("id", `div-overlay-${otherProjects[i].id}`)
        $(`#div-col-${otherProjects[i].id}`).append(divOverlay);

        let divCarouselCap = $("<div>");
        divCarouselCap.addClass("carousel-caption caption-edit");
        divCarouselCap.attr("id", `carousel-${otherProjects[i].id}`)
        $(`#div-overlay-${otherProjects[i].id}`).append(divCarouselCap);

        let imgH5 = $("<h5>");
        imgH5.text(`${otherProjects[i].h5}`);
        imgH5.attr(`text-${otherProjects[i].id}`);
        $(`#carousel-${otherProjects[i].id}`).append(imgH5);

        let siteRef = $("<a>");
        siteRef.addClass("col-6")
        siteRef.attr("target", "_blank")
        siteRef.text("Website");
        siteRef.attr("href", `${otherProjects[i].siteHref}`);
        $(`#carousel-${otherProjects[i].id}`).append(siteRef);

        let ghRef = $("<a>");
        ghRef.addClass("col-6")
        ghRef.attr("target", "_blank")
        ghRef.text("GitHub");
        ghRef.attr("href", `${otherProjects[i].ghHref}`);
        $(`#carousel-${otherProjects[i].id}`).append(ghRef);
    };
};

$(document).on("click", "#toOtherProjectsButton", renderOtherProjects);
$(document).on("click", "#toProjectsButton", renderProjects);
