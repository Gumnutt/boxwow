//var timerOn = false;
//var timerCount = 500;
//var currentMenu;



function getCookie(name) {
  //used to log out of a secure area
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else
    begin += 2;
  var end = document.cookie.indexOf(";", begin);
  if (end == -1)
    end = dc.length;
  return unescape(dc.substring(begin + prefix.length, end));
}

function deleteCookie(name, path, domain) {
  
  if (getCookie(name)) {
    document.cookie = name + "=" +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; host=" + domain : "") +
    "; expires=Thu, 01-Jan-2006 00:00:01 GMT";
  }
}


//function menuTimeOut(){
	//used as a backup for removing highlight from menu item
//	if (timerOn && currentMenu){
//		var modName = currentMenu.className;
//		var pos = 0;
//		pos = modName.indexOf("over");
//		modName=modName.substr(0,pos);
//		currentMenu.className=modName;
//		currentMenu="";
//		timerOn=false;
//	}
//}	


//startList = function() {
//	var node;
//	if (document.all&&document.getElementById) {
//	navRoot = document.getElementById("nav");
//	if (navRoot !== null) {
//		alert(navRoot);
//			for (i=0; i<navRoot.childNodes.length; i++) {
//				node = navRoot.childNodes[i];
//				if (node.nodeName=="LI") {
//					node.onmouseover=function() {
//						this.className+=" over";
//					};
//					node.onmouseout=function() {
//						this.className=this.className.replace(" over", "");
//					};
//				}
//			}
//		}
//	}
//};
//window.onload=startList;
//if (window.attachEvent){
//window.attachEvent("onload", startList);
//}
//else {
//window.onload=startList;
//}



function sitesearch() {
	var objSearchElement = document.getElementsByTagName('input')[0];
	if (objSearchElement) {

		if (objSearchElement.value == '') {
			alert('Please enter a search value.');
		} else {
		window.location=('/search.aspx?query='+objSearchElement.value);
		}

	}
}
var searchPage = 0;

function keypress(event) {
	var keycode;
	if (window.event) {
		keycode = window.event.keyCode;
	} else {
		if (event) {
			keycode = event.which;
		}
	}

	if (keycode == 13) {
		sitesearch();
		return false;
	}
}


// function wng() {
	// alert("You are now leaving the website of the Western Sydney airport.\nThe website you are entering is not maintained or funded by the Commonwealth of Australia.");
// }

// function wnggov() {
	// alert("You are now leaving the website of the Western Sydney airport.");
// }

// function wngmin() {
	// alert("You are now entering the website of the\nMinisters \nfor the Department of Infrastructure, Regional Development and Cities.");
// }

function dotars() {}

	startList = function() {

	var cookie = readCookie("style");
	var title = cookie ? cookie : getPreferredStyleSheet();
	setActiveStyleSheet(title);

	if (searchPage == 1){
		initPositions();
	}
	
    }

