// @mui
// import Container from '@mui/material/Container';
// components
// import { useSettingsContext } from 'src/components/settings';

// import CasinoCarousel from '../racing-carousel';
// import CasinoProviders from '../racing-providers';
// import CasinoCategories from '../racing-categories';
// import CasinoGameList from '../racing-displaygame';
import RacingBG from '../racingBG';

// ----------------------------------------------------------------------

export default function RacingCasino() {
    // const settings = useSettingsContext();

    return (
        <>
            <RacingBG />
            {/* <CasinoCarousel />
            <Container maxWidth={settings.themeStretch ? false : 'xl'}>
                <CasinoProviders />
                <CasinoCategories />
                <CasinoGameList />
            </Container> */}
        </>
    );
}
