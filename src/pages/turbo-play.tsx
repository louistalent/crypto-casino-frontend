import { Helmet } from 'react-helmet-async';
// sections
import { TurboGame } from 'src/sections/gameplay/view';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
    return (
        <>
            <Helmet>
                <title> Game Play </title>
            </Helmet>

            <TurboGame />
        </>
    );
}
