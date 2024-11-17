// @mui
// import Container from '@mui/material/Container';
// components
// import { useSettingsContext } from 'src/components/settings';

import CasinoCarousel from '../aviator-carousel';
// import CasinoProviders from '../aviator-providers';
// import CasinoCategories from '../aviator-categories';
// import CasinoGameList from '../aviator-displaygame';

// ----------------------------------------------------------------------

export default function AviatorCasino() {
    // const settings = useSettingsContext();

    return (
        <>
            <CasinoCarousel />
            {/* <Container maxWidth={settings.themeStretch ? false : 'xl'}> */}
            {/* <CasinoProviders /> */}
            {/* <CasinoCategories /> */}
            {/* <CasinoGameList />
            </Container> */}
        </>
    );
}
