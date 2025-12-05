// Menu mobile
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Fermer le menu mobile en cliquant sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Animation au défilement pour le header avec effet de transition fluide
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const currentScroll = window.scrollY;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Effet de parallaxe léger sur le header
    if (currentScroll > lastScroll && currentScroll > 200) {
        header.style.transform = 'translateY(-5px)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Gestion du formulaire de contact avec animation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        submitBtn.textContent = '✓ Message envoyé!';
        submitBtn.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.transform = '';
            submitBtn.style.background = '';
            this.reset();
        }, 2000);
    }, 1000);
});

// Animation des éléments au défilement avec délais échelonnés
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                // FORCER les images à être TOUJOURS visibles
                const images = entry.target.querySelectorAll('img');
                images.forEach(img => {
                    img.style.opacity = '1';
                    img.style.visibility = 'visible';
                    img.style.display = 'block';
                });
                
                // Conteneur TOUJOURS visible - pas d'opacité
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                
                // Ajouter la classe d'animation appropriée (sans affecter la visibilité)
                if (entry.target.classList.contains('objective-card')) {
                    entry.target.classList.add('animate-fade-in-up');
                } else if (entry.target.classList.contains('equipment-card')) {
                    entry.target.classList.add('animate-fade-in-up');
                } else if (entry.target.classList.contains('event-card')) {
                    entry.target.classList.add('animate-fade-in-up');
                } else if (entry.target.classList.contains('partner-card')) {
                    entry.target.classList.add('animate-fade-in-up');
                } else if (entry.target.classList.contains('feature-item')) {
                    entry.target.classList.add('animate-fade-in-left');
                } else {
                    entry.target.classList.add('animate-fade-in-up');
                }
            }, index * 50);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les sections pour l'animation (SANS CACHER LES IMAGES)
document.querySelectorAll('section').forEach((section, index) => {
    // FORCER toutes les images dans les sections à être visibles
    const images = section.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '1';
        img.style.visibility = 'visible';
        img.style.display = 'block';
    });
    
    // Section TOUJOURS visible
    section.style.opacity = '1';
    section.style.transition = 'transform 0.8s ease';
    observer.observe(section);
});

// Observer les cartes pour l'animation avec délais (IMAGES TOUJOURS VISIBLES)
document.querySelectorAll('.objective-card, .equipment-card, .event-card, .partner-card').forEach((card, index) => {
    // FORCER les images à être toujours visibles
    const images = card.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '1';
        img.style.visibility = 'visible';
        img.style.display = 'block';
    });
    
    // CARTE TOUJOURS VISIBLE - pas d'opacité qui cache
    card.style.opacity = '1';
    card.style.transform = 'translateY(0) scale(1)';
    card.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    observer.observe(card);
});

// Observer les éléments de fonctionnalités (TOUJOURS VISIBLES)
document.querySelectorAll('.feature-item').forEach((item, index) => {
    // FORCER les images à être toujours visibles
    const images = item.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '1';
        img.style.visibility = 'visible';
        img.style.display = 'block';
    });
    
    item.style.opacity = '1';
    item.style.transform = 'translateX(0)';
    item.style.transition = 'transform 0.6s ease';
    observer.observe(item);
});

// Effet de parallaxe pour la section hero
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
    }
});

// Animation des icônes au hover avec effet de rotation
document.querySelectorAll('.feature-icon, .objective-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
});

// Effet de parallaxe léger pour les images (SAUF équipements et événements)
document.querySelectorAll('.about-image img').forEach(img => {
    window.addEventListener('scroll', function() {
        const rect = img.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            img.style.transform = `translateY(${rate}px)`;
        }
    });
});

// Images d'équipements : AUCUN effet de parallaxe
document.querySelectorAll('.equipment-img img').forEach(img => {
    img.style.transform = 'none';
});

// Images d'événements : AUCUN effet de parallaxe
document.querySelectorAll('.event-image img').forEach(img => {
    img.style.transform = 'none';
});

// Animation au survol des cartes avec effet de profondeur (SAUF équipements et événements)
document.querySelectorAll('.objective-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Cartes d'équipements : AUCUN effet 3D, seulement le hover CSS basique
document.querySelectorAll('.equipment-card').forEach(card => {
    card.addEventListener('mouseleave', function() {
        // S'assurer que les images restent sans transformation
        const img = this.querySelector('.equipment-img img');
        if (img) {
            img.style.transform = 'none';
            img.style.filter = 'none';
        }
    });
});

// Cartes d'événements : AUCUN effet 3D, seulement le hover CSS basique
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('mouseleave', function() {
        // S'assurer que les images restent sans transformation
        const img = this.querySelector('.event-image img');
        if (img) {
            img.style.transform = 'none';
            img.style.filter = 'none';
        }
    });
});

// Animation de compteur pour les statistiques (si présentes)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Observer les badges de statistiques
const badgeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const badgeNumber = entry.target.querySelector('.badge-number');
            if (badgeNumber) {
                const target = parseInt(badgeNumber.textContent);
                if (!isNaN(target)) {
                    animateCounter(badgeNumber, target);
                }
            }
            badgeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.image-badge').forEach(badge => {
    badgeObserver.observe(badge);
});

// Smooth scroll amélioré pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animation de la navigation active au scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Effet de brillance sur les boutons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
    });
});

// Animation au chargement de la page (SANS CACHER LES IMAGES)
window.addEventListener('load', function() {
    // FORCER toutes les images à être TOUJOURS visibles
    document.querySelectorAll('img').forEach(img => {
        img.style.setProperty('opacity', '1', 'important');
        img.style.setProperty('visibility', 'visible', 'important');
        img.style.setProperty('display', 'block', 'important');
        img.style.setProperty('z-index', '10', 'important');
    });
    
    // Le body reste visible
    document.body.style.opacity = '1';
});

// Observer pour s'assurer que les images restent toujours visibles
const imageObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            const img = mutation.target;
            if (img.tagName === 'IMG') {
                // Forcer la visibilité si l'image est modifiée
                img.style.setProperty('opacity', '1', 'important');
                img.style.setProperty('visibility', 'visible', 'important');
                img.style.setProperty('display', 'block', 'important');
            }
        }
    });
});

// Observer toutes les images pour s'assurer qu'elles restent visibles
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img, {
            attributes: true,
            attributeFilter: ['style', 'class']
        });
        
        // Forcer la visibilité immédiatement
        img.style.setProperty('opacity', '1', 'important');
        img.style.setProperty('visibility', 'visible', 'important');
        img.style.setProperty('display', 'block', 'important');
    });
});

