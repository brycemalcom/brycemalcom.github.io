document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    const present = document.getElementById('present');
    const message = document.getElementById('message');

    console.log('Present element:', present);
    console.log('Message element:', message);

    if (present) {
        present.addEventListener('click', () => {
            console.log('Present clicked');
            present.style.display = 'none';
            message.style.display = 'block';
            
            // Add explosion effect
            createExplosion();
        });
    } else {
        console.error('Present element not found');
    }

    function createExplosion() {
        console.log('Creating explosion effect');
        const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#8b00ff'];
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.width = '10px';
            particle.style.height = '10px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.appendChild(particle);

            const angle = Math.random() * Math.PI * 2;
            const speed = 1 + Math.random() * 5;
            const distance = 50 + Math.random() * 100;

            anime({
                targets: particle,
                translateX: Math.cos(angle) * distance,
                translateY: Math.sin(angle) * distance,
                scale: [1, 0],
                opacity: [1, 0],
                easing: 'easeOutExpo',
                duration: 1000,
                complete: () => {
                    document.body.removeChild(particle);
                }
            });
        }
    }
});