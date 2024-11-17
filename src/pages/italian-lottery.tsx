import { Helmet } from 'react-helmet-async';
// sections
import { ItalianLottery } from 'src/sections/italianlottery/view';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
    return (
        <>
            <Helmet>
                <title> Italian Lottery </title>
            </Helmet>

            <ItalianLottery />
        </>
    );
}
