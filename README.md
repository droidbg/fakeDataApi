# Fake Data API Starter Kit

## Features
- Feature-based folder structure
- NestJS API ready for Vercel serverless deployment
- Endpoints:
  - `/api/products` – Get all products
  - `/api/carts` – Get all carts

## Running Locally

```bash
npm install
npm run start:dev
```

Visit:
- http://localhost:3000/api/products
- http://localhost:3000/api/carts

## Deploying to Vercel

1. Push your code to a GitHub repository.
2. Connect the repo to Vercel.
3. Vercel will use the `vercel-build` script and `vercel.json` config.

## Environment Variables
- `PORT` (optional): Port to run the server locally (default: 3000)

## Production Readiness
- CORS enabled
- Modular, feature-based structure
- Ready for serverless deployment
