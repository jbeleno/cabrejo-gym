# Prompt para Claude Design — Rediseño Cabrejo Gym

Copia y pega todo lo de abajo en claude.ai:

---

Diseña una landing page completa para **Cabrejo Gym**, un gimnasio con 3 sedes en Neiva, Colombia. Quiero que uses React + Tailwind CSS en un solo archivo/artifact. El diseño debe ser visualmente superior, moderno, con animaciones sutiles y una experiencia premium.

## Identidad de marca

- **Nombre:** CABREJO GYM
- **Logo text:** CABREJO (blanco) + GYM (amarillo accent)
- **Paleta:**
  - Fondo principal: `#0A0A0A` (negro profundo)
  - Fondo secundario: `#1A1A1A` (gris oscuro)
  - Accent: `#FFF50D` (amarillo eléctrico)
  - Texto principal: blanco
  - Texto secundario: `#d1d5db` (gray-300)
- **Tipografía:** Inter (sans-serif), weights 400/700/900
- **Tono visual:** Premium, brutal/industrial, high-contrast, tipografía bold e itálica, uppercase agresivo
- **Idioma:** Todo en español (Colombia)

## Secciones requeridas (en este orden)

### 1. Navbar
- Logo "CABREJOGYM" a la izquierda
- Links: Experiencia, Clases, Planes, Sedes, Contacto
- Botón CTA "Únete Ahora" amarillo
- Fija en top con blur de fondo
- Menú hamburguesa en mobile

### 2. Hero
- Fondo con imagen de gimnasio (usa un placeholder oscuro con overlay gradiente)
- Título gigante: "TRANSFORMA TU REALIDAD" (text-7xl a text-[10rem])
- "Tu" con efecto text-stroke (solo borde, sin relleno)
- Subtítulo: "Más que un gimnasio, una cultura de excelencia. Tecnología de punta y entrenamiento de élite en 3 sedes de la ciudad."
- 2 botones: "Comienza Hoy" (blanco sólido) y "Ver Instalaciones" (borde)
- Stats en fila: 3 Sedes | 18h Horario Extendido | 15+ Coaches Pro | 5K+ Miembros
- Stats con números en amarillo accent

### 3. Programas (3 cards)
- Título: "NUESTROS PROGRAMAS"
- Cards con imagen de fondo, overlay gradiente de abajo hacia arriba
- Cada card:
  1. CrossFit — "Intensidad Alta" — "Entrenamiento funcional de alta intensidad diseñado para mejorar tu fuerza, resistencia y agilidad."
  2. Boxing — "Combate" — "Domina la técnica y mejora tu condición cardiovascular con nuestras sesiones de boxeo profesional."
  3. Yoga & Mobility — "Bienestar" — "Encuentra el equilibrio perfecto entre fuerza mental y flexibilidad física en un ambiente enfocado."
- Botón "Ver Detalles" que linkea a contacto

### 4. Entrenadores (4 cards)
- Título: "CONOCE A LOS EXPERTOS" (con "EXPERTOS" en text-stroke amarillo)
- Subtítulo: "Staff Elite"
- Cards con foto, efecto grayscale que pasa a color en hover
- Entrenadores:
  1. Carlos "The Beast" — CrossFit Specialist
  2. Elena V. — Yoga & Mobility Pro
  3. Marcus Ray — Boxing Technical Coach
  4. Sonia P. — HIIT & Strength
- Borde inferior amarillo en hover

### 5. Infraestructura (galería)
- Título: "Infraestructura Premium"
- Subtítulo lateral con borde izquierdo amarillo: "Equipamiento de última generación y espacios diseñados para tu comodidad y rendimiento máximo."
- Grid asimétrico (una imagen row-span-2, otra col-span-2)
- Hover con zoom y overlay oscuro con ícono de lupa
- Click abre lightbox

### 6. Pricing (4 planes + plan personalizado)
- Título: "ÚNETE AL CLAN" ("CLAN" en amarillo)
- Toggle: "Única Sede" / "Todas las Sedes"
- **Única Sede:**
  - Mensual $89/mes
  - Trimestral $239/3 meses (Ahorra $28)
  - Semestral $429/6 meses (Ahorra $105) — **MÁS POPULAR** (destacado, borde amarillo, elevado)
  - Anual $779/año (Ahorra $289)
