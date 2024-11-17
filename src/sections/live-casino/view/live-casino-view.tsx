// @mui
import Container from '@mui/material/Container';
// components
import { useSettingsContext } from 'src/components/settings';
// casino game provider game list
import { useGameContext } from '../../casino/context';

import CasinoCarousel from '../live-casino-carousel';
import CasinoProviders from '../live-casino-providers';
// import CasinoCategories from '../live-casino-categories';
import CasinoGameList from '../live-casino-displaygame';

// provider each games
import Evolution from '../provider-each/evolution';
import ProagmaticLive from '../provider-each/pragmatic';
import Portomaso from '../provider-each/portomaso';
import TVbet from '../provider-each/tvbet';
import VivoGame from '../provider-each/vivo';
import N2Game from '../provider-each/n2game';

// ----------------------------------------------------------------------

export default function LiveCasinoView() {
    const settings = useSettingsContext();
    const { providerName } = useGameContext();
    console.log(providerName, '--providerName--');
    return (
        <>
            <CasinoCarousel />
            <Container maxWidth={settings.themeStretch ? false : 'xl'}>
                <CasinoProviders />
                {/* <CasinoCategories /> */}
                {providerName === 'All' ? (
                    <>
                        <Evolution />
                        <ProagmaticLive />
                        <Portomaso />
                        <TVbet />
                        <VivoGame />
                        <N2Game />
                    </>
                ) : (
                    <CasinoGameList />
                )}
            </Container>
        </>
    );
}
