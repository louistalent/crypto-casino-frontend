// @mui
import Container from '@mui/material/Container';
// components
import { useSettingsContext } from 'src/components/settings';

import CasinoCarousel from '../live-casino-carousel';
import VirtalProvider from '../virtual-casino-providers';
import CasinoCategories from '../live-casino-categories';
import VirtualGameList from '../virtual-game-list';

// ----------------------------------------------------------------------

export default function LiveCasinoView() {
    const settings = useSettingsContext();

    return (
        <>
            <CasinoCarousel />
            <Container maxWidth={settings.themeStretch ? false : 'xl'}>
                <VirtalProvider />

                <CasinoCategories />
                <VirtualGameList />
            </Container>
        </>
    );
}
