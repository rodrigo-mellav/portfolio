/* ==========================================================================
   RODRIGO MELLA — PORTFOLIO FUNCTIONS
   ========================================================================== */

// 1. Descargar CV
function descargarCV() {
    const link = document.createElement('a');
    link.href = 'archivos/cv rodrigo mella.pdf';
    link.download = 'cv rodrigo mella.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
}

// 2. Reloj digital en tiempo real (Santiago de Chile, GMT-3)
function updateLocalClock() {
    const clockEl = document.getElementById('footer-clock');
    if (!clockEl) return;
    
    try {
        const now = new Date();
        const options = {
            timeZone: 'America/Santiago',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const formatter = new Intl.DateTimeFormat('es-CL', options);
        clockEl.textContent = formatter.format(now);
    } catch (e) {
        const now = new Date();
        clockEl.textContent = now.toTimeString().split(' ')[0];
    }
}

// 3. Renderizado de Proyectos (Monumental Spreads con Carrusel Integrado)
const carouselStates = {};
const imageZoomState = {
    projectIndex: null,
    currentIndex: 0
};

function createProjectSpread(project, index) {
    const spread = document.createElement('article');
    spread.className = 'project-spread';
    spread.id = `project-${index}`;

    carouselStates[index] = {
        currentIndex: 0,
        images: project.images
    };

    spread.innerHTML = `
        <!-- Columna Izquierda: Visual Stage & Carrusel -->
        <div class="spread-visual-stage">
            <div class="project-carousel-container" data-carousel="${index}">
                <div class="project-carousel-track">
                    ${project.images.map((img, i) => `
                        <img 
                            src="${img}" 
                            alt="${project.title} - Captura ${i + 1}"
                            class="carousel-slide-img ${i === 0 ? 'is-active' : ''}"
                            data-project="${index}"
                            data-img-index="${i}"
                        />
                    `).join('')}
                </div>
                ${project.images.length > 1 ? `
                    <button class="carousel-btn carousel-prev" data-carousel-prev="${index}" aria-label="Imagen anterior">
                        <i class="bi bi-chevron-left"></i>
                    </button>
                    <button class="carousel-btn carousel-next" data-carousel-next="${index}" aria-label="Imagen siguiente">
                        <i class="bi bi-chevron-right"></i>
                    </button>
                ` : ''}
            </div>

            <!-- Indicadores -->
            ${project.images.length > 1 ? `
                <div class="carousel-indicators-bar" data-indicators="${index}">
                    ${project.images.map((_, i) => `
                        <span class="indicator-dot ${i === 0 ? 'active' : ''}" data-dot-project="${index}" data-dot-index="${i}"></span>
                    `).join('')}
                </div>
            ` : ''}
        </div>

        <!-- Columna Derecha: Specs & Contenido Editorial -->
        <div class="spread-copy-stage">
            <div>
                <div class="spread-meta-top">
                    <span class="microcopy">[ PROYECTO // ${project.number} ]</span>
                    <span class="editorial-tag">${project.badge}</span>
                </div>
                <h3 class="spread-title">${project.title}</h3>
                <p class="spread-subtitle">${project.subtitle}</p>
                <p class="spread-desc">${project.description}</p>
            </div>

            <!-- Specs Grid -->
            <div class="spread-specs-grid">
                ${project.stats.map(s => `
                    <div class="spec-cell">
                        <span class="microcopy">${s.label}</span>
                        <span class="spec-value">${s.value}</span>
                    </div>
                `).join('')}
            </div>

            <!-- Tech Pills -->
            <div class="spread-tech-row">
                ${project.technologies.map(t => `<span class="editorial-tag">${t}</span>`).join('')}
            </div>

            <!-- Botones de Acción -->
            <div class="spread-actions-row">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-editorial">
                    <span>CÓDIGO FUENTE</span>
                    <i class="bi bi-arrow-up-right"></i>
                </a>
                <button type="button" class="btn-editorial-outline" data-zoom-trigger="${index}">
                    <span>VER CAPTURAS</span>
                    <i class="bi bi-zoom-in"></i>
                </button>
            </div>
        </div>
    `;

    return spread;
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container || !cardsData.projects) return;
    container.innerHTML = '';
    cardsData.projects.forEach((proj, i) => {
        container.appendChild(createProjectSpread(proj, i));
    });
    setupCarousels();
}

