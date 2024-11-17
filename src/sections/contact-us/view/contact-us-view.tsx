// @mui
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
// components
import { useSettingsContext } from 'src/components/settings';
import { useNavigate, useParams } from 'react-router';
import { useResponsive } from 'src/hooks/use-responsive';

import Contacts from '../contacts';
import AboutUs from '../about-us';
import ResponsiveGameing from '../responsive-gameing';
import PrivacyPolicy from '../privacy-policy';
import Trems from '../terms';
import FAQ from '../faq';
import Affiliations from '../affiliations';
import AntyMoneyLaunder from '../anty-money-launder';
import DisputeResolution from '../dispute-resolution';

// ----------------------------------------------------------------------

const mobileItemStyle = {
    borderRadius: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    p: 1,
    border: '1px solid',
    whiteSpace: 'nowrap'
};

const ContactUsView = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const mdUp = useResponsive('up', 'md');

    const settings = useSettingsContext();

    return (
        <Container maxWidth={settings.themeStretch ? false : 'xl'} sx={{ mb: 10, mt: 5 }}>
            <Stack direction={mdUp ? 'row' : 'column'}>
                {!mdUp && (
                    <Stack
                        className="scroll-content"
                        id="myDiv"
                        direction="row"
                        flexWrap={mdUp ? 'wrap' : 'nowrap'}
                        spacing={1}
                        mb={5}
                        sx={{
                            overflowX: mdUp ? 'hidden' : 'auto',
                            width: '100%',
                            p: 1,
                            '::-webkit-scrollbar': {
                                height: mdUp ? '5px' : '3px'
                            },
                            '::-webkit-scrollbar-thumb': {
                                backgroundColor: '#078DEE',
                                borderRadius: 2
                            }
                        }}
                    >
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/contacts')}>
                            Contacts
                        </Box>
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/faq')}>
                            FAQ
                        </Box>
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/affiliations')}>
                            Affiliations
                        </Box>
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/about-us')}>
                            About us
                        </Box>
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/responsive-gameing')}>
                            Responsible gaming
                        </Box>
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/privacy-policy')}>
                            Privacy policy
                        </Box>
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/anty-money-raunder')}>
                            Anty Money-Laundering
                        </Box>
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/terms')}>
                            Terms
                        </Box>
                        <Box sx={mobileItemStyle} onClick={() => navigate('/contact-us/dispute-resolution')}>
                            Dispute Resolution
                        </Box>
                    </Stack>
                )}
                <Stack
                    sx={{
                        width: mdUp ? 'calc(100% - 320px)' : '100%',
                        pr: mdUp ? 10 : 0
                    }}
                >
                    {(() => {
                        switch (id) {
                            case 'contacts': {
                                return <Contacts />;
                            }
                            case 'faq': {
                                return <FAQ />;
                            }
                            case 'about-us': {
                                return <AboutUs />;
                            }
                            case 'responsive-gameing': {
                                return <ResponsiveGameing />;
                            }
                            case 'privacy-policy': {
                                return <PrivacyPolicy />;
                            }
                            case 'terms': {
                                return <Trems />;
                            }
                            case 'affiliations': {
                                return <Affiliations />;
                            }
                            case 'anty-money-raunder': {
                                return <AntyMoneyLaunder />;
                            }
                            case 'dispute-resolution': {
                                return <DisputeResolution />;
                            }
                            default: {
                                return <Contacts />;
                            }
                        }
                    })()}
                </Stack>

                {mdUp && (
                    <Stack
                        sx={{
                            top: 64 + 40,
                            position: 'sticky',
                            width: 320,
                            alignSelf: 'flex-start',
                            flexGrow: 'unset'
                        }}
                    >
                        <List disablePadding>
                            <ListItemButton
                                selected={id === 'contacts'}
                                onClick={() => navigate('/contact-us/contacts')}
                                sx={{
                                    py: 1.25
                                }}
                            >
                                <ListItemText primary="Contacts" />
                            </ListItemButton>
                            <ListItemButton
                                selected={id === 'faq'}
                                onClick={() => navigate('/contact-us/faq')}
                                sx={{
                                    py: 1.25
                                }}
                            >
                                <ListItemText primary="FAQ" />
                            </ListItemButton>
                            <ListItemButton
                                selected={id === 'affiliations'}
                                onClick={() => navigate('/contact-us/affiliations')}
                                sx={{
                                    py: 1.25
                                }}
                            >
                                <ListItemText primary="Affiliations" />
                            </ListItemButton>
                            <ListItemButton
                                selected={id === 'about-us'}
                                onClick={() => navigate('/contact-us/about-us')}
                                sx={{
                                    py: 1.25
                                }}
                            >
                                <ListItemText primary="About us" />
                            </ListItemButton>
                            <ListItemButton
                                selected={id === 'responsive-gameing'}
                                onClick={() => navigate('/contact-us/responsive-gameing')}
                                sx={{
                                    py: 1.25
                                }}
                            >
                                <ListItemText primary="Responsible gaming" />
                            </ListItemButton>
                            <ListItemButton
                                selected={id === 'privacy-policy'}
                                onClick={() => navigate('/contact-us/privacy-policy')}
                                sx={{
                                    py: 1.25
                                }}
                            >
                                <ListItemText primary="Privacy policy" />
                            </ListItemButton>
                            <ListItemButton
                                selected={id === 'anty-money-raunder'}
                                onClick={() => navigate('/contact-us/anty-money-raunder')}
                                sx={{
                                    py: 1.25
                                }}
                            >
                                <ListItemText primary="Anty Money-Laundering" />
                            </ListItemButton>
                            <ListItemButton
                                selected={id === 'terms'}
                                onClick={() => navigate('/contact-us/terms')}
                                sx={{
                                    py: 1.25
                                }}
                            >
                                <ListItemText primary="Terms" />
                            </ListItemButton>
                            <ListItemButton
                                selected={id === 'dispute-resolution'}
                                onClick={() => navigate('/contact-us/dispute-resolution')}
                                sx={{
                                    py: 1.25
                                }}
                            >
                                <ListItemText primary="Dispute Resolution" />
                            </ListItemButton>
                        </List>
                    </Stack>
                )}
            </Stack>
        </Container>
    );
};

export default ContactUsView;
