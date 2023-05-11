window.addEventListener('DOMContentLoaded', init);

function init() {
	saveButton = document.querySelector('button');
	inputText = document.querySelector('textarea');
	savedTextList = document.querySelector('ol');

	if(localStorage.getItem('count') === null) {
		localStorage.setItem('count', 0);
	}
	let count = localStorage.getItem('count');
	for(let i = 0; i<count; i++) {
		savedTextList.innerHTML = savedTextList.innerHTML + '<li>' + localStorage.getItem(i) + '</li>';
	}
	saveButton.onclick = (event) => {
		console.log(inputText.value);
		localStorage.setItem(count, inputText.value);
		console.log(localStorage.getItem(count));
		savedTextList.innerHTML = savedTextList.innerHTML + '<li>' + localStorage.getItem(count) + '</li>';
		console.log(savedTextList.innerHTML);
		count++;
		localStorage.setItem('count', count);
	}
}