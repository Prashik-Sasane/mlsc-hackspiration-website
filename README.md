# MLSC Hackspiration '26

## Setup and Installation

- Copy the contents of `env.sample` to the `.env` file and update the variables accordingly
- Install dependencies and run the development server

```bash
pnpm install
```

- Database Setup

```bash
pnpm prisma generate
pnpm prisma db push
```

- Run the development server

```bash
pnpm run dev
```


- Seed the database with sample data

```bash
npx ts-node prisma/seed.ts
```

## Docker Setup

You can also run the application using Docker Compose.

1. Build and start the container:

```bash
docker-compose up --build -d
```

2. The application will be available at [http://localhost:3000](http://localhost:3000).

3. To stop the container:

```bash
docker-compose down -v
```



## Web Development Teams

| Name            | Role       | GitHub       | LinkedIn       | Twitter       | Other Links       |
| --------------- | ---------- | ------------ | -------------- | ------------- | ----------------- |
| **Tanishq Thuse** | **Lead**   | [**GitHub**](http://github.com/TanishqThuse/) | [**LinkedIn**](https://www.linkedin.com/in/tanishq-thuse-32472b248/) | [**Twitter**](https://x.com/tanishq552005) | [**Other Links**](https://linktr.ee/tanishqthuse555) |
| **Neeraj Pathak** | **Lead**   | [**GitHub**](https://github.com/Neerajpathak07) | [**LinkedIn**](https://www.linkedin.com/in/neeraj-pathak-527a682a9/) | [**Twitter**]() | [**Other Links**]() |
| Srujal Vispute | Coordinator  | [GitHub](https://github.com/Srujal29) | [LinkedIn](www.linkedin.com/in/srujal-vispute-853754318) | [Twitter]() | [Other Links](https://leetcode.com/u/srujal29/) |
| Sukhada Raut | Coordinator  | [GitHub](https://github.com/sukhadaraut323) | [LinkedIn](www.linkedin.com/in/sukhada-raut-102351339) | [Twitter]() | [Other Links]() |
| Aditya Bavadekar | Coordinator  | [GitHub](https://github.com/AdityaBavadekar/) | [LinkedIn](https://www.linkedin.com/in/adityabavadekar/) | [Twitter](https://x.com/sshaditya) | [Hugging Face](https://huggingface.co/AdityaBavadekar) |
| Vikrant Thakur | Coordinator  | [GitHub](https://github.com/Vikrant-K-Thakur) | [LinkedIn](https://www.linkedin.com/in/vikrant-thakur-043279362/) | [Twitter]() | [Other Links]() |
| Sanskruti Sathe | Coordinator  | [GitHub](https://github.com/sanscraftscodes) | [LinkedIn](https://www.linkedin.com/in/sanskruti-sathe-527253379/) | [Twitter]() | [Other Links]() |
| Prashik Sasane | Coordinator  | [GitHub](https://github.com/Prashik-Sasane) | [LinkedIn](https://www.linkedin.com/in/prashik-sasane-2545b12b1/) | [Twitter](https://x.com/SasanePrashik) | [Other Links]() |



