$(document).ready(function () {
    let $ucFlexElements = $('.uc-flex');
    let currentIndex = 0;
    let buttonDisabled = false;

    let $wrapper = $('<div class="flex-wrapper"></div>');
    $ucFlexElements.wrapAll($wrapper);

    function updateActiveSection() {
        $ucFlexElements.removeClass('active');
        $ucFlexElements.eq(currentIndex).addClass('active');

        $ucFlexElements.find('.flex-content').removeClass('active');
        $ucFlexElements.eq(currentIndex).find('.flex-content').addClass('active');
    }

    function updateButtonStates() {
        $('.prevButton').prop('disabled', currentIndex === 0).toggleClass('inactive', currentIndex === 0);
        $('.nextButton').prop('disabled', currentIndex === $ucFlexElements.length - 1).toggleClass('inactive', currentIndex === $ucFlexElements.length - 1);
    }

    function enableButtonsAfterDelay() {
        buttonDisabled = false;
        updateButtonStates();
    }

    $ucFlexElements.each(function (index, element) {
        let hammer = new Hammer(element);

        // Handle swipe left
        hammer.on('swipeleft', function () {
            if (currentIndex < $ucFlexElements.length - 1 && !buttonDisabled) {
                currentIndex++;
                updateActiveSection();
                updateButtonStates();
                buttonDisabled = true;
                setTimeout(enableButtonsAfterDelay, 1000);
            }
        });

        hammer.on('swiperight', function () {
            if (currentIndex > 0 && !buttonDisabled) {
                currentIndex--;
                updateActiveSection();
                updateButtonStates();
                buttonDisabled = true;
                setTimeout(enableButtonsAfterDelay, 1000);
            }
        });
    });

    $('.prevButton').click(function () {
        if (currentIndex > 0 && !buttonDisabled) {
            currentIndex--;
            updateActiveSection();
            updateButtonStates();
            buttonDisabled = true;
            setTimeout(enableButtonsAfterDelay, 1000);
        }
    });

    $('.nextButton').click(function () {
        if (currentIndex < $ucFlexElements.length - 1 && !buttonDisabled) {
            currentIndex++;
            updateActiveSection();
            updateButtonStates();
            buttonDisabled = true;
            setTimeout(enableButtonsAfterDelay, 1000);
        }
    });


    $ucFlexElements.eq(currentIndex).addClass('active');
    updateButtonStates();
    $ucFlexElements.eq(currentIndex).find('.flex-content').addClass('active');
});
