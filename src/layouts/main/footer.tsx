import { useState } from 'react';

// @mui
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
// dialog
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';

// config
import { ASSETS_API } from 'src/config-global';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
import { useSettingsContext } from 'src/components/settings';
import Carousel, { useCarousel } from 'src/components/carousel';

import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

const _carousels = [
    `${ASSETS_API}/footer/partners/astropay.svg`,
    `${ASSETS_API}/footer/partners/btc.svg`,
    `${ASSETS_API}/footer/partners/diners-club.svg`,
    `${ASSETS_API}/footer/partners/discover.svg`,
    `${ASSETS_API}/footer/partners/ecopayz.svg`,
    `${ASSETS_API}/footer/partners/jcb.svg`,
    `${ASSETS_API}/footer/partners/netteler.svg`,
    `${ASSETS_API}/footer/partners/paysafecard.svg`,
    `${ASSETS_API}/footer/partners/qiwi.svg`,
    `${ASSETS_API}/footer/partners/skrill.svg`,
    `${ASSETS_API}/footer/partners/visa.svg`,
    `${ASSETS_API}/footer/partners/web-money.svg`,
    `${ASSETS_API}/footer/partners/mastercard.svg`
];

const FooterLinks = [
    [
        { link: '#', title: 'Our Products' },
        { link: paths.sports, title: 'Sportsbook' },
        { link: paths.sports, title: 'E-Sports' },
        { link: paths.casino, title: 'Casino' },
        { link: paths.vip_casino, title: 'Casino Vip' },
        { link: paths.live_casino, title: 'Casino Live' },
        { link: paths.virtual, title: 'Virtuals' },
        { link: paths.aviator, title: 'Aviator' },
        { link: paths.chicken, title: 'Chichen' },
        { link: paths.turbogame, title: 'Mini Games' },
        { link: paths.italianlottery, title: 'Italian Lottery' }
    ],
    [
        { link: '/contact-us/about-us', title: 'About-us' },
        { link: '/contact-us/anty-money-raunder', title: 'Anty money-loundering' },
        { link: '/contact-us/dispute-resolution', title: 'Dispute resolutions' },
        { link: '/contact-us/faq', title: 'FAQ' },
        { link: '/contact-us/affiliations', title: 'Affiliations' },
        { link: 'https://www.babnet.net/sport.php', target: '_blank', title: 'Sports News Tunisia' },
        { link: 'https://ls.sir.sportradar.com/novusoft/fr', target: '_blank', title: 'Live Scroes' }
    ],
    [
        { link: '/contact-us/responsive-gameing', title: 'Responsible Gaming' },
        { link: '/contact-us/privacy-policy', title: 'Privacy Policy' },
        { link: '/contact-us/terms', title: 'Terms and Conditions' },
        { link: '/contact-us/contacts', title: 'Contacts' }
    ],
    [
        { link: '/contact-us/contacts', title: 'Contact Us' },
        { link: '#', title: 'E-mail: support@gamblix.dev' }
        // { link: '#', title: 'Live Chat' },
        // { link: '#', title: 'affiliate@782win.email' }
    ]
];

