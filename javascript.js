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
})
