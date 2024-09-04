// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
	link.addEventListener('click', event => {
		// Prevent default link behavior
		event.preventDefault();

		// Get the href attribute of the link
		const href = link.getAttribute('href');

		// Scroll to the corresponding section
		document.querySelector(href).scrollIntoView({
			behavior: 'smooth'
		});
	});
});