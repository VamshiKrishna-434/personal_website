document.addEventListener("DOMContentLoaded", function () {
    var toggleBtn = document.getElementById("toggleBtn");
    var detailsContainer = document.getElementById("detailsContainer");

    toggleBtn.addEventListener("click", function () {
        if (detailsContainer.style.display === "none" || detailsContainer.style.display === "") {
            detailsContainer.style.display = "block";
            toggleBtn.innerText = "Hide Details";
        } else {
            detailsContainer.style.display = "none";
            toggleBtn.innerText = "Show Details";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var emailBtn = document.getElementById("emailBtn");

    emailBtn.addEventListener("click", function () {
        var emailAddress = 'vamshipotterhead434@gmail.com';
        var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress);
        window.location.href = mailtoLink;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var resumeTab = document.getElementById("resume-tab");

    resumeTab.addEventListener("click", function () {
        var resumePDF = 'VamshiKrishna_Resume.pdf';
        window.open(resumePDF, '_blank');
    });
});
