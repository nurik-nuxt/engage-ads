// src/types.d.ts
interface TelegramWebApp {
    initDataUnsafe: {
        user?: {
            id: number;
            first_name: string;
            last_name: string;
            username: string;
            language_code: string;
        };
    };
}

interface Window {
    Telegram: {
        WebApp: TelegramWebApp;
    };
}
