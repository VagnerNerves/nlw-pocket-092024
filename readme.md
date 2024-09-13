<p align="center">
  <img width="200px" alt="Project NLW Pocket - in.orbit" title="Project NLW Pocket - in.orbit" src="https://github.com/VagnerNerves/nlw-pocket-092024/blob/main/web/src/assets/logo-in-orbit.svg" />
  
  <h1 align="center">Project NLW Pocket - in.orbit</h1>

  <!-- <p align="center">
    🔗 <a href="https://URLThisProject.com">https://URLThisProject.com</a> 🔗
  </p>   -->

I developed the in.orbit project, an application where users can register activities and define how many times per week these activities should be performed. The application allows users to mark tasks as completed, providing a complete history of completed activities and a percentage calculation of weekly progress. The system is designed to assist with personal organization and tracking activity frequency, offering a clear view of goal achievement for the week.

</p>

## 🧭 Table of contents

- [🧭 Table of contents](#-table-of-contents)
- [🎥 Implementation Video](#-implementation-video)
- [🎨 Layout](#-layout)
- [💡 Technologies Used](#-technologies-used)
  - [Back-end](#back-end)
  - [Front-end Web](#front-end-web)
  - [Mobile](#mobile)
- [🚀 Running the Project](#-running-the-project)
  - [Back-end](#back-end-1)
  - [Front-end Web](#front-end-web-1)
  - [Mobile](#mobile-1)
- [📝 Routes](#-routes)
- [🌎 License](#-license)
- [✒ Author](#-author)

## 🎥 Implementation Video



https://github.com/user-attachments/assets/519ed9ae-1eb6-4cb0-9da3-8ea3942faba1



## 🎨 Layout

<!-- Layout developed by [Name](https://www.instagram.com/urlName/) -->

[![Layout in Figma](https://github.com/VagnerNerves/default-readme/blob/main/assets/layout-in-figma.svg)](<https://www.figma.com/design/l8WnmobE1t58Y1cMNII8fQ/NLW-Pocket-JS-%E2%80%A2-in.orbit-(Community)?node-id=82-2&t=ZawWF488fEzvYEqn-1>)

<!-- ## 👏 Learning and more Implementations

Describe what you learned and implemented in the project. -->

## 💡 Technologies Used

### Back-end

- [x] Node.js
- [x] [Fastify](https://www.fastify.io/)
- [x] [DrizzleORM](https://orm.drizzle.team/)
- [x] TypeScript
- [x] [Dayjs](https://day.js.org/)
- [x] [Zod](https://github.com/colinhacks/zod)

### Front-end Web

- [x] [Vite](https://vitejs.dev/)
- [x] React
- [x] TypeScript
- [x] [Tailwind CSS](https://tailwindcss.com/)
- [x] [Dayjs](https://day.js.org/)
- [x] [Lucide Icons](https://lucide.dev/)
- [x] [Radix](https://www.radix-ui.com/)
- [x] [TanStack Query](https://tanstack.com/query/latest)

### Mobile

- [x] [Expo](https://expo.dev/)
- [x] React Native
- [x] TypeScript
- [x] [Dayjs](https://day.js.org/)
- [x] [Expo Router](https://docs.expo.dev/router/introduction/)
- [x] [TanStack Query](https://tanstack.com/query/latest)

## 🚀 Running the Project

### Back-end

Clone the project

```bash
  git clone https://github.com/VagnerNerves/nlw-pocket-092024.git
```

Enter the project directory

```bash
  cd nlw-pocket-092024\server
```

Install with dependencies

```bash
  npm install
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

Start the server

```bash
  npm run dev
```

### Front-end Web

Enter the project directory

```bash
  cd nlw-pocket-092024\web
```

Install with dependencies

```bash
  npm install
```

Create the .env file based on the .env.example file.

Check if the backend is running.

Start the server

```bash
  npm run dev
```

### Mobile

Enter the project directory

```bash
  cd nlw-pocket-092024\mobile
```

Install with dependencies

```bash
  npm install
```

Create the .env file based on the .env.example file.

Check if the backend is running.

Start the server

```bash
  npx expo start
```

## 📝 Routes

[![Run in Insomnia](https://github.com/VagnerNerves/default-readme/blob/main/assets/run-in-insomnia.svg)](https://insomnia.rest/run/?label=NLW%20Pocket&uri=https://github.com/VagnerNerves/nlw-pocket-092024/blob/main/server/.github/Insomnia/Insomnia_2024-09-13.json)

## 🌎 License

This project is under the MIT license. See the [LICENSE](https://github.com/VagnerNerves/nlw-pocket-092024/blob/main/LICENSE) file for more details.

## ✒ Author

<p align="center">
  <img width="200px" alt="Author Vagner Nerves" title="Author Vagner Nerves" src="https://github.com/VagnerNerves/default-readme/blob/main/assets/VagnerNerves.svg" />

  <h3 align="center">Vagner Nerves</h3>
  
  <p align="center">  
    Made with love and hate 😅, get in touch!
  </p>
</p>  
  
<div align="center">

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-1f6feb?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vagnernervessantos/)](https://www.linkedin.com/in/vagnernervessantos/)
[![Gmail Badge](https://img.shields.io/badge/-vagnernervessantos@gmail.com-1f6feb?style=flat-square&logo=Gmail&logoColor=white&link=mailto:vagnernervessantos@gmail.com)](mailto:vagnernervessantos@gmail.com)
[![GitHub Badge](https://img.shields.io/badge/-GitHub-1f6feb?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/VagnerNerves)](https://github.com/VagnerNerves)

</div>
