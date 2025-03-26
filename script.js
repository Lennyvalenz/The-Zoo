// Inicio de sesión para usuario 'lenny' con contraseña '12345'
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'lenny' && password === '12345') {
        alert('Inicio de sesión exitoso. Bienvenido a The Zoo 2.0');
        window.location.href = 'index.html'; // Redirige a la página principal
    } else {
        alert('Usuario o contraseña incorrectos. Inténtalo nuevamente.');
    }
});

// Mostrar/Ocultar contraseña
function togglePassword() {
    const password = document.getElementById('password');
    password.type = password.type === 'password' ? 'text' : 'password';
}

// Restablecimiento de contraseña
function resetPassword() {
    alert('Se ha enviado un enlace para restablecer la contraseña a su correo.');
}

// Usuarios logueados
const loggedInUsers = [];
function login(user) {
    if (!loggedInUsers.includes(user)) {
        loggedInUsers.push(user);
        alert(`${user} ha iniciado sesión.`);
    }
}

// Efecto de ondas al hacer click en Play
const playButtons = document.querySelectorAll('audio, video');
playButtons.forEach(btn => {
    btn.addEventListener('play', () => {
        btn.classList.add('wave-effect');
        setTimeout(() => btn.classList.remove('wave-effect'), 500);
    });
});

// Obtener clima actual usando OpenWeatherMap API
document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'f102f00402ea17d5ddc87ad6ea272515';
    const city = 'Ciudad de México'; // Cambia la ciudad si es necesario
    const weatherContainer = document.getElementById('weather-info');

    function getWeather() {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener el clima.');
                }
                return response.json();
            })
            .then(data => {
                const temp = data.main.temp;
                const description = data.weather[0].description;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                weatherContainer.innerHTML = `
                    <strong>${city}</strong>: ${description.charAt(0).toUpperCase() + description.slice(1)} <br>
                    🌡️ Temperatura: ${temp}°C <br>
                    💧 Humedad: ${humidity}% <br>
                    💨 Viento: ${windSpeed} m/s
                `;
            })
            .catch(error => {
                console.error('Error:', error);
                weatherContainer.innerHTML = 'No se pudo obtener el clima.';
            });
    }

    getWeather();
});

// Función para reproducir audio
function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.play();
    }
}

// Función para pausar audio
function pauseAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.pause();
    }
}

// Agregar el efecto de ondas (ripple effect)
function createRippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'ripple-effect';
    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Manejar eventos de clic en los botones
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (event) {
        const audioId = this.dataset.audio;
        const action = this.dataset.action;

        if (action === 'play') {
            playAudio(audioId);
        } else if (action === 'pause') {
            pauseAudio(audioId);
        }

        createRippleEffect(event);
    });
});

// Mostrar/ocultar contraseña
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const showPassword = document.getElementById('showPassword');
    
    if (showPassword.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

// Abrir ventana para restablecer contraseña
function openResetWindow() {
    document.getElementById('resetWindow').style.display = 'block';
}

// Cerrar ventana emergente
function closeResetWindow() {
    document.getElementById('resetWindow').style.display = 'none';
}

// Simular envío de enlace de restablecimiento
function sendResetLink() {
    const resetEmail = document.getElementById('resetEmail').value;

    if (resetEmail.trim() === '') {
        alert('Por favor, introduce un correo válido.');
    } else {
        alert(`📧 Enlace de restablecimiento enviado a: ${resetEmail}`);
        closeResetWindow();
    }
}

// Cerrar ventana emergente al hacer clic fuera del modal
window.onclick = function(event) {
    const modal = document.getElementById('resetWindow');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Actualiza el contador cada vez que el cursor se mueve
document.addEventListener('mousemove', () => {
    moveCount++;
    document.getElementById('mouse-counter').innerText = `Movimientos: ${moveCount}`;
});
let moveCount = 0;

// Contador de movimientos del mouse
document.addEventListener('mousemove', () => {
    moveCount++;
    document.getElementById('mouse-counter').innerText = `Movimientos: ${moveCount}`;
    console.log(`Evento 1: El mouse se movió. Total de movimientos: ${moveCount}`);
});

// Evento 2: Click en cualquier parte de la página
document.addEventListener('click', (e) => {
    console.log(`Evento 2: Se hizo clic en las coordenadas (${e.clientX}, ${e.clientY})`);
});

// Evento 3: Doble clic
document.addEventListener('dblclick', (e) => {
    console.log(`Evento 3: Doble clic en las coordenadas (${e.clientX}, ${e.clientY})`);
});

// Evento 4: Presión de una tecla
document.addEventListener('keydown', (e) => {
    console.log(`Evento 4: Se presionó la tecla "${e.key}"`);
});

// Evento 5: Redimensionamiento de la ventana
window.addEventListener('resize', () => {
    console.log(`Evento 5: La ventana cambió de tamaño a ${window.innerWidth}x${window.innerHeight}`);
});
