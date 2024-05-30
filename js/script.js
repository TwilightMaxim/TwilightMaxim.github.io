let openNav = () => {
    document.querySelector(".overlai").classList.toggle("active");
}
let openReg = () => {
    document.querySelector(".registration").classList.toggle("activ");
}
let openLog = () => {
    document.querySelector(".login").classList.toggle("acti");
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
        email: email,
        passwordHash: password,
        passwordSalt: "string"
    };
    // Отправляем данные на сервер
    fetch('https://85.193.85.147:5000/Authentication/Authorization', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка сети');
        }
        return window.location.href = 'index.html';; // Получаем текст ответа, а не JSON
    })
    .then(text => {
        
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Неправильный логин или пароль.');
    });
});

document.getElementById('regForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const regemail = document.getElementById('regEmail').value;
    const regpassword = document.getElementById('regPassword').value;
    const regname = document.getElementById('regName').value;
    const regfam = document.getElementById('regFam').value;
    const regDate = document.getElementById('regDate').value;

    const data = {
        email: regemail,
        passwordHash: regpassword,
        passwordSalt: "string"
    };
    // Отправляем данные на сервер
    fetch('https://85.193.85.147:5000/Authentication/Registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка сети');
        }
        return window.location.href = 'index.html';; // Получаем текст ответа, а не JSON
    })
    .then(text => {
        
    })
    .catch(error => {
        console.error('Ошибка:', error);
        
    });
});

document.getElementById('SearchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const departureCity = document.getElementById('departureCity').value;
    const arrivalCity = document.getElementById('arrivalCity').value;
    const date = document.getElementById('date').value;
    console.log(departureCity);
    console.log(arrivalCity);
    console.log(date);

    fetch(`https://85.193.85.147:5000/TransportRoutes/RoutesList?departureCity=${departureCity}&arrivalCity=${arrivalCity}&date=${date}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status);
            }
            return response.json(); // Вернуть данные в формате JSON
        })
        .then(data => {
            console.log(data);
            
            console.log(data);
            localStorage.setItem('offers', JSON.stringify(data));
            window.location.href = 'html/marshrut.html';
        })
        .catch(error => console.error('Ошибка поиска:', error));
});


