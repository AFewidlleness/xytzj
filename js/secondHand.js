$(function () {

  // 计算图片盒子宽度
  var whatImgNum = $(
    ".phone-top-content-center-what-pProfile-pro-imgTwo"
  ).children().length;
  var whatImgWidth = $(
    ".phone-top-content-center-what-pProfile-pro-imgTwo img"
  ).outerWidth(true);
  var whatImgWidthSum = whatImgNum * whatImgWidth / 10 + "rem";
  $(".phone-top-content-center-what-pProfile-pro-imgTwo").width(
    whatImgWidthSum
  );

  /* 显示隐藏dhl-menu */
  $("#dhl-center-menu-toggle").click(function () {
    $("#dhl-center-menu-classify").slideToggle();
  });
  /* 登录验证 login.html */
  $("#loginBtn").click(function () {
    var a = $("#loginUser").val();
    var b = $("#loginPw").val();
    if (a != "" && b != "") {
      $("#loginMessage").hide();
    } else {
      $("#loginMessage").show();
    }
  });

  // 个人中心切换
  $(".myCenter-center-user-nav li a:eq(0)").click(function () {
    $(
      ".myCenter-partTime,.myCenter-published,.myCenter-what,.myCenter-leaveMeassge,.myCenter-perInfo,.myCenter-certification"
    ).hide();
    $(".myCenter-postTrade").fadeIn();
    $(this).addClass("myCenter-center-user-nav-active");
    $(".myCenter-center-user-nav li a")
      .not($(this))
      .removeClass("myCenter-center-user-nav-active");
  });

  $(".myCenter-center-user-nav li a:eq(1)").click(function () {
    $(".myCenter-postTrade,.myCenter-published,.myCenter-what,.myCenter-leaveMeassge,.myCenter-perInfo,.myCenter-certification").hide();
    $(".myCenter-partTime").fadeIn();
    $(this).addClass("myCenter-center-user-nav-active");
    $(".myCenter-center-user-nav li a")
      .not($(this))
      .removeClass("myCenter-center-user-nav-active");
  });

  $(".myCenter-center-user-nav li a:eq(2),#myCenter-center-userinfo-message").click(function () {
    $(".myCenter-published,.myCenter-partTime,.myCenter-what,.myCenter-postTrade,.myCenter-perInfo,.myCenter-certification").hide();
    $(".myCenter-leaveMeassge").fadeIn();
    $(".myCenter-center-user-nav li a:eq(2)").addClass("myCenter-center-user-nav-active");
    $(".myCenter-center-user-nav li a").not($(".myCenter-center-user-nav li a:eq(2)")).removeClass("myCenter-center-user-nav-active");
  });

  $(".myCenter-center-user-nav li a:eq(3)").click(function () {
    $(".myCenter-published,.myCenter-partTime,.myCenter-postTrade,.myCenter-leaveMeassge,.myCenter-perInfo,.myCenter-certification").hide();
    $(".myCenter-what").fadeIn();
    $(this).addClass("myCenter-center-user-nav-active");
    $(".myCenter-center-user-nav li a").not($(this)).removeClass("myCenter-center-user-nav-active");
  });

  $(".myCenter-center-user-nav li a:eq(4)").click(function () {
    $(".myCenter-postTrade,.myCenter-partTime,.myCenter-what,.myCenter-leaveMeassge,.myCenter-perInfo,.myCenter-certification").hide();
    $(".myCenter-published").fadeIn();
    $(this).addClass("myCenter-center-user-nav-active");
    $(".myCenter-center-user-nav li a").not($(this)).removeClass("myCenter-center-user-nav-active");
  });
  $(".myCenter-center-user-nav li a:eq(5)").click(function () {
    $(".myCenter-published,.myCenter-partTime,.myCenter-what,.myCenter-leaveMeassge,.myCenter-postTrade,.myCenter-certification").hide();
    $(".myCenter-perInfo").fadeIn();
    $(this).addClass("myCenter-center-user-nav-active");
    $(".myCenter-center-user-nav li a").not($(this)).removeClass("myCenter-center-user-nav-active");
  });

  $(".myCenter-center-user-nav li a:eq(6)").click(function () {
    $(".myCenter-published,.myCenter-partTime,.myCenter-what,.myCenter-leaveMeassge,.myCenter-perInfo,.myCenter-postTrade").hide();
    $(".myCenter-certification").fadeIn();
    $(this).addClass("myCenter-center-user-nav-active");
    $(".myCenter-center-user-nav li a").not($(this)).removeClass("myCenter-center-user-nav-active");
  });

  // 个人中心交易切换
  $("#myCenter-postTrade-form-chk2").click(function () {
    $(".myCenter-postTrade-form-position").fadeIn();
  });
  $("#myCenter-postTrade-form-chk1").click(function () {
    $(".myCenter-postTrade-form-position").hide();
  });

  // 个人中心分类菜单
  $(document).click(function () {
    $(".myCenter-postTrade-form-classify,.myCenter-leaveMeassge-form-classify").removeClass("myCenter-form-classify-hover");
    $(".myCenter-postTrade-class-menu,.myCenter-leaveMeassge-class-menu").hide();
  });
  $(".myCenter-postTrade-form-classify").click(function (e) {
    $(".myCenter-postTrade-class-menu").toggle();
    e.stopPropagation();
    $(this).addClass("myCenter-form-classify-hover");
  });
  $(".myCenter-postTrade-class-menu a").click(function () {
    $(".myCenter-postTrade-class-menu").hide();
    $(".myCenter-postTrade-form-classify span:eq(0)").html($(this).html());
    $(".myCenter-postTrade-form-classify").removeClass(
      "myCenter-form-classify-hover"
    );
  });
  $(".myCenter-leaveMeassge-form-classify").click(function (e) {
    $(".myCenter-leaveMeassge-class-menu").toggle();
    e.stopPropagation();
    $(this).addClass("myCenter-form-classify-hover");
  });
  $(".myCenter-leaveMeassge-class-menu a").click(function () {
    $(".myCenter-leaveMeassge-class-menu").hide();
    $(".myCenter-leaveMeassge-form-classify span:eq(0)").html($(this).html());
    $(".myCenter-leaveMeassge-form-classify").removeClass(
      "myCenter-form-classify-hover"
    );
  });

  // 商品详情收藏
  var i = 1;
  $(".pDetails-center-particulars-sc").click(function () {
    if (i == 1) {
      $(this)
        .find("#pDetails-center-particulars-scLogo")
        .css({
          color: "#ff0036"
        });
      $(".pDetails-center-particulars-contentBtn-message").slideDown();
      setTimeout(function () {
        $(".pDetails-center-particulars-contentBtn-message").fadeOut();
      }, 3000);
    } else {
      $(".pDetails-center-particulars-contentBtn-message")
        .find("p")
        .html("商品已在收藏夹中!");
      $(".pDetails-center-particulars-contentBtn-message").slideDown();
      setTimeout(function () {
        $(".pDetails-center-particulars-contentBtn-message").fadeOut();
      }, 3000);
    }
    i++;
  });

  // 商品详情图片切换
  var objsrc = $("#pDetails-center-particulars-img-xqzt").attr("src");
  $(".pDetails-center-particulars-img-xqul li a img").hover(
    function () {
      $("#pDetails-center-particulars-img-xqzt").attr(
        "src",
        $(this).attr("src")
      );
    },
    function () {
      $("#pDetails-center-particulars-img-xqzt").attr("src", objsrc);
    }
  );

  // 商品详情留言字符限制
  //     var ttareaobj = $('.pDetails-center-particulars-NewMessage-content-ta').val();
  //     var ttareaLength = ttareaobj.length;
  //     var maxNum = 10;
  //     $('.pDetails-center-particulars-NewMessage-content-ta').keypress(function (e) {
  //         var ttareaobj = $('.pDetails-center-particulars-NewMessage-content-ta').val();
  //         var ttareaLength = ttareaobj.length + 1;
  //         $('.pDetails-center-particulars-NewMessage-counter').text(ttareaLength)
  //         if (ttareaLength >= maxNum) {
  //             event.preventDefault();
  //         }
  //     });
  //     $('.pDetails-center-particulars-NewMessage-content-ta').keydown(function (e) {
  //         ek = e.keyCode;
  //         var ttareaobj = $('.pDetails-center-particulars-NewMessage-content-ta').val();
  //         var ttareaLength = ttareaobj.length - 1;
  //         if (ek === 8) {
  //             $('.pDetails-center-particulars-NewMessage-counter').text(ttareaLength);
  //         }
  //         if (ttareaLength === -1) {
  //             $('.pDetails-center-particulars-NewMessage-counter').text("0");
  //         }
  //     });
  //回到顶部
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $("#goToTop").fadeIn();
    } else {
      $("#goToTop").fadeOut();
    }
  });
  $("#goToTop a").click(function () {
    $("html,body").animate({
        scrollTop: 0
      },
      600
    );
    return false;
  });

  //留言判断是否为空
  var aa = $(".aa").html();
  if (aa == "") {
    $(".myCenter-published-content-text").show();
  } else {
    $(".myCenter-published-content-text").hide();
  }
  $("#myCenter-published-telOne").click(function () {
    $(this)
      .addClass("myCenter-published-span-bo")
      .next("a")
      .removeClass("myCenter-published-span-bo");
    $(".myCenter-published-spanTwo").hide();
    $(".myCenter-published-spanOne").show();
    if ($(".aa").text() != "") {
      $(".myCenter-published-content-text").hide();
    } else {
      $(".myCenter-published-content-text").show();
    }
  });
  $("#myCenter-published-telTwo").click(function () {
    $(this)
      .addClass("myCenter-published-span-bo")
      .prev("a")
      .removeClass("myCenter-published-span-bo");
    $(".myCenter-published-spanOne").hide();
    $(".myCenter-published-spanTwo").show();
  });

  //pc实名认证切换
  $("#certification-one").click(function () {
    if ($(".myCenter-certification-sm-ite-content:eq(0)").css("display") == "none") {
      $(".myCenter-certification-sm-ite:eq(0)").css({
        "border-bottom": "0"
      });
      $(".myCenter-certification-sm-ite-content:eq(0)").slideDown();
    } else {
      $(".myCenter-certification-sm-ite-content:eq(0)").slideUp(function () {
        $(".myCenter-certification-sm-ite:eq(0)").css({
          "border-bottom": "1px solid #e4e4e4"
        });
      });
    }
  });
  $("#certification-Two").click(function () {
    if (
      $(".myCenter-certification-sm-ite-content:eq(1)").css("display") == "none"
    ) {
      $(".myCenter-certification-sm-ite:eq(1)").css({
        "border-bottom": "0"
      });
      $(".myCenter-certification-sm-ite-content:eq(1)").slideDown();
    } else {
      $(".myCenter-certification-sm-ite-content:eq(1)").slideUp(function () {
        $(".myCenter-certification-sm-ite:eq(1)").css({
          "border-bottom": "1px solid #e4e4e4"
        });
      });
    }
  });
  $("#certification-Three").click(function () {
    if (
      $(".myCenter-certification-sm-ite-content:eq(2)").css("display") == "none"
    ) {
      $(".myCenter-certification-sm-ite:eq(2)").css({
        "border-bottom": "0"
      });
      $(".myCenter-certification-sm-ite-content:eq(2)").slideDown();
    } else {
      $(".myCenter-certification-sm-ite-content:eq(2)").slideUp(function () {
        $(".myCenter-certification-sm-ite:eq(2)").css({
          "border-bottom": "1px solid #e4e4e4"
        });
      });
    }
  });
    //手机端实名认证切换
  $("#certification-oneapp").click(function () {
    if (
      $(".myCenter-certification-sm-ite-contentapp:eq(0)").css("display") == "none"
    ) {
      $(".myCenter-certification-sm-iteapp:eq(0)").css({
        "border-bottom": "0"
      });
      $(".myCenter-certification-sm-ite-contentapp:eq(0)").slideDown();
    } else {
      $(".myCenter-certification-sm-ite-contentapp:eq(0)").slideUp(function () {
        $(".myCenter-certification-sm-iteapp:eq(0)").css({
          "border-bottom": "1px solid #e4e4e4"
        });
      });
    }
  });
  $("#certification-Twoapp").click(function () {
    if (
      $(".myCenter-certification-sm-ite-contentapp:eq(1)").css("display") == "none"
    ) {
      $(".myCenter-certification-sm-ite:eq(1)app").css({
        "border-bottom": "0"
      });
      $(".myCenter-certification-sm-ite-contentapp:eq(1)").slideDown();
    } else {
      $(".myCenter-certification-sm-ite-contentapp:eq(1)").slideUp(function () {
        $(".myCenter-certification-sm-iteapp:eq(1)").css({
          "border-bottom": "1px solid #e4e4e4"
        });
      });
    }
  });
  $("#certification-Threeapp").click(function () {
    if (
      $(".myCenter-certification-sm-ite-contentapp:eq(2)").css("display") == "none"
    ) {
      $(".myCenter-certification-sm-iteapp:eq(2)").css({
        "border-bottom": "0"
      });
      $(".myCenter-certification-sm-ite-contentapp:eq(2)").slideDown();
    } else {
      $(".myCenter-certification-sm-ite-contentapp:eq(2)").slideUp(function () {
        $(".myCenter-certification-sm-iteapp:eq(2)").css({
          "border-bottom": "1px solid #e4e4e4"
        });
      });
    }
  });

  //底部导航栏

  // $('#phone-bottom-tab-itemOne').click(function(){
  //     $(this).addClass('phone-bottom-tab-item-active');
  //     $('#phone-bottom-tab-itemTwo,#phone-bottom-tab-itemThree').removeClass('phone-bottom-tab-item-active');
  // });
  // $('#phone-bottom-tab-itemTwo').click(function(){
  //     $('#phone-bottom-tab-itemOne,#phone-bottom-tab-itemThree').removeClass('phone-bottom-tab-item-active');
  //     $(this).addClass('phone-bottom-tab-item-active');
  // });
  // $('#phone-bottom-tab-itemThree').click(function(){
  //     $('#phone-bottom-tab-itemTwo,#phone-bottom-tab-itemOne').removeClass('phone-bottom-tab-item-active');
  //     $(this).addClass('phone-bottom-tab-item-active');
  // });

  $("#phone-bottom-tab-itemOne").click(function () {
    $(this)
      .addClass("phone-bottom-tab-item-active")
      .find("i")
      .html("&#xe702;")
      .removeClass("phone-bottom-tab-item-active");
    $("#phone-bottom-tab-itemTwo,#phone-bottom-tab-itemThree").removeClass(
      "phone-bottom-tab-item-active"
    );
    $("#phone-bottom-tab-itemTwo")
      .find("i")
      .html("&#xe6e1;");
    $("#phone-bottom-tab-itemThree")
      .find("i")
      .html("&#xe70e;");
  });
  $("#phone-bottom-tab-itemTwo").click(function () {
    $(this)
      .addClass("phone-bottom-tab-item-active")
      .find("i")
      .html("&#xe6e0;")
      .removeClass("phone-bottom-tab-item-active");
    $("#phone-bottom-tab-itemOne,#phone-bottom-tab-itemThree").removeClass(
      "phone-bottom-tab-item-active"
    );
    $("#phone-bottom-tab-itemOne")
      .find("i")
      .html("&#xe703;");
    $("#phone-bottom-tab-itemThree")
      .find("i")
      .html("&#xe70e;");
  });
  $("#phone-bottom-tab-itemThree").click(function () {
    $(this)
      .addClass("phone-bottom-tab-item-active")
      .find("i")
      .html("&#xe70f;")
      .removeClass("phone-bottom-tab-item-active");
    $("#phone-bottom-tab-itemOne,#phone-bottom-tab-itemTwo").removeClass(
      "phone-bottom-tab-item-active"
    );
    $("#phone-bottom-tab-itemOne")
      .find("i")
      .html("&#xe703;");
    $("#phone-bottom-tab-itemTwo")
      .find("i")
      .html("&#xe6e1;");
  });

  $(".phone-top-content-center .phone-hg").click(function () {
    $(".phone-top-content-center").hide();
    $(".phone-top,.phone-bottom-tab").show();
    $("body").css({
      backgroundColor: "#fff"
    });
  });
  //我发布的
  $(".phone-top-content-bottom a:eq(0)").click(function () {
    $(".phone-top,.phone-bottom-tab").hide();
    $(".phone-top-content-center,.phone-top-content-center-release").show();
    $(".phone-top-content-center")
      .children()
      .not($(".phone-top-content-center-release"))
      .hide();
    $("body").css({
      backgroundColor: "#f4f4f4"
    });
  });
  //个人信息
  $(".phone-top-content-bottom a:eq(1)").click(function () {
    $(".phone-top,.phone-bottom-tab").hide();
    $(".phone-top-content-center,.phone-top-content-center-message").show();
    $(".phone-top-content-center")
      .children()
      .not($(".phone-top-content-center-message"))
      .hide();
    $("body").css({
      backgroundColor: "#f4f4f4"
    });
  });
  //我的收藏
  $(".phone-top-content-bottom a:eq(2)").click(function () {
    $(".phone-top,.phone-bottom-tab").hide();
    $(".phone-top-content-center,.phone-top-content-center-what").show();
    $(".phone-top-content-center")
      .children()
      .not($(".phone-top-content-center-what"))
      .hide();
  });
  //我的留言
  $(".phone-top-content-bottom a:eq(3)").click(function () {
    $(".phone-top,.phone-bottom-tab").hide();
    $(".phone-top-content-center,.phone-top-content-center-published").show();
    $(".phone-top-content-center")
      .children()
      .not($(".phone-top-content-center-published"))
      .hide();
      $("body").css({
        backgroundColor: "#f4f4f4"
      });
  });
  //实名认证
  $(".phone-top-content-bottom a:eq(4)").click(function () {
    $(".phone-top,.phone-bottom-tab").hide();
    $(
      ".phone-top-content-center,.phone-top-content-center-certification"
    ).show();
    $(".phone-top-content-center")
      .children()
      .not($(".phone-top-content-center-certification"))
      .hide();
      $("body").css({
        backgroundColor: "#f4f4f4"
      });
  });
  //	设置  
  $(".phone-top-content-bottom a:eq(5)").click(function () {
    $(".phone-top,.phone-bottom-tab").hide();
    $(".phone-top-content-center,.phone-top-content-center-set").show();
    $(".phone-top-content-center")
      .children()
      .not($(".phone-top-content-center-set"))
      .hide();
    $("body").css({
      backgroundColor: "#f4f4f4"
    });
  });
  $(".phone-top-content-center-release-pProfile-fl a").click(function () {
    $(this).addClass("fl-bb-co");
    $(".phone-top-content-center-release-pProfile-fl a")
      .not($(this))
      .removeClass("fl-bb-co");
  });
  // 留言切换
  $(".phone-top-content-center-published-pProfile-fl a:eq(0)").click(function () {
    $(this).addClass("fl-bb-co");
    $(".phone-top-content-center-published-pProfile-fl a").not($(this)).removeClass("fl-bb-co");
      $('.phone-top-content-center-published-pProfile-fb').show();
      $('.phone-top-content-center-published-pProfile-sd').hide();
  });
  $(".phone-top-content-center-published-pProfile-fl a:eq(1)").click(function () {
    $(this).addClass("fl-bb-co");
    $(".phone-top-content-center-published-pProfile-fl a").not($(this)).removeClass("fl-bb-co");
      $('.phone-top-content-center-published-pProfile-fb').hide();
      $('.phone-top-content-center-published-pProfile-sd').show();
  });
  


  //移动端多选插件
  var mobileSelect1 = new MobileSelect({
    trigger: "#phoneDeal",
    ensureBtnColor: "#19B1D8",
    wheels: [{
      data: ["在线交易", "线下交易"]
    }],
    position: [0]
  });
  var mobileSelect2 = new MobileSelect({
    trigger: "#phoneClassify",
    ensureBtnColor: "#19B1D8",
    wheels: [{
      data: ["服装", "手机", "电脑", "空调", "书籍", "桌椅"]
    }],
    position: [0]
  });
  var mobileSelect3 = new MobileSelect({
    trigger: "#phoneMsgSex",
    ensureBtnColor: "#19B1D8",
    wheels: [{
      data: ["男", "女"]
    }],
    position: [0]
  });
  // 选择生日
  var yearArr = ["2018年", "2017年", "2016年", "2015年", "2014年"];
  var monthArr = [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ];
  var dayArr = [
    "1日",
    "2日",
    "3日",
    "4日",
    "5日",
    "6日",
    "7日",
    "8日",
    "9日",
    "10日",
    "11日",
    "12日",
    "13日",
    "14日",
    "15日",
    "16日",
    "17日",
    "18日",
    "19日",
    "20日",
    "21日",
    "22日",
    "23日",
    "24日",
    "25日",
    "26日",
    "27日",
    "28日",
    "29日",
    "30日",
    "31日"
  ];
  var mobileSelect4 = new MobileSelect({
    trigger: "#phoneMsgSr",
    ensureBtnColor: "#19B1D8",
    wheels: [{
        data: yearArr
      },
      {
        data: monthArr
      },
      {
        data: dayArr
      }
    ],
    position: [0, 0, 0],
    transitionEnd: function (indexArr, data) {
      console.log(data);
    },
    callback: function (indexArr, data) {
      console.log(data);
    }
  });
  //   选择学院
  var mobileSelect5 = new MobileSelect({
    trigger: "#phoneMsgXy",
    ensureBtnColor: "#19B1D8",
    wheels: [{
      data: [
        "信息工程学院",
        "外国语学院",
        "经济管理学院",
        "农林科技学院",
        "设计艺术学院",
        "继续教育学院",
        "机电工程学院",
        "其他"
      ]
    }],
    position: [0]
  });
  // 选择地区
  var provinceArr=["北京"];
  var cityArr=["北京市"];
  var areaArr=["东城区"];
  var mobileSelect6 = new MobileSelect({
    trigger: '#phoneMsgArea',
    title: '地区选择',
    wheels: [{
        data: provinceArr
      },
      {
        data: cityArr
      },
      {
        data: areaArr
      }
    ],
    position: [0, 0, 0],
    transitionEnd: function (indexArr, data) {
      console.log(data);
    },
    callback: function (indexArr, data) {
      console.log(data);
    }
  });
});