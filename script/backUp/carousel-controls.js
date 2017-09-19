	


	$(document).ready(function () {

		// initialize carousel
		var config = {
			interval: false
		}
		$('.carousel').carousel(config);


		

		// $('#surname').bootstrapValidator({
  //       message: 'This value is not valid',
  //       feedbackIcons: {
  //           valid: 'glyphicon glyphicon-ok',
  //           invalid: 'glyphicon glyphicon-remove',
  //           validating: 'glyphicon glyphicon-refresh'
  //       },
  //       fields: {
  //           input_surname: {
  //               message: 'The username is not valid',
  //               validators: {
  //                   notEmpty: {
  //                       message: 'Поле имя не может быть пустым'
  //                   },
  //                   stringLength: {
  //                       min: 2,
  //                       max: 30,
  //                       message: 'The username must be more than 6 and less than 30 characters long'
  //                   },
  //                   regexp: {
  //                       regexp: /^[а-яА-Я]+$/,
  //                       message: 'The username can only consist of alphabetical, number and underscore'
  //                   }
  //               }
  //           }
  //   });
		$('#surname').validator();
		// $('#submit_surname').click(function (event) {  // on click event on elem with class name like "go-to-step-1" call function
		$('#surname').validator().on('submit', function (event) {
		    var input_val=$("#input_surname").val();
			var regSurname=/^[a-яі]{2,}\s*$/ig;
        	if (input_val&&input_val.match(regSurname)) { 
			event.preventDefault(); 
			$('.carousel').carousel(1); 
			}
			else {
			
			event.preventDefault();
			console.log("bed");
			    
			}
		})
		})

		// $('#submit_surname').click(function (event) { 
		// 	var input_val=$("#input_surname").val();
		// 	var regSurname=/^[a-яі]{2,}\s*$/ig;
  //       	if (input_val&&input_val.match(regSurname)) {
  //       	//Отправляем данные на сервер
  //           console.log("//Отправляем данные на сервер");


  //       	//*Отправляем данные на сервер
        	
  //       	//Листаем карусель на следующий шаг
  //       	event.preventDefault(); // prevent sending on form submit event
		// 	$('.carousel').carousel(1); // go to page #1. Slides array started from 0. Ex. [0, 1, 2, 3]
		// 	//*Листаем карусель на следующий шаг
		// 	}

  //       	else {
  //       	//Отображаем информацию о невалидном значении поля
  //       	event.preventDefault();
  //       	console.log("//Отображаем информацию о невалидном значении поля");
  //       	 $('#input_surname').css("border-bottom", "2pt solid red" );
	 //        //*Отображаем информацию о невалидном значении поля

  //       	}

		// })

		$('#submit_more').click(function (event) {  // on click event on elem with class name like "go-to-step-1" call function
			event.preventDefault(); // prevent sending on form submit event
			$('.carousel').carousel(2); // go to page #1. Slides array started from 0. Ex. [0, 1, 2, 3]
		})

		$('#submit_detail').click(function (event) {  // on click event on elem with class name like "go-to-step-1" call function
			event.preventDefault(); // prevent sending on form submit event
			$('.carousel').carousel(3); // go to page #1. Slides array started from 0. Ex. [0, 1, 2, 3]
		})



	})	

