document.addEventListener('DOMContentLoaded', (event) => {
    const light = document.createElement('div');
    light.classList.add('light');
    document.body.appendChild(light);

    document.addEventListener('mousemove', (e) => {
        light.style.left = `${e.pageX}px`;
        light.style.top = `${e.pageY}px`;
    });
});
