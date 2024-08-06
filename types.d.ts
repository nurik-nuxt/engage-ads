// src/types.d.ts
interface TelegramUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
}

interface TelegramWebApp {
    initDataUnsafe: {
        user?: TelegramUser;
    };
}

interface Telegram {
    WebApp: TelegramWebApp;
}

interface Window {
    Telegram: Telegram;
}
