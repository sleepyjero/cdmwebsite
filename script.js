function mockLogin() {
    const name = document.getElementById('name').value;
    const studentNumber = document.getElementById('student-number').value;
    const course = document.getElementById('course').value;
    const section = document.getElementById('section').value;

    if (name && studentNumber && course && section) {
        alert("It's a prank! This is a mock website. Thanks for trying it out!");
    } else {
        alert('Please fill out all fields.');
    }
}
