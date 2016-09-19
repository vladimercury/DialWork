backgrounds_list = [
	'img/bg/1.jpg',
	'img/bg/2.jpg',
	'img/bg/3.jpg',
	'img/bg/4.jpg',
];

currentIndex = 0;

function backgroundInit(){
	len = backgrounds_list.length;
	currentIndex = Math.floor(Math.random() * len);
	document.body.style.backgroundImage = 'url("' + backgrounds_list[currentIndex] + '")';
}

function backgroundToggle(){
	len = backgrounds_list.length;
	if(++currentIndex >= len){
		currentIndex = 0;
	}
	document.body.style.backgroundImage = 'url("' + backgrounds_list[currentIndex] + '")';
}