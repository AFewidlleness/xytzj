$(function() {
	clickTop();
	MessageSwitching();
	myCertification()
	dhlToggle();
	loginForm();
	myCenter();
	myCenterChk();
	myCenterClassMenu();
	pDetailsEnshrine();
	pDetailsImageSwitcher();
	my();
	phoneMyMessage();
	// pDetailsttarea();

});

/* 显示隐藏dhl-menu */
function dhlToggle() {
	$('#dhl-center-menu-toggle').click(function() {
		$('#dhl-center-menu-classify').slideToggle();
	});
}
/* 登录验证 login.html */
function loginForm() {
	$('#loginBtn').click(function() {
		var a = $('#loginUser').val();
		var b = $('#loginPw').val();
		if((a != '') && (b != '')) {
			$('#loginMessage').hide();
		} else {
			$('#loginMessage').show();
		}
	});
}
// 个人中心切换
function myCenter() {
	$('.myCenter-center-user-nav li a:eq(0)').click(function() {
		$('.myCenter-partTime,.myCenter-published,.myCenter-what,.myCenter-leaveMeassge,.myCenter-perInfo,.myCenter-certification').hide();
		$(".myCenter-postTrade").fadeIn();
		$(this).addClass('myCenter-center-user-nav-active');
		$('.myCenter-center-user-nav li a').not($(this)).removeClass('myCenter-center-user-nav-active');
	});

	$('.myCenter-center-user-nav li a:eq(1)').click(function() {
		$('.myCenter-postTrade,.myCenter-published,.myCenter-what,.myCenter-leaveMeassge,.myCenter-perInfo,.myCenter-certification').hide();
		$(".myCenter-partTime").fadeIn();
		$(this).addClass('myCenter-center-user-nav-active');
		$('.myCenter-center-user-nav li a').not($(this)).removeClass('myCenter-center-user-nav-active');
	});

	$('.myCenter-center-user-nav li a:eq(2),#myCenter-center-userinfo-message').click(function() {
		$('.myCenter-published,.myCenter-partTime,.myCenter-what,.myCenter-postTrade,.myCenter-perInfo,.myCenter-certification').hide();
		$(".myCenter-leaveMeassge").fadeIn();
		$('.myCenter-center-user-nav li a:eq(2)').addClass('myCenter-center-user-nav-active');
		$('.myCenter-center-user-nav li a').not($('.myCenter-center-user-nav li a:eq(2)')).removeClass('myCenter-center-user-nav-active');
	});

	$('.myCenter-center-user-nav li a:eq(3)').click(function() {
		$('.myCenter-published,.myCenter-partTime,.myCenter-postTrade,.myCenter-leaveMeassge,.myCenter-perInfo,.myCenter-certification').hide();
		$(".myCenter-what").fadeIn();
		$(this).addClass('myCenter-center-user-nav-active');
		$('.myCenter-center-user-nav li a').not($(this)).removeClass('myCenter-center-user-nav-active');
	});

	$('.myCenter-center-user-nav li a:eq(4)').click(function() {
		$('.myCenter-postTrade,.myCenter-partTime,.myCenter-what,.myCenter-leaveMeassge,.myCenter-perInfo,.myCenter-certification').hide();
		$(".myCenter-published").fadeIn();
		$(this).addClass('myCenter-center-user-nav-active');
		$('.myCenter-center-user-nav li a').not($(this)).removeClass('myCenter-center-user-nav-active');
	});
	$('.myCenter-center-user-nav li a:eq(5)').click(function() {
		$('.myCenter-published,.myCenter-partTime,.myCenter-what,.myCenter-leaveMeassge,.myCenter-postTrade,.myCenter-certification').hide();
		$(".myCenter-perInfo").fadeIn();
		$(this).addClass('myCenter-center-user-nav-active');
		$('.myCenter-center-user-nav li a').not($(this)).removeClass('myCenter-center-user-nav-active');
	});

	$('.myCenter-center-user-nav li a:eq(6)').click(function() {
		$('.myCenter-published,.myCenter-partTime,.myCenter-what,.myCenter-leaveMeassge,.myCenter-perInfo,.myCenter-postTrade').hide();
		$(".myCenter-certification").fadeIn();
		$(this).addClass('myCenter-center-user-nav-active');
		$('.myCenter-center-user-nav li a').not($(this)).removeClass('myCenter-center-user-nav-active');
	});

}
// 个人中心交易切换
function myCenterChk() {
	$('#myCenter-postTrade-form-chk2').click(function() {
		$('.myCenter-postTrade-form-position').fadeIn();
	})
	$('#myCenter-postTrade-form-chk1').click(function() {
		$('.myCenter-postTrade-form-position').hide();
	})
}
// 个人中心分类菜单
function myCenterClassMenu() {
	$(document).click(function() {
		$('.myCenter-postTrade-form-classify,.myCenter-leaveMeassge-form-classify').removeClass('myCenter-form-classify-hover');
		$('.myCenter-postTrade-class-menu,.myCenter-leaveMeassge-class-menu').hide();
	});
	$('.myCenter-postTrade-form-classify').click(function(e) {
		$('.myCenter-postTrade-class-menu').toggle();
		e.stopPropagation();
		$(this).addClass('myCenter-form-classify-hover');
	});
	$('.myCenter-postTrade-class-menu a').click(function() {
		$('.myCenter-postTrade-class-menu').hide();
		$('.myCenter-postTrade-form-classify span:eq(0)').html($(this).html());
		$('.myCenter-postTrade-form-classify').removeClass('myCenter-form-classify-hover');
	});
	$('.myCenter-leaveMeassge-form-classify').click(function(e) {
		$('.myCenter-leaveMeassge-class-menu').toggle();
		e.stopPropagation();
		$(this).addClass('myCenter-form-classify-hover');
	});
	$('.myCenter-leaveMeassge-class-menu a').click(function() {
		$('.myCenter-leaveMeassge-class-menu').hide();
		$('.myCenter-leaveMeassge-form-classify span:eq(0)').html($(this).html());
		$('.myCenter-leaveMeassge-form-classify').removeClass('myCenter-form-classify-hover');
	});
}
// 商品详情收藏
function pDetailsEnshrine() {
	var i = 1;
	$('.pDetails-center-particulars-sc').click(function() {
		if(i == 1) {
			$(this).find('#pDetails-center-particulars-scLogo').css({
				'color': '#ff0036'
			});
			$('.pDetails-center-particulars-contentBtn-message').slideDown();
			setTimeout(function() {
				$('.pDetails-center-particulars-contentBtn-message').fadeOut();
			}, 3000)
		} else {
			$('.pDetails-center-particulars-contentBtn-message').find('p').html('商品已在收藏夹中!');
			$('.pDetails-center-particulars-contentBtn-message').slideDown();
			setTimeout(function() {
				$('.pDetails-center-particulars-contentBtn-message').fadeOut();
			}, 3000)
		}
		i++;
	});
}
// 商品详情图片切换
function pDetailsImageSwitcher() {
	var objsrc = $('#pDetails-center-particulars-img-xqzt').attr('src');
	$('.pDetails-center-particulars-img-xqul li a img').hover(function() {
		$('#pDetails-center-particulars-img-xqzt').attr('src', $(this).attr('src'));
	}, function() {
		$('#pDetails-center-particulars-img-xqzt').attr('src', objsrc);
	})
}
// 商品详情留言字符限制
// function pDetailsttarea() {
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
// }
//回到顶部
function clickTop() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 600) {
			$('#goToTop').fadeIn();
		} else {
			$('#goToTop').fadeOut();
		}
	});
	$('#goToTop a').click(function() {
		$('html,body').animate({
			scrollTop: 0
		}, 600);
		return false;
	});
}

