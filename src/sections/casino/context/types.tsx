export type GameProviderType = {
    providerGame: (title: string) => Promise<void>;
    searchGame: (gameName: string) => Promise<void>;
    gameURLset: (gameURL: string) => Promise<void>;
    initGetGame: (categoryName: string) => Promise<void>;
    providerName: string;
    providerGameList: any;
    playURL: string;
    gameSearchName: string;
};
