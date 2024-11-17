import { Helmet } from 'react-helmet-async';
// sections
import { RacingCasino } from 'src/sections/racing/view';

// ----------------------------------------------------------------------

export default function LiveCasinoPage() {
    return (
        <>
            <Helmet>
                <title> Racing Games</title>
            </Helmet>

            <RacingCasino />
        </>
    );
}
