# SaitEnglish

Публічний сайт з тренажерами для вивчення англійської (український інтерфейс).

## Запуск локально

```bash
npm install
npm run dev
```

Відкрий [http://localhost:3000](http://localhost:3000).

## Публікація (Vercel)

1. Завантаж проєкт на GitHub.
2. Імпортуй репозиторій на [vercel.com](https://vercel.com).
3. Vercel автоматично збере Next.js — отримаєш публічне посилання.

## Додати вправи

- Граматика: `content/grammar/*.json`
- Словник: `content/vocabulary/*.json`
- Пропуски: `content/fill-blank/*.json`

Підключи новий файл у `lib/content.ts`.
