# Ebooks site

### Instalar dependecias

```bash
npm install
```

o

```bash
yarn install
```

### Correr modo desarrollo

```bash
npm run dev
```

### Compilar para produccion

```bash
npm run build
```

### Arbol de directorios

- `src`
  - `apps`
    - `api`
      - **Book.service.ts**: Archivo que contiene la lógica para interactuar con el servicio de libros.
    - `components`
      - `icons`
        - **Book.component.tsx**: Componente de icono que representa un libro.
        - **BookDetail.tsx**: Componente de detalle de libro.
        - **BookSkeleton.tsx**: Componente de esqueleto de libro para mostrar mientras se carga.
        - **FavoriteList.tsx**: Componente de lista de favoritos.
        - **Filter.component.tsx**: Componente de filtro.
        - **ListBook.component.tsx**: Componente de lista de libros.
        - **PageContainerSkeleton.tsx**: Componente de esqueleto de contenedor de página.
        - **ProfileNameToImg.component.tsx**: Componente que convierte el nombre de perfil en una imagen.
    - `contexts`
      - **contextEbooks.ts**: Archivo que define el contexto relacionado con los ebooks.
    - `hooks`
      - **useEbooks.ts**: Archivo que contiene los hooks personalizados relacionados con los ebooks.
    - `interfaces`
      - **author.interface.ts**: Interfaz que define la estructura de un autor.
      - **ebook.interface.ts**: Interfaz que define la estructura de un ebook.
      - **global.interface.ts**: Interfaz que define estructuras de datos globales.
    - `providers`
      - **queryClient.ts**: Archivo que define el proveedor de consulta para la aplicación.
    - `services`
      - **ebook.service.ts**: Archivo que contiene la lógica de servicio para los ebooks.
    - `views`
      - **main.view.tsx**: Vista principal de la aplicación.

### Configuraciones extras

- tsconfig.json : Confuracion de alias para los directorios ejempl:

  ```json
  {
    "paths": { "api/*": ["./src/apps/api/*"] }
  }
  ```

- vite.config.ts

  ```typescript
        resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
        }

  ```
