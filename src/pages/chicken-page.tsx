import { Helmet } from 'react-helmet-async';
// sections
import { ChickenPage } from 'src/sections/chicken/view';

// ----------------------------------------------------------------------

export default function LiveCasinoPage() {
    return (
        <>
            <Helmet>
                <title> Chichen Game</title>
            </Helmet>

            <ChickenPage />
        </>
    );
}
