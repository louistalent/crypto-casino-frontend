import { useState } from 'react';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
// icons
import HomeIcon from '@mui/icons-material/Home';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
// config
import { ASSETS_API } from 'src/config-global';

// components
import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';
import Carousel, { CarouselDots, CarouselArrows, useCarousel } from 'src/components/carousel';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'src/components/snackbar';

// apis
import { opengame, multigameOpen, twogamePlay, pragmaticPlay } from 'src/api/game';

// casino game provider game list
import { useGameContext } from '../../casino/context';

const img1 = `${ASSETS_API}/live-casino/provider-each/pragmatic/1.png`;
const img2 = `${ASSETS_API}/live-casino/provider-each/pragmatic/2.png`;
const img3 = `${ASSETS_API}/live-casino/provider-each/pragmatic/3.png`;
const img4 = `${ASSETS_API}/live-casino/provider-each/pragmatic/4.png`;
const img5 = `${ASSETS_API}/live-casino/provider-each/pragmatic/5.png`;
const img6 = `${ASSETS_API}/live-casino/provider-each/pragmatic/6.png`;
const img7 = `${ASSETS_API}/live-casino/provider-each/pragmatic/7.png`;
const img8 = `${ASSETS_API}/live-casino/provider-each/pragmatic/8.png`;
const big_img1 = `${ASSETS_API}/live-casino/provider-each/pragmatic/big_1.png`;
const big_img2 = `${ASSETS_API}/live-casino/provider-each/pragmatic/big_2.png`;

