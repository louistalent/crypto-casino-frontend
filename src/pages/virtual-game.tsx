import { Helmet } from 'react-helmet-async';
// sections
import { Virtualgame } from 'src/sections/virtual-game/view';

// ----------------------------------------------------------------------

export default function LiveCasinoPage() {
    return (
        <>
            <Helmet>
                <title> Virtual Game | Virtual</title>
            </Helmet>

            <Virtualgame />
        </>
    );
}
