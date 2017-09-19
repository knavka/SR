
$(document).ready(function () {


var fields=['#input_surname','#input_age', '#input_marital_status', '#input_child_count','gender','#input_email'];

for (var i=0; i<fields.length;i++){
	validOnBlur(fields[i]);
};








// Инициализируем карусель
		var config = {
			interval: false
		}
		$('.carousel').carousel(config);


		
// Задаем обработку кнопки на 1 шаге с проверкой заполнения поля и переходом на 2 шаг
$('#submit_surname').click(function (event) {   
	event.preventDefault(); 
	if (validField('#input_surname')) $('.carousel').carousel(1);
})

// Задаем обработку кнопки на 2 шаге без какой-либо валидации и переходом на 3 шаг
$('#submit_more').click(function (event) {  
	event.preventDefault(); 
	$('.carousel').carousel(2);
})
// Задаем обработку кнопки на 3 шаге с проверкой заполнения всех полей и переходом на 4 шаг
$('#submit_detail').click(function (event) { 
	event.preventDefault(); 
	if (validField('#input_age', '#input_marital_status', '#input_child_count','gender')) $('.carousel').carousel(3);
})

// Задаем обработку кнопки на 4 шаге с проверкой заполнения поля email
$('#submit_email').click(function (event) { 
	event.preventDefault(); 
	if (validField('#input_email'))  $('.carousel').carousel(0);
})

})


// Валидируем поля по потере фокуса



// Функция проверки заполнения полей и перевода на следующий шаг
function validField (input_id) {

	console.log($(arguments[0]).val());


var isInvalidField=false;

	for (i=0; i<arguments.length; i++)
	{

		if (arguments[i][0]!=="#" && arguments[i][0]!==".") 
		{
			var inputByName="input[name="+arguments[i]+"]"; 
			if ($(inputByName).attr('type')==="radio") { 
				var radioVal=getRadioValue(arguments[i]);
				if (!radioVal) {
					isInvalidField=true;
					$(inputByName).addClass('invalid');
					$(inputByName).focus(function(){
						$(inputByName).removeClass('invalid');
					})

				}
			}


		}

		else {
			var field_id=arguments[i];
			var pattern=$(field_id).attr('pattern')?new RegExp($(field_id).attr('_pattern')):(($(field_id).attr('_pattern'))?new RegExp($(field_id).attr('_pattern')):null);

			if (!($(field_id).val())) {



				isInvalidField=true;
				$(field_id).addClass('invalid');
				// $(field_id).parent().addClass("incorrect").removeClass("correct");
				restyleOnFocus(field_id);
				
				
			}
			else if (pattern&&!pattern.test($(field_id).val().toString())) {
				isInvalidField=true;
				$(field_id).addClass('invalid');
				$(field_id).parent().addClass("incorrect").removeClass("correct");
				restyleOnFocus(field_id);
			}
			else {
				$(field_id).removeClass('invalid');
				$(field_id).parent().addClass("correct").removeClass("incorrect");
			}
		};
	}

	if (!isInvalidField) return true;
	else return false;

	
}



// Функция получения значения из радиобаттонов
function getRadioValue(name) {
	var radios = document.getElementsByName(name);
	for (var i = 0, radio; radio = radios[i]; i++) {
		if (radio.checked) return radio.value;
	}
	return null;

}

// Функция вызывающая валидатор поля по потере фокуса
function validOnBlur (field_id){
					var this_field_id=field_id;
					
						$(field_id).blur(function (){
							if ($(field_id).val()) 

							validField(this_field_id);
					});
				
				};


// функция удаляющая класс invalid при получении фокуса полем
function restyleOnFocus (field_id){
					var this_field_id=field_id;
					$(field_id).focus(function (){
						$(this_field_id).removeClass('invalid');
						$(field_id).parent().addClass("correct").removeClass("incorrect");
					});
				
				};

//   // Функция проверки заполнения полей и перевода на следующий шаг
//     function validField (step,input_id) {

//          	for (i=1; i<arguments.length; i++)
// 		{
//          	var field_id=arguments[i];
//          	var isInvalidField=false;

//          	if (!($(field_id).val())) {

//             isInvalidField=true;
//          	$(field_id).addClass('invalid');
//          	$(field_id).focus();
// 		}

// 	}

// 		if (!isInvalidField) $('.carousel').carousel(step);
// }