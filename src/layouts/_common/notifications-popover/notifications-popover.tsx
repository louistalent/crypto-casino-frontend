import { m } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
// @mui
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';
// routes
import { useRouter } from 'src/routes/hooks';
// _mock
import { _notifications } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { varHover } from 'src/components/animate';
import { paths } from 'src/routes/paths';

// apis
import { getMessage, isReadMessage } from 'src/api/game';
//
import NotificationItem from './notification-item';

// ----------------------------------------------------------------------

export default function NotificationsPopover() {
    const drawer = useBoolean();

    const router = useRouter();

    const smUp = useResponsive('up', 'sm');

    const [notifications, setNotifications] = useState(_notifications);

    const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;

    const handleMarkAllAsRead = async () => {
        await isReadMessage();
        setNotifications(
            notifications.map((notification) => ({
                ...notification,
                isUnRead: false
            }))
        );
    };

    const init = useCallback(async () => {
        const result = await getMessage();
        setNotifications(result.slice(0, 5));
    }, []);

    useEffect(() => {
        init();
    }, [init]);

    const renderHead = (
        <Stack direction="row" alignItems="center" sx={{ py: 2, pl: 2.5, pr: 1, minHeight: 68 }}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Notifications
            </Typography>

            {!!totalUnRead && (
                <Tooltip title="Mark all as read">
                    <IconButton color="primary" onClick={handleMarkAllAsRead}>
                        <Iconify icon="eva:done-all-fill" />
                    </IconButton>
                </Tooltip>
            )}

            {!smUp && (
                <IconButton onClick={drawer.onFalse}>
                    <Iconify icon="mingcute:close-line" />
                </IconButton>
            )}
        </Stack>
    );

    const renderList = (
        <Scrollbar>
            <List disablePadding>
                {notifications.map((notification: any) => (
                    <NotificationItem key={notification._id} notification={notification} />
                ))}
            </List>
        </Scrollbar>
    );

    return (
        <>
            <IconButton
                component={m.button}
                whileTap="tap"
                whileHover="hover"
                variants={varHover(1.05)}
                color={drawer.value ? 'primary' : 'default'}
                onClick={drawer.onTrue}
            >
                <Badge badgeContent={totalUnRead} color="error">
                    <Iconify icon="solar:bell-bing-bold-duotone" width={24} />
                </Badge>
            </IconButton>

            <Drawer
                open={drawer.value}
                onClose={drawer.onFalse}
                anchor="right"
                slotProps={{
                    backdrop: { invisible: true }
                }}
                PaperProps={{
                    sx: { width: 1, maxWidth: 420 }
                }}
            >
                {renderHead}

                <Divider />

                {/* <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pl: 2.5, pr: 1 }}> */}
                {/* {renderTabs} */}
                {/* <IconButton onClick={handleMarkAllAsRead}>
                        <Iconify icon="solar:settings-bold-duotone" />
                    </IconButton> */}
                {/* </Stack> */}

                <Divider />

                {renderList}

                <Box sx={{ p: 1 }}>
                    <Button
                        fullWidth
                        size="large"
                        onClick={() => {
                            router.push(paths.user.notification);
                        }}
                    >
                        View All
                    </Button>
                </Box>
            </Drawer>
        </>
    );
}
