window.addEventListener('DOMContentLoaded', () => {
    //PHOTONEST
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4000); // Change image every 4 seconds
    }


    // JELLO
    let slideIndex1 = 0;
    showSlides1();

    function showSlides1() {
        let i;
        let slides1 = document.getElementsByClassName("mySlides1");
        for (i = 0; i < slides1.length; i++) {
            slides1[i].style.display = "none";
        }
        slideIndex1++;
        if (slideIndex1 > slides1.length) { slideIndex1 = 1 }
        slides1[slideIndex1 - 1].style.display = "block";
        setTimeout(showSlides1, 4000); // Change image every 4 seconds
    }

    // QUILLED
    let slideIndex2 = 0;
    showSlides2();

    function showSlides2() {
        let i;
        let slides2 = document.getElementsByClassName("mySlides2");
        for (i = 0; i < slides2.length; i++) {
            slides2[i].style.display = "none";
        }
        slideIndex2++;
        if (slideIndex2 > slides2.length) { slideIndex2 = 1 }
        slides2[slideIndex2 - 1].style.display = "block";
        setTimeout(showSlides2, 4000); // Change image every 4 seconds
    }

    // SNACK
    let slideIndex3 = 0;
    showSlides3();

    function showSlides3() {
        let i;
        let slides3 = document.getElementsByClassName("mySlides3");
        for (i = 0; i < slides3.length; i++) {
            slides3[i].style.display = "none";
        }
        slideIndex3++;
        if (slideIndex3 > slides3.length) { slideIndex3 = 1 }
        slides3[slideIndex3 - 1].style.display = "block";
        setTimeout(showSlides3, 4000); // Change image every 4 seconds
    }
})
