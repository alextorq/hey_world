let area = document.querySelectorAll('.hover');
let note = document.getElementById('note');
let map = document.querySelector('.map');

for (let item of area) {
	item.addEventListener('click', function (event) {
		let wrapper = this.parentElement;
		let caption = wrapper.getAttribute('data-description');
		let cords = wrapper.getBoundingClientRect();
		let mapCords = map.getBoundingClientRect();
		let cordsY = cords.top;
		let mapCordsY = mapCords.top;

		let cordsX = cords.left;
		let mapCordsX = mapCords.left;

	  	var posY = cordsY - mapCordsY;   
	  	var posX = cordsX - mapCordsX;
	  	note.innerHTML = caption;
		note.style.top = `${posY - note.scrollHeight + 15}px`
		note.style.left = `${posX - (note.scrollWidth / 2) + (cords.width / 2) }px`
		note.classList.add('active');
	});
}

map.addEventListener('click', function(event) {
	if (event.target.parentElement.tagName != 'DIV') {
		return;
	}
	if (note.classList.contains('active')) {
		note.classList.remove('active')
	}
})