function MessageSwitching() {
	var aa = $('.aa').html();

	if(aa == '') {
		$('.myCenter-published-content-text').show();
	} else {
		$('.myCenter-published-content-text').hide();
	}
	$('#myCenter-published-telOne').click(function() {
		$(this).addClass('myCenter-published-span-bo').next('a').removeClass('myCenter-published-span-bo');
		$('.myCenter-published-spanTwo').hide();
		$('.myCenter-published-spanOne').show();
		if($('.aa').text() != '') {
			$('.myCenter-published-content-text').hide();
		} else {
			$('.myCenter-published-content-text').show();
		}
	});
	$('#myCenter-published-telTwo').click(function() {
		$(this).addClass('myCenter-published-span-bo').prev('a').removeClass('myCenter-published-span-bo');
		$('.myCenter-published-spanOne').hide();
		$('.myCenter-published-spanTwo').show();
	});
}

function myCertification() {
	$('#certification-one').click(function() {
		if($('.myCenter-certification-sm-ite-content:eq(0)').css('display') == 'none') {
			$('.myCenter-certification-sm-ite:eq(0)').css({
				'border-bottom': '0'
			});
			$('.myCenter-certification-sm-ite-content:eq(0)').slideDown();
		} else {
			$('.myCenter-certification-sm-ite-content:eq(0)').slideUp(function() {
				$('.myCenter-certification-sm-ite:eq(0)').css({
					'border-bottom': '1px solid #e4e4e4'
				})
			});
		}
	})
	$('#certification-Two').click(function() {
		if($('.myCenter-certification-sm-ite-content:eq(1)').css('display') == 'none') {
			$('.myCenter-certification-sm-ite:eq(1)').css({
				'border-bottom': '0'
			});
			$('.myCenter-certification-sm-ite-content:eq(1)').slideDown();
		} else {
			$('.myCenter-certification-sm-ite-content:eq(1)').slideUp(function() {
				$('.myCenter-certification-sm-ite:eq(1)').css({
					'border-bottom': '1px solid #e4e4e4'
				})
			});
		}
	})
	$('#certification-Three').click(function() {
		if($('.myCenter-certification-sm-ite-content:eq(2)').css('display') == 'none') {
			$('.myCenter-certification-sm-ite:eq(2)').css({
				'border-bottom': '0'
			});
			$('.myCenter-certification-sm-ite-content:eq(2)').slideDown();
		} else {
			$('.myCenter-certification-sm-ite-content:eq(2)').slideUp(function() {
				$('.myCenter-certification-sm-ite:eq(2)').css({
					'border-bottom': '1px solid #e4e4e4'
				})
			});
		}
	})
}

