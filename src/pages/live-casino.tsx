import { Helmet } from 'react-helmet-async';
// sections
import { LiveCasinoView } from 'src/sections/live-casino/view';

// ----------------------------------------------------------------------

export default function LiveCasinoPage() {
    return (
        <>
            <Helmet>
                <title> Live Casino: Casino</title>
            </Helmet>

            <LiveCasinoView />
        </>
    );
}
