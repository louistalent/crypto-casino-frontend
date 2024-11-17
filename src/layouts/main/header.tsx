// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
// theme
import { bgBlur } from 'src/theme/css';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
import { useAuthContext } from 'src/auth/hooks';
// components
import SvgColor from 'src/components/svg-color';
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
//

import { HEADER, NAV } from '../config-layout';
import {
    Searchbar,
    AccountPopover,
    SettingsButton,
    LanguagePopover,
    AuthInput,
    // GiftPopover,
    NotificationsPopover
} from '../_common';
import Balance from '../_common/balance';
// import FreeSpin from '../_common/freespin';

// ----------------------------------------------------------------------

type Props = {
    onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
    const theme = useTheme();

    const { user } = useAuthContext();

    const settings = useSettingsContext();

    const isNavHorizontal = settings.themeLayout === 'horizontal';

    const isNavMini = settings.themeLayout === 'mini';

    const lgUp = useResponsive('up', 'lg');

    const offset = useOffSetTop(HEADER.H_DESKTOP);

    const offsetTop = offset && !isNavHorizontal;

    const renderContent = (
        <>
            {!lgUp && (
                <IconButton onClick={onOpenNav}>
                    <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
                </IconButton>
            )}

            {lgUp && (
                <Stack direction="row" mr={0.5}>
                    <IconButton>
                        <Iconify icon="logos:telegram" />
                    </IconButton>
                    <IconButton>
                        <Iconify icon="logos:discord-icon" />
                    </IconButton>
                    <IconButton>
                        <Iconify icon="logos:twitter" />
                    </IconButton>
                </Stack>
            )}

            <Searchbar />

            <Stack
                flexGrow={1}
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                spacing={{ xs: 0.5, sm: 1 }}
            >
                {user ? (
                    <>
                        {/* <FreeSpin /> */}

                        {lgUp && (
                            <>
                                <Balance />

                                <NotificationsPopover />
                            </>
                        )}
                        {/* <GiftPopover /> */}

                        <SettingsButton />

                        <LanguagePopover />

                        <AccountPopover />
                    </>
                ) : (
                    <>
                        <AuthInput />

                        <SettingsButton />

                        <LanguagePopover />
                    </>
                )}
            </Stack>
        </>
    );

    return (
        <AppBar
            position={isNavHorizontal ? 'static' : 'fixed'}
            sx={{
                height: HEADER.H_MOBILE,
                zIndex: theme.zIndex.appBar + 1,
                ...bgBlur({
                    color: theme.palette.background.default
                }),
                transition: theme.transitions.create(['height'], {
                    duration: theme.transitions.duration.shorter
                }),
                ...(lgUp && {
                    width: `calc(100% - ${NAV.W_VERTICAL + 1}px)`,
                    height: HEADER.H_DESKTOP,
                    ...(offsetTop && {
                        height: HEADER.H_DESKTOP_OFFSET
                    }),
                    ...(isNavHorizontal && {
                        width: 1,
                        bgcolor: 'background.default',
                        height: HEADER.H_DESKTOP_OFFSET,
                        borderTop: `dashed 1px ${theme.palette.divider}`
                    }),
                    ...(isNavMini && {
                        width: `calc(100% - ${NAV.W_MINI + 1}px)`
                    })
                }),
                ...(!lgUp && {
                    position: 'sticky',
                    top: 0
                })
            }}
        >
            <Container maxWidth={settings.themeStretch ? false : 'xl'}>
                <Toolbar
                    sx={{
                        height: 1,
                        px: '0px !important'
                    }}
                >
                    {renderContent}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
