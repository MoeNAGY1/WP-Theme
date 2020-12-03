   window.onload = function() {
        const bars = document.querySelector(".bars");
        const menu = document.querySelector(".menu");
        bars.addEventListener("click", function(e) {
            this.classList.toggle("active");
            if (this.classList.contains("active")) {
                gsap.to(".menu", {
                    duration: 0.1,
                    display: "flex",
                    ease: "expo.in"
                });
                gsap.to(".navBefore", {
                    duration: 0.5,
                    marginLeft: "0",
                    ease: "expo.in"
                });
                gsap.to(".nav", {
                    duration: 0.8,
                    marginLeft: "0",
                    delay: 0.3,
                    ease: "expo.in"
                });
                gsap.to(".navigation", {
                    duration: 1,
                    opacity: "1",
                    delay: 0.8,
                    ease: "expo.in"
                });
            } else {
                gsap.to(".navigation", {
                    duration: 0.2,
                    opacity: "0",
                    ease: "expo.in"
                });
                gsap.to(".nav", {
                    duration: 1,
                    marginLeft: "100%",
                    delay: 0.3,
                    ease: "expo.in"
                });
                gsap.to(".navBefore", {
                    duration: 1,
                    marginLeft: "100%",
                    delay: 0.5,
                    ease: "expo.in"
                });
                gsap.to(".menu", {
                    duration: 1,
                    display: "none",
                    delay: 1,
                    ease: "expo.in"
                });
            }
        });
    };




    setInterval(() => {
        document.getElementById("datendtime").innerHTML = refreshDate(new Date())
    }, 1000);

    document.querySelector("#datendtime").style.color = "snow";

    function refreshDate(date) {
        return date.toLocaleString([], {
            weekday: 'long',
            month: '2-digit',
            day: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });



    }




    $('#popup1').popup();


    $('#popup2').popup({
        pagecontainer: '#page',
        escape: false
    });

</script>


<script>
    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

