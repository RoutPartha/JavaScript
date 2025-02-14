var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (event) {
    var rectanglelocation = rect.getBoundingClientRect();
    var insiderectangle = event.clientX - rectanglelocation.left;

    if (insiderectangle < rectanglelocation.width / 2) {
        var redColor = gsap.utils.mapRange(0, rectanglelocation.width / 2, 255, 0, insiderectangle);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            // ease: Power4,
        });
    } else {
        var blueColor = gsap.utils.mapRange(rectanglelocation.width / 2, rectanglelocation.width, 0, 255, insiderectangle);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            // ease: Power4,
        });
    }
});

rect.addEventListener("mouseleave", function () {
    //document.body.style.backgroundColor = "yellow";
    gsap.to(rect,{
        backgroundColor: "yellow",
    })
});