function setupCarousels() {
    // Manejo de botones prev y next
    document.querySelectorAll('[data-carousel-prev]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const pIdx = btn.getAttribute('data-carousel-prev');
            changeCarouselSlide(pIdx, -1);
        });
    });

    document.querySelectorAll('[data-carousel-next]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const pIdx = btn.getAttribute('data-carousel-next');
            changeCarouselSlide(pIdx, 1);
        });
    });

    // Manejo de clicks en los dots
    document.querySelectorAll('[data-dot-project]').forEach(dot => {
        dot.addEventListener('click', () => {
            const pIdx = dot.getAttribute('data-dot-project');
            const dIdx = parseInt(dot.getAttribute('data-dot-index'), 10);
            setCarouselSlide(pIdx, dIdx);
        });
    });

    // Clic en imagen para abrir zoom modal
    document.querySelectorAll('.carousel-slide-img').forEach(img => {
        img.addEventListener('click', () => {
            const projectIndex = img.getAttribute('data-project');
            const imageIndex = parseInt(img.getAttribute('data-img-index'), 10);
            openImageZoom(projectIndex, imageIndex);
        });
    });

    // Botón Ver Capturas
    document.querySelectorAll('[data-zoom-trigger]').forEach(btn => {
        btn.addEventListener('click', () => {
            const pIdx = btn.getAttribute('data-zoom-trigger');
            const state = carouselStates[pIdx];
            if (state && state.images.length) {
                openImageZoom(pIdx, state.currentIndex);
            }
        });
    });
}

function changeCarouselSlide(projectIndex, delta) {
    const state = carouselStates[projectIndex];
    if (!state) return;
    let newIndex = state.currentIndex + delta;
    if (newIndex < 0) newIndex = state.images.length - 1;
    if (newIndex >= state.images.length) newIndex = 0;
    setCarouselSlide(projectIndex, newIndex);
}

function setCarouselSlide(projectIndex, newIndex) {
    const state = carouselStates[projectIndex];
    if (!state) return;
    state.currentIndex = newIndex;

    const container = document.querySelector(`[data-carousel="${projectIndex}"]`);
    if (!container) return;

    const slides = container.querySelectorAll('.carousel-slide-img');
    slides.forEach((slide, idx) => {
        slide.classList.toggle('is-active', idx === newIndex);
    });

    const indicators = document.querySelector(`[data-indicators="${projectIndex}"]`);
    if (indicators) {
        const dots = indicators.querySelectorAll('.indicator-dot');
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === newIndex);
        });
    }
}

// 4. Modal Zoom de Imagen
function setupImageZoomModal() {
    const modal = document.getElementById('image-zoom-modal');
    const closeBtn = document.getElementById('zoom-close-btn');
    const prevBtn = document.getElementById('zoom-prev-btn');
    const nextBtn = document.getElementById('zoom-next-btn');
    if (!modal) return;

    const closeModal = () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (prevBtn) prevBtn.addEventListener('click', () => changeZoomImage(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => changeZoomImage(1));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('is-open')) return;
        if (e.key === 'Escape') {
            closeModal();
        }
        if (e.key === 'ArrowLeft') changeZoomImage(-1);
        if (e.key === 'ArrowRight') changeZoomImage(1);
    });
}

function openImageZoom(projectIndex, imageIndex) {
    const modal = document.getElementById('image-zoom-modal');
    const zoomImg = document.getElementById('image-zoom-target');
    const state = carouselStates[projectIndex];
    if (!modal || !zoomImg || !state || !state.images.length) return;

    imageZoomState.projectIndex = projectIndex;
    imageZoomState.currentIndex = imageIndex;
    updateZoomImage();
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
}

