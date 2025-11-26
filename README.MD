# 🐾 Proyecto Backend Express + MongoDB + Handlebars  
Servidor backend con autenticación por sesiones, vistas renderizadas con Handlebars, API REST documentada con Swagger y conexión a MongoDB.

---

## 📛 Badges

![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Handlebars](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Sessions](https://img.shields.io/badge/Session_Auth-3178C6?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## 📌 Descripción

Este proyecto es un backend construido con **Node.js**, **Express**, **MongoDB**, **Mongoose**, **Handlebars** para vistas y **express-session** para autenticación por sesiones.

Incluye:

- Gestión de usuarios  
- Gestión de mascotas (pets)  
- Sistema de sesiones  
- Motor de plantillas Handlebars  
- Documentación con Swagger  
- Variables de entorno con dotenv  
- Servidor estructurado en routers  
- Mongoose con conexión a MongoDB Atlas  

---

## 📂 Estructura general del proyecto


src/
├─ public/
├─ views/
│ ├─ layouts/
│ ├─ pages/
├─ router/
│ ├─ user.router.js
│ ├─ pet.router.js
│ ├─ views.router.js
│ ├─ mocks.router.js
├─ swagger.js
├─ dirname.js
├─ app.js (o server.js)

## 🚀 Instalación
git clone <https://github.com/Luz-Torres/Backend-3>
cd Backend-3
npm install

## 📚 RUTAS DE LA API
### 🐶 Rutas de Mascotas – /api/pets
POST /register (admin)

Registrar mascota.

GET /

Obtener todas las mascotas.

GET /:petId

Obtener mascota por ID.

PUT /:petId

Actualizar mascota.

DELETE /:petId

Eliminar mascota.

POST /:petId/assignOwner (admin)

Asignar dueño a una mascota.

### 👤 Rutas de Usuarios – /api/user
POST /register

Registrar usuario.

POST /login

Iniciar sesión.

POST /logout

Cerrar sesión.

GET /:userId

Obtener usuario por ID.

GET /profile/:email

Obtener usuario por email.

GET /

Listar usuarios.

PUT /:userId

Actualizar usuario.

DELETE /:userId

Eliminar usuario.