/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Home Slider
4. Init Menu
5. Init Search
6. Init CTA Slider
7. Init Testimonials Slider
8. Init Search Form


******************************/




/** document.getElementById("villas-smenu").style.display = "visible";
document.getElementById("hotels-smenu").style.display = "none";
document.getElementById("apparts-smenu").style.display = "none";
*/

/**Adults   */





















$(function() { 
	$('.menu2').addClass('hiddenm');
	$('.menu2-hotel').addClass('hiddenm');
	$('.menu2-apart').addClass('hiddenm');
	$('.menu2-services').addClass('hiddenm')
	$('.mkids-age1').hide();
	$('.mkids-age2').hide();
	$('.mkids-age3').hide();
	$('.mkids-age4').hide();
	$('.mkids-age5').hide();
	$('.mkids-age6').hide();

	$('.mkids-apart-age1').hide();
	$('.mkids-apart-age2').hide();
	$('.mkids-apart-age3').hide();
	$('.mkids-apart-age4').hide();
	$('.mkids-apart-age5').hide();
	$('.mkids-apart-age6').hide();

	$('#add-drop-location').hide();
	$('#add-drop-location-return').hide();
	$('.mkids-hotel-age1').hide();
	$('.mkids-hotel-age2').hide();
	$('.mkids-hotel-age3').hide();
	$('.mkids-hotel-age4').hide();
	$('.mkids-hotel-age5').hide();
	$('.mkids-hotel-age6').hide();


	$('.mkids-services-age1').hide();
	$('.mkids-services-age2').hide();
	$('.mkids-services-age3').hide();
	$('.mkids-services-age4').hide();
	$('.mkids-services-age5').hide();
	$('.mkids-services-age6').hide();

	$('.red-notification').hide();
	$('.red-notification-hotel').hide();
	$('.red-notification-apart').hide();
	$('.red-notification-services').hide()


	$('.dash-book-trans').hide();
	$('.dash-hire-driv').hide();
 });










