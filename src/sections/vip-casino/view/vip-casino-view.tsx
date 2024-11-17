// @mui
import Container from '@mui/material/Container';
// components
import { useSettingsContext } from 'src/components/settings';

import CasinoCarousel from '../vip-casino-carousel';
import CasinoProviders from '../vip-casino-providers';
import CasinoCategories from '../vip-casino-categories';
import CasinoGameList from '../vip-casino-displaygame';
import Jackpot from '../jackpot';

// ----------------------------------------------------------------------

export default function VipCasinoView() {
    const settings = useSettingsContext();

    return (
        <>
            <CasinoCarousel />
            <Container maxWidth={settings.themeStretch ? false : 'xl'}>
                <CasinoProviders />
                <CasinoCategories />
                <Jackpot />
                <CasinoGameList />
            </Container>
        </>
    );
}
