# Yield Track 📈

Yield Track es una aplicación web financiera diseñada para el seguimiento de inversiones, simulación de rendimientos y visualización de historiales de transacciones. Este proyecto está construido con un enfoque moderno y modular, utilizando React, TypeScript y SASS.

## 🚀 Tecnologías

- **Core:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [SASS](https://sass-lang.com/) (Módulos SCSS + Variables Globales)
- **Linting:** ESLint

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular donde cada página y componente es autónomo, facilitando la escalabilidad y el mantenimiento.

```text
src/
├── assets/                  # Recursos estáticos (imágenes, fuentes)
├── components/              # Componentes reutilizables
│   ├── common/              # Botones, Inputs, Cards genéricos
│   ├── finance/             # Gráficos y tablas financieras específicas
│   └── layout/              # Sidebar, Navbar, Footer
├── context/                 # Estados globales (React Context)
├── hooks/                   # Custom Hooks
├── pages/                   # Vistas principales (Arquitectura Modular)
│   ├── Dashboard/           # Vista de Resumen
│   │   ├── Dashboard.tsx
│   │   └── Dashboard.module.scss
│   ├── History/             # Vista de Historial
│   │   ├── History.tsx
│   │   └── History.module.scss
│   └── Simulator/           # Vista de Simulador
│       ├── Simulator.tsx
│       └── Simulator.module.scss
├── services/                # Conexiones a APIs externas
├── styles/                  # Configuración global de estilos
│   ├── abstracts/           # Variables (_variables.scss), Mixins
│   ├── base/                # Resets (_reset.scss), Tipografía
│   └── main.scss            # Punto de entrada de estilos globales
├── types/                   # Interfaces y tipos TypeScript globales
├── utils/                   # Funciones de utilidad (formato moneda, fechas)
├── App.tsx                  # Componente raíz y configuración de rutas
└── main.tsx                 # Punto de entrada de la aplicación
```

### Metodología de Estilos

Utilizamos una estrategia híbrida para los estilos:

1.  **Globales (`src/styles/`):**
    - `_variables.scss`: Define la paleta de colores, fuentes y espaciados.
    - `main.scss`: Inyecta variables en `:root` para permitir cambios dinámicos (temas) y aplica estilos base.

2.  **Módulos (`*.module.scss`):**
    - Cada componente tiene su propio archivo de estilos.
    - Las clases son locales por defecto, evitando colisiones de nombres.
    - Se importan variables globales con `@use` cuando es necesario.

## 🛠️ Instalación y Uso

1.  **Clonar el repositorio:**

    ```bash
    git clone <url-del-repositorio>
    cd yield-track
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo:**

    ```bash
    npm run dev
    ```

4.  **Construir para producción:**
    ```bash
    npm run build
    ```

## 🎨 Paleta de Colores Principal

- **Fondo:** `#06100c` (Verde oscuro profundo)
- **Primario:** `#10b77f` (Verde acento)
- **Texto:** `#ffffff` (Blanco)
