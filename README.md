# CRUD Cliente ReactJS REST API with Spring Boot

CRUD ReactJS + Spring, Hibernate, Docker, PostgreSQL

This API is to showcase, especially for beginners, what a basic CRUD API that's close to being Production-ready looks like.

## 💻 Tecnologies

- Java 17
- Spring Boot 3 (Spring 6)
- JPA + Hibernate
- JUnit 5 + Mockito (back-end tests)
- Maven
- React v18
- Bootstrap V5+ Material CSS Icons
- Karma + Jasmine (front-end tests)

## ⌨️ Editor / IDE

- Visual Studio Code
- Eclipse [link](https://marketplace.visualstudio.com/items?itemName=loiane.java-spring-extension-pack)
- React Extensions [link](https://marketplace.visualstudio.com/items?itemName=loiane.angular-extension-pack)

## Some functionalities available in the API

- ✅ Java model class with validation
- ✅ JPA repository
- ✅ JPA Pagination
- ✅ Controller, Service, and Repository layers
- ✅ Has-Many relationships (User-financial entry)
- ✅ Java 17 Records as DTO (Data Transfer Object)
- ✅ Hibernate / Jakarta Validation
- ✅ Unit tests for all layers (repository, service, controller)
- ✅ Test coverage for tests
- ✅ Spring Docs - Swagger (https://springdoc.org/v2/)

### Not implemented (maybe in a future version)

- Security (Authorization and Authentication) - JWT
- Caching
- Data Compression
- CI/CD Travis/Github/Gitlab

## Some functionalities available in the Front-end

- ✅ React Class components (React v16+)
- ✅ Bootstramp V4+
- ✅ List of all financial entry with pagination
- ✅ Form to update/create user/ financial entry
- ✅ View only screen
- ✅ TypedForms (React Router Dom v5+)
- ✅ Class Components x Functional Components
- [In Progress] Unit and Integration tests Jest

## ❗️Executing the code locally

### Executing the back-end

You need to have Java and Maven installed and configured locally.

Open the `crud-spring` project in your favorite IDE as a Maven project and execute it as Spring Boot application.

### Executing the front-end

You need to have Node.js 16+ LTS/ NPM installed locally.

1. Install all the required dependencies:

```
yarn install
```

2. Execute the project mode development:

```
yarn dev
```

3. Execute the project mode production:
   
```
yarn prod
```

This command will run the React project with a proxy to the Java server, without requiring CORS.

Open your browser and access **http://localhost:3000** (React default port).