- **Todas las Sedes:**
  - Mensual $119/mes
  - Trimestral $319/3 meses (Ahorra $38)
  - Semestral $579/6 meses (Ahorra $135) — **MÁS POPULAR**
  - Anual $1,049/año (Ahorra $379)
- Features progresivas por plan (cada plan incluye lo anterior + extras)
- **Plan Personalizado** debajo (card ancha):
  - Única sede: $179/mes | Todas: $239/mes
  - Features: Entrenador personal dedicado, Plan nutricional personalizado, Evaluación física semanal, Acceso zona VIP/Sauna, Seguimiento continuo vía app, Horarios flexibles con tu coach
- Botones "SELECCIONAR" que van a contacto

### 7. FAQ (acordeón)
- Título: "Preguntas Frecuentes"
- 7 preguntas con animación de expand/collapse:
  1. ¿Cuáles son los planes disponibles?
  2. ¿Puedo usar mi membresía en cualquier sede?
  3. ¿Qué incluye el plan Personalizado?
  4. ¿Puedo cambiar de plan o de sede?
  5. ¿Hay algún costo de inscripción?
  6. ¿Puedo cancelar mi suscripción en cualquier momento?
  7. ¿Cuáles son los horarios de las sedes?
- (Las respuestas están en el contexto de las secciones anteriores, genera respuestas coherentes)
- Icono chevron que rota, aria-expanded para accesibilidad

### 8. Sedes (3 ubicaciones con mapa)
- Título: "Nuestras Sedes" ("Sedes" en amarillo)
- 3 tabs/botones para cambiar entre sedes
- Info por sede: dirección, teléfono, email, horarios
- Placeholder para mapa al lado derecho (área gris oscuro con texto "Mapa")
- Sedes:
  1. Sede Norte — Av. Principal Norte 456 — norte@cabrejogym.com — +57 (608) 111-2233
  2. Sede Centro — Cra 5 #10-23 — centro@cabrejogym.com — +57 (608) 123-4567
  3. Sede Sur — Cll 21 Sur #7-89 — sur@cabrejogym.com — +57 (608) 444-5566
- Horarios: L-V 5:00-23:00 | Sáb 7:00-18:00 | Dom 8:00-14:00

### 9. Contacto (formulario)
- Título: "¿LISTO PARA EL CAMBIO?"
- Campos: Nombre, Email, Interés (select con todos los planes), Mensaje
- Botón "Enviar por WhatsApp"
- Fondo brand-gray

### 10. Footer
- Logo grande
- Descripción: "3 sedes, una comunidad. El gimnasio de referencia en Neiva."
- Links sociales: Instagram, Facebook, TikTok
- Columna "Explora": Sobre Nosotros, Instalaciones, Programas, Precios
- Columna "Horarios": L-V 5:00-23:00, Sáb 7:00-18:00, Dom 8:00-14:00
- Copyright 2026, links Privacidad y Términos

## Directrices de diseño

- **Mejora sobre la versión actual:** La versión actual es funcional pero genérica. Quiero que explores:
  - Transiciones y micro-animaciones más sofisticadas (entrada de elementos al scroll, hover states más creativos)
  - Mejor uso del espacio negativo
  - Composición tipográfica más impactante (mezcla de tamaños extremos, pesos, itálicas)
  - Elementos decorativos sutiles (líneas, barras amarillas, números grandes de fondo)
  - Grid layouts más creativos e inesperados (no todo centrado/simétrico)
  - Efecto de profundidad con sombras y bordes sutiles
- **Mantener:** La paleta negro + amarillo, el tono brutal/premium, la tipografía bold
- **Responsive:** Que se vea bien en mobile (380px+) y desktop (1440px)
- **Accesibilidad:** Contraste mínimo 4.5:1 en textos, aria-labels en botones, focus-visible styles, estructura semántica HTML

## Output esperado

Un artifact React interactivo con Tailwind CSS inline que contenga TODA la landing page completa y funcional. Usa placeholder divs para las imágenes (con backgrounds oscuros y texto descriptivo). Incluye toda la interactividad (toggle pricing, FAQ accordion, navbar mobile, tabs de sedes).
