import { Helmet } from 'react-helmet-async';
// sections
import { ContactUsView } from 'src/sections/contact-us/view';

// ----------------------------------------------------------------------

export default function UserProfilePage() {
    return (
        <>
            <Helmet>
                <title> Contact Us </title>
            </Helmet>

            <ContactUsView />
        </>
    );
}
