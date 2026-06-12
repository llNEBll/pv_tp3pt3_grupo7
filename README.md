# TRABAJO PRÁCTICO N°3

## Programación Visual - 2026

### Descripción del Proyecto

Este proyecto fue desarrollado utilizando React y Vite. Consiste en una aplicación para la gestión de proyectos educativos, permitiendo visualizar, buscar, agregar y eliminar proyectos mediante una interfaz simple e intuitiva.

### Funcionalidades

- Visualización de proyectos educativos.
- Búsqueda de proyectos por título (filtro aislado del registro de actividad).
- Agregado de nuevos proyectos mediante formulario independiente.
- Eliminación de proyectos existentes.
- Visualización de categoría y estado de cada proyecto.
- Registro de actividad en tiempo real que muestra la fecha y hora de la última modificación (agregar o eliminar).
- El registro de actividad NO se muestra al cargar la página por primera vez.
- El filtro de búsqueda NO altera la fecha/hora del registro de actividad.

### Tecnologías Utilizadas

- React
- Vite
- JavaScript
- CSS
- Git / GitHub

### Conceptos Aplicados

- Componentes funcionales y reutilizables.
- Hooks de React: useState, useEffect, useRef.
- useEffect con arreglo de dependencias para escuchar cambios en el estado proyectos.
- useRef como bandera para evitar la primera ejecución del efecto.
- Props: datos de solo lectura que se pasan de padres a hijos.
- Componente de presentación (RegistroActividad) que recibe datos por props.
- Elevación del estado: el componente hijo (FormularioProyecto) pasa datos al padre mediante callback.
- Manejo de eventos.
- Renderizado dinámico mediante map().
- Gestión de datos mediante servicios.
- Filtrado de información aislado del efecto secundario.
- Organización del proyecto en componentes y servicios.


### Integrantes del Grupo 7

| Nombre | Usuario de GitHub |
|----------|----------|
|Portillo, Leonardo Gabriel | [PortilloLeonardo](https://github.com/PortilloLeonardo) |
|Cáceres, Patricia del Milagro | [milagrosgit7-source](https://github.com/milagrosgit7-source) |
|Ramos, Martín Emanuel | [martin10-dot](https://github.com/martin10-dot) |
|Gregorio, Cristian Abraham | [cristiangre735-jpg](https://github.com/cristiangre735-jpg) |
| Bravo, Nicolás Exequiel | [llNEBll](https://github.com/llNEBll) |


### Instalación

Clonar el repositorio:

git clone https://github.com/llNEBll/pv_tp3pt3_grupo7

Ejecutar proyecto en la terminal:

npm instal

npm run dev

### Materia

Programación Visual

### Carrera

Analista Programador Universitario (APU)

### Facultad

Facultad de Ingeniería - UNJu