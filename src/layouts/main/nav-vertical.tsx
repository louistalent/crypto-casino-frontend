import { useEffect, useState } from 'react';
// @mui
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';

// dialog
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';

// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// config
import { ASSETS_API } from 'src/config-global';
// components
import Logo from 'src/components/logo';
import Scrollbar from 'src/components/scrollbar';
import { usePathname } from 'src/routes/hooks';
import { NavSectionVertical } from 'src/components/nav-section';
import Image from 'src/components/image';
//
import { NAV } from '../config-layout';
import { useNavData } from './config-navigation';
import { NavToggleButton } from '../_common';

// ----------------------------------------------------------------------

type Props = {
    openNav: boolean;
    onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
    const pathname = usePathname();

    const lgUp = useResponsive('up', 'lg');

    const navData = useNavData();

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const openLicense = () => {
        console.log(1234);
        setOpen(true);
    };

    useEffect(() => {
        if (openNav) {
            onCloseNav();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const renderContent = (
        <Scrollbar
            sx={{
                height: 1,
                '& .simplebar-content': {
                    height: 1,
                    display: 'flex',
                    flexDirection: 'column'
                }
            }}
        >
            {/* <Logo sx={{ mt: 3, ml: 4, mb: 1 }} /> */}

            <Typography variant='h4'>Crypto Casino</Typography>

            <NavSectionVertical data={navData} />
            <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{
                    pb: 3,
                    mt: 1,
                    ml: 4,
                    mb: 1
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
                        alignItems: 'center'
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
            <Box sx={{ flexGrow: 1 }} />
        </Scrollbar>
    );

    return (
        <Box
            component="nav"
            sx={{
                flexShrink: { lg: 0 },
                width: { lg: NAV.W_VERTICAL }
            }}
        >
            <NavToggleButton />

            {lgUp ? (
                <Stack
                    sx={{
                        height: 1,
                        position: 'fixed',
                        width: NAV.W_VERTICAL,
                        borderRight: (theme) => `dashed 1px ${theme.palette.divider}`
                    }}
                >
                    {renderContent}
                </Stack>
            ) : (
                <Drawer
                    open={openNav}
                    onClose={onCloseNav}
                    PaperProps={{
                        sx: {
                            width: NAV.W_VERTICAL
                        }
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
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
        </Box>
    );
}
