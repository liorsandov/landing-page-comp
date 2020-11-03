/* Script for FAQ show/hide functionality */
$(document).ready(function() {
    $(".sfly-faq-wrap").click(function() {
        $(".sfly-faq-arrow").css("background-position", "0 0");
        if ($(this).hasClass("open")) {
        $(".sfly-faq-answer", this).slideToggle("fast");
        $(".sfly-faq-wrap").removeClass("open");
        } else {
        $(".sfly-faq-wrap").removeClass("open");
        $(".sfly-faq-answer").slideUp("fast");
        if ($("#na-mobile").is(":visible")) {
            $(".sfly-faq-arrow", this).css("background-position", "-10px 0");
        } else {
            $(".sfly-faq-arrow", this).css("background-position", "-13px 0");
        }
        $(".sfly-faq-answer", this).slideToggle("fast");
        $(this).addClass("open");
        }
    });
}); /* END document ready */