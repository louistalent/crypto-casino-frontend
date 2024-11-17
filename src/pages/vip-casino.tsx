import { Helmet } from 'react-helmet-async';
// sections
import { VipCasinoView } from 'src/sections/vip-casino/view';

// ----------------------------------------------------------------------

export default function LiveCasinoPage() {
    return (
        <>
            <Helmet>
                <title> Vip Casino: Casino</title>
            </Helmet>

            <VipCasinoView />
        </>
    );
}