const Footer = () => {
    const isMdUp = useResponsive('up', 'md');

    const settings = useSettingsContext();

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const openLicense = () => {
        console.log(1234);
        setOpen(true);
    };

    const carousel = useCarousel({
        autoplay: true,
        slidesToShow: 8
    });

    return (
        <AppBar
            component="footer"
            position="static"
            sx={{
                boxShadow: 'none',
                backgroundImage: 'none',
                bgcolor: 'background.default'
            }}
        >
            <Stack
                sx={{
                    py: 4,
                    bgcolor: 'background.paper'
                }}
            >
                <Container maxWidth={settings.themeStretch ? false : 'xl'}>
                    <Stack
                        sx={{
                            display: 'grid',
                            gridGap: 15,
                            gap: 2,
                            gridTemplateColumns: {
                                xs: 'repeat(2, 1fr)',
                                md: 'auto auto auto auto 320px'
                            }
                        }}
                        direction={{ xs: 'column', sm: 'row' }}
                    >
                        {FooterLinks.map((item: any, index: number) => (
                            <Stack key={index}>
                                <Typography
                                    variant={isMdUp ? 'h6' : 'body2'}
                                    color="primary"
                                    fontWeight="bold"
                                    sx={{ textTransform: 'uppercase' }}
                                >
                                    {item[0].title}
                                </Typography>
                                <List>
                                    {item.map((subItem: any, subIndex: number) => {
                                        if (subIndex === 0) {
                                            return null;
                                        }
                                        return (
                                            <ListItem
                                                key={subIndex}
                                                component={Link}
                                                href={subItem.link}
                                                disablePadding
                                                disableGutters
                                                target={subItem?.target}
                                                sx={{
                                                    py: 0.25,
                                                    '& span': {
                                                        transition: '.25s'
                                                    },
                                                    '&:hover': {
                                                        '& span': {
                                                            color: 'text.primary'
                                                        }
                                                    }
                                                }}
                                            >
                                                <ListItemText
                                                    primary={subItem.title}
                                                    primaryTypographyProps={{
                                                        color: 'textSecondary',
                                                        variant: isMdUp ? 'body2' : 'caption'
                                                    }}
                                                />
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            </Stack>
                        ))}
                        <Stack sx={{ gridColumn: isMdUp ? '320px' : 'span 2' }}>
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={2}
                                sx={{
                                    pb: 3
                                }}
                            >
                                <Box
                                    component="i"
                                    sx={{
                                        width: (theme) => theme.spacing(4.5),
                                        height: (theme) => theme.spacing(4.5),
                                        borderRadius: 50,
                                        textAlign: 'center',
                                        fontSize: 13,
                                        lineHeight: '32px',
                                        border: '2px solid #fff',
                                        display: 'flex',
                                        fontWeight: 'bold',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontStyle: 'normal',
                                        color: '#fff'
                                    }}
                                >
                                    18+
                                </Box>
                                <Link
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer'
                                    }}
                                    onClick={openLicense}
                                >
                                    <Box
                                        component="img"
                                        alt="gc-logo"
                                        sx={{ height: (theme) => theme.spacing(5) }}
                                        src={`${ASSETS_API}/footer/gc-logo.png`}
                                    />
                                </Link>
                            </Stack>
                            <Typography variant={isMdUp ? 'body2' : 'caption'} color="textSecondary">
                                We encourage you to play responsibly and consciously. Gaming should be a source of
                                entertainment and pleasure, not stress or problems. Set time and budget limits, and
                                always adhere to them. Please note that the maximum win is limited to 100,000 TND. For
                                more information about our responsible gaming policy and terms of use, please refer to
                                our Terms and Conditions.
                            </Typography>
                        </Stack>
                    </Stack>
                </Container>
            </Stack>
            <Stack
                sx={{
                    py: 4,
                    bgcolor: 'background.default'
                }}
            >
                <Container maxWidth={settings.themeStretch ? false : 'xl'}>
                    <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                        {_carousels.map((item, index: number) => (
                            <CarouselItem key={item} item={item} />
                        ))}
                    </Carousel>
                </Container>
            </Stack>
            <Stack
                sx={{
                    py: 6,
                    bgcolor: 'background.paper'
                }}
            >
                <Container maxWidth={settings.themeStretch ? false : 'xl'}>
                    <Stack spacing={3}>
                        <Typography variant={isMdUp ? 'body2' : 'caption'} color="textSecondary">
                            AreaDev Casino website is owned and operated by Gamblix N.V., a company incorporated under
                            the laws of Curacao with company registration number 154209 and having its registered
                            address at Scharlooweg 39, Willemstad, Curacao, licensed by Antillephone N.V., E-Gaming
                            license No. 10945/JAB, authorized by the Government of Curacao.
                        </Typography>
                        <Typography variant={isMdUp ? 'body2' : 'caption'}>GAMBLIX® 2015-2024</Typography>
                    </Stack>
                </Container>
            </Stack>
            <Dialog
                fullWidth
                maxWidth="md"
                open={open}
                onClose={handleClose}
                sx={{ '& .MuiPaper-root': { margin: 0, width: '100%' } }}
            >
                <DialogContent sx={{ p: 0 }}>
                    <CloseIcon
                        sx={{
                            position: 'absolute',
                            right: 5,
                            zIndex: 1,
                            fontSize: 32,
                            color: '#9d9d9d',
                            cursor: 'pointer'
                        }}
                        onClick={handleClose}
                    />
                    <Image alt="License" src={`${ASSETS_API}/footer/license.png`} />
                </DialogContent>
            </Dialog>
        </AppBar>
    );
};

export default Footer;

// ----------------------------------------------------------------------

function CarouselItem({ item }: { item: string }) {
    return (
        <Stack sx={{ maxHeight: 500, mr: 1, alignItems: 'center' }}>
            <Image
                alt={item}
                src={item}
                sx={{
                    '& img': {
                        maxHeight: 28
                    }
                }}
            />
        </Stack>
    );
}
