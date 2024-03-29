$(function () {

  // 새로고침시 맨위로
  $('html').animate({scrollTop : 0 })
  setTimeout(() => {
    $('.fix_box').fadeOut()
  }, 3000);
  // 날짜
  let nowDate = new Date()
  let nowDate2 = nowDate.getDate()
  let nowDay = nowDate.toString().substring(0, 3)
  let nowDateEng = nowDate.toLocaleString("en-US", { month: "short" });
  let nowHours = nowDate.getHours()
  let nowMin = String(nowDate.getMinutes()).padStart(2, "0")
  let nowapm = nowHours < 12 ? 'am' : 'pm'
  $('.apple_head_day').text(nowDay)
  $('.apple_head_month').text(nowDateEng)
  $('.apple_head_date2').text(nowDate2)
  $('.head_time').text(nowHours)
  $('.head_min').text(nowMin)
  $('.head_apm').text(nowapm)
  $('.side_time').text(nowHours)
  $('.side_min').text(nowMin)
  $('.side_amp').text(nowapm)
  // 날짜 인터벌
  setInterval(() => {
    let nowDate = new Date()
    let nowDate2 = nowDate.getDate()
    let nowDay = nowDate.toString().substring(0, 3)
    let nowDateEng = nowDate.toLocaleString("en-US", { month: "short" });
    let nowHours = nowDate.getHours()
    let nowMin = String(nowDate.getMinutes()).padStart(2, "0")
    let nowapm = nowHours < 12 ? 'am' : 'pm'
    $('.apple_head_day').text(nowDay)
    $('.apple_head_month').text(nowDateEng)
    $('.apple_head_date2').text(nowDate2)
    $('.head_time').text(nowHours)
    $('.head_min').text(nowMin)
    $('.head_apm').text(nowapm)
  }, 1000);

  // 아이콘 클릭 애니메이션
  $(document).on('click', '.apple_footer_icon', function () {
    $(this).addClass('on')
    setTimeout(() => {
      $(this).removeClass('on')
    }, 1500);
  })

  // 인풋 포커스
  $(document).on('click', '.chat_input', function () {
    $('.blue_dot').css('opacity', '0')
  })


  // 채팅 애니메이션
  $(document).on('click','.enter_btn',function(){
    let val = $('.chat_input').val()
      if (val !== '') {
        $('.chat_input').attr('readonly','true')
        $('.chat_input').val('')
        let userChat = `<div class='chat_wrap'><div class="user_chat2">안녕하세요! ${val}입니다. 반갑습니다.</div></div>`
        $('.chat_inner_box').append(userChat)
        $('.chat_inner_box').scrollTop($('.chat_inner_box')[0].scrollHeight)
        $(this).val('')
        $('.side_main_user_chat').text($('.user_chat2').text())

        setTimeout(() => {
          let chat = `<div class='chat_wrap'><div class="chat_user_box last_chat">네! ${val}님 이시군요! 포트폴리오에 오신것을 환영 합니다!</div></div>`
          $('.chat_inner_box').append(chat)
          $('.side_main_user_chat').text($('.last_chat').text())
        }, 2000);
        setTimeout(() => {
          $('body').css('overflow','auto')
          $('.main_chat_box ').fadeOut()
        }, 4500);
      }else {
        alert('이름을 입력 해주시면 다음페이지로 넘어갈수 있습니다!')
      }
  })
  $(document).on('keydown', '.chat_input', function () {
    if (window.event.keyCode == 13) {
      
      let val = $(this).val()
      if (val !== '') {
        $(this).val('')
        $(this).attr('readonly','true')
        let userChat = `<div class='chat_wrap'><div class="user_chat2">안녕하세요! ${val}입니다. 반갑습니다.</div></div>`
        $('.chat_inner_box').append(userChat)
        $('.chat_inner_box').scrollTop($('.chat_inner_box')[0].scrollHeight)
        $(this).val('')
        $('.side_main_user_chat').text($('.user_chat2').text())

        setTimeout(() => {
          let chat = `<div class='chat_wrap'><div class="chat_user_box last_chat">네! ${val}님 이시군요! 포트폴리오에 오신것을 환영 합니다!</div></div>`
          $('.chat_inner_box').append(chat)
          $('.side_main_user_chat').text($('.last_chat').text())
        }, 2000);
        setTimeout(() => {
          $('body').css('overflow','auto')
          $('.main_chat_box ').fadeOut()
        }, 4500);
      }else {
        alert('이름을 입력 해주시면 다음페이지로 넘어갈수 있습니다!')
      }

    }
  })
  // skill animate
  $(document).on('scroll', function () {
    if ($('.second_section').offset().top - 300 < $(window).scrollTop()) {
      $('.skill_html').css('height', '85%')
      $('.skill_css').css('height', '85%')
      $('.skill_js').css('height', '50%')
      $('.skill_jq').css('height', '70%')
      $('.skill_react').css('height', '50%')
      $('.skill_svelte').css('height', '50%')
      $('.skill_flutter').css('height', '40%')
    }
  })

  // mobile menubar
  $(document).on('click', '.mobile_header_icon', function () {
    if ($('.x').hasClass('on')) {

    } else {
      $('.x').toggleClass('x_on')
      $('.y').toggleClass('y_on')
      $('.z').toggleClass('z_on')
      $('.second_header').toggleClass('on')
      $('.mobile_menu_bar').toggleClass('on')
    }
  })


  // porfolio scroll animate
  $(window).scroll(scroll)
  function scroll() {
    let scrollTop = $(window).scrollTop()
    let section1 = $('.card1').offset().top
    let section2 = $('.card2').offset().top
    let section3 = $('.card3').offset().top
    let section4 = $('.card4').offset().top
    let section5 = $('.card5').offset().top
    if (scrollTop >= section1 && scrollTop <= section2 - 200) {
      $('.port_num').removeClass('active')
      $('.card1').addClass('active')
    } else if (scrollTop >= section2 - 250 && scrollTop <= section3 - 200) {
      $('.port_num').removeClass('active')
      $('.card2').addClass('active')
    } else if (scrollTop >= section3 - 250 && scrollTop <= section4 - 200) {
      $('.port_num').removeClass('active')
      $('.card3').addClass('active')
    } else if (scrollTop >= section4 - 250 && scrollTop <= section5 - 200) {
      $('.port_num').removeClass('active')
      $('.card4').addClass('active')
    } else if (scrollTop >= section5 - 200) {
      $('.port_num').removeClass('active')
      $('.card5').addClass('active')
    }
  }

  
  // faq클릭
  $(document).on('click', '.faq_card_title_wrap', function () {
    $(this).toggleClass('active')
    $(this).children('.faq_card_title').toggleClass('active')
    $(this).siblings('.faq_answer').slideToggle()
  })

  // email send
    emailjs.init("vtR2ys3E7RjxsFz_q");

    $(document).on('click', '.send_btn', function () {
      let flag = true
      let template = {
        to_name: $('.name').val(),
        from_name: $('.title').val(),
        message: $('.send_input').val()
      }
      if ($('.send_input').val() !== '') {
        if (flag === true) {
          flag = false
          emailjs.send('hongGmail', 'template_iok92qu', template)
            .then((result) => {
              console.log(result.text);
              alert('메일감')
              $('.send_input').val('')
              flag = true
            }, (error) => {
              console.log(error.text);
              alert('메일못감')

              flag = true
            });
        } 
      }else {
        alert('빈값ㄴㄴ')
      }
    })
  

    // 앵커이동
    $(document).on('click','.menu_a',function(){
      let menuA = $('.second_main_wrap ').offset().top - 200
      $('html').animate({scrollTop : menuA })
    })
    $(document).on('click','.menu_b',function(){
      let menuB = $('.third_section').offset().top - 200
      $('html').animate({scrollTop : menuB })
    })
    $(document).on('click','.menu_c',function(){
      let menuC = $('.faq_section').offset().top - 200
      $('html').animate({scrollTop : menuC })
    })
    $(document).on('click','.menu_d',function(){
      let menuD = $('.contact_section').offset().top - 200
      $('html').animate({scrollTop : menuD })
    })
    $(document).on('click','.main_user_card_btn',function(){
      let menuD = $('.contact_section').offset().top - 200
      $('html').animate({scrollTop : menuD })
    })
    $(document).on('click','.mobile_menu div',function(){
      $('.x').toggleClass('x_on')
      $('.y').toggleClass('y_on')
      $('.z').toggleClass('z_on')
      $('.second_header').toggleClass('on')
      $('.mobile_menu_bar').toggleClass('on')
    })
})


