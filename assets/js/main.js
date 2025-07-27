// Запускаємо код тільки після повного завантаження DOM
document.addEventListener("DOMContentLoaded", function () {
    // Отримуємо елементи з DOM
    const toggleButton = document.querySelector(".toggle button"); // кнопка "GO"
    const container = document.querySelector(".container"); // блок з фоновим затемненням
    const links = document.querySelectorAll(".link"); // всі пункти меню "discover"

    let isOpen = false; // Статус: меню спочатку закрите

    // Створюємо анімаційну timeline з GSAP, яка не відтворюється одразу
    const tl = gsap.timeline({ paused: true });

    // Анімація відкриття контейнера: розширення clip-path
    tl.to(container, {
        duration: 1,
        ease: "power3.inOut",
        clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)", // відкриваємо ліву панель
    });

    // Анімація появи посилань (зверху вниз з прозорості)
    tl.to(
        links,
        {
            duration: 1,
            top: 0, // переміщуємо в початкове положення
            opacity: 1, // робимо повністю видимими
            stagger: 0.05, // затримка між елементами
            ease: "power3.inOut",
        },
        "-=1"
    ); // почати цю анімацію одночасно з попередньою

    // Обробник кліку по кнопці "GO"
    toggleButton.addEventListener("click", function () {
        if (isOpen) {
            tl.reverse(); // якщо меню відкрите — закриваємо
        } else {
            tl.play(); // інакше — відкриваємо
        }

        // Перемикаємо стан
        isOpen = !isOpen;
    });
});
