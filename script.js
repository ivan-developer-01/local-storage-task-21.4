let key = "userData";

if (!localStorage.getItem(key)) {
	const userData = {
		date: new Date().toString(),
	};

	let userName = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");
	userData.name = userName;

	localStorage.setItem(key, JSON.stringify(userData));
} else {
	const userData = JSON.parse(localStorage.getItem(key));
	let dateString = dateToString(userData.date);
	alert(
		`Добрый день, ${userData.name}! Давно не виделись. В последний раз вы были у нас ${dateString}.`
	);

	userData.date = new Date().toString();
	localStorage.setItem(key, JSON.stringify(userData));
}

function dateToString(date) {
	let dateObject = date instanceof Date ? date : new Date(date);

	// The variables are for simplicity purposes.
	// If you leave them in one-line the code would become shorter but more unreadable.
	const year = dateObject.getFullYear();
	const month = dateObject.getMonth();
	const day = dateObject.getDate();
	const hour = dateObject.getHours();
	const minute = dateObject.getMinutes();

	return `${day} ${monthToString(month)} ${year} в ${hour}:${minute}`;
}

function monthToString(month) {
	let months = [
		"января",
		"февраля",
		"марта",
		"апреля",
		"мая",
		"июня",
		"июля",
		"августа",
		"сентября",
		"октября",
		"ноября",
		"декабря",
	];

	return months[month] || "неизвестный месяц";
}
