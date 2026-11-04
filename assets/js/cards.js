const cardsData = {
    meta: {
        name: 'Rodrigo Mella Valenzuela',
        handle: 'rodrigo-mella',
        role: 'Desarrollador Full Stack & Diseñador Digital',
        location: 'Santiago, Chile',
        year: '2026',
        email: 'rodrigoamellav@gmail.com', // fallback contact
        github: 'https://github.com/rodrigo-mellav',
        linkedin: 'https://www.linkedin.com/in/rodrigoamellav',
        discipline: 'Ingeniería Informática & Diseño Gráfico',
        availability: 'Disponible para proyectos'
    },
    skills: [
        {
            category: 'frontend',
            categoryLabel: 'FRONTEND',
            name: 'React',
            tag: 'LIBRARY / SPA',
            desc: 'Componentes reactivos modulares, hooks y estado dinámico'
        },
        {
            category: 'frontend',
            categoryLabel: 'FRONTEND',
            name: 'JavaScript',
            tag: 'ES6+ / CORE',
            desc: 'Manipulación asíncrona del DOM, Fetch API y lógica cliente'
        },
        {
            category: 'frontend',
            categoryLabel: 'FRONTEND',
            name: 'HTML5 & CSS3',
            tag: 'MARKUP & STYLES',
            desc: 'Semántica web estricta, Flexbox, Grid y animaciones'
        },
        {
            category: 'frontend',
            categoryLabel: 'FRONTEND',
            name: 'Bootstrap 5',
            tag: 'FRAMEWORK',
            desc: 'Sistemas de grillas responsivas y componentes utilitarios'
        },
        {
            category: 'backend',
            categoryLabel: 'BACKEND & DATABASES',
            name: 'Python',
            tag: 'LANGUAGE',
            desc: 'Desarrollo backend robusto, automatización y scripting'
        },
        {
            category: 'backend',
            categoryLabel: 'BACKEND & DATABASES',
            name: 'Django',
            tag: 'FRAMEWORK',
            desc: 'Arquitectura MVC/MVT, ORM, autenticación y APIs REST'
        },
        {
            category: 'backend',
            categoryLabel: 'BACKEND & DATABASES',
            name: 'Node.js & Express',
            tag: 'RUNTIME & API',
            desc: 'Servicios de servidor ligeros y enrutamiento REST'
        },
        {
            category: 'backend',
            categoryLabel: 'BACKEND & DATABASES',
            name: 'SQL & MySQL',
            tag: 'RELATIONAL DB',
            desc: 'Modelado relacional, consultas complejas e integridad ACID'
        },
        {
            category: 'backend',
            categoryLabel: 'BACKEND & DATABASES',
            name: 'MongoDB',
            tag: 'NOSQL DB',
            desc: 'Almacenamiento orientado a documentos y colecciones BSON'
        },
        {
            category: 'tools',
            categoryLabel: 'DESIGN & TOOLS',
            name: 'Adobe Illustrator',
            tag: 'VECTOR & BRANDING',
            desc: 'Diseño vectorial, iconografía SVG y tipografía'
        },
        {
            category: 'tools',
            categoryLabel: 'DESIGN & TOOLS',
            name: 'Adobe Photoshop',
            tag: 'VISUAL DESIGN',
            desc: 'Composición digital, retoque y preparación de assets UI'
        },
        {
            category: 'tools',
            categoryLabel: 'DESIGN & TOOLS',
            name: 'Power BI',
            tag: 'DATA ANALYTICS',
            desc: 'Modelado analítico de datos y paneles visuales de negocio'
        },
        {
            category: 'tools',
            categoryLabel: 'DESIGN & TOOLS',
            name: 'Git & GitHub',
            tag: 'VERSION CONTROL',
            desc: 'Control de versiones branching y colaboración en equipo'
        },
        {
            category: 'tools',
            categoryLabel: 'DESIGN & TOOLS',
            name: 'Azure DevOps',
            tag: 'CI/CD & DEVOPS',
            desc: 'Gestión de proyectos, repositorios y pipelines de despliegue'
        }
    ],
    projects: [
        {
            number: '01',
            badge: 'FULL STACK / GAMING MARKETPLACE',
            title: 'Game Store',
            subtitle: 'PLATAFORMA E-COMMERCE DE DISTRIBUCIÓN DIGITAL',
            description: 'Plataforma web de venta digital de videojuegos con autenticación simulada, catálogo dinámico interactivo con filtrado por plataformas y generación automatizada de claves de activación.',
            images: [
                'assets/img/gamestore.webp',
                'assets/img/gamestore-2.webp', 
                'assets/img/gamestore-3.webp', 
                'assets/img/gamestore-4.webp',
                'assets/img/gamestore-5.webp',
                'assets/img/gamestore-6.webp',
                'assets/img/gamestore-7.webp'
            ],
            technologies: ['React', 'Vite', 'Node.js', 'Express', 'Bootstrap 5'],
            stats: [
                { label: 'ARQUITECTURA', value: 'REST API + SPA' },
                { label: 'FRONTEND', value: 'REACT / VITE' },
                { label: 'BACKEND', value: 'NODE.JS / EXPRESS' },
                { label: 'ENFOQUE', value: 'CATÁLOGO DINÁMICO' }
            ],
            github: 'https://github.com/rodrigo-mellav/game-store',
            demo: ''
        },
        {
            number: '02',
            badge: 'FULL STACK / FINANCE DASHBOARD',
            title: 'Expense Flow',
            subtitle: 'DASHBOARD FINANCIERO & GESTIÓN DE PRESUPUESTOS',
            description: 'Aplicación web integral para el control de gastos personales, visualización analítica de métricas financieras, balance mensual y establecimiento de metas de ahorro.',
            images: [
                'assets/img/expenseflow-2.webp',
                'assets/img/expenseflow.webp',
                'assets/img/expenseflow-3.webp',
                'assets/img/expenseflow-4.webp',
                'assets/img/expenseflow-5.webp',
                'assets/img/expenseflow-6.webp',
                'assets/img/expenseflow-7.webp'
            ],
            technologies: ['Django', 'Python', 'SQLite', 'Bootstrap', 'JavaScript'],
            stats: [
                { label: 'ARQUITECTURA', value: 'MVT + REST API' },
                { label: 'BACKEND', value: 'PYTHON / DJANGO' },
                { label: 'BASE DE DATOS', value: 'SQLITE / SQL' },
                { label: 'ENFOQUE', value: 'ANALÍTICA DE GASTOS' }
            ],
            github: 'https://github.com/rodrigo-mellav/expense-flow',
            demo: ''
        }
    ],
    about: [
        {
            num: '01',
            title: 'Ingeniería & Diseño',
            text: 'Integro la ingeniería de software y el modelado lógico de datos con la precisión estética del diseño gráfico, creando productos web robustos, limpios y visualmente memorables.'
        },
        {
            num: '02',
            title: 'Responsive Design & UX',
            text: 'Diseño interfaces con sensibilidad editorial que se adaptan de manera impecable a cualquier resolución, priorizando la velocidad de carga, la jerarquía visual y la accesibilidad.'
        },
        {
            num: '03',
            title: 'Metodologías Ágiles',
            text: 'Experiencia colaborando en flujos Git estructurados, resolución analítica de problemas, adaptabilidad ante nuevos requerimientos y comunicación transparente en equipo.'
        },
        {
            num: '04',
            title: 'Evolución Técnica',
            text: 'Formación continua en arquitecturas desacopladas, microservicios, frameworks modernos e investigación de tecnologías para elevar la calidad técnica de cada desarrollo.'
        }
    ]
};
