'use strict';

{
  $(document).ready(function(){
    $('.multiple').slick({
      autoplay: true,
      infinite: true,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }]
    });
  });

  $(function() {
    $(window).scroll(function() {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();

      $('.target').each(function() {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 179) {
          $(this).addClass("is-fadein")
        }
      });
    });

    $('.modal-list').on('click', function() {
      $('#mask').addClass('hidden')
      $('#modal').addClass('hidden')
    });

    $('a[href^="#"]').click(function() {
      let adjust = 0;
      let speed = 400;
      let href = $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top + adjust;
      $('body, html').animate({scrollTop: position}, speed, 'swing');
      $('#mask').addClass('hidden')
      $('#modal').addClass('hidden')
      $('button').removeClass('close')
      return false;
    });

  });

  const button = document.querySelector('button');
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');
  const p = document.querySelectorAll('.modal-list p');

  button.addEventListener('click', () => {
    mask.classList.toggle('hidden');
    modal.classList.toggle('hidden');
    button.classList.toggle('close');
  });

  mask.addEventListener('click', () => {
    mask.classList.toggle('hidden');
    modal.classList.toggle('hidden');
    button.classList.toggle('close');
  });
}