function changeZoomImage(delta) {
    if (imageZoomState.projectIndex === null) return;

    const state = carouselStates[imageZoomState.projectIndex];
    if (!state || state.images.length < 2) return;

    let newIndex = imageZoomState.currentIndex + delta;
    if (newIndex < 0) newIndex = state.images.length - 1;
    if (newIndex >= state.images.length) newIndex = 0;
    imageZoomState.currentIndex = newIndex;
    updateZoomImage();
}

function updateZoomImage() {
    const zoomImg = document.getElementById('image-zoom-target');
    const prevBtn = document.getElementById('zoom-prev-btn');
    const nextBtn = document.getElementById('zoom-next-btn');
    const state = carouselStates[imageZoomState.projectIndex];
    if (!zoomImg || !state) return;

    zoomImg.src = state.images[imageZoomState.currentIndex];
    const hasMultipleImages = state.images.length > 1;
    if (prevBtn) prevBtn.hidden = !hasMultipleImages;
    if (nextBtn) nextBtn.hidden = !hasMultipleImages;
}

// 5. Renderizado de Habilidades Técnicas (Tech Poster Wall)
let currentSkillFilter = 'all';

function renderSkills(filter = 'all') {
    const container = document.getElementById('skills-wall');
    if (!container || !cardsData.skills) return;

    currentSkillFilter = filter;
    container.innerHTML = '';

    const filtered = filter === 'all' 
        ? cardsData.skills 
        : cardsData.skills.filter(s => s.category === filter);

    filtered.forEach(skill => {
        const item = document.createElement('div');
        item.className = 'tech-poster-item';
        item.innerHTML = `
            <div class="tech-item-header">
                <span class="microcopy">${skill.categoryLabel}</span>
                <span class="editorial-tag">${skill.tag}</span>
            </div>
            <div>
                <h4 class="tech-item-name">${skill.name}</h4>
                <p class="microcopy text-light-gray" style="margin-top: 0.4rem; text-transform: none;">${skill.desc}</p>
            </div>
            <div class="tech-item-footer">
                <span class="microcopy text-gray">COMPETENCIA PRINCIPAL</span>
                <span class="tech-dot"></span>
            </div>
        `;
        container.appendChild(item);
    });
}

function setupSkillFilters() {
    const buttons = document.querySelectorAll('[data-skill-filter]');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSkills(btn.getAttribute('data-skill-filter'));
        });
    });
}

