export class Skills {
    constructor() {
        this.init();
    }

    init() {
        this.setupSkillBars();
        this.setupStatsCounters();
        this.setupSkillInteractions();
    }

    setupSkillBars() {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillFill = entry.target.querySelector('.skill-fill');
                    const width = skillFill.getAttribute('data-width');
                    
                    setTimeout(() => {
                        skillFill.style.width = width + '%';
                    }, 200);
                    
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.skill-bar').forEach(skill => {
            skillObserver.observe(skill);
        });
    }

    setupStatsCounters() {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumber = entry.target.querySelector('h3');
                    const targetValue = parseInt(statNumber.textContent);
                    
                    this.animateCounter(statNumber, targetValue);
                    statsObserver.unobserve(entry.target);
                }
            });
        });

        document.querySelectorAll('.stat').forEach(stat => {
            statsObserver.observe(stat);
        });
    }

    setupSkillInteractions() {
        document.querySelectorAll('.skill-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'scale(1.1) rotate(5deg)';
                
                const ripple = document.createElement('div');
                ripple.className = 'ripple-effect';
                item.appendChild(ripple);
                
                setTimeout(() => {
                    if (ripple.parentNode) {
                        ripple.parentNode.removeChild(ripple);
                    }
                }, 600);
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    }

    animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const updateCounter = () => {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        updateCounter();
    }
}