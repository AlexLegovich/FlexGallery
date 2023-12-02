<style>
    
    
    /* стили обертки */
.flex-wrapper {
  display: flex;
  overflow: hidden;
  align-items: center;
  gap: 10px; /*расстояние между элементами*/
  padding: 60px; /* отступы  - верх/право/низ/лево */
  background-color: #fff; /*цвет фона*/
}


/* стили слайдов */
.uc-flex {
    width:10%;
    transition: 0.6s cubic-bezier(0.83, 0, 0.17, 1);
    border-radius: 20px;
    overflow: auto;
    position: relative;
  
    
  }
  
  /* стиль активного слайда */
  .uc-flex.active {
      width: 90%;
      overflow: auto;
      border-radius: 20px;/*скругление углов*/
    }
  
  .uc-flex .t396__filter {
    will-change: auto !important;
  }

/* стили текста в слайдах */
.flex-content {
  opacity: 0;
  transition: opacity 0.3s ease-in;
  transition-delay: 0.3s;
}
.flex-content.active {
  opacity: 1;
}

/* на мобилных устройствах ниже 960px */
@media (max-width: 960px) {
  .flex-wrapper {
    padding: 20px; /* отступы  - верх/право/низ/лево */
    gap: 0px;/*расстояние между элементами*/
  }
  .uc-flex {
    flex:1 1 0%;
    opacity: 0;
  }
  .uc-flex.active {
      flex:1 1 100%;
    opacity: 1;
  }
}

/* стили кнопок */
.inactive {
  opacity: 0.2;
  cursor: default!important;
}
.nextButton,
.prevButton {
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.87, 0, 0.13, 1);
}




  .uc-flex .flex-image{
      width: 100%!important;
      height: 100%!important;
  }
    
    
</style>
    
    
    
<script>
    
    
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


</script>
    


