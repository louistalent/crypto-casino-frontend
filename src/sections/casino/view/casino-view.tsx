// @mui
import Container from '@mui/material/Container';
// components
import { useSettingsContext } from 'src/components/settings';

import CasinoCarousel from '../casino-carousel';
import CasinoProviders from '../casino-providers';
import CasinoCategories from '../casino-categories';
import CasinoGameList from '../casino-gamelist';
import CasinoProviderGameList from '../casino-provider-gamelist';
import Jackpot from '../jackpot';
// ----------------------------------------------------------------------
// casino game provider game list
import { useGameContext } from '../context';

export default function CasinoView() {
    const settings = useSettingsContext();
    console.log('casino init');

    const { providerName } = useGameContext();

    return (
        <>
            <CasinoCarousel />
            <Container maxWidth={settings.themeStretch ? false : 'xl'}>
                <CasinoProviders />
                <CasinoCategories />
                <Jackpot />
                {providerName === 'default' ? <CasinoGameList /> : <CasinoProviderGameList />}
            </Container>
        </>
    );
}
