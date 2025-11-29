
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

        // Animation au défilement pour le header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Gestion du formulaire de contact
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci pour votre message! Nous vous répondrons dans les plus brefs délais.');
            this.reset();
        });

        // Animation des éléments au défilement
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, observerOptions);

        // Observer les sections pour l'animation
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = 0;
            observer.observe(section);
        });

        // Observer les cartes pour l'animation
        document.querySelectorAll('.objective-card, .equipment-card, .event-card, .partner-card').forEach(card => {
            card.style.opacity = 0;
            observer.observe(card);
        });
    