const HomeGallery = () => {
    const mdUp = useResponsive('up', 'md');
    const { enqueueSnackbar } = useSnackbar();

    const { providerGame, providerGameList, gameURLset } = useGameContext();

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [openGameURL, setOpenGameURL] = useState('');

    const carousel = useCarousel({
        autoplay: true,
        slidesToShow: 2,
        ...CarouselDots({
            rounded: true,
            sx: {
                mt: {
                    xs: 1,
                    md: 3
                }
            }
        })
    });

    const playgame = async (gameId: string, title: string, sevice: string) => {
        try {
            console.log(sevice, 'sevice');
            if (sevice === 'multigames') {
                const result = await multigameOpen(gameId, title);
                // navigate(`/live-casino/${title}/${gameId}`);
                if (result.data === undefined) {
                    setOpenGameURL(result);
                } else {
                    setOpenGameURL(result.data);
                }
                setOpen(true);
                gameURLset(result.data);
            } else if (title === 'jetx') {
                console.log('two');
                const result = await twogamePlay(gameId, title);
                // navigate(`/live-casino/${title}/${gameId}`);
                if (result.data === undefined) {
                    setOpenGameURL(result);
                } else {
                    setOpenGameURL(result.data);
                }
                setOpen(true);
                gameURLset(result.data);
            } else if (sevice === 'riseup-pragmatic') {
                const result = await pragmaticPlay(gameId, title);
                gameURLset(result.url);
                setOpenGameURL(result.url);
                setOpen(true);
            } else {
                const result = await opengame(gameId, title);
                // navigate(`/live-casino/${title}/${gameId}`);
                if (result.data === undefined) {
                    setOpenGameURL(result);
                } else {
                    setOpenGameURL(result.data);
                }
                setOpen(true);
                gameURLset(result.data);
            }
        } catch (error) {
            enqueueSnackbar(typeof error === 'string' ? error : error.message, { variant: 'error' });
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const fullscreen = () => {
        const elem = document.getElementById('mygame');
        if (elem?.requestFullscreen) {
            elem?.requestFullscreen();
        }
    };

    const openGamePlay = async () => {
        const rows: any = providerGameList.filter((obj: any) => obj.provider.name === 'pragmatic-play-live');
        // playgame(rows[0].gameid, 'pragmatic-play-live', rows[0].sevice);
        playgame('11:1010', 'pragmatic-play-live', rows[0].sevice);
    };

    const onchangeprovider = () => {
        providerGame('pragmatic-play-live');
        navigate(`/live-casino/Pragmatic-play-live`);
    };

    if (!mdUp) {
        return (
            <Stack
                spacing={2}
                sx={{
                    p: (theme) => theme.spacing(2.5, 1, 2.5, 1)
                }}
            >
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography component="span" ml={1} color="primary">
                        PRAGMATIC LIVE
                    </Typography>
                    <Button onClick={onchangeprovider}>See All</Button>
                </Stack>
                <Box position="relative">
                    <CarouselArrows filled shape="rounded" onNext={carousel.onNext} onPrev={carousel.onPrev}>
                        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                            <Box>
                                <Image
                                    onClick={openGamePlay}
                                    alt={img1}
                                    src={img1}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1,
                                        cursor: 'pointer'
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    onClick={openGamePlay}
                                    alt={img2}
                                    src={img2}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    onClick={openGamePlay}
                                    alt={img3}
                                    src={img3}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    onClick={openGamePlay}
                                    alt={img4}
                                    src={img4}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    onClick={openGamePlay}
                                    alt={img5}
                                    src={img5}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    onClick={openGamePlay}
                                    alt={img6}
                                    src={img6}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    onClick={openGamePlay}
                                    alt={img7}
                                    src={img7}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    onClick={openGamePlay}
                                    alt={img8}
                                    src={img8}
                                    sx={{
                                        borderRadius: 1,
                                        mr: 1
                                    }}
                                />
                            </Box>
                        </Carousel>
                    </CarouselArrows>
                </Box>

                <Dialog fullScreen open={open} onClose={handleClose}>
                    <Box sx={{ position: 'fixed', pl: 3, pt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Link
                            href="#"
                            underline="hover"
                            onClick={handleClose}
                            width={25}
                            height={25}
                            sx={{
                                background: 'white',
                                borderRadius: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <HomeIcon />
                        </Link>
                    </Box>
                    <Stack
                        sx={{
                            borderRadius: 1,
                            bgcolor: 'background.default',
                            height: 'calc(100vh)'
                        }}
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="space-between"
                    >
                        <iframe id="mygame" style={{ width: '100%' }} src={openGameURL} title={openGameURL} />
                    </Stack>
                </Dialog>
            </Stack>
        );
    }

    return (
        <Stack
            sx={{
                p: (theme) => theme.spacing(1)
            }}
        >
            <Box
                sx={{
                    bgcolor: 'background.default',
                    borderRadius: 2,
                    alignSelf: 'flex-start',
                    px: 3,
                    py: 1,
                    boxShadow: 'inset 0px 0px 20px 10px rgba(0, 0, 0, 0.3)',
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0
                }}
            >
                <Typography variant="h3">PRAGMATIC LIVE</Typography>
            </Box>
            <Stack
                spacing={1.5}
                direction="row"
                sx={{
                    borderRadius: 3,
                    borderTopLeftRadius: 0,
                    p: 3,
                    bgcolor: 'background.default',
                    boxShadow: 'inset 0px 0px 20px 10px rgba(0, 0, 0, 0.3)'
                }}
            >
                <Stack spacing={1.5}>
                    <Image
                        alt="game1"
                        src={img1}
                        sx={{ borderRadius: 2, width: 1, height: 255, cursor: 'pointer' }}
                        onClick={openGamePlay}
                    />
                    <Image
                        alt="game1"
                        src={img2}
                        sx={{ borderRadius: 2, width: 1, height: 255, cursor: 'pointer' }}
                        onClick={openGamePlay}
                    />
                </Stack>
                <Stack spacing={1.5}>
                    <Image
                        alt="game1"
                        src={img3}
                        sx={{ borderRadius: 2, width: 1, height: 255, cursor: 'pointer' }}
                        onClick={openGamePlay}
                    />
                    <Image
                        alt="game1"
                        src={img4}
                        sx={{ borderRadius: 2, width: 1, height: 255, cursor: 'pointer' }}
                        onClick={openGamePlay}
                    />
                </Stack>
                <Stack flexGrow={1}>
                    <Image
                        alt="game1"
                        // src={`${ASSETS_API}/home/gallery/desktop/big_1.jpg`}
                        src={big_img1}
                        sx={{ borderRadius: 2, height: 1, cursor: 'pointer' }}
                        onClick={openGamePlay}
                    />
                </Stack>
                <Stack spacing={1.5}>
                    <Image
                        alt="game1"
                        // src={`${ASSETS_API}/home/gallery/desktop/5.jpg`}
                        src={img5}
                        sx={{ borderRadius: 2, width: 1, height: 255, cursor: 'pointer' }}
                        onClick={openGamePlay}
                    />
                    <Image
                        alt="game1"
                        // src={`${ASSETS_API}/home/gallery/desktop/6.jpg`}
                        src={img6}
                        sx={{ borderRadius: 2, width: 1, height: 255, cursor: 'pointer' }}
                        onClick={openGamePlay}
                    />
                </Stack>
                <Stack spacing={1.5}>
                    <Image
                        alt="game1"
                        // src={`${ASSETS_API}/home/gallery/desktop/7.jpg`}
                        src={img7}
                        sx={{ borderRadius: 2, width: 1, height: 255, cursor: 'pointer' }}
                        onClick={openGamePlay}
                    />
                    <Image
                        alt="game1"
                        // src={`${ASSETS_API}/home/gallery/desktop/8.jpg`}
                        src={img8}
                        sx={{ borderRadius: 2, width: 1, height: 255, cursor: 'pointer' }}
                        onClick={openGamePlay}
                    />
                </Stack>
                <Stack flexGrow={1}>
                    <Image
                        alt="game1"
                        // src={`${ASSETS_API}/home/gallery/desktop/big_2.jpg`}
                        src={big_img2}
                        sx={{ borderRadius: 2, height: 1, cursor: 'pointer' }}
                        onClick={openGamePlay}
                    />
                </Stack>
            </Stack>

            {mdUp ? (
                <Dialog fullWidth open={open} onClose={handleClose} maxWidth="lg">
                    <Box
                        sx={{
                            position: 'fixed',
                            pl: 3,
                            pt: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            gap: 2
                        }}
                    >
                        <Link
                            href="#"
                            underline="hover"
                            onClick={handleClose}
                            width={25}
                            height={25}
                            sx={{
                                background: 'white',
                                borderRadius: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <HomeIcon />
                        </Link>
                        <Link
                            href="#"
                            underline="hover"
                            onClick={fullscreen}
                            width={25}
                            height={25}
                            sx={{
                                background: 'white',
                                borderRadius: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 3
                            }}
                        >
                            <OpenInFullIcon />
                        </Link>
                    </Box>
                    <Stack
                        sx={{
                            borderRadius: 1,
                            bgcolor: 'background.default',
                            height: 'calc(100vh - 200px)'
                        }}
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="space-between"
                    >
                        <iframe id="mygame" style={{ width: '100%' }} src={openGameURL} title="open game 3" />
                    </Stack>
                </Dialog>
            ) : (
                <Dialog fullScreen open={open} onClose={handleClose}>
                    <Box sx={{ position: 'fixed', pl: 3, pt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Link
                            href="#"
                            underline="hover"
                            onClick={handleClose}
                            width={25}
                            height={25}
                            sx={{
                                background: 'white',
                                borderRadius: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <HomeIcon />
                        </Link>
                    </Box>
                    <Stack
                        sx={{
                            borderRadius: 1,
                            bgcolor: 'background.default',
                            height: 'calc(100vh)'
                        }}
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="space-between"
                    >
                        <iframe id="mygame" style={{ width: '100%' }} src={openGameURL} title={openGameURL} />
                    </Stack>
                </Dialog>
            )}
        </Stack>
    );
};

export default HomeGallery;
