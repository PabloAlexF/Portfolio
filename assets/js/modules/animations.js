// Animations and Visual Effects Module
export class Animations {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupMouseTrail();
        this.setupFloatingParticles();
        this.setupWelcomeAnimation();
        this.setupParallaxEffect();
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.addEventListener('DOMContentLoaded', () => {
            const elementsToAnimate = [
                '.about-card',
                '.course-card',
                '.contact-links',
                '.project-card'
            ];
            
            elementsToAnimate.forEach(selector => {
                document.querySelectorAll(selector).forEach(element => {
                    element.classList.add('fade-in');
                    observer.observe(element);
                });
            });
        });
    }

    setupMouseTrail() {
        if (window.innerWidth <= 768) return;

        document.addEventListener('mousemove', (e) => {
            const trail = document.createElement('div');
            trail.className = 'mouse-trail';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            document.body.appendChild(trail);
            
            setTimeout(() => {
                if (trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                }
            }, 800);
        });
    }

    setupFloatingParticles() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            hero.appendChild(particle);
        }
    }

    setupWelcomeAnimation() {
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
                
                setTimeout(() => {
                    const welcomeAnimation = document.querySelector('.welcome-animation');
                    if (welcomeAnimation) {
                        welcomeAnimation.style.display = 'none';
                    }
                }, 4000);
            }, 100);
        });
    }

    setupParallaxEffect() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const rate = scrolled * -0.5;
            
            if (hero) {
                hero.style.transform = `translateY(${rate}px)`;
            }
        });
    }
}