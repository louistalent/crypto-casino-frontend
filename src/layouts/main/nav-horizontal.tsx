import { memo } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
// components
import Logo from 'src/components/logo';
import { NavSectionHorizontal } from 'src/components/nav-section';
import { useSettingsContext } from 'src/components/settings';
import { AuthInput, HeaderShadow } from '../_common';
//
import { useNavData } from './config-navigation';

// ----------------------------------------------------------------------

function NavHorizontal() {
    const theme = useTheme();

    const settings = useSettingsContext();

    const navData = useNavData();

    return (
        <AppBar
            component="nav"
            position="sticky"
            sx={{
                bgcolor: theme.palette.background.default
            }}
        >
            <Container maxWidth={settings.themeStretch ? false : 'xl'}>
                <Toolbar
                    sx={{
                        px: '0px !important',
                        '& span': {
                            fontSize: '12px !important'
                        }
                    }}
                >
                    {/* <Logo sx={{ mr: 2.5 }} /> */}
                    <Typography variant='h4'>Crypto Casino</Typography>

                    <NavSectionHorizontal data={navData} />
                </Toolbar>
            </Container>
            <HeaderShadow />
        </AppBar>
    );
}

export default memo(NavHorizontal);