function setupScrollReveal() {
    document.documentElement.classList.add('js-enabled');

    const revealGroups = [
        { selector: '.section-editorial-header, .statement-quote-box, .about-main-grid, .tech-filter-bar, .tech-footer-statement, .contact-headline-arena, .contact-grid' },
        { selector: '.project-spread, .tech-poster-item, .discipline-card' }
    ];
    const elements = revealGroups.flatMap(group => [...document.querySelectorAll(group.selector)]);
    const staggeredGroups = document.querySelectorAll('.project-spread, .tech-poster-item, .discipline-card');

    elements.forEach(element => element.classList.add('scroll-animate'));
    staggeredGroups.forEach((element, index) => {
        element.style.setProperty('--reveal-delay', `${(index % 8) * 100}ms`);
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        elements.forEach(element => element.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    elements.forEach(element => observer.observe(element));
}

// 6. Renderizado de Sección Sobre Mí (Disciplinas)
function renderAbout() {
    const container = document.getElementById('about-disciplines');
    if (!container || !cardsData.about) return;
    container.innerHTML = '';

    cardsData.about.forEach(item => {
        const card = document.createElement('div');
        card.className = 'discipline-card';
        card.innerHTML = `
            <div>
                <span class="discipline-num">// ${item.num}</span>
                <h4 class="discipline-title" style="margin-top: 0.5rem;">${item.title}</h4>
            </div>
            <p class="discipline-text">${item.text}</p>
        `;
        container.appendChild(card);
    });
}

// 7. Developer JSON Modal
function setupJsonModal() {
    const modal = document.getElementById('developer-json-modal');
    const openBtns = document.querySelectorAll('[data-open-json]');
    const closeBtns = document.querySelectorAll('[data-close-json]');

    if (!modal) return;

    const openModal = () => modal.classList.add('is-open');
    const closeModal = () => modal.classList.remove('is-open');

    openBtns.forEach(btn => btn.addEventListener('click', openModal));
    closeBtns.forEach(btn => btn.addEventListener('click', closeModal));

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });
}

// 8. One-click Copy Email
function setupCopyEmail() {
    const btn = document.getElementById('copy-email-btn');
    if (!btn) return;

    btn.addEventListener('click', async () => {
        const email = 'rodrigoamellav@gmail.com';
        try {
            await navigator.clipboard.writeText(email);
            const statusEl = document.getElementById('copy-feedback');
            if (statusEl) {
                const originalText = statusEl.textContent;
                statusEl.textContent = '✓ COPIADO AL PORTAPAPELES';
                statusEl.style.color = 'var(--accent)';
                setTimeout(() => {
                    statusEl.textContent = originalText;
                    statusEl.style.color = '';
                }, 3000);
            }
        } catch (err) {
            window.location.href = `mailto:${email}`;
        }
    });
}

// 9. Navbar & Mobile Drawer
function setupNavigation() {
    const header = document.getElementById('site-header');
    const drawer = document.getElementById('mobile-drawer');
    const toggleBtn = document.getElementById('mobile-nav-toggle');
    const closeDrawerBtn = document.getElementById('drawer-close-btn');
    const drawerLinks = document.querySelectorAll('.drawer-link');
    const navLinks = document.querySelectorAll('.nav-item');

    // Sticky Header Scroll State
    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('is-scrolled', window.scrollY > 30);
        }
        highlightActiveSection();
    });

    // Mobile Drawer Toggles
    if (toggleBtn && drawer) {
        toggleBtn.addEventListener('click', () => {
            drawer.classList.add('is-open');
            document.body.style.overflow = 'hidden';
        });
    }

    const closeDrawer = () => {
        if (drawer) {
            drawer.classList.remove('is-open');
            document.body.style.overflow = '';
        }
    };

    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
    drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

    // Smooth section scrolling with header offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId.startsWith('#')) return;

            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = targetEl.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    function highlightActiveSection() {
        const sections = ['inicio', 'sobre-mi', 'proyectos', 'skills', 'contacto'];
        const scrollPosition = window.scrollY + 140;

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    link.classList.toggle('active', href === `#${id}`);
                });
            }
        });
    }
}

// 10. Formulario de Contacto Formspree
function setupContactForm() {
    const form = document.getElementById('contact-form');
    const statusBanner = document.getElementById('contact-status-banner');
    if (!form || !statusBanner) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.innerHTML : '';

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>ENVIANDO...</span> <i class="bi bi-arrow-repeat"></i>`;
        }

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.reset();
                statusBanner.textContent = '✓ Mensaje enviado con éxito. Me pondré en contacto contigo a la brevedad.';
                statusBanner.className = 'contact-status-banner is-visible is-success';
            } else {
                throw new Error('Error al enviar mensaje');
            }
        } catch (error) {
            statusBanner.textContent = '⚠ Error al enviar. Por favor contáctame directamente por correo o LinkedIn.';
            statusBanner.className = 'contact-status-banner is-visible';
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        }
    });
}

// Inicialización Global
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills('all');
    setupSkillFilters();
    renderAbout();
    setupScrollReveal();
    setupNavigation();
    setupImageZoomModal();
    setupJsonModal();
    setupCopyEmail();
    setupContactForm();

    // Iniciar reloj local
    updateLocalClock();
    setInterval(updateLocalClock, 1000);

    // Botones de descarga de CV
    document.querySelectorAll('[data-download-cv]').forEach(btn => {
        btn.addEventListener('click', descargarCV);
    });
});