function my() {
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

	$('#phone-bottom-tab-itemOne').click(function() {
		$(this).addClass('phone-bottom-tab-item-active').find('i').html('&#xe702;').removeClass('phone-bottom-tab-item-active');
		$('#phone-bottom-tab-itemTwo,#phone-bottom-tab-itemThree').removeClass('phone-bottom-tab-item-active');
		$('#phone-bottom-tab-itemTwo').find('i').html('&#xe6e1;')
		$('#phone-bottom-tab-itemThree').find('i').html('&#xe70e;')
	});
	$('#phone-bottom-tab-itemTwo').click(function() {
		$(this).addClass('phone-bottom-tab-item-active').find('i').html('&#xe6e0;').removeClass('phone-bottom-tab-item-active');
		$('#phone-bottom-tab-itemOne,#phone-bottom-tab-itemThree').removeClass('phone-bottom-tab-item-active');
		$('#phone-bottom-tab-itemOne').find('i').html('&#xe703;')
		$('#phone-bottom-tab-itemThree').find('i').html('&#xe70e;')
	});
	$('#phone-bottom-tab-itemThree').click(function() {
		$(this).addClass('phone-bottom-tab-item-active').find('i').html('&#xe70f;').removeClass('phone-bottom-tab-item-active');
		$('#phone-bottom-tab-itemOne,#phone-bottom-tab-itemTwo').removeClass('phone-bottom-tab-item-active');
		$('#phone-bottom-tab-itemOne').find('i').html('&#xe703;')
		$('#phone-bottom-tab-itemTwo').find('i').html('&#xe6e1;')
	});
}

