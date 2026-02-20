# ProyectoAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.




Jorge

##¿Qué es un HttpInterceptor?

Un HttpInterceptor es un servicio en Angular que permite interceptar y manipular las solicitudes y respuestas HTTP antes de que lleguen al servidor o al código que las consume. Esto significa que puedes modificar cabeceras, manejar tokens de autenticación, registrar solicitudes o gestionar errores de manera centralizada.

Punto del ciclo HTTP en que actúa

El interceptor se ejecuta entre el momento en que un componente o servicio realiza una petición HTTP y el momento en que la respuesta llega de vuelta. Técnicamente, intercepta la petición antes de que se envíe al servidor y la respuesta antes de que llegue al consumidor del servicio. Esto permite aplicar transformaciones o lógica común sin tocar cada petición individual.

Visualmente, el flujo sería:
Componente/Servicio → HttpInterceptor → Servidor → HttpInterceptor → Componente/Servicio
Por qué evita duplicación de código

Al centralizar operaciones repetitivas, como:

Agregar tokens de autorización a cada petición

Registrar logs de solicitudes y respuestas

Manejar errores globales

los interceptores permiten no repetir esta lógica en cada servicio. Esto reduce errores, mejora la mantenibilidad y hace el código más limpio y coherente.