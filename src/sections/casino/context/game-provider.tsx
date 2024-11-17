import { useMemo, useCallback, useState } from 'react';
// apis
import { gameget, allgameget } from 'src/api/game';
import { GameContext } from './game-context';

export function GameProvider({ children }: any) {
    const [name, setName] = useState('All');
    const [gamelist, setGameList] = useState([]);
    const [totalList, setTotalList] = useState([]);
    const [openGameURL, setOpenGameURL] = useState('no');
    const [searchName, setSearchName] = useState('');

    // Provider Games
    const providerGame = useCallback(
        async (title: string) => {
            if (title === 'All') {
                setGameList([]);
                setGameList(totalList);
            } else {
                const rows: any = totalList.filter((obj: any) => obj.provider.name === title);

                setGameList([]);
                setGameList(rows);
            }
            setName(title);
        },
        [totalList]
    );

    // Search Games
    const searchGame = useCallback(async (gameName: string) => {
        setSearchName(gameName);
    }, []);

    // open game URL
    const gameURLset = useCallback(async (gameURL: string) => {
        setOpenGameURL(gameURL);
    }, []);

    // category get game
    const initGetGame = useCallback(async (categoryName: string) => {
        const all_result = await allgameget(categoryName);
        console.log('init games');
        if (categoryName === 'casino' || categoryName === 'casinovip') {
            const result = await gameget(categoryName);
            setName(result.data[0].provider.name);
            setGameList(result.data);
        } else {
            setName('All');
            setGameList(all_result.data);
        }
        setTotalList(all_result.data);
    }, []);

    // useEffect(() => {
    //     (async () => {
    //         const result = await gameget('All');
    //         setName('All');
    //         setGameList(result.data);
    //         setTotalList(result.data);
    //     })();
    // }, []);

    const memoizedValue = useMemo(
        () => ({
            providerGame,
            providerName: name,
            providerGameList: gamelist,
            gameURLset,
            searchGame,
            initGetGame,
            playURL: openGameURL,
            gameSearchName: searchName
        }),
        [initGetGame, providerGame, gamelist, name, searchGame, openGameURL, gameURLset, searchName]
    );

    return <GameContext.Provider value={memoizedValue}>{children}</GameContext.Provider>;
}
