document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const time = document.getElementById('time').value;
    
    // Форматиране на дата (днес е 15-ти януари 2026)
    const date = "20260115"; 

    alert(`Готово, ${name}! Вашият час за ${service} е потвърден.`);

    // Създаване на линк към Google Календар за известие
    const title = encodeURIComponent(`Бръснарница Острието - ${service}`);
    const details = encodeURIComponent(`Клиент: ${name}. Очакваме ви!`);
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&dates=${date}T${time.replace(':', '')}00Z/${date}T${time.replace(':', '')}00Z`;

    // Питаме потребителя дали иска напомняне
    if (confirm("Искате ли да добавите напомняне в Google Календар?")) {
        window.open(calendarUrl, '_blank');
    }
});
