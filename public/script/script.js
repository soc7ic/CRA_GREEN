(function($){

  let cnt=0;

// 1. 메인버튼에 마우스 오버시 이벤트
//   - 버튼 하이라이트 효과
//   - 서브 메뉴가 부드럽게 나타난다

  // $('.main-btn').on({
  //   mouseenter: function(){
  //     $('.main-btn').removeClass('on');
  //     $(this).addClass('on');
      
  //     $('.sub').stop().slideUp(0);
  //     $(this).next().stop().slideDown(300);
  //   },

  //   focusin: function(){ 
  //     $('.main-btn').removeClass('on'); 
  //     $(this).addClass('on');

  //     $('.sub').stop().slideUp(0);
  //     $(this).next().stop().slideDown(300);
  //   }
  // });

  // $('#header').on({
  //   mouseleave: function(){
  //     $('.main-btn').removeClass('on'); 
  //     $('.sub').stop().slideUp(300);
  //   }
  // });

  //섹션1 메인슬라이드
  //1. 메인 슬라이드 함수
  //2. 다음 카운트 함수
  //3. 자동타이머 함수
  
  function mainSlide(){
    $('.slide-wrap').animate({left:-1200*cnt}, 600, function(){

      if(cnt===3){
        cnt=0;
        $('.slide-wrap').animate({left:-1200*cnt}, 0);
      }
    });
  }

  function nextCount(){
    cnt++;
    mainSlide();
  }

  function autoTimer(){
    setInterval(nextCount, 3000);
  }
  autoTimer();


  // $('.modal-btn').on({
  //   click:function(e){
  //     e.preventDefault();
  //     $('.modal').fadeIn(300);
  //   }
  // });

  // $('.modal-close').on({
  //   click:function(e){
  //     e.preventDefault();
  //     $('.modal').fadeOut(300);
  //   }
  // });

})(jQuery);