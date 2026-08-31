/* =====================================================
   OPEN INVITATION
===================================================== */
function openInvitation(){
    const opening =
        document.getElementById("opening");
    const music =
        document.getElementById("music");
    const musicButton =
        document.getElementById("musicButton");
    opening.style.opacity = "0";
    setTimeout(() => {
        opening.style.display = "none";
    },1200);
    music.play()
        .then(() => {
            musicButton.classList.add("music-spin");
        })
        .catch(() => {
            console.log("Musik belum dapat diputar.");
        });
    createPetals();
}
/* =====================================================
   MUSIC
===================================================== */
function toggleMusic(){
    const music =
        document.getElementById("music");
    const button =
        document.getElementById("musicButton");
    if(music.paused){
        music.play();
        button.innerHTML = "🎵";
        button.classList.add("music-spin");
    }else{
        music.pause();
        button.innerHTML = "🔇";
        button.classList.remove("music-spin");
    }
}
/* =====================================================
   COUNTDOWN
   04 MEI 2030
===================================================== */
const weddingDate =
    new Date(
        "May 4, 2030 09:00:00"
    ).getTime();
function updateCountdown(){
    const now =
        new Date().getTime();
    const distance =
        weddingDate - now;
    if(distance <= 0){
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        return;
    }
    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );
    const hours =
        Math.floor(
            (distance %
            (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );
    const minutes =
        Math.floor(
            (distance %
            (1000 * 60 * 60))
            /
            (1000 * 60)
        );
    const seconds =
        Math.floor(
            (distance %
            (1000 * 60))
            /
            1000
        );
    document.getElementById("days")
        .innerHTML =
        String(days).padStart(2,"0");
    document.getElementById("hours")
        .innerHTML =
        String(hours).padStart(2,"0");
    document.getElementById("minutes")
        .innerHTML =
        String(minutes).padStart(2,"0");
    document.getElementById("seconds")
        .innerHTML =
        String(seconds).padStart(2,"0");
}
setInterval(updateCountdown,1000);
updateCountdown();
/* =====================================================
   SCROLL REVEAL
===================================================== */
function revealElements(){
    const elements =
        document.querySelectorAll(".reveal");
    elements.forEach(element => {
        const position =
            element.getBoundingClientRect().top;
        if(
            position <
            window.innerHeight - 100
        ){
            element.classList.add("show");
        }
    });
}
window.addEventListener(
    "scroll",
    revealElements
);
revealElements();
/* =====================================================
   PETAL / FLOWER EFFECT
===================================================== */
function createPetals(){
    const symbols = [
        "♡",
        "❀",
        "✦",
        "✧",
        "❁",
        "✿",
        "⋆"
    ];
    setInterval(() => {
        const petal =
            document.createElement("div");
        petal.className =
            "falling-petal";
        petal.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];
        petal.style.position =
            "fixed";
        petal.style.top =
            "-30px";
        petal.style.left =
            Math.random() * 100 + "vw";
        petal.style.zIndex =
            "50";
        petal.style.pointerEvents =
            "none";
        petal.style.fontSize =
            (12 + Math.random() * 18) + "px";
        petal.style.color =
            Math.random() > .5
            ? "#9fc4d9"
            : "#ffffff";
        petal.style.opacity =
            "0.75";
        const duration =
            5 + Math.random() * 7;
        petal.style.animation =
            `fallPetal ${duration}s linear forwards`;
        document.body.appendChild(
            petal
        );
        setTimeout(() => {
            petal.remove();
        },12000);
    },450);
}
/* =====================================================
   PETAL CSS
===================================================== */
const petalStyle =
    document.createElement("style");
petalStyle.innerHTML = `
@keyframes fallPetal{
    0%{
        transform:
        translateY(-30px)
        translateX(0)
        rotate(0deg);
    }
    25%{
        transform:
        translateY(25vh)
        translateX(30px)
        rotate(120deg);
    }
    50%{
        transform:
        translateY(50vh)
        translateX(-25px)
        rotate(240deg);
    }
    75%{
        transform:
        translateY(75vh)
        translateX(25px)
        rotate(360deg);
    }
    100%{
        transform:
        translateY(110vh)
        translateX(-20px)
        rotate(720deg);
    }
}
`;
document.head.appendChild(petalStyle);
/* =====================================================
   RSVP WHATSAPP
===================================================== */
function sendRSVP(){
    const name =
        document.getElementById(
            "guestName"
        ).value.trim();
    const attendance =
        document.getElementById(
            "attendance"
        ).value;
    const message =
        document.getElementById(
            "message"
        ).value.trim();
    if(!name){
        alert(
            "Silakan masukkan nama Anda."
        );
        return;
    }
    if(!attendance){
        alert(
            "Silakan pilih konfirmasi kehadiran."
        );
        return;
    }
    const text =
        "Assalamu'alaikum Riki & Syakira 💙\n\n" +
        "Nama: " + name + "\n" +
        "Kehadiran: " + attendance + "\n" +
        "Ucapan: " +
        (message || "-") +
        "\n\n" +
        "Semoga Riki & Syakira menjadi keluarga " +
        "yang selalu dipenuhi cinta, ketenangan, " +
        "dan kebahagiaan. 🤍";
    /*
       GANTI DENGAN NOMOR WHATSAPP
       TUJUAN RSVP.
    */
    const phone =
        "6281234567890";
    const whatsappURL =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(text);
    window.open(
        whatsappURL,
        "_blank"
    );
}
/* =====================================================
   EXTRA SPARKLE EFFECT
===================================================== */
document.addEventListener(
    "mousemove",
    function(event){
        if(Math.random() > 0.82){
            const sparkle =
                document.createElement("span");
            sparkle.innerHTML = "✦";
            sparkle.style.position =
                "fixed";
            sparkle.style.left =
                event.clientX + "px";
            sparkle.style.top =
                event.clientY + "px";
            sparkle.style.pointerEvents =
                "none";
            sparkle.style.zIndex =
                "999";
            sparkle.style.color =
                "#9fc3d8";
            sparkle.style.fontSize =
                "10px";
            sparkle.style.transition =
                "1s ease";
            document.body.appendChild(
                sparkle
            );
            setTimeout(() => {
                sparkle.style.transform =
                    "translateY(-25px) scale(0)";
                sparkle.style.opacity =
                    "0";
            },50);
            setTimeout(() => {
                sparkle.remove();
            },1000);
        }
    }
);