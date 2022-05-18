## npm install

## npm run start

-   Server state management : React Query
-   CSS : Styled components (No RWD)
-   Language : TypeScript
-   Route management : React Router V6

```bash
    ├── src
    │   ├── App.tsx -- Root App component(Router and Priveledge settings).
    │   ├── api -- Put api request altogether.
    │   │   └── index.ts
    │   ├── assets
    │   │   └── images
    │   │   ├── logo.png
    │   │   └── registerButton.png
    │   ├── components
    │   │   ├── button
    │   │   │   ├── index.tsx -- Button component.
    │   │   │   └── style.ts
    │   │   └── panel
    │   │   ├── loginpanel -- Login panel on /login.
    │   │   │   └── index.tsx
    │   │   ├── register -- Register panel on bottom of home page.
    │   │   │   ├── index.tsx
    │   │   │   └── style.ts
    │   │   └── webinar -- The card of single webinar cards.
    │   │   ├── index.tsx
    │   │   └── style.ts
    │   ├── global
    │   │   └── style -- Any global value about style.
    │   │   ├── color.ts
    │   │   └── index.ts
    │   ├── hooks
    │   │   └── index.ts -- Literally hooks.
    │   ├── index.tsx -- Render the root element.
    │   ├── interfaces -- Some interfaces often used.
    │   │   ├── index.ts
    │   │   ├── user.ts
    │   │   └── webinar.ts
    │   ├── layouts -- The layout on the web view.
    │   │   └── header -- The header layout
    │   │   ├── index.tsx
    │   │   └── style.ts
    │   ├── pages -- Compose the all components which rendered on the particular routes.
    │   │   ├── home -- route /home
    │   │   │   ├── index.tsx
    │   │   │   └── style.ts
    │   │   ├── login -- route /login
    │   │   │   └── index.tsx
    │   │   └── myWebnars -- route /my_webinars
    │   │   └── index.tsx
    │   ├── provider
    │   │   └── AuthProvider.tsx -- Be replaced by React-query.
    │   ├── routers -- The route config.
    │   │   └── index.js
    │   ├── services -- Wrap some logic while requesting API.
    │   │   ├── auth.ts
    │   │   ├── index.ts
    │   │   └── webinar.ts
    │  
    ├── tsconfig.json
    └── tsconfig.paths.json -- The alias settings.
```
