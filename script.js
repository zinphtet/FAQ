const container = document.querySelector('.container');

const QAndA = [
	{ question: 'What is your Name ?', answer: 'My Name is Will Smith', id: 1 },
	{ question: 'How old are you ?', answer: 'I am 20 years old', id: 2 },
	{
		question: 'What is your Dream job ?',
		answer: 'I want to be an IT and Electronics Engineer',
		id: 3,
	},
	{ question: 'Where do you study  ?', answer: 'I study at Online', id: 4 },
	{ question: 'Where do you live?', answer: 'I live in Mandalay', id: 5 },
];

QAndA.map(function (each) {
	container.innerHTML += `<div class="item ">
    <div class="question_div">
        <div class="qusetion">Q : ${each.question}</div>
        <a href="#" class="btn btn_change"
            ><i class="fas fa-caret-down" id="${each.id}"></i
        ></a>
    </div>
    <div class="answer hide">A : ${each.answer}</div>
</div>`;
});

// Select Elemetn After Randering the elements
const icon = document.querySelectorAll('.btn_change i');
const answer = document.querySelectorAll('.answer');

console.log(Array.from(answer));
console.log(Array.from(icon));
const icons = Array.from(icon);
const answers = Array.from(answer);

console.log(icons[0]);

icons.forEach(function (icon) {
	icon.addEventListener('click', function () {
		// console.log(this);
		this.parentElement.parentElement.nextElementSibling.classList.toggle(
			'hide'
		);
		this.classList.contains('fa-caret-down')
			? (this.className = 'far fa-times-circle')
			: (this.className = 'fas fa-caret-down');

		!this.parentElement.parentElement.nextElementSibling.classList.contains(
			'hide'
		)
			? this.parentElement.parentElement.parentElement.classList.add('white')
			: this.parentElement.parentElement.parentElement.classList.remove(
					'white'
			  );
	});
});
