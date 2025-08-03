document.addEventListener("DOMContentLoaded", function () {
    const heartIcon = document.querySelector(".fa-heart");

    heartIcon.addEventListener("click", function () {
        if (heartIcon.classList.contains("far")) {
            heartIcon.classList.remove("far");
            heartIcon.classList.add("fas");
            heartIcon.style.color = "red";
        } else {
            heartIcon.classList.remove("fas");
            heartIcon.classList.add("far");
            heartIcon.style.color = "black";
        }
    });
});


window.addEventListener("scroll", function () {
    let profilePic = document.querySelector(".profile img");
    let scrollY = window.scrollY;

    if (scrollY > 1) { // স্ক্রল ৫০px পার হলে বড় হবে
        profilePic.style.transform = "scale(1.2)";
    } else {
        profilePic.style.transform = "scale(1)";
    }
}); 

let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    let footerBar = document.querySelector(".footer-bar");
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // স্ক্রল নিচে করলে ফুটার বার দেখাবে
        footerBar.style.bottom = "0";
    } else {
        // স্ক্রল উপরে করলে ফুটার বার লুকাবে
        footerBar.style.bottom = "-50px";
    }

    lastScrollTop = scrollTop;
});




// শুরুতে ২০০ লাইক এবং ফলো থাকবে
let likeCount = 732;
let followCount = 684;

// Like Button Functionality
document.getElementById("like-btn").addEventListener("click", function() {
    likeCount++;
    document.getElementById("like-count").innerText = likeCount;
    this.innerText = `Liked ${likeCount}`;
});

// Follow Button Functionality
document.getElementById("follow-btn").addEventListener("click", function() {
    followCount++;
    document.getElementById("follow-count").innerText = followCount;
    this.innerText = `Following ${followCount}`;
});

// Subscribe Button (Redirect to YouTube Channel)
document.getElementById("subscribe-btn").addEventListener("click", function() {
    window.open("https://www.youtube.com/@fbmMarket", "_blank");
});

// Share Button Functionality
document.getElementById("share-btn").addEventListener("click", function() {
    if (navigator.share) {
        navigator.share({
            title: "ইদ্রিস ভাইয়ের প্রোফাইল ভিসিট করুন!",
            url: window.location.href
        });
    } else {
        alert("Sharing not supported in this browser.");
    }
});
