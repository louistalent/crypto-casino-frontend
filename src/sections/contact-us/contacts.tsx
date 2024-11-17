// @mui
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CardContent from '@mui/material/CardContent';

// components
import Iconify from 'src/components/iconify';
import { useResponsive } from 'src/hooks/use-responsive';

const listItemStyle = {
    flexGrow: 'unset',
    minWidth: 'max-content',
    bgcolor: 'background.paper',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'background.neutral'
};

const Contacts = () => {
    const mdUp = useResponsive('up', 'md');

    return (
        <Stack spacing={3}>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
                CONTACTS
            </Typography>
            {mdUp ? (
                <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                    <ListItemButton sx={listItemStyle}>
                        <ListItemIcon>
                            <Iconify
                                icon="solar:mailbox-bold-duotone"
                                sx={{
                                    width: 24,
                                    height: 24,
                                    color: 'text.secondary'
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary="support@gamblix.dev"
                            secondary="Email Support"
                            primaryTypographyProps={{
                                variant: 'caption',
                                color: 'textSecondary'
                            }}
                            secondaryTypographyProps={{
                                variant: 'body2',
                                color: 'textPrimary'
                            }}
                        />
                    </ListItemButton>
                    <ListItemButton sx={listItemStyle}>
                        <ListItemIcon>
                            <Iconify
                                icon="uim:telegram-alt"
                                sx={{
                                    width: 24,
                                    height: 24,
                                    color: 'text.secondary'
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary="@gamblix"
                            secondary="Telegram Support"
                            primaryTypographyProps={{
                                variant: 'caption',
                                color: 'textSecondary'
                            }}
                            secondaryTypographyProps={{
                                variant: 'body2',
                                color: 'textPrimary'
                            }}
                        />
                    </ListItemButton>
                    <ListItemButton sx={listItemStyle}>
                        <ListItemIcon>
                            <Iconify
                                icon="simple-icons:skype"
                                sx={{
                                    width: 24,
                                    height: 24,
                                    color: 'text.secondary'
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary="Skype"
                            secondary="live:.cid.ad9893a9c207627c"
                            primaryTypographyProps={{
                                variant: 'caption',
                                color: 'textSecondary'
                            }}
                            secondaryTypographyProps={{
                                variant: 'body2',
                                color: 'textPrimary'
                            }}
                        />
                    </ListItemButton>
                </Stack>
            ) : (
                <Stack direction="column" alignItems="center" justifyContent="center" spacing={2}>
                    <Stack direction="row" spacing={1}>
                        <ListItemButton sx={listItemStyle}>
                            <ListItemIcon>
                                <Iconify
                                    icon="solar:mailbox-bold-duotone"
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        color: 'text.secondary'
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                sx={{ '& span': { fontSize: '10px' }, '& p': { fontSize: '10px' } }}
                                primary="support@gamblix.dev"
                                secondary="Email Support"
                                primaryTypographyProps={{
                                    variant: 'caption',
                                    color: 'textSecondary'
                                }}
                                secondaryTypographyProps={{
                                    variant: 'body2',
                                    color: 'textPrimary'
                                }}
                            />
                        </ListItemButton>
                        <ListItemButton sx={listItemStyle}>
                            <ListItemIcon>
                                <Iconify
                                    icon="uim:telegram-alt"
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        color: 'text.secondary'
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                sx={{ '& span': { fontSize: '10px' }, '& p': { fontSize: '10px' } }}
                                primary="@gamblix"
                                secondary="Telegram Support"
                                primaryTypographyProps={{
                                    variant: 'caption',
                                    color: 'textSecondary'
                                }}
                                secondaryTypographyProps={{
                                    variant: 'body2',
                                    color: 'textPrimary'
                                }}
                            />
                        </ListItemButton>
                    </Stack>
                    <ListItemButton sx={listItemStyle}>
                        <ListItemIcon>
                            <Iconify
                                icon="simple-icons:skype"
                                sx={{
                                    width: 24,
                                    height: 24,
                                    color: 'text.secondary'
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            sx={{ '& span': { fontSize: '10px' }, '& p': { fontSize: '10px' } }}
                            primary="Skype"
                            secondary="live:.cid.ad9893a9c207627c"
                            primaryTypographyProps={{
                                variant: 'caption',
                                color: 'textSecondary'
                            }}
                            secondaryTypographyProps={{
                                variant: 'body2',
                                color: 'textPrimary'
                            }}
                        />
                    </ListItemButton>
                </Stack>
            )}
            <Stack mt={4}>
                <Card
                    sx={{
                        pt: 2,
                        pb: 4,
                        borderRadius: 0,
                        borderTopWidth: 5,
                        borderTopStyle: 'solid',
                        borderTopColor: 'primary.main',
                        boxShadow: 'none',
                        background: 'linear-gradient(0deg, #282F48, #282F48),linear-gradient(0deg, #058DEE, #058DEE)'
                    }}
                >
                    <CardContent component={Stack} alignItems="center" spacing={3}>
                        <Typography variant="h6">
                            Do you have questions? Trust our FAQs or alternatively contact us.
                        </Typography>
                        <Stack alignItems="flex-start">
                            <Typography textAlign="center" fontWeight={100} color="textSecondary">
                                Check out the FAQ section first with answers to the most frequently asked questions
                                about all our products.
                            </Typography>
                            <Typography textAlign="center" fontWeight={100} color="textSecondary">
                                We have collected the most relevant and most popular questions in one place, so that all
                                players.
                            </Typography>
                            <Typography textAlign="center" fontWeight={100} color="textSecondary">
                                can find all the answers to their questions.
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
            <Stack mt={1}>
                <Card
                    sx={{
                        pt: 2,
                        pb: 4,
                        borderRadius: 0,
                        borderTopWidth: 5,
                        borderTopStyle: 'solid',
                        borderTopColor: 'primary.main',
                        boxShadow: 'none',
                        background: 'linear-gradient(0deg, #282F48, #282F48),linear-gradient(0deg, #058DEE, #058DEE)'
                    }}
                >
                    <CardContent component={Stack} alignItems="center" spacing={3}>
                        <Typography variant="h6">D{`idn't find what you were looking for?`}</Typography>
                        <Stack alignItems="flex-start">
                            <Typography textAlign="center" fontWeight={100} color="textSecondary">
                                We regret that we were unable to resolve your issue through our FAQ.
                            </Typography>
                            <Typography textAlign="center" fontWeight={100} color="textSecondary">
                                {`If you didn't find what you were looking for in the FAQ (Frequently Asked Questions) `}
                            </Typography>
                            <Typography textAlign="center" fontWeight={100} color="textSecondary">
                                you can contact us using the methods found in the buttons on this page.
                            </Typography>
                            <Typography textAlign="center" fontWeight={100} color="textSecondary">
                                Our team of experts will be able to resolve any type of doubt.
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </Stack>
    );
};

export default Contacts;
