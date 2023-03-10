

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});
//resume popup
function createPopup() {
    let popup = window.open("imgs/Lucas_Slade_Resume-2.pdf", "popup", "width=600, height=400");
    popup.document.write("<html><head><title>PDF Viewer</title></head><body><embed src='imgs/Lucas_Slade_Resume-2.pdf' width='100%' height='100%'></body></html>");
}
//like button
let count = 0; // initialize count to 0
// Check if there is a stored count in local storage and set it as the initial count
if(localStorage.getItem('likeCount')) {
    count = parseInt(localStorage.getItem('likeCount')); // convert string to integer
}

window.onload = function() {
    // Update the button text to show the current count on page load
    document.getElementById('likeButton').innerHTML = `<i class="ti-heart text-danger"></i>${count}`;
}

function like() {
    // Increment the count when the button is clicked
    count++;
    // Update the button text to show the current count
    document.getElementById('likeButton').innerHTML = `<i class="ti-heart text-danger"></i> ${count}`;
    // Store the count in local storage so it persists across page reloads
    localStorage.setItem('likeCount', count);
}
//comment section
// function addComment(cardNumber) {
//     // Get the comment text from the input field
//     let comment = document.getElementById('commentInput' + cardNumber).value;
//     // Clear the input field
//     document.getElementById('commentInput' + cardNumber).value = "";
//     // Create a new comment element with the comment text
//     let commentElement = document.createElement('div');
//     commentElement.innerHTML = comment;
//     // Add the new comment element to the current card's comment section
//     let card = document.getElementById('card' + cardNumber);
//     card.querySelector('.comments').appendChild(commentElement);
//     // Save the comment to local storage for the corresponding card
//     let comments = JSON.parse(localStorage.getItem('comments')) || {};
//     if(!comments[cardNumber]) {
//         comments[cardNumber] = [];
//     }
//     comments[cardNumber].push(comment);
//     localStorage.setItem('comments', JSON.stringify(comments));
// }
//
// function toggleCommentForm(cardNumber) {
//     let commentForm = document.getElementById('commentForm' + cardNumber);
//     commentForm.style.display = commentForm.style.display === 'none' ? 'block' : 'none';
// }
// function toggleCommentSection(cardNumber) {
//     let commentSection = document.getElementById('comments' + cardNumber);
//     commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
// }
//
// window.onload = function() {
//     // Load comments from local storage and display them in the comment cards
//     let comments = JSON.parse(localStorage.getItem('comments')) || {};
//     for(let i = 1; i <= 3; i++) {
//         let cardComments = comments[i] || [];
//         let card = document.getElementById('card' + i);
//         let commentsSection = card.querySelector('.comments');
//         for(let j = 0; j < cardComments.length; j++) {
//             let commentElement = document.createElement('div');
//             commentElement.innerHTML = cardComments[j];
//             commentsSection.appendChild(commentElement);
//         }
//     }
// }
//
// window.onload = function() {
//     // Load comments from local storage and display them in the comments section
//     let comments = JSON.parse(localStorage.getItem('comments')) || [];
//     let commentsSection = document.getElementById('commentsSection');
//     for(let i = 0; i < comments.length; i++) {
//         let commentElement = document.createElement('div');
//         commentElement.innerHTML = comments[i];
//         commentsSection.appendChild(commentElement);
//     }
// }
//end of page form
(function(){
    emailjs.init("wcYKviIWo9ny5-foM"); // Replace with your User ID
})();

function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the user's name, email, and message from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send the email using EmailJS
    emailjs.send("service_p8ogam2", "template_j53pz0d", {
        "from_name": name,
        "from_email": email,
        "message": message
    }).then(function(response) {
        alert("Your message was sent successfully!");
        console.log("SUCCESS", response);
    }, function(error) {
        alert("Sorry, something went wrong. Please try again later.");
        console.log("FAILED", error);
    });
}

// protfolio filters
$(window).on("load", function() {
    let t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        let i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


