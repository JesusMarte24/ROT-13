const MainForm = document.getElementById('main--form');
const MainInput = document.getElementById('main--input');
const MainBtn = document.getElementById('main--button');
const result1 = document.getElementById('result--1');
const result2 = document.getElementById('result--2');
//Regex to Match Non Alpha Numerics :v
const alphabetRegex = /^[a-zA-Z]+$/;

const alphabet = {
	A: 'N',
	B: 'O',
	C: 'P',
	D: 'Q',
	E: 'R',
	F: 'S',
	G: 'T',
	H: 'U',
	I: 'V',
	J: 'W',
	K: 'X',
	L: 'Y',
	M: 'Z',
};

const cipherRot13 = (value) => {
	if (value.length < 2) {
		return null;
	}

	const upperCase = value.toUpperCase();
	result1.innerText = upperCase;
	result1.style.color = '#000000';

	const splited = upperCase.split('');
	const result = [];
	for (let i = 0; i < splited.length; i++) {
		if (splited[i].match(alphabetRegex)) {
		} else {
			result.push(splited[i]);
			continue;
		}
		for (const key in alphabet) {
			if (key == splited[i]) {
				result.push(alphabet[key]);
			} else if (alphabet[key] == splited[i]) {
				result.push(key);
			}
		}
	}
	result2.innerText = result.join('');
	result2.style.color = '#0e83cd';
};

MainForm.addEventListener('submit', (e) => {
	e.preventDefault();
});

MainBtn.addEventListener('click', () => {
	cipherRot13(MainInput.value);
	MainInput.value = '';
});
