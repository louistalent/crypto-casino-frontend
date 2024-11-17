// @mui
import Container from '@mui/material/Container';
// components
import { useSettingsContext } from 'src/components/settings';

import OpenGame from '../vipcasino-play';
// ----------------------------------------------------------------------

export default function CasinoView() {
    const settings = useSettingsContext();

    return (
        <Container maxWidth={settings.themeStretch ? false : 'xl'}>
            <OpenGame />
        </Container>
    );
}