function phoneMyMessage() {
	$('.phone-bottom-tab').hide();
	$('.phone-top-content-center .phone-hg').click(function() {
		$('.phone-top-content-center').hide();
		$('.phone-top,.phone-bottom-tab').show();
		$('body').css({"backgroundColor":'#fff'});
	})
	// //发布商品
	// $('.phone-top-content-bottom a:eq(0)').click(function() {
	// 	$('.phone-top,.phone-bottom-tab').hide();
	// 	$('.phone-top-content-center,.phone-top-content-center-postTrade').show();
	// 	$('.phone-top-content-center').children().not($('.phone-top-content-center-postTrade')).hide();
	// });
	// //发布兼职
	// $('.phone-top-content-bottom a:eq(1)').click(function() {
	// 	$('.phone-top,.phone-bottom-tab').hide();
	// 	$('.phone-top-content-center,.phone-top-content-center-partTime').show();
	// 	$('.phone-top-content-center').children().not($('.phone-top-content-center-partTime')).hide();
	// });

	//我发布的
	$('.phone-top-content-bottom a:eq(0)').click(function() {
		$('.phone-top,.phone-bottom-tab').hide();
		$('.phone-top-content-center,.phone-top-content-center-release').show();
		$('.phone-top-content-center').children().not($('.phone-top-content-center-release')).hide();
	});
	//个人信息
	$('.phone-top-content-bottom a:eq(1)').click(function() {
		$('.phone-top,.phone-bottom-tab').hide();
		$('.phone-top-content-center,.phone-top-content-center-message').show();
		$('.phone-top-content-center').children().not($('.phone-top-content-center-message')).hide();
	});
	//	我的收藏
	$('.phone-top-content-bottom a:eq(2)').click(function() {
		$('.phone-top,.phone-bottom-tab').hide();
		$('.phone-top-content-center,.phone-top-content-center-what').show();
		$('.phone-top-content-center').children().not($('.phone-top-content-center-what')).hide();
	});
	//我的留言
	$('.phone-top-content-bottom a:eq(3)').click(function() {
		$('.phone-top,.phone-bottom-tab').hide();
		$('.phone-top-content-center,.phone-top-content-center-published').show();
		$('.phone-top-content-center').children().not($('.phone-top-content-center-published')).hide();
	});
	//实名认证
	$('.phone-top-content-bottom a:eq(4)').click(function() {
		$('.phone-top,.phone-bottom-tab').hide();
		$('.phone-top-content-center,.phone-top-content-center-certification').show();
		$('.phone-top-content-center').children().not($('.phone-top-content-center-certification')).hide();
	});
	//	设置
	$('.phone-top-content-bottom a:eq(5)').click(function() {
		$('.phone-top,.phone-bottom-tab').hide();
		$('.phone-top-content-center,.phone-top-content-center-set').show();
		$('.phone-top-content-center').children().not($('.phone-top-content-center-set')).hide();
		$('body').css({"backgroundColor":'#f3f3f3'});
	})
}


$(function(){
	whatImgNum=$('.phone-top-content-center-what-pProfile-pro-imgTwo').children().length;
	whatImgWidth=$('.phone-top-content-center-what-pProfile-pro-imgTwo img').outerWidth(true);
	whatImgWidthSum=(whatImgNum*whatImgWidth)/10+'rem';
	$('.phone-top-content-center-what-pProfile-pro-imgTwo').width(whatImgWidthSum);
})