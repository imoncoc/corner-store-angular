# CornerStoreAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Folder structure ->

src/
│
├── app/
│ ├── core/ # Core module for singleton services, guards, and interceptors
│ │ ├── guards/
│ │ │ └── auth.guard.ts # AuthGuard for route protection
│ │ ├── services/
│ │ │ ├── auth.service.ts # Service for authentication logic
│ │ │ ├── user.service.ts # Service for user data management
│ │ ├── interceptors/
│ │ │ └── auth.interceptor.ts # HTTP interceptor to attach tokens
│ │ └── core.module.ts # Core module
│ │
│ ├── shared/ # Shared module for reusable components, pipes, and directives
│ │ ├── components/
│ │ │ ├── footer/
│ │ │ │ └── footer.component.ts
│ │ │ ├── navbar/
│ │ │ │ └── navbar.component.ts
│ │ │ └── hero-section/
│ │ │ └── hero-section.component.ts
│ │ ├── pipes/ # Custom pipes
│ │ ├── directives/ # Custom directives
│ │ └── shared.module.ts # Shared module declaration
│ │
│ ├── auth/ # Authentication module
│ │ ├── login/
│ │ │ ├── login.component.ts
│ │ │ ├── login.component.html
│ │ ├── register/
│ │ │ ├── register.component.ts
│ │ │ ├── register.component.html
│ │ └── auth-routing.module.ts # Routing for auth module
│ │
│ ├── products/ # Lazy-loaded Products module
│ │ ├── components/ # Components specific to products
│ │ │ ├── product-list/
│ │ │ │ └── product-list.component.ts
│ │ │ ├── product-details/
│ │ │ └── product-details.component.ts
│ │ ├── services/ # Product-related services
│ │ │ └── product.service.ts
│ │ ├── interfaces/ # Interfaces for products
│ │ │ └── product.interface.ts
│ │ ├── products-routing.module.ts
│ │ └── products.module.ts
│ │
│ ├── error/ # Error pages module
│ │ ├── error-page/
│ │ │ ├── error-page.component.ts
│ │ │ ├── error-page.component.html
│ │ └── error-routing.module.ts # Routing for error pages
│ │
│ ├── app-routing.module.ts # Main routing module
│ ├── app.component.ts # Root component
│ └── app.module.ts # Root module
│
├── assets/ # Static assets (images, fonts, etc.)
│
├── environments/ # Environment-specific configurations
│ ├── environment.ts # Development environment
│ └── environment.prod.ts # Production environment
│
└── styles/ # Global styles
├── styles.scss # Main global stylesheet
