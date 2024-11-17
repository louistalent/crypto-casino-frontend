import { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { SportsContext } from 'src/sections/casino/sportsbook/sports-context';
// sections
// import { SportsLive } from 'src/sections/sports/view';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
    // const { setActive } = useContext(SportsContext);

    // useEffect(() => {
    //     setActive('sports-live');
    //     return () => {
    //         setActive('ALL');
    //     };
    // }, [setActive]);

    return (
        <>
            <Helmet>
                <title> Live Sports </title>
            </Helmet>

            {/* <SportsLive /> */}
        </>
    );
}
