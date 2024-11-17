import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// apis
import { sportsOpen } from 'src/api/game';
// ----------------------------------------------------------------------

export default function Sports({ active }: { active: string }) {
    const lgUp = useResponsive('up', 'lg');

    const [openUrl, setOpenURL] = useState('https://stage.sportbook.work/?locale=fr&cid=gamblix-stage');

    useEffect(() => {
        if (active === 'sports') {
            const root = window.document.getElementById('root');

            if (root) {
                root.style.overflowY = 'hidden';
            }
        }
    }, [active]);

    const init = async () => {
        try {
            const res = await sportsOpen();
            setOpenURL(res);
            console.log(res, '--sports book');
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        init();
    }, []);

    return (
        <Stack
            sx={{
                position: active === 'sports' ? 'absolute' : 'none',
                top: `${lgUp ? '128px' : '56px'}`,
                width: '100vw',
                height: `${lgUp ? 'calc(100vh - 128px)' : 'calc(100vh - 200px)'}`,
                display: active === 'sports' ? 'flex' : 'none'
            }}
        >
            <iframe
                id="sportsgame"
                style={{ width: '100%', height: '100%', border: 0 }}
                src={openUrl}
                title="game play"
            />
        </Stack>
    );
}
