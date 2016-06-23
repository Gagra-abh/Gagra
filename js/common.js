
// при клике на эелемент с классом main_mnu_button добавляет к классу off дополнительный клас offoff
// $(document).ready(function(){
// 	$(".main_mnu_button").click(function(){
// 		$(".off").toggleClass("offoff"); return false;
// 	});
// }); 


// при клике на ссылку применять ей противоположный стиль css, то есть,
//  если у ссылки задан стиль "default", то при клике заменить его на "red" и наоборот
$('a').click(function (event) {
    event.preventDefault(); // что бы не было перехода по ссылке
    $(this).toggleClass('default red');
});

$(document).ready(function() {

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});

// <-start->
 //    При клике на id="show_map" //<a href="hexagen_default.html#" id="show_map" class="btn_map show_map"> Voir la carte</a>
 //    добавляет к классу contact_form,и айдишниуку #footer "display none" (show_map - 'это блок с картой google, было!'). А также добавляет к id="contact" класс map

	// $("#show_map").click(function(a) {
 //            a.preventDefault(), $(".contact_form, #footer").fadeOut("normal", function() {
 //                $("#contact").addClass("map")
 //            })
 //        }), 

 //   При клике на id="show_contact" //<a href="hexagen_default.html#" id="show_contact" class="btn_map show_contact">Voir le formulaire de contacts </a>
 //   добавляет к классу contact_form,и айдишниуку #footer "display block". А удаляет из id="contact"
 //   класс map
	// $("#show_contact").click(function(a) {
 //            a.preventDefault(), $("#contact").removeClass("map"), 
 //            $(".contact_form, #footer").fadeIn().fadeIn("normal")
 //        })

	// Реализация кнопки включения/выкл блока.
// <div class="map_button">
// 				<a href="hexagen_default.html#" id="show_map" title="Voir la carte" class="btn_map show_map">Voir la carte</a>
// 				<a href="hexagen_default.html#" id="show_contact" title="Voir le formulaire de contacts" class="btn_map show_contact">Voir le formulaire de contacts </a>
// 			</div>
// </--end/>