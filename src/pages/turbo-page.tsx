import { Helmet } from 'react-helmet-async';
// sections
import { TurboGame } from 'src/sections/turbogame/view';

// ----------------------------------------------------------------------

export default function LiveCasinoPage() {
    return (
        <>
            <Helmet>
                <title> Turbo Games</title>
            </Helmet>

            <TurboGame />
        </>
    );
}
