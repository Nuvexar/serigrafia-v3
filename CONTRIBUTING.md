
# 🛠️ Guía de Contribución y Flujo de Trabajo Git

Este documento define cómo estructurar y trabajar con ramas en este proyecto web (HTML, CSS, JS), siguiendo buenas prácticas modernas.

---

## 📌 Rama principal

- `main`: rama principal estable. Siempre debe contener código funcional y listo para producción.

---

## 🌿 Convención de nombres de ramas

Usamos prefijos para identificar el propósito de cada rama:

| Prefijo      | Uso                                      | Ejemplo                        |
|--------------|-------------------------------------------|--------------------------------|
| `feature/`   | Nueva funcionalidad o sección             | `feature/formulario-contacto` |
| `fix/`       | Corrección de errores                     | `fix/hover-footer`            |
| `hotfix/`    | Corrección urgente                        | `hotfix/fallo-deploy`         |
| `refactor/`  | Mejora interna del código                 | `refactor/navbar`             |
| `chore/`     | Limpieza o mantenimiento del proyecto     | `chore/eliminar-archivos-demo`|
| `test/`      | Agregar o modificar pruebas               | `test/form-validations`       |

---

## 🚦 Flujo de trabajo

1. **Crear una nueva rama desde `main`:**

   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/nombre-de-la-tarea
   git push -u origin feature/nombre-de-la-tarea
   ```

2. **Hacer commits claros y frecuentes:**

   Ejemplos:
   - `Add sección de contacto`
   - `Fix bug de scroll en mobile`
   - `Refactor lógica de validación`

3. **Finalizar la tarea:**

   Hacer un Pull Request desde la interfaz de GitHub y esperar a que sea aprobado por el administrador.

4. **(Opcional) Borrar la rama:**

   ```bash
   git branch -d feature/nombre-de-la-tarea --> Borra la rama del repositorio local.
   git push origin --delete feature/nombre-de-la-tarea --> Borra la rama del repositorio remoto.
   ```

---

## ✅ Buenas prácticas

- Commits descriptivos y en español.
- No trabajar directamente sobre `main`.
- Una rama = una funcionalidad o arreglo.
- Mantené tu código limpio y modular.

---