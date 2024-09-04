// Get the course list element
const courseList = document.getElementById('course-list');

// Loop through the courses array and create a list item for each course
courses.forEach(course => {
	const listItem = document.createElement('li');
	listItem.innerHTML = `
		<span class="course-code">${course.courseCode}</span>
		<span class="course-name">${course.courseName}</span>
		<span class="credits">(${course.credits} credits)</span>
	`;
	courseList.appendChild(listItem);
});