import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useNavigate } from 'react-router';
// @mui
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import LoadingButton from '@mui/lab/LoadingButton';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';
// auth
import { useAuthContext } from 'src/auth/hooks';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { useSnackbar } from 'src/components/snackbar';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import InputIcon from '@mui/icons-material/Input';

const AuthInput = () => {
    const { login } = useAuthContext();

    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate();

    const password = useBoolean();

    const isMdUp = useResponsive('up', 'md');

    const LoginSchema = Yup.object().shape({
        email: Yup.string().required('Email and Username is required'),
        password: Yup.string().required('Password is required')
    });

    const defaultValues = {
        email: '',
        password: ''
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues
    });

    const {
        reset,
        handleSubmit,
        formState: { isSubmitting }
    } = methods;

    const onSubmit = handleSubmit(async (data) => {
        try {
            await login?.(data.email, data.password);
        } catch (error) {
            reset();
            enqueueSnackbar(typeof error === 'string' ? error : error.message, { variant: 'error' });
        }
    });

    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack direction="row" spacing={1} alignItems="center">
                {isMdUp ? (
                    <>
                        <RHFTextField
                            name="email"
                            size="small"
                            variant="outlined"
                            InputProps={{
                                placeholder: 'Username or Email',
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Iconify icon="solar:user-bold-duotone" />
                                    </InputAdornment>
                                )
                            }}
                            sx={{
                                maxWidth: 225,
                                bgcolor: 'background.paper',
                                borderRadius: 0.75,
                                '& fieldset': {
                                    display: 'none'
                                },
                                '& input': {
                                    py: 0.75
                                }
                            }}
                        />
                        <RHFTextField
                            name="password"
                            size="small"
                            type={password.value ? 'text' : 'password'}
                            variant="outlined"
                            InputProps={{
                                placeholder: 'Password',
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Iconify icon="solar:lock-password-bold-duotone" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={password.onToggle} edge="end">
                                            <Iconify
                                                icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                                            />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            sx={{
                                maxWidth: 225,
                                bgcolor: 'background.paper',
                                borderRadius: 0.75,
                                '& fieldset': {
                                    display: 'none'
                                },
                                '& input': {
                                    py: 0.75
                                }
                            }}
                        />
                        <LoadingButton
                            size="small"
                            type="submit"
                            color="primary"
                            variant="contained"
                            loading={isSubmitting}
                            sx={{
                                borderRadius: 0.75,
                                bgcolor: 'background.paper',
                            }}
                            startIcon={<InputIcon />}
                        >
                            Login
                        </LoadingButton>
                        <Button
                            onClick={() => navigate('auth/register')}
                            sx={{
                                bgcolor: 'background.paper',
                                borderRadius: 0.75
                            }}
                            size="small"
                            variant="contained"
                            color="secondary"
                            startIcon={<HowToRegIcon />}
                        >
                            Register
                        </Button>
                        {/* <Button
                            variant="contained"
                            size="small"
                            color="secondary"
                            sx={{ height: 1, px: 2.5, borderRadius: 0.75 }}
                            onClick={() => navigate('auth/register')}
                        >
                            Register
                        </Button> */}
                    </>
                ) : (
                    <Button
                        onClick={() => navigate('auth/login')}
                        sx={{ height: 1, px: 1.5, borderRadius: 0.75 }}
                        size="small"
                        variant="outlined"
                        startIcon={<Iconify icon="solar:login-2-bold-duotone" />}
                    >
                        Login
                    </Button>
                )}
            </Stack>
        </FormProvider>
    );
};

export default AuthInput;
