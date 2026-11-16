# FLAIRS (frontend)

React + Vite PWA. First screen: Passenger Login (Figma node 0:1517).

## Run

```bash
npm install
npm run dev
```

Open the printed URL (use browser dev tools device mode, iPhone 12/13, to see the mobile layout).

## Before it looks like the design

The airplane and clouds are not in the code yet. Export them from Figma:

1. Open the Figma file, select the `lywing-slash-screen` layer (node 0:1540).
2. In the right panel, Export -> SVG.
3. Save it over `src/assets/login-hero.svg`.

## Backend contract

The login form calls `POST /api/auth/login` with `{ email, password }` and expects
`{ token, user: { user_id, name, email, role } }`. On failure return a non-2xx status
and `{ message }`. Vite proxies `/api` to `http://localhost:3000`.

## Not in the code on purpose

The iPhone status bar (9:41, signal, battery) in the Figma frame is device chrome,
so the real phone's own status bar is used instead.
