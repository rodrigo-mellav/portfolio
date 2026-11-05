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
        availability: 'Disponible'
    },
skills: [
    // FRONTEND
    {
        category: 'frontend',
        categoryLabel: 'FRONTEND',
        name: 'REACT',
        tag: 'LIBRARY / SPA',
        desc: 'Componentes reactivos modulares, hooks y estado dinámico'
    },
    {
        category: 'frontend',
        categoryLabel: 'FRONTEND',
        name: 'JAVASCRIPT',
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
        name: 'BOOTSTRAP 5',
        tag: 'FRAMEWORK',
        desc: 'Sistemas de grillas responsivas y componentes utilitarios'
    },

    // BACKEND & DATABASES
    {
        category: 'backend',
        categoryLabel: 'BACKEND & DATABASES',
        name: 'PYTHON',
        tag: 'LANGUAGE',
        desc: 'Desarrollo backend robusto, automatización y scripting'
    },
    {
        category: 'backend',
        categoryLabel: 'BACKEND & DATABASES',
        name: 'DJANGO',
        tag: 'FRAMEWORK',
        desc: 'Arquitectura MVC/MVT, ORM, autenticación y APIs REST'
    },
    {
        category: 'backend',
        categoryLabel: 'BACKEND & DATABASES',
        name: 'NODE.JS & EXPRESS',
        tag: 'RUNTIME & API',
        desc: 'Servicios de servidor ligeros y enrutamiento REST'
    },
    {
        category: 'backend',
        categoryLabel: 'BACKEND & DATABASES',
        name: 'SQL & MYSQL',
        tag: 'RELATIONAL DB',
        desc: 'Modelado relacional, consultas complejas e integridad ACID'
    },
    {
        category: 'backend',
        categoryLabel: 'BACKEND & DATABASES',
        name: 'MONGODB',
        tag: 'NOSQL DB',
        desc: 'Almacenamiento orientado a documentos y colecciones BSON'
    },

    // DESIGN & TOOLS
    {
        category: 'tools',
        categoryLabel: 'DESIGN & TOOLS',
        name: 'ADOBE ILLUSTRATOR',
        tag: 'VECTOR & BRANDING',
        desc: 'Diseño vectorial, iconografía SVG y tipografía'
    },
    {
        category: 'tools',
        categoryLabel: 'DESIGN & TOOLS',
        name: 'ADOBE PHOTOSHOP',
        tag: 'VISUAL DESIGN',
        desc: 'Composición digital, retoque y preparación de assets UI'
    },
    {
        category: 'tools',
        categoryLabel: 'DESIGN & TOOLS',
        name: 'ADOBE INDESIGN',
        tag: 'EDITORIAL & LAYOUT',
        desc: 'Diagramación de documentos, maquetación y jerarquía visual'
    },
    {
        category: 'tools',
        categoryLabel: 'DESIGN & TOOLS',
        name: 'POWER BI',
        tag: 'DATA ANALYTICS',
        desc: 'Modelado analítico de datos y paneles visuales de negocio'
    },
    {
        category: 'tools',
        categoryLabel: 'DESIGN & TOOLS',
        name: 'GIT & GITHUB',
        tag: 'VERSION CONTROL',
        desc: 'Control de versiones, branching y colaboración en código'
    },
    {
        category: 'tools',
        categoryLabel: 'DESIGN & TOOLS',
        name: 'AZURE DEVOPS',
        tag: 'AGILE & SPRINTS',
        desc: 'Gestión de proyectos ágiles, tableros Kanban y seguimiento'
    }
],
    projects: [
        {
            number: '01',
            badge: 'FULL STACK / GAMING MARKETPLACE',
            title: 'GAME STORE',
            subtitle: 'PLATAFORMA E-COMMERCE DE DISTRIBUCIÓN DIGITAL DE VIDEOJUEGOS',
            description: 'Aplicación web full-stack para la exploración y simulación de compra de videojuegos. Cuenta con catálogo dinámico filtrable por plataforma/género, carrito con drawer lateral, autenticación de usuarios y backend en Node.js para procesamiento de ordenes.',
            images: [
                'assets/img/gamestore.webp',
                'assets/img/gamestore-2.webp', 
                'assets/img/gamestore-3.webp', 
                'assets/img/gamestore-4.webp',
                'assets/img/gamestore-5.webp',
                'assets/img/gamestore-6.webp',
                'assets/img/gamestore-7.webp'
            ],
            technologies: ['REACT', 'VITE', 'NODE.JS', 'EXPRESS', 'NODEMAILER', 'BOOTSTRAP 5'],
            stats: [
                { label: 'ARQUITECTURA', value: 'CLIENT-SERVER / REST API + SPA' },
                { label: 'FRONTEND', value: 'REACT / VITE / ROUTER' },
                { label: 'BACKEND', value: 'NODE.JS / EXPRESS' },
                { label: 'ENFOQUE', value: 'CATÁLOGO DINÁMICO & E-COMMERCE' }
            ],
            github: 'https://github.com/rodrigo-mellav/game-store',
            demo: ''
        },
        {
            number: '02',
            badge: 'FULL STACK / FINANCIAL WEB APP',
            title: 'EXPENSE FLOW',
            subtitle: 'SISTEMA DE GESTIÓN DE FINANZAS PERSONALES & ANALÍTICA DE GASTOS',
            description: 'Aplicación web para la gestión financiera personal. Permite registrar transacciones, establecer límites presupuestarios y monitorear metas de ahorro mediante paneles analíticos interactivos con Chart.js.',
            images: [
                'assets/img/expenseflow-2.webp',
                'assets/img/expenseflow.webp',
                'assets/img/expenseflow-3.webp',
                'assets/img/expenseflow-4.webp',
                'assets/img/expenseflow-5.webp',
                'assets/img/expenseflow-6.webp',
                'assets/img/expenseflow-7.webp'
            ],
            technologies: ['PYTHON', 'DJANGO', 'SQLITE', 'JAVASCRIPT', 'BOOTSTRAP 5', 'CHART.JS'],
            stats: [
                { label: 'ARQUITECTURA', value: 'DJANGO MVT + JSON ENDPOINTS' },
                { label: 'BACKEND', value: 'PYTHON 3 / DJANGO 5' },
                { label: 'BASE DE DATOS', value: 'SQLITE3 / ORM DJANGO' },
                { label: 'ENFOQUE', value: 'ANALÍTICA DE GASTOS & UI RESPONSIVA' }
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
            title: 'Diseño Responsivo',
            text: 'Diseño interfaces adaptables que ofrecen una experiencia fluida en cualquier dispositivo, priorizando la usabilidad, la velocidad de carga y la accesibilidad.'
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
