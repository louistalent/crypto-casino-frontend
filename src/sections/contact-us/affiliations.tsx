import { useState } from 'react';

// @mui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { useResponsive } from 'src/hooks/use-responsive';

const Contacts = () => {
    const mdUp = useResponsive('up', 'md');

    const [phone, setPhone] = useState('');

    const handleChange = (newPhone: any) => {
        matchIsValidTel(newPhone);
        setPhone(newPhone);
    };

    const TextFieldStyle = {
        bgcolor: 'background.paper',
        '& fieldset': {
            borderRadius: 0
        }
    };

    return (
        <Stack spacing={3} alignItems={mdUp ? 'flex-start' : 'center'}>
            <Typography variant="h3">Affiliations</Typography>
            <Stack spacing={2}>
                <Typography color="textSecondary">Do you want to work with our iGaming services?</Typography>
                <Typography color="textSecondary">Fill out the form to be contacted.</Typography>
            </Stack>
            <Grid container xs={12} sm={12} spacing={5}>
                <Grid item xs={12} sm={6}>
                    <Stack direction="column" spacing={1}>
                        <Typography>Name</Typography>
                        <TextField id="outlined" sx={TextFieldStyle} />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack direction="column" spacing={1}>
                        <Typography>Surname</Typography>
                        <TextField id="outlined" sx={TextFieldStyle} />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack direction="column" spacing={1}>
                        <Typography>Email address</Typography>
                        <TextField id="outlined" sx={TextFieldStyle} />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack direction="column" spacing={1}>
                        <Typography>Telephone number</Typography>
                        <MuiTelInput
                            defaultCountry="IT"
                            forceCallingCode
                            value={phone}
                            onChange={handleChange}
                            sx={{
                                bgcolor: 'background.paper',
                                '& fieldset': {
                                    borderRadius: 0
                                }
                            }}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack direction="column" spacing={1}>
                        <Typography>Nation</Typography>
                        <TextField id="outlined" sx={TextFieldStyle} />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack direction="column" spacing={1}>
                        <Typography>ID Skype / Telegram</Typography>
                        <TextField id="outlined" sx={TextFieldStyle} />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Stack direction="column" spacing={1}>
                        <Typography>Your message</Typography>
                        <TextField multiline rows={10} id="outlined" sx={TextFieldStyle} />
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default Contacts;
