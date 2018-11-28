function changeUrl() {
  const url = document.querySelector('.js-trigger');
	const urlLink = url.getAttribute('src');
  const randNum = Math.floor(Math.random() * 4);  
	const newUrl = `${urlLink}&index=${randNum}`;
	url.src = newUrl;
}

changeUrl();