$(document).ready(function()
{
		

		$('.selec-Children').on('change', function() {
    
			if ( $('.selec-Children').val() == '0' ) kidz();
			else if ( $('.selec-Children').val() == '1' ) kid1();
			else if ( $('.selec-Children').val() == '2' ) kid2();
			else if ( $('.selec-Children').val() == '3' ) kid3();
			else if ( $('.selec-Children').val() == '4' ) kid4();
			else if ( $('.selec-Children').val() == '5' ) kid5();
			else if ( $('.selec-Children').val() == '6' ) kid6();
		  });

		  $('.selec-Children-hotel').on('change', function() {
    
			if ( $('.selec-Children-hotel').val() == '0' ) kidzHotel();
			else if ( $('.selec-Children-hotel').val() == '1' ) kid1Hotel();
			else if ( $('.selec-Children-hotel').val() == '2' ) kid2Hotel();
			else if ( $('.selec-Children-hotel').val() == '3' ) kid3Hotel();
			else if ( $('.selec-Children-hotel').val() == '4' ) kid4Hotel();
			else if ( $('.selec-Children-hotel').val() == '5' ) kid5Hotel();
			else if ( $('.selec-Children-hotel').val() == '6' ) kid6Hotel();
		  });

		  $('.selec-Children-apart').on('change', function() {
    
			if ( $('.selec-Children-apart').val() == '0' ) kidzApart();
			else if ( $('.selec-Children-apart').val() == '1' ) kid1Apart();
			else if ( $('.selec-Children-apart').val() == '2' ) kid2Apart();
			else if ( $('.selec-Children-apart').val() == '3' ) kid3Apart();
			else if ( $('.selec-Children-apart').val() == '4' ) kid4Apart();
			else if ( $('.selec-Children-apart').val() == '5' ) kid5Apart();
			else if ( $('.selec-Children-apart').val() == '6' ) kid6Apart();
		  });


		  $('.selec-Children-services').on('change', function() {
    
			if ( $('.selec-Children-services').val() == '0' ) kidzServices();
			else if ( $('.selec-Children-services').val() == '1' ) kid1Services();
			else if ( $('.selec-Children-services').val() == '2' ) kid2Services();
			else if ( $('.selec-Children-services').val() == '3' ) kid3Services();
			else if ( $('.selec-Children-services').val() == '4' ) kid4Services();
			else if ( $('.selec-Children-services').val() == '5' ) kid5Services();
			else if ( $('.selec-Children-services').val() == '6' ) kid6Services();
		  });


		  
		

		$('.1stkid').on('change', function(){
			if ($('.1stkid').val() == '0') doAge();
			else if ($('.1stkid').val() >= '1') agelogic1();
		});

		/*Activity Logic*/

		function agelogic1() {
			if ($('.selec-Children').val() >= '2'  &  $('.2kid').val() == '0') doAge();
			if ($('.selec-Children').val() == '1') ageDone();
			if ($('.selec-Children').val() == '2') re1l2();
			if ($('.selec-Children').val() == '3') re1l3();
			if ($('.selec-Children').val() == '4') re1l4();
			if ($('.selec-Children').val() == '5') re1l5();
			if ($('.selec-Children').val() == '6') re1l6();	
		}
		function re1l2() {
			if ($('.2kid').val() == '0') doAge();
			else if ($('.2kid').val() >= '1'  &&  $('.1stkid').val() >= '1') ageDone();
		}
		function re1l3() {
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.3rdkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&  $('.1stkid').val() >= '1') ageDone();
		}
		function re1l4() {
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			else if ($('.4rthkid').val() >= '1'  &&  $('.3rdkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&  $('.1stkid').val() >= '1') ageDone();
		}
		function re1l5() {
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			else if ($('.5kid').val() >= '1'  &&  $('.4rthkid').val() >= '1'  &&  $('.3rdkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&  $('.1stkid').val() >= '1') ageDone();
		}
		function re1l6() {
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			if ($('.6kid').val() == '0') doAge();
			else if ($('.6kid').val() >= '1'  &&  $('.5kid').val() >= '1'  &&  $('.4rthkid').val() >= '1'  &&  $('.3rdkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&  $('.1stkid').val() >= '1') ageDone();
		}

		/*HOtel Logic*/

		$('.1stkid-hotel').on('change', function(){
			if ($('.1stkid-hotel').val() == '0') doAgeHotel();
			else if ($('.1stkid-hotel').val() >= '1') agelogic1hotel();
		});

		function agelogic1hotel() {
			if ($('.selec-Children-hotel').val() >= '2'  &  $('.2kid-hotel').val() == '0') doAgeHotel();
			if ($('.selec-Children-hotel').val() == '1') ageDoneHotel();
			if ($('.selec-Children-hotel').val() == '2') re1l2Hotel();
			if ($('.selec-Children-hotel').val() == '3') re1l3Hotel();
			if ($('.selec-Children-hotel').val() == '4') re1l4Hotel();
			if ($('.selec-Children-hotel').val() == '5') re1l5Hotel();
			if ($('.selec-Children-hotel').val() == '6') re1l6Hotel();	
		}

		function re1l2Hotel() {
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			else if ($('.2kid-hotel').val() >= '1'  &&  $('.1stkid-hotel').val() >= '1') ageDoneHotel();
		}

		function re1l3Hotel() {
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			if ($('.3rdkid-hotel').val() == '0') doAgeHotel();
			if ($('.3rdkid-hotel').val() >= '1'  &&  $('.2kid-hotel').val() >= '1'  &&  $('.1stkid-hotel').val() >= '1') ageDoneHotel();
		}
		function re1l4Hotel() {
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			if ($('.3rdkid-hotel').val() == '0') doAgeHotel();
			if ($('.4rthkid-hotel').val() == '0') doAgeHotel();
			else if ($('.4rthkid-hotel').val() >= '1'  &&  $('.3rdkid-hotel').val() >= '1'  &&  $('.2kid-hotel').val() >= '1'  &&  $('.1stkid-hotel').val() >= '1') ageDoneHotel();
		}
		function re1l5Hotel() {
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			if ($('.3rdkid-hotel').val() == '0') doAgeHotel();
			if ($('.4rthkid-hotel').val() == '0') doAgeHotel();
			if ($('.5kid-hotel').val() == '0') doAgeHotel();
			else if ($('.5kid-hotel').val() >= '1'  &&  $('.4rthkid-hotel').val() >= '1'  &&  $('.3rdkid-hotel').val() >= '1'  &&  $('.2kid-hotel').val() >= '1'  &&  $('.1stkid-hotel').val() >= '1') ageDoneHotel();
		}
		function re1l6Hotel() {
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			if ($('.3rdkid-hotel').val() == '0') doAgeHotel();
			if ($('.4rthkid-hotel').val() == '0') doAgeHotel();
			if ($('.5kid-hotel').val() == '0') doAgeHotel();
			if ($('.6kid-hotel').val() == '0') doAgeHotel();
			else if ($('.6kid-hotel').val() >= '1'  &&  $('.5kid-hotel').val() >= '1'  &&  $('.4rthkid-hotel').val() >= '1'  &&  $('.3rdkid-hotel').val() >= '1'  &&  $('.2kid-hotel').val() >= '1'  &&  $('.1stkid-hotel').val() >= '1') ageDoneHotel();
		}


/* End hotel Logic1*/



/*   Apartment Logic 1 */

$('.1stkid-apart').on('change', function(){
	if ($('.1stkid-apart').val() == '0') doAgeApart();
	else if ($('.1stkid-apart').val() >= '1') agelogic1Apart();
});

function agelogic1Apart() {
	if ($('.selec-Children-apart').val() >= '2'  &  $('.2kid-apart').val() == '0') doAgeApart();
	if ($('.selec-Children-apart').val() == '1') ageDoneApart();
	if ($('.selec-Children-apart').val() == '2') re1l2Apart();
	if ($('.selec-Children-apart').val() == '3') re1l3Apart();
	if ($('.selec-Children-apart').val() == '4') re1l4Apart();
	if ($('.selec-Children-apart').val() == '5') re1l5Apart();
	if ($('.selec-Children-apart').val() == '6') re1l6Apart();	
}

function re1l2Apart() {
			if ($('.2kid-apart').val() == '0') doAgeApart();
			else if ($('.2kid-apart').val() >= '1'  &&  $('.1stkid-apart').val() >= '1') ageDoneApart();
		}

		function re1l3Apart() {
			if ($('.2kid-apart').val() == '0') doAgeApart();
			if ($('.3rdkid-apart').val() == '0') doAgeApart();
			if ($('.3rdkid-apart').val() >= '1'  &&  $('.2kid-apart').val() >= '1'  &&  $('.1stkid-apart').val() >= '1') ageDoneApart();
		}
		function re1l4Apart() {
			if ($('.2kid-apart').val() == '0') doAgeApart();
			if ($('.3rdkid-apart').val() == '0') doAgeApart();
			if ($('.4rthkid-apart').val() == '0') doAgeApart();
			else if ($('.4rthkid-apart').val() >= '1'  &&  $('.3rdkid-apart').val() >= '1'  &&  $('.2kid-apart').val() >= '1'  &&  $('.1stkid-apart').val() >= '1') ageDoneApart();
		}
		function re1l5Apart() {
			if ($('.2kid-apart').val() == '0') doAgeApart();
			if ($('.3rdkid-apart').val() == '0') doAgeApart();
			if ($('.4rthkid-apart').val() == '0') doAgeApart();
			if ($('.5kid-apart').val() == '0') doAgeApart();
			else if ($('.5kid-apart').val() >= '1'  &&  $('.4rthkid-apart').val() >= '1'  &&  $('.3rdkid-apart').val() >= '1'  &&  $('.2kid-apart').val() >= '1'  &&  $('.1stkid-apart').val() >= '1') ageDoneApart();
		}
		function re1l6Apart() {
			if ($('.2kid-apart').val() == '0') doAgeApart();
			if ($('.3rdkid-apart').val() == '0') doAgeApart();
			if ($('.4rthkid-apart').val() == '0') doAgeApart();
			if ($('.5kid-apart').val() == '0') doAgeApart();
			if ($('.6kid-apart').val() == '0') doAgeApart();
			else if ($('.6kid-apart').val() >= '1'  &&  $('.5kid-apart').val() >= '1'  &&  $('.4rthkid-apart').val() >= '1'  &&  $('.3rdkid-apart').val() >= '1'  &&  $('.2kid-apart').val() >= '1'  &&  $('.1stkid-apart').val() >= '1') ageDoneApart();
		}

/* End  Apartement Logics 1 */



					/*    Services Logics1 */

					$('.1stkid-services').on('change', function(){
						if ($('.1stkid-services').val() == '0') doAgeServices();
						else if ($('.1stkid-services').val() >= '1') agelogic1Services();
					});

					function agelogic1Services() {
						if ($('.selec-Children-services').val() >= '2'  &  $('.2kid-services').val() == '0') doAgeServices();
						if ($('.selec-Children-services').val() == '1') doAgeServices();
						if ($('.selec-Children-services').val() == '2') re1l2Services();
						if ($('.selec-Children-services').val() == '3') re1l3Services();
						if ($('.selec-Children-services').val() == '4') re1l4Services();
						if ($('.selec-Children-services').val() == '5') re1l5Services();
						if ($('.selec-Children-services').val() == '6') re1l6Services();	
					}


					function re1l2Services() {
						if ($('.2kid-services').val() == '0') doAgeServices();
						else if ($('.2kid-services').val() >= '1'  &&  $('.1stkid-services').val() >= '1') ageDoneServices();
					}
			
					function re1l3Services() {
						if ($('.2kid-services').val() == '0') doAgeServices();
						if ($('.3rdkid-services').val() == '0') doAgeServices();
						if ($('.3rdkid-services').val() >= '1'  &&  $('.2kid-services').val() >= '1'  &&  $('.1stkid-services').val() >= '1') ageDoneServices();
					}
					function re1l4Services() {
						if ($('.2kid-apart').val() == '0') doAgeServices();
						if ($('.3rdkid-apart').val() == '0') doAgeServices();
						if ($('.4rthkid-apart').val() == '0') doAgeServices();
						else if ($('.4rthkid-services').val() >= '1'  &&  $('.3rdkid-services').val() >= '1'  &&  $('.2kid-services').val() >= '1'  &&  $('.1stkid-services').val() >= '1') ageDoneServices();
					}
					function re1l5Services() {
						if ($('.2kid-services').val() == '0') doAgeServices();
						if ($('.3rdkid-services').val() == '0') doAgeServices();
						if ($('.4rthkid-services').val() == '0') doAgeServices();
						if ($('.5kid-services').val() == '0') doAgeServices();
						else if ($('.5kid-services').val() >= '1'  &&  $('.4rthkid-services').val() >= '1'  &&  $('.3rdkid-services').val() >= '1'  &&  $('.2kid-services').val() >= '1'  &&  $('.1stkid-services').val() >= '1') ageDoneServices();
					}
					function re1l6Services() {
						if ($('.2kid-services').val() == '0') doAgeServices();
						if ($('.3rdkid-services').val() == '0') doAgeServices();
						if ($('.4rthkid-services').val() == '0') doAgeServices();
						if ($('.5kid-services').val() == '0') doAgeServices();
						if ($('.6kid-services').val() == '0') doAgeServices();
						else if ($('.6kid-services').val() >= '1'  &&  $('.5kid-services').val() >= '1'  &&  $('.4rthkid-services').val() >= '1'  &&  $('.3rdkid-services').val() >= '1'  &&  $('.2kid-services').val() >= '1'  &&  $('.1stkid-services').val() >= '1') ageDoneServices();
					}

					/* End   Services Logics1 */


		$('.2kid').on('change', function(){
			if ($('.2kid').val() == '0') doAge();
			else if ($('.2kid').val() >= '1') agelogic2();
			
		})
		function agelogic2() {
			if ($('.selec-Children').val() >= '2'  &  $('.1stkid').val() == '0') doAge();
			else if ($('.selec-Children').val() == '2' &  $('.1stkid').val() >= '1' ) ageDone();
			if ($('.selec-Children').val() == '3') re2l3();
			if ($('.selec-Children').val() == '4') re2l4();
			if ($('.selec-Children').val() == '5') re2l5();
			if ($('.selec-Children').val() == '6') re2l6();
		}
		function re2l3() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.3rdkid').val() >= '1' &&  $('.2kid').val() >= '1'  &&  $('.1stkid').val() >= '1' ) ageDone();
		}
		function re2l4() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			else if ($('.1stkid').val() >= '1'  &&  $('.3rdkid').val() >= '1' &&  $('.4rthkid').val() >= '1' ) ageDone(); 

		}
		function re2l5() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			else if ($('.5kid').val() >= '1' && $('.1stkid').val() >= '1'  &&  $('.3rdkid').val() >= '1' &&  $('.4rthkid').val() >= '1') ageDone();
		}
		function re2l6() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			if ($('.6kid').val() == '0') doAge();
			else if ($('.6kid').val() >= '1' && $('.5kid').val() >= '1' && $('.1stkid').val() >= '1'  &&  $('.3rdkid').val() >= '1' &&  $('.4rthkid').val() >= '1') ageDone();
		}

/*HOtel Logic2*/
		$('.2kid-hotel').on('change', function(){
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			else if ($('.2kid-hotel').val() >= '1') agelogic2Hotel();
	
		})
		function agelogic2Hotel() {
			if ($('.selec-Children-hotel').val() >= '2'  &  $('.1stkid-hotel').val() == '0') doAgeHotel();
			else if ($('.selec-Children-hotel').val() == '2' &  $('.1stkid-hotel').val() >= '1' ) ageDoneHotel();
			if ($('.selec-Children-hotel').val() == '3') re2l3Hotel();
			if ($('.selec-Children-hotel').val() == '4') re2l4Hotel();
			if ($('.selec-Children-hotel').val() == '5') re2l5Hotel();
			if ($('.selec-Children-hotel').val() == '6') re2l6Hotel();
		}
		function re2l3Hotel() {
			if ($('.1stkid-hotel').val() == '0') doAgeHotel();
			if ($('.3rdkid-hotel').val() == '0') doAgeHotel();
			if ($('.3rdkid-hotel').val() >= '1' &&  $('.2kid-hotel').val() >= '1'  &&  $('.1stkid-hotel').val() >= '1' ) ageDoneHotel();
		}
		function re2l4Hotel() {
			if ($('.1stkid-hotel').val() == '0') doAgeHotel();
			if ($('.4rthkid-hotel').val() == '0') doAgeHotel();
			if ($('.3rdkid-hotel').val() == '0') doAgeHotel();
			else if ($('.1stkid-hotel').val() >= '1'  &&  $('.3rdkid-hotel').val() >= '1' &&  $('.4rthkid-hotel').val() >= '1' ) ageDoneHotel(); 

		}
		function re2l5Hotel() {
			if ($('.1stkid-hotel').val() == '0') doAgeHotel();
			if ($('.4rthkid-hotel').val() == '0') doAgeHotel();
			if ($('.3rdkid-hotel').val() == '0') doAgeHotel();
			if ($('.5kid-hotel').val() == '0') doAgeHotel();
			else if ($('.5kid-hotel').val() >= '1' && $('.1stkid-hotel').val() >= '1'  &&  $('.3rdkid-hotel').val() >= '1' &&  $('.4rthkid-hotel').val() >= '1') ageDoneHotel();
		}
		function re2l6Hotel() {
			if ($('.1stkid-hotel').val() == '0') doAgeHotel();
			if ($('.4rthkid-hotel').val() == '0') doAgeHotel();
			if ($('.3rdkid-hotel').val() == '0') doAgeHotel();
			if ($('.5kid-hotel').val() == '0') doAgeHotel();
			if ($('.6kid-hotel').val() == '0') doAgeHotel();
			else if ($('.6kid-hotel').val() >= '1' && $('.5kid-hotel').val() >= '1' && $('.1stkid-hotel').val() >= '1'  &&  $('.3rdkid-hotel').val() >= '1' &&  $('.4rthkid-hotel').val() >= '1') ageDoneHotel();
		}


/*HOtel End*/


/*   Apartment Logic 2 */
$('.2kid-apart').on('change', function(){
	if ($('.2kid-apart').val() == '0') doAgeApart();
	else if ($('.2kid-apart').val() >= '1') agelogic2Apart();

})
function agelogic2Apart() {
	if ($('.selec-Children-apart').val() >= '2'  &  $('.1stkid-apart').val() == '0') doAgeApart();
	else if ($('.selec-Children-apart').val() == '2' &  $('.1stkid-apart').val() >= '1' ) ageDoneApart();
	if ($('.selec-Children-apart').val() == '3') re2l3Apart();
	if ($('.selec-Children-apart').val() == '4') re2l4Apart();
	if ($('.selec-Children-apart').val() == '5') re2l5Apart();
	if ($('.selec-Children-apart').val() == '6') re2l6Apart();
}
function re2l3Apart() {
	if ($('.1stkid-apart').val() == '0') doAgeApart();
	if ($('.3rdkid-apart').val() == '0') doAgeApart();
	if ($('.3rdkid-apart').val() >= '1' &&  $('.2kid-apart').val() >= '1'  &&  $('.1stkid-apart').val() >= '1' ) ageDoneApart();
}
function re2l4Apart() {
	if ($('.1stkid-apart').val() == '0') doAgeApart();
	if ($('.4rthkid-apart').val() == '0') doAgeApart();
	if ($('.3rdkid-apart').val() == '0') doAgeApart();
	else if ($('.1stkid-apart').val() >= '1'  &&  $('.3rdkid-apart').val() >= '1' &&  $('.4rthkid-apart').val() >= '1' ) ageDoneApart(); 

}
function re2l5Apart() {
	if ($('.1stkid-apart').val() == '0') doAgeApart();
	if ($('.4rthkid-apart').val() == '0') doAgeApart();
	if ($('.3rdkid-apart').val() == '0') doAgeApart();
	if ($('.5kid-apart').val() == '0') doAgeApart();
	else if ($('.5kid-apart').val() >= '1' && $('.1stkid-apart').val() >= '1'  &&  $('.3rdkid-apart').val() >= '1' &&  $('.4rthkid-apart').val() >= '1') ageDoneApart();
}
function re2l6Apart() {
	if ($('.1stkid-apart').val() == '0') doAgeApart();
	if ($('.4rthkid-apart').val() == '0') doAgeApart();
	if ($('.3rdkid-apart').val() == '0') doAgeApart();
	if ($('.5kid-apart').val() == '0') doAgeApart();
	if ($('.6kid-apart').val() == '0') doAgeApart();
	else if ($('.6kid-apart').val() >= '1' && $('.5kid-apart').val() >= '1' && $('.1stkid-apart').val() >= '1'  &&  $('.3rdkid-apart').val() >= '1' &&  $('.4rthkid-apart').val() >= '1') ageDoneApart();
}


/*  End  Apartment Logic 2 */




/*    Services Logics2 */



/*  End  Services Logics2 */

		$('.3rdkid').on('change', function(){
			if($('.3rdkid').val() == '0' ) doAge();
			else if ($('.3rdkid').val() >= '1' ) agelogic3();
		})
		function agelogic3() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			else if ($('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1') ageDone();
			if ($('.selec-Children').val() == '4') re3l4();
			if ($('.selec-Children').val() == '5') re3l5();
			if ($('.selec-Children').val() == '6') re3l6();
		}
		
		function re3l4() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			else if ($('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&   $('.4rthkid').val() >= '1') agedone();
			
		}
		function re3l5() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			else if ($('.5kid').val() >= '1'  &&  $('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&   $('.4rthkid').val() >= '1') ageDone();
		}
		function re3l6() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			if ($('.6kid').val() == '0') doAge();
			else if ($('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'   &&     $('.4rthkid').val() >= '1'    &&  $('.5kid').val() >= '1' &&  $('6kid').val() >= '1' ) ageDone();
			
		}
/*HOtel Logic3*/
		$('.3rdkid-hotel').on('change', function(){
			if($('.3rdkid-hotel').val() == '0' ) doAgeHotel();
			else if ($('.3rdkid-hotel').val() >= '1' ) agelogic3Hotel();
		})

		function agelogic3Hotel() {
			if ($('.1stkid-hotel').val() == '0') doAgeHotel();
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			else if ($('.1stkid-hotel').val() >= '1'  &&  $('.2kid-hotel').val() >= '1') ageDoneHotel();
			if ($('.selec-Children-hotel').val() == '4') re3l4Hotel();
			if ($('.selec-Children-hotel').val() == '5') re3l5Hotel();
			if ($('.selec-Children-hotel').val() == '6') re3l6Hotel();
	}
		function re3l4Hotel() {
			if ($('.1stkid-hotel').val() == '0') doAgeHotel();
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			if ($('.4rthkid-hotel').val() == '0') doAgeHotel();
			else if ($('.1stkid-hotel').val() >= '1'  &&  $('.2kid-hotel').val() >= '1'  &&   $('.4rthkid-hotel').val() >= '1') ageDoneHotel();
			
		}

		function re3l5Hotel() {
			if ($('.1stkid-hotel').val() == '0') doAgeHotel();
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			if ($('.4rthkid-hotel').val() == '0') doAgeHotel();
			if ($('.5kid-hotel').val() == '0') doAgeHotel();
			else if ($('.5kid-hotel').val() >= '1'  &&  $('.1stkid-hotel').val() >= '1'  &&  $('.2kid-hotel').val() >= '1'  &&   $('.4rthkid-hotel').val() >= '1') ageDoneHotel();
		}
		function re3l6Hotel() {
			if ($('.1stkid-hotel').val() == '0') doAgeHotel();
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			if ($('.4rthkid-hotel').val() == '0') doAgeHotel();
			if ($('.5kid-hotel').val() == '0') doAgeHotel();
			if ($('.6kid-hotel').val() == '0') doAgeHotel();
			else if ($('.1stkid-hotel').val() >= '1'  &&  $('.2kid-hotel').val() >= '1'   &&     $('.4rthkid-hotel').val() >= '1'    &&  $('.5kid-hotel').val() >= '1' &&  $('6kid-hotel').val() >= '1' ) ageDoneHotel();
			
		}

/*HOtel End Logic3*/

/*   Apartment Logic 3 */

$('.3rdkid-apart').on('change', function(){
	if($('.3rdkid-apart').val() == '0' ) doAgeApart();
	else if ($('.3rdkid-apart').val() >= '1' ) agelogic3Apart();
})

function agelogic3Apart() {
	if ($('.1stkid-apart').val() == '0') doAgeApart();
	if ($('.2kid-apart').val() == '0') doAgeApart();
	else if ($('.1stkid-apart').val() >= '1'  &&  $('.2kid-apart').val() >= '1') ageDoneApart();
	if ($('.selec-Children-apart').val() == '4') re3l4Apart();
	if ($('.selec-Children-apart').val() == '5') re3l5Apart();
	if ($('.selec-Children-apart').val() == '6') re3l6Apart();
}
function re3l4Apart() {
	if ($('.1stkid-apart').val() == '0') doAgeApart();
	if ($('.2kid-apart').val() == '0') doAgeApart();
	if ($('.4rthkid-apart').val() == '0') doAgeApart();
	else if ($('.1stkid-apart').val() >= '1'  &&  $('.2kid-apart').val() >= '1'  &&   $('.4rthkid-apart').val() >= '1') ageDoneApart();
	
}

function re3l5Apart() {
	if ($('.1stkid-apart').val() == '0') doAgeApart();
	if ($('.2kid-apart').val() == '0') doAgeApart();
	if ($('.4rthkid-apart').val() == '0') doAgeApart();
	if ($('.5kid-apart').val() == '0') doAgeApart();
	else if ($('.5kid-apart').val() >= '1'  &&  $('.1stkid-apart').val() >= '1'  &&  $('.2kid-apart').val() >= '1'  &&   $('.4rthkid-apart').val() >= '1') ageDoneApart();
}
function re3l6Apart() {
	if ($('.1stkid-apart').val() == '0') doAgeApart();
	if ($('.2kid-apart').val() == '0') doAgeApart();
	if ($('.4rthkid-apart').val() == '0') doAgeApart();
	if ($('.5kid-apart').val() == '0') doAgeApart();
	if ($('.6kid-apart').val() == '0') doAgeApart();
	else if ($('.1stkid-apart').val() >= '1'  &&  $('.2kid-apart').val() >= '1'   &&     $('.4rthkid-apart').val() >= '1'    &&  $('.5kid-apart').val() >= '1' &&  $('6kid-apart').val() >= '1' ) ageDoneApart();
	
}

/* End  Apartment Logic 3 */





		$('.4rthkid').on('change', function(){
			if($('.4rthkid').val() == '0') doAge();
			else if($('.4rthkid').val() >= '1') agelogic4();
		})
		function agelogic4() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			else if ($('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&  $('.3rdkid').val() >= '1') ageDone();
			if ($('.selec-Children').val() == '5') re4l5();
			if ($('.selec-Children').val() == '6') re4l6();
			
		}
		function re4l5() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			else if ($('.5kid').val() >= '1'  &&  $('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&   $('.3rdkid').val() >= '1') ageDone();
			
		}
		function re4l6() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			if ($('.6kid').val() == '0') doAge();
			else if ($('6kid').val() >= '1'  &&  $('.5kid').val() >= '1'  &&  $('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&   $('.3rdkid').val() >= '1') ageDone();
		}
/*HOtel Logic4*/
		$('.4rthkid-hotel').on('change', function(){
			if($('.4rthkid-hotel').val() == '0') doAgeHotel();
			else if($('.4rthkid-hotel').val() >= '1') agelogic4Hotel();
		})

		function agelogic4Hotel() {
			if ($('.1stkid-hotel').val() == '0') doAgeHotel();
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			if ($('.3rdkid-hotel').val() == '0') doAgeHotel();
			else if ($('.1stkid-hotel').val() >= '1'  &&  $('.2kid-hotel').val() >= '1'  &&  $('.3rdkid-hotel').val() >= '1') ageDoneHotel();
			if ($('.selec-Children-hotel').val() == '5') re4l5Hotel();
			if ($('.selec-Children-hotel').val() == '6') re4l6Hotel();
			
		}

		function re4l5Hotel() {
			if ($('.1stkid-hotel').val() == '0') doAgeHotel();
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			if ($('.3rdkid-hotel').val() == '0') doAgeHotel();
			if ($('.5kid-hotel').val() == '0') doAgeHotel();
			else if ($('.5kid-hotel').val() >= '1'  &&  $('.1stkid-hotel').val() >= '1'  &&  $('.2kid-hotel').val() >= '1'  &&   $('.3rdkid-hotel').val() >= '1') ageDoneHotel();
			
		}
		function re4l6Hotel() {
			if ($('.1stkid-hotel').val() == '0') doAgeHotel();
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			if ($('.3rdkid-hotel').val() == '0') doAgeHotel();
			if ($('.5kid-hotel').val() == '0') doAgeHotel();
			if ($('.6kid-hotel').val() == '0') doAgeHotel();
			else if ($('6kid-hotel').val() >= '1'  &&  $('.5kid-hotel').val() >= '1'  &&  $('.1stkid-hotel').val() >= '1'  &&  $('.2kid-hotel').val() >= '1'  &&   $('.3rdkid-hotel').val() >= '1') ageDoneHotel();
		}
/*End Logic4*/

/*   Apartment Logic 4 */

$('.4rthkid-apart').on('change', function(){
	if($('.4rthkid-apart').val() == '0') doAgeApart();
	else if($('.4rthkid-apart').val() >= '1') agelogic4Apart();
})

function agelogic4Apart() {
	if ($('.1stkid-apart').val() == '0') doAgeApart();
	if ($('.2kid-apart').val() == '0') doAgeApart();
	if ($('.3rdkid-apart').val() == '0') doAgeApart();
	else if ($('.1stkid-apart').val() >= '1'  &&  $('.2kid-apart').val() >= '1'  &&  $('.3rdkid-apart').val() >= '1') ageDoneApart();
	if ($('.selec-Children-apart').val() == '5') re4l5Apart();
	if ($('.selec-Children-apart').val() == '6') re4l6Apart();
	
}

function re4l5Apart() {
	if ($('.1stkid-apart').val() == '0') doAgeApart();
	if ($('.2kid-apart').val() == '0') doAgeApart();
	if ($('.3rdkid-apart').val() == '0') doAgeApart();
	if ($('.5kid-apart').val() == '0') doAgeApart();
	else if ($('.5kid-apart').val() >= '1'  &&  $('.1stkid-apart').val() >= '1'  &&  $('.2kid-apart').val() >= '1'  &&   $('.3rdkid-apart').val() >= '1') ageDoneApart();
	
}
function re4l6Apart() {
	if ($('.1stkid-apart').val() == '0') doAgeApart();
	if ($('.2kid-apart').val() == '0') doAgeApart();
	if ($('.3rdkid-apart').val() == '0') doAgeApart();
	if ($('.5kid-apart').val() == '0') doAgeApart();
	if ($('.6kid-apart').val() == '0') doAgeApart();
	else if ($('6kid-apart').val() >= '1'  &&  $('.5kid-apart').val() >= '1'  &&  $('.1stkid-apart').val() >= '1'  &&  $('.2kid-apart').val() >= '1'  &&   $('.3rdkid-apart').val() >= '1') ageDoneApart();
}

/* End  Apartment Logic 4 */

		$('.5kid').on('change', function(){
			if ($('.5kid').val() == '0') doAge();
			else if ($('.5kid').val() >= '1') agelogic5();
		})
		function agelogic5() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			else if ( $('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&   $('.3rdkid').val() >= '1'  &&  $('.4rthkid').val() >= '1'  ) ageDone();
			if ($('.selec-Children').val() == '6') re5l6();
		}
		function re5l6() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.6kid').val() == '0') doAge();
			else if ( $('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&   $('.3rdkid').val() >= '1'  &&  $('.4rthkid').val() >= '1'  &&  $('6kid').val() >= '1' ) ageDone();
		}

/*Hotel Logic5*/
		$('.5kid-hotel').on('change', function(){
			if ($('.5kid-hotel').val() == '0') doAgeHotel();
			else if ($('.5kid-hotel').val() >= '1') agelogic5Hotel();
		})
		function agelogic5Hotel() {
			if ($('.1stkid-hotel').val() == '0') doAgeHotel();
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			if ($('.3rdkid-hotel').val() == '0') doAgeHotel();
			if ($('.4rthkid-hotel').val() == '0') doAgeHotel();
			else if ( $('.1stkid-hotel').val() >= '1'  &&  $('.2kid-hotel').val() >= '1'  &&   $('.3rdkid-hotel').val() >= '1'  &&  $('.4rthkid-hotel').val() >= '1'  ) ageDoneHotel();
			if ($('.selec-Children-hotel').val() == '6') re5l6Hotel();
		}

		function re5l6Hotel() {
			if ($('.1stkid-hotel').val() == '0') doAgeHotel();
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			if ($('.3rdkid-hotel').val() == '0') doAgeHotel();
			if ($('.4rthkid-hotel').val() == '0') doAgeHotel();
			if ($('.6kid-hotel').val() == '0') doAgeHotel();
			else if ( $('.1stkid-hotel').val() >= '1'  &&  $('.2kid-hotel').val() >= '1'  &&   $('.3rdkid-hotel').val() >= '1'  &&  $('.4rthkid-hotel').val() >= '1'  &&  $('6kid-hotel').val() >= '1' ) ageDoneHotel();
		}


/*end Logic5*/
			

/*  Apartment Logic 5 */

$('.5kid-apart').on('change', function(){
	if ($('.5kid-apart').val() == '0') doAgeApart();
	else if ($('.5kid-apart').val() >= '1') agelogic5Apart();
})
function agelogic5Apart() {
	if ($('.1stkid-apart').val() == '0') doAgeApart();
	if ($('.2kid-apart').val() == '0') doAgeApart();
	if ($('.3rdkid-apart').val() == '0') doAgeApart();
	if ($('.4rthkid-apart').val() == '0') doAgeApart();
	else if ( $('.1stkid-apart').val() >= '1'  &&  $('.2kid-apart').val() >= '1'  &&   $('.3rdkid-apart').val() >= '1'  &&  $('.4rthkid-apart').val() >= '1'  ) ageDoneApart();
	if ($('.selec-Children-apart').val() == '6') re5l6Apart();
}

function re5l6Apart() {
	if ($('.1stkid-apart').val() == '0') doAgeApart();
	if ($('.2kid-apart').val() == '0') doAgeApart();
	if ($('.3rdkid-apart').val() == '0') doAgeApart();
	if ($('.4rthkid-apart').val() == '0') doAgeApart();
	if ($('.6kid-apart').val() == '0') doAgeApart();
	else if ( $('.1stkid-apart').val() >= '1'  &&  $('.2kid-apart').val() >= '1'  &&   $('.3rdkid-apart').val() >= '1'  &&  $('.4rthkid-apart').val() >= '1'  &&  $('6kid-apart').val() >= '1' ) ageDoneApart();
}


/* End  Apartment Logic 5 */




		$('.6kid').on('change', function(){
			if ($('.6kid').val() == '0') doAge();
			else if ($('.6kid').val()  >= '1') agelogic6();
		})
		function agelogic6() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			else if ($('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&   $('.3rdkid').val() >= '1' &&  $('.4rthkid').val() >= '1'  &&   $('.5kid').val() >= '1') ageDone();
			else if ($('.selec-Children').val() == '6') re6l6();
		}
		function re6l6() {
			if ($('.1stkid').val() == '0') doAge();
			if ($('.2kid').val() == '0') doAge();
			if ($('.3rdkid').val() == '0') doAge();
			if ($('.4rthkid').val() == '0') doAge();
			if ($('.5kid').val() == '0') doAge();
			else if ( $('.1stkid').val() >= '1'  &&  $('.2kid').val() >= '1'  &&   $('.3rdkid').val() >= '1'  &&  $('.4rthkid').val() >= '1'   &&  $('.5kid').val() >= '1' ) ageDone();
		}
/*Hotel Logic6*/
		$('.6kid-hotel').on('change', function(){
			if ($('.6kid-hotel').val() == '0') doAgeHotel();
			else if ($('.6kid-hotel').val()  >= '1') agelogic6Hotel();
		})
		function agelogic6Hotel() {
			if ($('.1stkid-hotel').val() == '0') doAgeHotel();
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			if ($('.3rdkid-hotel').val() == '0') doAgeHotel();
			if ($('.4rthkid-hotel').val() == '0') doAgeHotel();
			if ($('.5kid-hotel').val() == '0') doAgeHotel();
			else if ($('.1stkid-hotel').val() >= '1'  &&  $('.2kid-hotel').val() >= '1'  &&   $('.3rdkid-hotel').val() >= '1' &&  $('.4rthkid-hotel').val() >= '1'  &&   $('.5kid-hotel').val() >= '1') ageDoneHotel();
			else if ($('.selec-Children-hotel').val() == '6') re6l6Hotel();
		}
		function re6l6Hotel() {
			if ($('.1stkid-hotel').val() == '0') doAgeHotel();
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			if ($('.3rdkid-hotel').val() == '0') doAgeHotel();
			if ($('.4rthkid-hotel').val() == '0') doAgeHotel();
			if ($('.5kid-hotel').val() == '0') doAgeHotel();
			else if ( $('.1stkid-hotel').val() >= '1'  &&  $('.2kid-hotel').val() >= '1'  &&   $('.3rdkid-hotel').val() >= '1'  &&  $('.4rthkid-hotel').val() >= '1'   &&  $('.5kid-hotel').val() >= '1' ) ageDoneHotel();
		}





/*End Logic6*/

/*  Apartment Logic 6 */

$('.6kid-apart').on('change', function(){
	if ($('.6kid-apart').val() == '0') doAgeApart();
	else if ($('.6kid-apart').val()  >= '1') agelogic6Apart();
})
function agelogic6Apart() {
	if ($('.1stkid-apart').val() == '0') doAgeApart();
	if ($('.2kid-apart').val() == '0') doAgeApart();
	if ($('.3rdkid-apart').val() == '0') doAgeApart();
	if ($('.4rthkid-apart').val() == '0') doAgeApart();
	if ($('.5kid-apart').val() == '0') doAgeApart();
	else if ($('.1stkid-apart').val() >= '1'  &&  $('.2kid-apart').val() >= '1'  &&   $('.3rdkid-apart').val() >= '1' &&  $('.4rthkid-apart').val() >= '1'  &&   $('.5kid-apart').val() >= '1') ageDoneApart();
	else if ($('.selec-Children-apart').val() == '6') re6l6Apart();
}
function re6l6Apart() {
	if ($('.1stkid-apart').val() == '0') doAgeApart();
	if ($('.2kid-apart').val() == '0') doAgeApart();
	if ($('.3rdkid-apart').val() == '0') doAgeApart();
	if ($('.4rthkid-apart').val() == '0') doAgeApart();
	if ($('.5kid-apart').val() == '0') doAgeApart();
	else if ( $('.1stkid-apart').val() >= '1'  &&  $('.2kid-apart').val() >= '1'  &&   $('.3rdkid-apart').val() >= '1'  &&  $('.4rthkid-apart').val() >= '1'   &&  $('.5kid-apart').val() >= '1' ) ageDoneApart();
}


/* End  Apartment Logic 6 */



		function doAge() {
			$('.red-notification').show();	
		}

		function ageDone() {
			$('.red-notification').hide();	
		}

		function doAgeHotel() {
			$('.red-notification-hotel').show();	
		}

		function ageDoneHotel() {
			$('.red-notification-hotel').hide();	
		}

		function doAgeApart() {
			$('.red-notification-apart').show();	
		}

		function ageDoneApart() {
			$('.red-notification-apart').hide();	
		}


		function doAgeServices() {
			$('.red-notification-services').show();	
		}

		function ageDoneServices() {
			$('.red-notification-services').hide();	
		}


		function hero1 () {
		if ($('.1stkid').val() == '0' & $('.selec-Children').val() == '0' ) hideAll();
		else if ($('.1stkid').val() == '0' & $('.selec-Children').val() >= '1' ) staystill();
		else if ($('.1stkid').val() >= '1' & $('.selec-Children').val() >= '1' ) hideAll();
		}
		function hero2 () {
			if ($('.2kid').val() == '0' & $('.selec-Children').val() >= '2' ) staystill();
			else if ($('.2kid').val() >= '1' & $('.selec-Children').val() >= '2' ) hideAll();
			
			}
		function hero3 () {
			if ($('.3rdkid').val() == '0' & $('.selec-Children').val() >= '3' ) staystill();
		}	

		function hero4 () {
			if ($('.4rthkid').val() == '0' & $('.selec-Children').val() >= '4') staystill();
		}
		function hero5() {
			if ($('.5kid').val() == '0' & $('.selec-Children').val() >= '5') staystill();
		}
		
		function hero6() {
			if ($('.6kid').val() == '0'  &  $('.selec-Children').val() >= '6') staystill();
		}		


/*Hotel Done Control*/
		
			function hero1Hotel () {
			if ($('.1stkid-hotel').val() == '0' & $('.selec-Children-hotel').val() == '0' ) hideHotels();
			else if ($('.1stkid-hotel').val() == '0' & $('.selec-Children-hotel').val() >= '1' ) staystillHotel();
			else if ($('.1stkid-hotel').val() >= '1' & $('.selec-Children-hotel').val() >= '1' ) hideHotels();
			}
			function hero2Hotel () {
				if ($('.2kid-hotel').val() == '0' & $('.selec-Children-hotel').val() >= '2' ) staystillHotel();
				else if ($('.2kid-hotel').val() >= '1' & $('.selec-Children-hotel').val() >= '2' ) hideHotels();
				
				}
			function hero3Hotel () {
				if ($('.3rdkid-hotel').val() == '0' & $('.selec-Children-hotel').val() >= '3' ) staystillHotel();
			}	

			function hero4Hotel () {
				if ($('.4rthkid-hotel').val() == '0' & $('.selec-Children-hotel').val() >= '4') staystillHotel();
			}
			function hero5Hotel() {
				if ($('.5kid-hotel').val() == '0' & $('.selec-Children-hotel').val() >= '5') staystillHotel();
			}
			
			function hero6Hotel() {
				if ($('.6kid-hotel').val() == '0'  &  $('.selec-Children-hotel').val() >= '6') staystillHotel();
			}

/*End Done Control*/	

/*Apart Done Control*/
function hero1Apart () {
	if ($('.1stkid-apart').val() == '0' & $('.selec-Children-apart').val() == '0' ) hideApart();
	else if ($('.1stkid-apart').val() == '0' & $('.selec-Children-apart').val() >= '1' ) staystillApart();
	else if ($('.1stkid-apart').val() >= '1' & $('.selec-Children-apart').val() >= '1' ) hideApart();
	}
	function hero2Apart () {
		if ($('.2kid-apart').val() == '0' & $('.selec-Children-apart').val() >= '2' ) staystillApart();
		else if ($('.2kid-apart').val() >= '1' & $('.selec-Children-apart').val() >= '2' ) hideApart();
		
		}
	function hero3Apart () {
		if ($('.3rdkid-apart').val() == '0' & $('.selec-Children-apart').val() >= '3' ) staystillApart();
	}	

	function hero4Apart () {
		if ($('.4rthkid-apart').val() == '0' & $('.selec-Children-apart').val() >= '4') staystillApart();
	}
	function hero5Apart() {
		if ($('.5kid-apart').val() == '0' & $('.selec-Children-apart').val() >= '5') staystillApart();
	}
	
	function hero6Apart() {
		if ($('.6kid-apart').val() == '0'  &  $('.selec-Children-apart').val() >= '6') staystillApart();
	}


/* End Apart Done Control*/


		$('.done-close').click(function(){
			hero1();
			hero2();
			hero3();
			hero4();
			hero5();
			hero6();
			allpersons();
		});


		$('.done-close-hotel').click(function(){
			hero1Hotel();
			hero2Hotel();
			hero3Hotel();
			hero4Hotel();
			hero5Hotel();
			hero6Hotel();
			allpersonsHotels();
			
		});





		$('.done-close-apart').click(function(){
			
			hero1Apart();
			hero2Apart();
			hero3Apart();
			hero4Apart();
			hero5Apart();
			hero6Apart();
			allpersonsApart();
			
		});

		



		function allpersons() {
			var tradults = $("#qty1").val();
			var allkids = $(".selec-Children").val();

			document.getElementById("aladults").innerHTML = tradults;
			document.getElementById("alkids").innerHTML = allkids;
			
		}

		function allpersonsHotels() {
			var tradults = $("#qty1-hotel").val();
			var allkids = $(".selec-Children-hotel").val();

			document.getElementById("aladults-hotel").innerHTML = tradults;
			document.getElementById("alkids-hotel").innerHTML = allkids;
			
		}

		function allpersonsApart() {
			var tradults = $("#qty1-apart").val();
			var allkids = $(".selec-Children-apart").val();

			document.getElementById("aladults-apart").innerHTML = tradults;
			document.getElementById("alkids-apart").innerHTML = allkids;
			
		}







		$('#close-ignore').click(function(){
			hideAll();
		})

		$('#close-ignore-hotel').click(function(){
			hideHotels();
		})

		$('#close-ignore-apart').click(function(){
			hideApart();
		})

		$('#close-ignore-services').click(function(){
			hideAllServices();
		})

		function hideAll(){
			$('.menu2').hide();
		}

		function staystill() {
			$('.menu2').show();
		}
		
		function hideHotels(){
			$('.menu2-hotel').hide();
		}

		function staystillHotel(){
			$('.menu2-hotel').show();
		}

		function hideApart(){
			$('.menu2-apart').hide();
		}
		function hideAllServices(){
			$('.menu2-services').hide();
		}

		function staystillApart(){
			$('.menu2-apart').show();
		}



		function kidz() {
		$('.mkids-age1').hide()
		$('.mkids-age2').hide()
		$('.mkids-age3').hide()
		$('.mkids-age4').hide()
		$('.mkids-age5').hide()
		$('.mkids-age6').hide()
		$('.red-notification').hide();

		}
		function kidzHotel() {
			$('.mkids-hotel-age1').hide()
			$('.mkids-hotel-age2').hide()
			$('.mkids-hotel-age3').hide()
			$('.mkids-hotel-age4').hide()
			$('.mkids-hotel-age5').hide()
			$('.mkids-hotel-age6').hide()
			$('.red-notification-hotel').hide();

		}
		
		function kidzApart() 
		{
			$('.mkids-apart-age1').hide()
			$('.mkids-apart-age2').hide()
			$('.mkids-apart-age3').hide()
			$('.mkids-apart-age4').hide()
			$('.mkids-apart-age5').hide()
			$('.mkids-apart-age6').hide()
			$('.red-notification-apart').hide()
			
		}

		function kidzServices() 
		{
			$('.mkids-services-age1').hide()
			$('.mkids-services-age2').hide()
			$('.mkids-services-age3').hide()
			$('.mkids-services-age4').hide()
			$('.mkids-services-age5').hide()
			$('.mkids-services-age6').hide()
			$('.red-notification-services').hide()
			
		}





		
		function kid1() {
			$('.mkids-age1').show()
			$('.mkids-age2').hide()
			$('.mkids-age3').hide()
			$('.mkids-age4').hide()
			$('.mkids-age5').hide()
			$('.mkids-age6').hide()
			ageNote1()
		  }

		function ageNote1() {
			if($('.1stkid').val() >= '1') ageDone();
			else if($('.1stkid').val() == '0') doAge();
		}



		function kid1Hotel() 
		{
			$('.mkids-hotel-age1').show()
			$('.mkids-hotel-age2').hide()
			$('.mkids-hotel-age3').hide()
			$('.mkids-hotel-age4').hide()
			$('.mkids-hotel-age5').hide()
			$('.mkids-hotel-age6').hide()
			ageNote1Hotel()
		}

		  function ageNote1Hotel() {
			if($('.1stkid-hotel').val() >= '1') ageDoneHotel();
			else if($('.1stkid-hotel').val() == '0') doAgeHotel();
			}


			


			function kid1Apart() 
			{
				$('.mkids-apart-age1').show()
				$('.mkids-apart-age2').hide()
				$('.mkids-apart-age3').hide()
				$('.mkids-apart-age4').hide()
				$('.mkids-apart-age5').hide()
				$('.mkids-apart-age6').hide()
				ageNote1Apart()
			}

			function ageNote1Apart() {
				if($('.1stkid-apart').val() >= '1') ageDoneApart();
				else if($('.1stkid-apart').val() == '0') doAgeApart();
				}

			
				function kid1Services() 
			{
				$('.mkids-services-age1').show()
				$('.mkids-services-age2').hide()
				$('.mkids-services-age3').hide()
				$('.mkids-services-age4').hide()
				$('.mkids-services-age5').hide()
				$('.mkids-services-age6').hide()
				ageNote1Services()
			}	
			
			function ageNote1Services() {
				if($('.1stkid-services').val() >= '1') ageDoneServices();
				else if($('.1stkid-services').val() == '0') doAgeServices();
				}






		function kid2() {
			$('.mkids-age1').show();
			$('.mkids-age2').show();
			$('.mkids-age3').hide();
			$('.mkids-age4').hide();
			$('.mkids-age5').hide();
			$('.mkids-age6').hide();
			ageNote2();
			
		}


		function ageNote2() {
			ageNote1();
			if ($('.2kid').val() == '0') doAge();
			else if($('.2kid').val() >= '1') ageDone();
		}

		
		function kid2Hotel() 
		{
			$('.mkids-hotel-age1').show()
			$('.mkids-hotel-age2').show()
			$('.mkids-hotel-age3').hide()
			$('.mkids-hotel-age4').hide()
			$('.mkids-hotel-age5').hide()
			$('.mkids-hotel-age6').hide()
			ageNote2Hotel()
		}

		function ageNote2Hotel() {
			ageNote1Hotel();
			if ($('.2kid-hotel').val() == '0') doAgeHotel();
			else if($('.2kid-hotel').val() >= '1') ageDoneHotel();
		}







		function kid2Apart() 
		{
			$('.mkids-apart-age1').show()
			$('.mkids-apart-age2').show()
			$('.mkids-apart-age3').hide()
			$('.mkids-apart-age4').hide()
			$('.mkids-apart-age5').hide()
			$('.mkids-apart-age6').hide()
			ageNote2Apart()
		}
		
		function ageNote2Apart() {
			ageNote1Apart();
			if ($('.2kid-apart').val() == '0') doAgeApart();
			else if($('.2kid-apart').val() >= '1') ageDoneApart();
		}




		function kid2Services() 
		{
			$('.mkids-services-age1').show()
			$('.mkids-services-age2').show()
			$('.mkids-services-age3').hide()
			$('.mkids-services-age4').hide()
			$('.mkids-services-age5').hide()
			$('.mkids-services-age6').hide()
			ageNote2Services()
		}
		
		function ageNote2Services() {
			ageNote1Services();
			if ($('.2kid-services').val() == '0') doAgeServices();
			else if($('.2kid-services').val() >= '1') ageDoneServices();
		}





		function kid3() {
			$('.mkids-age1').show()
			$('.mkids-age2').show()
			$('.mkids-age3').show()
			$('.mkids-age4').hide()
			$('.mkids-age5').hide()
			$('.mkids-age6').hide()
			ageNote3();
		}
		function ageNote3() {
			ageNote1();
			ageNote2();
			if($('.3rdkid').val() == '0') doAge();
			else if ($('.3rdkid').val() >= '1') ageDone();

		}


		function kid3Hotel() 
		{
			$('.mkids-hotel-age1').show()
			$('.mkids-hotel-age2').show()
			$('.mkids-hotel-age3').show()
			$('.mkids-hotel-age4').hide()
			$('.mkids-hotel-age5').hide()
			$('.mkids-hotel-age6').hide()
			ageNote3Hotel()
		}

		function ageNote3Hotel() {
			ageNote1Hotel();
			ageNote2Hotel();
			if($('.3rdkid-hotel').val() == '0') doAgeHotel();
			else if ($('.3rdkid-hotel').val() >= '1') ageDoneHotel();

		}





		function kid3Apart() 
		{
			$('.mkids-apart-age1').show()
			$('.mkids-apart-age2').show()
			$('.mkids-apart-age3').show()
			$('.mkids-apart-age4').hide()
			$('.mkids-apart-age5').hide()
			$('.mkids-apart-age6').hide()
			ageNote3Apart()
		}

		function ageNote3Apart() {
			ageNote1Apart();
			ageNote2Apart();
			if($('.3rdkid-apart').val() == '0') doAgeApart();
			else if ($('.3rdkid-apart').val() >= '1') ageDoneApart();

		}



		
		function kid3Services() 
		{
			$('.mkids-services-age1').show()
			$('.mkids-services-age2').show()
			$('.mkids-services-age3').show()
			$('.mkids-services-age4').hide()
			$('.mkids-services-age5').hide()
			$('.mkids-services-age6').hide()
			ageNote3Services()
		}

		function ageNote3Services() {
			ageNote1Services();
			ageNote2Services();
			if($('.3rdkid-services').val() == '0') doAgeServices();
			else if ($('.3rdkid-services').val() >= '1') ageDoneServices();

		}





		function kid4() {
			$('.mkids-age1').show()
			$('.mkids-age2').show()
			$('.mkids-age3').show()
			$('.mkids-age4').show()
			$('.mkids-age5').hide()
			$('.mkids-age6').hide()
			ageNote4();
		}
		function ageNote4() {
			ageNote1();
			ageNote2();
			ageNote3();
			if ($('.4rthkid').val() == '0') doAge();
			else if ($('.4rthkid').val() >= '1') ageDone();
		};



		function kid4Hotel() 
		{
			$('.mkids-hotel-age1').show()
			$('.mkids-hotel-age2').show()
			$('.mkids-hotel-age3').show()
			$('.mkids-hotel-age4').show()
			$('.mkids-hotel-age5').hide()
			$('.mkids-hotel-age6').hide()
			
			ageNote4Hotel()
		}
		function ageNote4Hotel() {
			ageNote1Hotel();
			ageNote2Hotel();
			ageNote3Hotel();
			
			if ($('.4rthkid-hotel').val() == '0') doAgeHotel();
			else if ($('.4rthkid-hotel').val() >= '1') ageDoneHotel();
		};




		
		function kid4Apart() 
		{
			$('.mkids-apart-age1').show()
			$('.mkids-apart-age2').show()
			$('.mkids-apart-age3').show()
			$('.mkids-apart-age4').show()
			$('.mkids-apart-age5').hide()
			$('.mkids-apart-age6').hide()
			
			ageNote4Apart()
		}
		function ageNote4Apart() {
			ageNote1Apart();
			ageNote2Apart();
			ageNote3Apart();
			
			if ($('.4rthkid-apart').val() == '0') doAgeApart();
			else if ($('.4rthkid-apart').val() >= '1') ageDoneApart();
		};



		function kid4Services() 
		{
			$('.mkids-services-age1').show()
			$('.mkids-services-age2').show()
			$('.mkids-services-age3').show()
			$('.mkids-services-age4').show()
			$('.mkids-services-age5').hide()
			$('.mkids-services-age6').hide()
			ageNote4Services()
		}
		function ageNote4Services() {
			ageNote1Services();
			ageNote2Services();
			ageNote3Services();
			
			if ($('.4rthkid-services').val() == '0') doAgeServices();
			else if ($('.4rthkid-services').val() >= '1') ageDoneServices();
		};



		function kid5() {
			$('.mkids-age1').show();
			$('.mkids-age2').show();
			$('.mkids-age3').show();
			$('.mkids-age4').show();
			$('.mkids-age5').show();
			$('.mkids-age6').hide();
			ageNote5();
		}
		function ageNote5() {
			ageNote1();
			ageNote2()
			ageNote3();
			ageNote4();
			if ($('.5kid').val() == '0') doAge();
			else if ($('.5kid').val() >= '1') ageDone();

		};






		function kid5Hotel() 
		{
			$('.mkids-hotel-age1').show()
			$('.mkids-hotel-age2').show()
			$('.mkids-hotel-age3').show()
			$('.mkids-hotel-age4').show()
			$('.mkids-hotel-age5').show()
			$('.mkids-hotel-age6').hide()
			
			ageNote5Hotel()
		}
		function ageNote5Hotel() {
			ageNote1Hotel();
			ageNote2Hotel();
			ageNote3Hotel();
			ageNote4Hotel();
			
			if ($('.5kid-hotel').val() == '0') doAgeHotel();
			else if ($('.5kid-hotel').val() >= '1') ageDoneHotel();
		};


		
		function kid5Apart() 
		{
			$('.mkids-apart-age1').show()
			$('.mkids-apart-age2').show()
			$('.mkids-apart-age3').show()
			$('.mkids-apart-age4').show()
			$('.mkids-apart-age5').show()
			$('.mkids-apart-age6').hide()
			
			ageNote5Apart()
		}
		function ageNote5Apart() {
			ageNote1Apart();
			ageNote2Apart();
			ageNote3Apart();
			ageNote4Apart();
			
			if ($('.5kid-apart').val() == '0') doAgeApart();
			else if ($('.5kid-apart').val() >= '1') ageDoneApart();
		};






		function kid5Services() 
		{
			$('.mkids-services-age1').show()
			$('.mkids-services-age2').show()
			$('.mkids-services-age3').show()
			$('.mkids-services-age4').show()
			$('.mkids-services-age5').show()
			$('.mkids-services-age6').hide()
			ageNote5Services()
		}
		function ageNote5Services() {
			ageNote1Services();
			ageNote2Services();
			ageNote3Services();
			ageNote4Services();
			
			if ($('.5kid-services').val() == '0') doAgeServices();
			else if ($('.5kid-services').val() >= '1') ageDoneServices();
		};









		function kid6() {
			$('.mkids-age1').show()
			$('.mkids-age2').show()
			$('.mkids-age3').show()
			$('.mkids-age4').show()
			$('.mkids-age5').show()
			$('.mkids-age6').show()
			ageNote6();
		};
		function ageNote6() {
			ageNote1();
			ageNote2();
			ageNote3();
			ageNote4();
			ageNote5();
			if ($('.6kid').val() == '0') doAge();
			else if ($('.6kid').val() >= '1') ageDone();
		}



		function kid6Hotel() 
		{
			$('.mkids-hotel-age1').show()
			$('.mkids-hotel-age2').show()
			$('.mkids-hotel-age3').show()
			$('.mkids-hotel-age4').show()
			$('.mkids-hotel-age5').show()
			$('.mkids-hotel-age6').show()
			
			ageNote6Hotel()
		}
		function ageNote6Hotel() {
			ageNote1Hotel();
			ageNote2Hotel();
			ageNote3Hotel();
			ageNote4Hotel();
			ageNote5Hotel();
			
			if ($('.6kid-hotel').val() == '0') doAgeHotel();
			else if ($('.6kid-hotel').val() >= '1') ageDoneHotel();
		};




	
		function kid6Apart() 
		{
			$('.mkids-apart-age1').show()
			$('.mkids-apart-age2').show()
			$('.mkids-apart-age3').show()
			$('.mkids-apart-age4').show()
			$('.mkids-apart-age5').show()
			$('.mkids-apart-age6').show()
			
			ageNote6Apart()
		}
		function ageNote6Apart() {
			ageNote1Apart();
			ageNote2Apart();
			ageNote3Apart();
			ageNote4Apart();
			ageNote5Apart();
			
			if ($('.6kid-apart').val() == '0') doAgeApart();
			else if ($('.6kid-apart').val() >= '1') ageDoneApart();
		};


		


		function kid6Services() 
		{
			$('.mkids-services-age1').show()
			$('.mkids-services-age2').show()
			$('.mkids-services-age3').show()
			$('.mkids-services-age4').show()
			$('.mkids-services-age5').show()
			$('.mkids-services-age6').show()
			ageNote6Services()
		}
		function ageNote6Services() {
			ageNote1Services();
			ageNote2Services();
			ageNote3Services();
			ageNote4Services();
			ageNote5Services();
			
			if ($('.6kid-services').val() == '0') doAgeServices();
			else if ($('.6kid-services').val() >= '1') ageDoneServices();
		};




		
		$('.hamburger2').click(function(){
			$('.menu2').show();
			
		});
		
		$('.hamburger2-hotel').click(function(){
			
			$('.menu2-hotel').show();
		});
		
		
		$('.hamburger2-apartment').click(function(){
			
			$('.menu2-apart').show();
		});
		
		$('.hamburger2-services').click(function(){
			
			$('.menu2-services').show();
		});





		$("#villas-smenu").show();
		$("#hotels-smenu").hide();
		$("#apparts-smenu").hide();

	$("#vill-action").click(function(){
		
		$("#villas-smenu").show(500);
		$("#hotels-smenu").hide();
		$("#apparts-smenu").hide();
	  });

	  $("#hotel-action").click(function(){
		
		$("#villas-smenu").hide();
		$("#hotels-smenu").show(500);
		$("#apparts-smenu").hide();
	  });


	  $("#appart-action").click(function(){
		$("#apparts-smenu").show(500);
		$("#villas-smenu").hide();
		$("#hotels-smenu").hide();
	  });



	  $('#rental-action').click(function(){
		$(".dash-renal-car").show(500);
		$('.dash-book-trans').hide();
		$('.dash-hire-driv').hide();
	  });

	  $('#tranfer-action').click(function(){
		$('.dash-book-trans').show(500);
		$(".dash-renal-car").hide();
		$('.dash-hire-driv').hide();

	  });

	  $('#drive-action').click(function(){
		$('.dash-hire-driv').show(500);
		$(".dash-renal-car").hide();
		$('.dash-book-trans').hide();
	  })




	  $('#myform :checkbox').change(function() {
		// this will contain a reference to the checkbox   
		if (this.checked) { 
			// the checkbox is now checked 
			$('#add-drop-location').show();
		} else {
			// the checkbox is now no longer checked
			$('#add-drop-location').hide();
		}
	});

	
	$('#myform2 :checkbox').change(function() {
		// this will contain a reference to the checkbox   
		if (this.checked) { 
			// the checkbox is now checked 
			$('#add-drop-location-return').show();
		} else {
			// the checkbox is now no longer checked
			$('#add-drop-location-return').hide();
		}
	});


	  $("#roundedk1").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".box").hide();
            }
        });
    }).change();
	  

	$('#roundedk-in').Zebra_DatePicker({
		direction: true,
		pair: $('#roundedk-out')
	}); 
	$('#roundedk-out').Zebra_DatePicker({
		direction: 1,
	});
	  

	
	$('#roundedk-hotl-in').Zebra_DatePicker({
		direction: true,
		pair: $('#roundedk-hotl-out')
	}); 
	$('#roundedk-hotl-out').Zebra_DatePicker({
		direction: 1,
	});


	$('#roundedk-apart-in').Zebra_DatePicker({
		direction: true,
		pair: $('#roundedk-apart-out')
	}); 
	$('#roundedk-apart-out').Zebra_DatePicker({
		direction: 1,
	});


		
	$('#roundedk-activity').Zebra_DatePicker({
		direction: true,
	});



	$('#roundedk-serv-in').Zebra_DatePicker({
		direction: true,
		pair: $('#roundedk-serv-out')
	}); 
	$('#roundedk-serv-out').Zebra_DatePicker({
		direction: true,
	});


	$('#roundedk-trans-in').Zebra_DatePicker({
		
		direction: true,
		pair: $('#roundedk-trans-out')
	}); 
	$('#roundedk-trans-out').Zebra_DatePicker({
		direction: true,
		
	});


	$('#roundedk-reservaton').Zebra_DatePicker({
		direction: true,
	});


	$('#date-book-trans').Zebra_DatePicker({
		format: 'Y-m-d H:i',
		direction: true,
	});
	

	
	$('#roundedk-trans-in-hire').Zebra_DatePicker({
		direction: true,
	});









	"use strict";

	/* 

	1. Vars and Inits

	*/













	var menu = $('.menu');
	var menuActive = false;
	var header = $('.header');
	var searchActive = false;

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initHomeSlider();
	initMenu();
	initSearch();
	initCtaSlider();
	initTestSlider();
	initSearchForm();

	/* 
	2. Set Header
	*/

	function setHeader()
	{
		if(window.innerWidth < 992)
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		else
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
	}

	/* 

	3. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');

			homeSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:false,
				smartSpeed:1200,
				dotsContainer:'main_slider_custom_dots'
			});

			/* Custom nav events */
			if($('.home_slider_prev').length)
			{
				var prev = $('.home_slider_prev');

				prev.on('click', function()
				{
					homeSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.home_slider_next').length)
			{
				var next = $('.home_slider_next');

				next.on('click', function()
				{
					homeSlider.trigger('next.owl.carousel');
				});
			}

			/* Custom dots events */
			if($('.home_slider_custom_dot').length)
			{
				$('.home_slider_custom_dot').on('click', function()
				{
					$('.home_slider_custom_dot').removeClass('active');
					$(this).addClass('active');
					homeSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
				});
			}

			/* Change active class for dots when slide changes by nav or touch */
			homeSlider.on('changed.owl.carousel', function(event)
			{
				$('.home_slider_custom_dot').removeClass('active');
				$('.home_slider_custom_dots li').eq(event.page.index).addClass('active');
			});	

			// add animate.css class(es) to the elements to be animated
			function setAnimation ( _elem, _InOut )
			{
				// Store all animationend event name in a string.
				// cf animate.css documentation
				var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

				_elem.each ( function ()
				{
					var $elem = $(this);
					var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

					$elem.addClass($animationType).one(animationEndEvent, function ()
					{
						$elem.removeClass($animationType); // remove animate.css Class at the end of the animations
					});
				});
			}

			// Fired before current slide change
			homeSlider.on('change.owl.carousel', function(event)
			{
				var $currentItem = $('.home_slider_item', homeSlider).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-out]");
				setAnimation ($elemsToanim, 'out');
			});

			// Fired after current slide has been changed
			homeSlider.on('changed.owl.carousel', function(event)
			{
				var $currentItem = $('.home_slider_item', homeSlider).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-in]");
				setAnimation ($elemsToanim, 'in');
			})
		}
	}

	/* 

	4. Init Menu

	*/

	function initMenu()
	{
		if($('.hamburger').length && $('.menu').length)
		{
			var hamb = $('.hamburger');
			var close = $('.menu_close_container');

			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

			close.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

	
		}
	}





	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	5. Init Search

	*/

	function initSearch()
	{
		if($('.search_tab').length)
		{
			$('.search_tab').on('click', function()
			{
				$('.search_tab').removeClass('active');
				$(this).addClass('active');
				var clickedIndex = $('.search_tab').index(this);

				var panels = $('.search_panel');
				panels.removeClass('active');
				$(panels[clickedIndex]).addClass('active');
			});
		}


		  if($('.search_tab_lil').length)
		{
			$('.search_tab_lil').on('click', function()
			{
				$('.search_tab_lil').removeClass('active');
				$(this).addClass('active');
				var clickedIndex = $('.search_tab_lil').index(this);

				var panes = $('.menu-nav');
				panes.removeClass('active');
				$(panes[clickedIndex]).addClass('active');
			});
		}
		

		

















	}

	/* 

	6. Init CTA Slider

	*/

	function initCtaSlider()
	{
		if($('.cta_slider').length)
		{
			var ctaSlider = $('.cta_slider');

			ctaSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:false,
				nav:false,
				dots:false,
				smartSpeed:1200
			});

			/* Custom nav events */
			if($('.cta_slider_prev').length)
			{
				var prev = $('.cta_slider_prev');

				prev.on('click', function()
				{
					ctaSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.cta_slider_next').length)
			{
				var next = $('.cta_slider_next');

				next.on('click', function()
				{
					ctaSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	7. Init Testimonials Slider

	*/

	function initTestSlider()
	{
		if($('.test_slider').length)
		{
			var testSlider = $('.test_slider');

			testSlider.owlCarousel(
			{
				loop:true,
				nav:false,
				dots:false,
				smartSpeed:1200,
				margin:30,
				responsive:
				{
					0:{items:1},
					480:{items:1},
					768:{items:2},
					992:{items:3}
				}
			});

			/* Custom nav events */
			if($('.test_slider_prev').length)
			{
				var prev = $('.test_slider_prev');

				prev.on('click', function()
				{
					testSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.test_slider_next').length)
			{
				var next = $('.test_slider_next');

				next.on('click', function()
				{
					testSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	8. Init Search Form

	*/

	function initSearchForm()
	{
		if($('.search_form').length)
		{
			var searchForm = $('.search_form');
			var searchInput = $('.search_content_input');
			var searchButton = $('.content_search');

			searchButton.on('click', function(event)
			{
				event.stopPropagation();

				if(!searchActive)
				{
					searchForm.addClass('active');
					searchActive = true;

					$(document).one('click', function closeForm(e)
					{
						if($(e.target).hasClass('search_content_input'))
						{
							$(document).one('click', closeForm);
						}
						else
						{
							searchForm.removeClass('active');
							searchActive = false;
						}
					});
				}
				else
				{
					searchForm.removeClass('active');
					searchActive = false;
				}
			});	
		}
	}
});