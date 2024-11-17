// @mui
import Container from '@mui/material/Container';
// components
import { useSettingsContext } from 'src/components/settings';

import HomeCarousel from '../home-carousel';
import HomeNav from '../home-nav';
import HomeGallery from '../home-gallery';
import HomeLive from '../home-live';
import HomeMini from '../home-mini';

// ----------------------------------------------------------------------

export default function HomeView() {
    const settings = useSettingsContext();

    return (
        <>
            <HomeCarousel />
            <Container maxWidth={settings.themeStretch ? false : 'xl'}>
                <HomeNav />
                <HomeGallery />
                <HomeLive />
                <HomeMini />
            </Container>
        </>
    );
}