function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }

  if(document.getElementById)
  {
    var imageTagSmall = document.getElementById('fssmall');
    var imageTagNormal = document.getElementById('fsnormal');
    var imageTagLarge = document.getElementById('fslarge');

    if(imageTagSmall && imageTagNormal && imageTagLarge){
	switch (title) {
	  case 'large' : 
		imageTagSmall.src = '/images/DOTARS_fs_off_01.gif';
		imageTagNormal.src = '/images/DOTARS_fs_off_02.gif';
		imageTagLarge.src = '/images/DOTARS_fs_on_03.gif';
	        break;
	  case 'normal' : 
		imageTagSmall.src = '/images/DOTARS_fs_off_01.gif';
		imageTagNormal.src = '/images/DOTARS_fs_on_02.gif';
		imageTagLarge.src = '/images/DOTARS_fs_off_03.gif';
	        break;
	  case 'small' : 
		imageTagSmall.src = '/images/DOTARS_fs_on_01.gif';
		imageTagNormal.src = '/images/DOTARS_fs_off_02.gif';
		imageTagLarge.src = '/images/DOTARS_fs_off_03.gif';
	        break;
	}
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  return ('normal');
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}


window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
if (title == 'null') {
  title = getPreferredStyleSheet();
}

function rdoValid(oSRC, args)
	{			
		args.IsValid = false;

		if ((document.Form1.rdoThreat[0].checked) || (document.Form1.rdoThreat[1].checked) || (document.Form1.rdoThreat[2].checked) || (document.Form1.rdoThreat[3].checked) || (document.Form1.rdoThreat[4].checked) || (document.Form1.rdoThreat[5].checked) || (document.Form1.rdoThreat[6].checked) || (document.Form1.rdoThreat[7].checked) || (document.Form1.rdoThreat[8].checked)){
			args.IsValid = true;
		}
}

setActiveStyleSheet(title);
    window.onload=startList;
	

                                                function popupTable(url, w, h)
                                                {
                                                                var leftprop, topprop, screenX, screenY;
                                                                if(navigator.appName == "Microsoft Internet Explorer")
                                                                {
                                                                                screenY = window.screen.height;
                                                                                screenX = window.screen.availWidth;
                                                                }
                                                                else
                                                                {
                                                                                screenY = window.outerHeight
                                                                                screenX = window.outerWidth
                                                                }
                                                                
                                                                popupX = (screenX - w) / 2;
                                                                popupY = (screenY - h) / 2;
                                                                if(navigator.appName == "Microsoft Internet Explorer")
                                                                {
                                                                                leftprop = popupX;
                                                                                topprop = popupY;
                                                                }
                                                                else
                                                                {
                                                                                leftprop = (popupX - pageXOffset);
                                                                                topprop = (popupY - pageYOffset);
                                                                }
                                                   
                                                                table_window = open(url, 'tableWindow', "location=0,status=0,scrollbars=1,width=" + w + ",height=" + h);
                                                                table_window.moveTo(popupX, popupY);
                                                }



//********Keyboard Navigation
		$(document).ready(function()
		{	
			$("nav").accessibleDropDown();
		});

		$.fn.accessibleDropDown = function ()
		{
			var el = $(this);
			
			/* Setup dropdown menus for IE 6 */
			
			$(".keyboard li", el).mouseover(function() {
				$(this).addClass("hover");
			}).mouseout(function() {
				$(this).removeClass("hover");
			});
						
			/* Make dropdown menus keyboard accessible */
			
			$("a", el).focus(function() {
				$(this).parents("li").addClass("hover");
			}).blur(function() {
				$(this).parents("li").removeClass("hover");
			});
		}


$(document).ready(function(){
	
	$('html').removeClass('no-js');
	
	$("article ol li").wrapInner("<span></span>");
	
	$(".search-wrapper a").click(function() { 
			var myDIV = $(this).siblings(".search").toggleClass("showme");
			$("div").not(myDIV).removeClass("showme");
		return false;
	});
	
	////////////////////////////////////////
	$(".open a").click(function() { 
				$(this).parent().toggleClass("less");
				$(this).parent().next(".showpanel").toggleClass("expand");
				return false;
	});
	/////////////////////////////////////////
	$(".expand-all a .exp").click(function() { 
		$(this).parent().toggleClass("expall");
		$(".open").addClass("less");
		$(".showpanel").addClass("expand");
		return false;
	});
	$(".expand-all a .clps").click(function() { 
		$(this).parent().toggleClass("expall");
		$(".open").removeClass("less");
		$(".showpanel").removeClass("expand");
		return false;
	});
	/////////////////////////////////////////

	$(".navlink").click(function() { 
			var myDIV = $(this).siblings("ul").toggleClass("showme");
			$("ul").not(myDIV).removeClass("showme");
		return false;
	});
	 $(".content-wrapper > nav ul li ul").parent().addClass('subnav flyout');

	$(".subnav > span").click(function() { 
		 $(this).siblings("ul").toggleClass("third");
		 $(this).toggleClass("btntoggle");
		return false;
	});

	// $('.content-wrapper > nav > ul > li > a[href^="' + location.pathname.substring(0,location.pathname.lastIndexOf("/")) + '"]').parent("li").addClass("active").removeClass("flyout");
	$('.content-wrapper > nav > ul > li > a[href^="/' + location.pathname.split("/")[1] + '/"]').parent("li").addClass("active").removeClass("flyout");

	if (document.location.pathname == "/index.aspx" || document.location.pathname == "/"){
		$("body").addClass("home");
	}

	$("a[onclick^='wng']").addClass('external');

	$('article a[href^="http"]').not('[href*=".gov.au"]').not('[href^="https://v2."]').not('[href^="http://wsaco.com.au"]').click(function() {
		alert("You are now leaving the website of the Western Sydney Airport.\nThe website you are entering is not maintained or funded by the Commonwealth of Australia.");
	});

	$('a[href*="minister.infrastructure.gov.au"]').click(function() {
		alert("You are now entering the website of the\nMinisters for the Department of Infrastructure, Transport, Cities and Regional Development.");
	});

	$(".area-listing").find("li:even").addClass('odd')
	$(".area-listing").find("li:odd").addClass('even');
	
	$(".media-tiles").find("li:even").addClass('tile-odd');
	$(".media-tiles").find("li:odd").addClass('tile-even');

    $('a.backtotop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

var $allFrames = $("iframe"),
$fluidEl = $("#text");
$allFrames.each(function() {
	$(this).data('aspectRatio', this.height / this.width)
	.removeAttr('height')
	.removeAttr('width');
});
$(window).resize(function() {
	var newWidth;
	if ($(window).width() < 1049){
		newWidth = $fluidEl.width();
		console.log("100");
	}
	else
	{
		newWidth = $fluidEl.width() * 1.32;
		console.log("132");
	}
	$allFrames.each(function() {
		var $el = $(this);
		$el.width(newWidth).height(newWidth * $el.data('aspectRatio'));
	});
}).resize();

});




	$(window).scroll(function() {
		if( ($(window).scrollTop() + $(window).height() < $(document).height() - $(".footer-wrapper footer").height()) && ($(window).scrollTop()) ) {
			$(".backtotop").addClass("switch");
		} else {
			$(".backtotop").removeClass("switch");
		}
	});
