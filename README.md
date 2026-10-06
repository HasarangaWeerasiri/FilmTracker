# FilmTracker

The React frontend lives in [`frontend/`](./frontend/).
The Express and MongoDB backend lives in [`backend/`](./backend/).

## Run the frontend

```bash
cd frontend
npm install
npm run dev
```

The app uses Vite, React, and Tailwind CSS 4.

## Run the backend

Make sure MongoDB is running, then create `backend/.env` from
[`backend/.env.example`](./backend/.env.example).

```bash
cd backend
npm install
npm run dev
```

The API runs at `http://localhost:5000`.

### API endpoints

- `GET /api/health`
- `GET /api/films`
- `GET /api/films/:id`
- `POST /api/films`
- `PATCH /api/films/:id`
- `DELETE /api/films/:id`
