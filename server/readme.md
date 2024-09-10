# Back-End Installation

Install with dependences 

```bash
  npm i
```

Create the .env file based on the .env.example file.

Install Docker and check if it's running on your machine. If so, run the command to create the PostgreSQL database in Docker:

```bash
  docker compose up -d
```

Now let's run the command to create the tables and populate the database with data:

```bash
  npx drizzle-kit generate

  npm run seed
```

Now run the backend:

```bash
  npm run dev
```
