
$( document ).ready(function()
{
	var dictWord1 = ['Призрак','Космос','Жизнь','Театр','Школа',
	'Кошки','Ванная комната'];
	var dictWord2 = ['Телеканал','Политики','Денежные единицы','Цветы','Япония','Кухня','Обитатели зоопарка'];
	var dictWord3 = ['Сахар','Германия','ПОпулярная профессия',
	'Водный вид спорта','Герой анекдота','Ящерица','Хрень','Спорт'];

	var randomItem1 = dictWord1[Math.floor(Math.random()*dictWord1.length)];
	var randomItem2 = dictWord2[Math.floor(Math.random()*dictWord2.length)];
	var randomItem3 = dictWord3[Math.floor(Math.random()*dictWord3.length)];

	$("#word1").append(randomItem1);
	$("#word2").append(randomItem2);
	for (i = 0; i < 6; i++) {
	$("#word3").append(dictWord3.splice(Math.floor(Math.random()*dictWord3.length),1)+ "<br>");}
});
