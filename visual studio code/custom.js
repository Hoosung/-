$(function(){
  /* Slick Slider - Welcome */
  $('.slideshow').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    pauseOnHover: false
  });

  /* TypeIt - Welcome */
  $('#typing').typeIt({
    strings: ["Business strategy.", "Innovation Plan.", "Creative Idea."],
    speed: 100,
    autoStart: true,
    breakLines: false,
  });
  
  /* Wow Scroll Reveal Animation */
  wow = new WOW({
    boxClass: 'wow',
    offset: 150,
    mobile: true
  })
  wow.init()
})


$(function(){
  /* Header Scroll Change */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header, .btn-top').addClass('active')
    }
    else {
      $('header, .btn-top').removeClass('active')  
    }
  })

  /* Video Modal */
  $('.open-modal').click(function(){
    $('.video-modal').fadeIn()
    $('body').addClass('active')
  })
  $('.close-modal').click(function(){
    $('.video-modal').fadeOut()
    $('body').removeClass('active')
  })
  
  /* Header Trigger */
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('.gnb a, section').click(function(){
    $('.gnb, .trigger').removeClass('active')
  })

  
  /* LOGIN */
  function login() {
    const form = document.login_form;
    const chkUsername = checkValidUsername(form);
    const chkEmail = checkValidEmail(form);
    const chkPw = checkValidPassword(form);
    const chkPw2 = checkValidPassword2(form);

    if (chkUsername) {
        document.getElementById('alert_username').innerText = "";
        form.username.style.border = '2px solid';
        form.username.style.borderColor = '#00D000';
    } else {
        form.username.style.border = '2px solid';
        form.username.style.borderColor = '#FF0000';
        document.getElementById('alert_username').style.color = '#FF0000';
    }

    if (chkPw) {
        document.getElementById('alert_password').innerText = "";
        form.password.style.border = '2px solid';
        form.password.style.borderColor = '#00D000';
    } else {
        form.password.style.border = '2px solid';
        form.password.style.borderColor = '#FF0000';
        document.getElementById('alert_password').style.color = '#FF0000';
    }

    if (chkUsername && chkPw) {
        console.log('complete. form.submit();');
        //form.submit();
    }
}

function checkValidUsername(form) {
    if (form.username.value == "") {
        document.getElementById('alert_username').innerText = "Please enter username.";
        //form.username.focus();
        return false;
    }

    return true;
}

function checkValidPassword(form) {
    if (form.password.value == "") {
        document.getElementById('alert_password').innerText = "Please enter password.";
        //form.password.focus();
        return false;
    }

    const pw = form.password.value;
    // String.prototype.search() :: 검색된 문자열 중에 첫 번째로 매치되는 것의 인덱스를 반환한다. 찾지 못하면 -1 을 반환한다.
    // number
    const num = pw.search(/[0-9]/g);
    // alphabet
    const eng = pw.search(/[a-z]/ig);
    // special characters
    const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if (pw.length < 6) {
        // 최소 6문자.
        document.getElementById('alert_password').innerText = "Password must be at least 6 characters.";
        return false;
    } else if (pw.search(/\s/) != -1) {
        // 공백 제거.
        document.getElementById('alert_password').innerText = "Please enter your password without spaces.";
        return false;
    } else if (num < 0 && eng < 0 && spe < 0) {
        // 한글과 같은 문자열 입력 방지.
        document.getElementById('alert_password').innerText = "Password is not valid.";
        return false;
    }

    return true;
}
})