
    
    
$(document).ready(function() {
    const $ucFlexElements = $(".uc-flex");
    let currentIndex = 0;
    let buttonDisabled = false;

    const $wrapper = $('<div class="flex-wrapper"></div>');
    $ucFlexElements.wrapAll($wrapper);

    function updateActiveSection() {
        $ucFlexElements.removeClass("active");
        $ucFlexElements.eq(currentIndex).addClass("active");

        $ucFlexElements.find(".flex-content").removeClass("active");
        $ucFlexElements.eq(currentIndex).find(".flex-content").addClass("active");
    }

    function updateButtonStates() {
        $(".prevButton").prop("disabled", currentIndex === 0).toggleClass("inactive", currentIndex === 0);
        $(".nextButton").prop("disabled", currentIndex === $ucFlexElements.length - 1).toggleClass("inactive", currentIndex === $ucFlexElements.length - 1);
    }

    function enableButtonsAfterDelay() {
        buttonDisabled = false;
        updateButtonStates();
    }

    $(".nextButton").click(function() {
        if (currentIndex < $ucFlexElements.length - 1 && !buttonDisabled) {
            currentIndex++;
            updateActiveSection();
            updateButtonStates();
            buttonDisabled = true;
            setTimeout(enableButtonsAfterDelay, 1000);
        }
    });

    $(".prevButton").click(function() {
        if (currentIndex > 0 && !buttonDisabled) {
            currentIndex--;
            updateActiveSection();
            updateButtonStates();
            buttonDisabled = true;
            setTimeout(enableButtonsAfterDelay, 1000);
        }
    });



    $ucFlexElements.eq(currentIndex).addClass('active');
    updateButtonStates();
    $ucFlexElements.eq(currentIndex).find(".flex-content").addClass("active");
});


    


