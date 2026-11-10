# 🚀 DevTask - Proyecto Espejo (Fase 2: Refactor TS Puro)

Refactorización completa de la aplicación gestora de tareas DevTask desde JavaScript Vanilla hacia TypeScript estricto, aplicando Programación Orientada a Objetos (POO), encapsulación de estado, inmutabilidad y contratos de datos mediante Interfaces. Desarrollado para el módulo de Diseño Web en Entorno Cliente (DWEC).

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

## Tabla de contenidos
- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Licencia](#licencia)

## Características

- **Modelado de Datos (Interface):** Contrato de datos en `src/interfaces/tarea.interface.ts` con ID único basado en timestamp (`Date.now()`) y tipado literal restringido para prioridades (`'Alta' | 'Media' | 'Baja'`).
- **Arquitectura POO y Encapsulación:** Lógica centralizada en la clase `TaskManager` (`src/models/TaskManager.ts`) protegiendo el estado global mediante propiedades privadas (`private tareas` y `private filtroActual`).
- **Manipulación Inmutable:** Actualización del estado de tareas utilizando métodos funcionales y operadores de propagación (`...` y `.map()`) sin mutar el array original.
- **Cero *any* y Tipado del DOM:** Casteo explícito de nodos HTML (`HTMLFormElement`, `HTMLInputElement`, `HTMLSelectElement`, `HTMLUListElement`) cumpliendo con la restricción `"strict": true`.
- **Persistencia y Asincronía:** Almacenamiento automático en `localStorage` y simulación de carga inicial asíncrona (`Promise` + `async/await`).

## Requisitos

- Node.js >= 18.0
- npm >= 9.0
- Compilador de TypeScript (`tsc`)
- Extensión Live Server en VS Code (o cualquier servidor HTTP local para soportar módulos ES6).

## Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone [https://github.com/tsfranklin/proyecto-espejo-fase2.git](https://github.com/tsfranklin/proyecto-espejo-fase2.git)
cd proyecto-espejo-fase2