// @mui
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';

// auth
import { useAuthContext } from 'src/auth/hooks';
// untils
import { fcustomCurrency } from 'src/utils/format-number';

const Balance = () => {
    const { user } = useAuthContext();

    return (
        <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            sx={{ bgcolor: 'background.paper', height: 36, px: 0.5, borderRadius: 1, mr: 1 }}
        >
            <Iconify
                icon="solar:wallet-money-bold-duotone"
                width={18}
                sx={{
                    mx: 0.5,
                    color: 'text.secondary'
                }}
            />
            <Box sx={{ bgcolor: 'background.default', px: 0.75, py: 0.5, borderRadius: 1 }}>
                <Typography variant="caption">{fcustomCurrency(user?.balance) || 0.0}</Typography>
                <Typography component="span" variant="overline" color="textSecondary" sx={{ pl: 0.5 }}>
                    Eur
                </Typography>
            </Box>
            <Tooltip title="Deposit">
                <IconButton size="small" component={RouterLink} href={paths.user.root}>
                    <Iconify icon="solar:double-alt-arrow-up-bold-duotone" />
                </IconButton>
            </Tooltip>
        </Stack>
    );
};

export default Balance;
