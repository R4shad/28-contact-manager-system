Technical Assessment: Contact Management System
Objetivo:
Desarrollar una aplicación web para gestionar una lista de contactos. La aplicación permitirá a los usuarios agregar, editar, eliminar y buscar contactos en una base de datos.

Requerimientos:
Frontend (SPA) - React, Angular o Vue
✅ Interfaz simple con las siguientes funcionalidades:

Agregar un nuevo contacto con nombre, email y teléfono.
Listar contactos en una tabla o lista.
Editar un contacto existente.
Eliminar un contacto de la lista.
Buscar contactos por nombre o email.
Backend (REST API) - Node.js, Python, Java o C#
✅ Endpoints necesarios:

POST /contacts → Crear un nuevo contacto.
GET /contacts → Listar todos los contactos.
GET /contacts?search=query → Buscar contactos por nombre o email.
PUT /contacts/:id → Editar un contacto.
DELETE /contacts/:id → Eliminar un contacto.
Base de Datos - A elección (SQL o NoSQL)
✅ Debe almacenar los contactos con los siguientes campos:

id (UUID o auto-incremental).
name (string, requerido).
email (string, requerido, único).
phone (string, requerido).
createdAt (timestamp).
Criterios de Evaluación:
✅ Código bien estructurado y limpio.
✅ Correcto uso de REST API.
✅ Interfaz funcional y responsive.
✅ Manejo de errores y validaciones.
✅ Persistencia de datos en la base de datos.

Tiempo Estimado:
⏳ 3 horas

Entrega:
Código fuente en un repositorio GitHub o archivo ZIP.
Instrucciones claras para ejecutar el proyecto.