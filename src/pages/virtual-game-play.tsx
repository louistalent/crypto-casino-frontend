import { Helmet } from 'react-helmet-async';
// sections
import { VirtualGamePlay } from 'src/sections/gameplay/view';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
    return (
        <>
            <Helmet>
                <title> Game Play </title>
            </Helmet>

            <VirtualGamePlay />
        </>
    );
}
