# 📦 Hephaistos BFF

## 🚀 Description
**Hephaistos BFF** is a **Backend For Frontend (BFF)** built with [NestJS](https://nestjs.com/) and connected to a **MongoDB** database using **Mongoose**.

It provides a secure and scalable REST API that centralizes and exposes the data needed by frontend applications (e.g., dashboards, client-facing apps, admin panels).

The project follows a **modular and maintainable architecture**, inspired by **Clean Architecture** and NestJS best practices.

---

## 🏗️ Project Architecture

```
/project-root
│── src
│   ├── app.module.ts         # Root module
│   ├── main.ts               # Application bootstrap
│   │
│   ├── config/               # Configuration (env, DB, app)
│   ├── common/               # Utils, pipes, interceptors
│   │
│   ├── modules/              # Business logic modules
│   │   ├── service-lead/
│   │   │   ├── dto/          # DTOs (validation, transformation)
│   │   │   ├── schemas/      # Mongoose schemas
│   │   │   ├── service-lead.controller.ts
│   │   │   ├── service-lead.service.ts
│   │   │   └── service-lead.module.ts
│   │   │
│   │   └── products/         # Example of another resource
│   │
│   └── bff/                  # Frontend-oriented facade
│       ├── bff.controller.ts
│       ├── bff.module.ts
│       └── dto/
│
└── test/                     # Unit / e2e tests
```

---

## ⚙️ Features

- ✅ REST API powered by **NestJS**
- ✅ Database integration with **MongoDB** & **Mongoose**
- ✅ Modular, scalable, and maintainable architecture
- ✅ Request validation with **class-validator** & **Pipes**
- ✅ Centralized error handling with NestJS exceptions
- ✅ Clear separation between **business modules** and **BFF layer** (aggregation for frontend)

---

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone git@github.com:Marie-Sail/hephaitos-my-bff.git
cd hephaistos-my-bff
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start MongoDB 
```bash
# Local
sudo systemctl start mongod

```

### 4. Configure environment variables
Create a `.env` file at the project root:

```env
APP_NAME=hephaistos-my-bff
PORT=3000
MONGO_URI=mongodb://localhost:27017/hephaistos
```

### 5. Run the project
```bash
npm run start:dev
```

---

## 📡 Example Endpoints

### Users
- `POST /service-lead` → Create a new service
- `GET /users` → Get all services
- `GET /service-lead/:id` → Get a service by ID
- `PATCH /service-lead/:id` → Update a service
- `DELETE /service-lead/:id` → Delete a service

---

## 🧪 Testing

```bash
npm run test         # Unit tests
npm run test:e2e     # End-to-end tests
```

---

## 🛠️ Tech Stack

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [class-validator](https://github.com/typestack/class-validator)
- [Jest](https://jestjs.io/) for testing  