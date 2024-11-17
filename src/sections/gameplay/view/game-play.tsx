// @mui
import Container from '@mui/material/Container';
// components
import { useSettingsContext } from 'src/components/settings';

import OpenGame from '../open-game';
// ----------------------------------------------------------------------

export default function CasinoView() {
    const settings = useSettingsContext();

    return (
        <>
            <Container maxWidth={settings.themeStretch ? false : 'xl'}>
                <OpenGame />
            </Container>
        </>
    );
}
