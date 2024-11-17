import { useMemo, useCallback, useState } from 'react';
// apis
import { SportsContext } from './sports-context';

export function SportsProvider({ children }: any) {
    const [active, setSports] = useState('default');

    const setActive = useCallback((item: string) => {
        setSports(item);
    }, []);

    const memoizedValue = useMemo(
        () => ({
            active,
            setActive
        }),
        [active, setActive]
    );

    return <SportsContext.Provider value={memoizedValue}>{children}</SportsContext.Provider>;
}
