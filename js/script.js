/**
 * NEON WAVE FESTIVAL 2026
 * Core Frontend Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initLoader();
    initNavigation();
    initCountdown();
    initStatsCounter();
    initSchedule();
    initTestimonials();
    initFAQ();
    initRevealAnimations();
    initFormValidation();
});

// 1. LOADING SCREEN
function initLoader() {
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 800);
        }, 1500);
    });
}

// 2. NAVIGATION LOGIC
function initNavigation() {
    const nav = document.getElementById('main-nav');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll behavior for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        hamburger.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            hamburger.classList.remove('active');
        });
    });

    // Active state highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

// 3. LIVE COUNTDOWN
function initCountdown() {
    const targetDate = new Date('August 15, 2026 00:00:00').getTime();

    function update() {
        const now = new Date().getTime();
        const diff = targetDate - now;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = d.toString().padStart(2, '0');
        document.getElementById('hours').innerText = h.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = s.toString().padStart(2, '0');
    }

    setInterval(update, 1000);
    update();
}

// 4. STATS COUNTER
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                const count = () => {
                    const current = +entry.target.innerText;
                    const increment = target / 50;
                    if (current < target) {
                        entry.target.innerText = Math.ceil(current + increment);
                        setTimeout(count, 30);
                    } else {
                        entry.target.innerText = target.toLocaleString();
                    }
                };
                count();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
}

// 5. INTERACTIVE SCHEDULE
function initSchedule() {
    const scheduleData = {
        friday: [
            { time: '06:00 PM', artist: 'Nova Sky', stage: 'Main Stage', genre: 'Electronic' },
            { time: '08:30 PM', artist: 'Kai Blaze', stage: 'The Underground', genre: 'Hip-Hop' },
            { time: '11:00 PM', artist: 'DJ Voltage', stage: 'Main Stage', genre: 'Techno' },
        ],
        saturday: [
            { time: '04:00 PM', artist: 'Luna Echo', stage: 'Dream Garden', genre: 'Indie' },
            { time: '07:00 PM', artist: 'Nova Sky', stage: 'The Underground', genre: 'Electronic' },
            { time: '10:00 PM', artist: 'All Stars', stage: 'Main Stage', genre: 'Mixed' },
        ],
        sunday: [
            { time: '05:00 PM', artist: 'Luna Echo', stage: 'Main Stage', genre: 'Indie' },
            { time: '08:00 PM', artist: 'DJ Voltage', stage: 'The Underground', genre: 'Hardstyle' },
            { time: '11:00 PM', artist: 'Grand Finale', stage: 'Main Stage', genre: 'Electronic' },
        ]
    };

    const tabs = document.querySelectorAll('.tab-btn');
    const container = document.getElementById('schedule-container');

    function renderDay(day) {
        container.innerHTML = '';
        scheduleData[day].forEach(item => {
            const div = document.createElement('div');
            div.className = 'timeline-item';
            div.innerHTML = `
                <span class="time">${item.time}</span>
                <div class="event-details">
                    <h3>${item.artist}</h3>
                    <p>${item.genre}</p>
                </div>
                <span class="stage-badge">${item.stage}</span>
            `;
            container.appendChild(div);
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderDay(tab.dataset.day);
        });
    });

    // Initial render
    renderDay('friday');
}

// 6. TESTIMONIALS CAROUSEL
function initTestimonials() {
    const reviews = [
        { name: "Alex Rivers", rating: 5, quote: "The most visually stunning festival I've ever attended. Truly beyond reality!", img: "https://i.pravatar.cc/150?u=1" },
        { name: "Sarah Jenkins", rating: 5, quote: "The holographic stage sets were mind-blowing. The sound quality was unmatched.", img: "https://i.pravatar.cc/150?u=2" },
        { name: "Marcus Thorne", rating: 4, quote: "Incredible lineup and energy. A perfect blend of electronic and urban sounds.", img: "https://i.pravatar.cc/150?u=3" }
    ];

    const track = document.getElementById('testimonial-track');
    reviews.forEach(rev => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <img src="${rev.img}" class="testimonial-img" alt="${rev.name}">
            <p class="testimonial-quote">"${rev.quote}"</p>
            <h4 class="bebas">${rev.name}</h4>
            <div class="rating">${'★'.repeat(rev.rating)}</div>
        `;
        track.appendChild(card);
    });

    let index = 0;
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    function move() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % reviews.length;
        move();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + reviews.length) % reviews.length;
        move();
    });

    // Auto-rotate
    setInterval(() => {
        index = (index + 1) % reviews.length;
        move();
    }, 6000);
}

// 7. FAQ ACCORDION
function initFAQ() {
    const triggers = document.querySelectorAll('.accordion-trigger');
    
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const parent = trigger.parentElement;
            const isOpen = parent.classList.contains('active');
            
            // Close all others
            document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));
            
            if (!isOpen) {
                parent.classList.add('active');
            }
        });
    });
}

// 8. SCROLL REVEALS
function initRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// 9. FORM VALIDATION
function initFormValidation() {
    const form = document.getElementById('festival-contact');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                showError(input, true);
                isValid = false;
            } else {
                showError(input, false);
            }
            
            if (input.type === 'email' && !validateEmail(input.value)) {
                showError(input, true);
                isValid = false;
            }
        });

        if (isValid) {
            const btn = form.querySelector('button');
            btn.innerText = "Sending...";
            btn.disabled = true;
            
            setTimeout(() => {
                alert("Your pulse has been sent! Our team will reach out shortly.");
                form.reset();
                btn.innerText = "Send Pulse";
                btn.disabled = false;
            }, 2000);
        }
    });
}

function showError(input, isError) {
    const group = input.parentElement;
    if (isError) {
        group.classList.add('error');
    } else {
        group.classList.remove('error');
    }
}

function validateEmail(email) {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

// Back to top
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});