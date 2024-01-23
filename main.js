setInterval(() => {
    // Запрашиваем данные с сервера и обновляем страницу
    fetch('/getSensorData')
        .then(response => response.json())
        .then(data => {
            const sensorValueElement = document.getElementById('value');
            sensorValueElement.innerText = data.sensorData !== null ? data.sensorData : 'No data';
        })
        .catch(error => console.error('Error fetching sensor data:', error));
}, 5000);
