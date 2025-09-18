export class Projects {
    constructor() {
        this.init();
    }

    init() {
        this.setupProjectInteractions();
        this.setupRippleEffects();
    }

    setupProjectInteractions() {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = '0 25px 50px rgba(79, 70, 229, 0.3), 0 0 50px rgba(124, 58, 237, 0.2)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
            });
        });

        document.querySelectorAll('.course-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                const ripple = document.createElement('div');
                ripple.className = 'ripple-effect';
                card.appendChild(ripple);
                
                setTimeout(() => {
                    if (ripple.parentNode) {
                        ripple.parentNode.removeChild(ripple);
                    }
                }, 600);
            });
        });
    }

    setupRippleEffects() {
        document.querySelectorAll('.contact-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const ripple = document.createElement('div');
                ripple.className = 'ripple-effect';
                
                const rect = link.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                link.appendChild(ripple);
                
                setTimeout(() => {
                    if (ripple.parentNode) {
                        ripple.parentNode.removeChild(ripple);
                    }
                }, 600);
            });
        });
    }
}