import { useState, useEffect } from 'react';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Badge, { BadgeProps } from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// apis
import { get_provider } from 'src/api/game';
// config
import { ASSETS_API } from 'src/config-global';

// components
import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';
import { useNavigate } from 'react-router';
import Carousel, { CarouselArrows, useCarousel } from 'src/components/carousel';

// casino game provider game list
import { useGameContext } from '../casino/context';

// ----------------------------------------------------------------------

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -5,
        top: -3,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px'
    }
}));

const search_icon = `${ASSETS_API}/live-casino/provider-each/providers/search_button.png`;

const CasinoProviders = () => {
    const mdUp = useResponsive('up', 'md');
    const navigate = useNavigate();

    const carousel = useCarousel({
        slidesToShow: window.innerWidth / 160,
        slidesToScroll: 7,
        dots: false,
        arrows: false,
        infinite: false
    });

    const { providerGame } = useGameContext();
    const [providers, setProvider] = useState([]);

    const onchangeprovider = (data: any) => {
        providerGame(data.oldname);
        navigate(`/live-casino/${data.name}`);
    };

    useEffect(() => {
        const res = get_provider({ name: 'livecasino' });
        res.then((result) => {
            const result_a = result.data.sort((a: any, b: any) => a.title.localeCompare(b.title));

            const resultarray = result_a.map((item: { title: string; gameCount: number }) => ({
                id: item.title.replace('_', '-'),
                oldname: item.title,
                logo: `${ASSETS_API}/live-casino/provider-each/providers/${item.title.toLowerCase()}.png`,
                name: item.title.charAt(0).toUpperCase() + item.title.slice(1),
                count: item.gameCount
            }));
            setProvider(resultarray);
        });
    }, []);

    return (
        <Card sx={{ mt: 1 }}>
            {!mdUp && (
                <CardHeader
                    title={
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="h5">Providers</Typography>
                        </Stack>
                    }
                    titleTypographyProps={{
                        color: 'textSecondary'
                    }}
                />
            )}

            {mdUp ? (
                <Stack direction="row" justifyContent="center">
                    {/* <Image
                        src={search_icon}
                        alt="search icon"
                        sx={{
                            p: 3,
                            '& img': {
                                borderRadius: 1
                            }
                        }}
                    /> */}
                    <Stack
                        sx={{
                            p: 2,
                            pb: 1.5
                        }}
                        direction="row"
                        gap={16}
                    >
                        {/* <CarouselArrows
                        sx={{
                            '& button': {
                                mt: 1
                            }
                        }}
                        filled
                        shape="rounded"
                    >
                        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}> */}
                        {providers.map((provider, index: number) => (
                            <ProviderItem key={index} item={provider} upMd={mdUp} selectprovider={onchangeprovider} />
                        ))}
                        {/* </Carousel>
                    </CarouselArrows> */}
                    </Stack>
                </Stack>
            ) : (
                <Stack
                    sx={{
                        p: 2,
                        pb: 1.5,
                        whiteSpace: 'nowrap'
                    }}
                >
                    <Stack
                        className="scroll-content"
                        id="myDiv"
                        direction="row"
                        flexWrap={mdUp ? 'wrap' : 'nowrap'}
                        spacing={1}
                        sx={{
                            overflowX: mdUp ? 'hidden' : 'auto',
                            width: '100%',
                            p: 1,
                            '::-webkit-scrollbar': {
                                height: mdUp ? '5px' : '3px'
                            },
                            '::-webkit-scrollbar-thumb': {
                                backgroundColor: '#078DEE',
                                borderRadius: 2
                            }
                        }}
                    >
                        {providers.map((provider, index: number) => (
                            <ProviderItem key={index} item={provider} upMd={mdUp} selectprovider={onchangeprovider} />
                        ))}
                    </Stack>
                </Stack>
            )}
        </Card>
    );
};

export default CasinoProviders;

// ----------------------------------------------------------------------

const ProviderItem = ({ item, selectprovider, upMd }: { item: any; selectprovider: any; upMd: any }) => (
    <Tooltip arrow title={item.name}>
        {upMd ? (
            <Box
                sx={{
                    bgcolor: 'background.default',
                    border: '1px solid ',
                    borderRadius: 1,
                    cursor: 'pointer',
                    mr: 1,
                    p: 1
                }}
                // onClick={() => selectprovider(item)}
            >
                {/* <StyledBadge badgeContent={item.count} color="info"> */}
                <Image
                    // onError={(event: any) => {
                    //     event.target.src = `${ASSETS_API}/casino/providers/error.png`;
                    // }}
                    src={item.logo}
                    alt={item.name}
                    sx={{
                        '& img': {
                            width: 120
                        }
                    }}
                />
                {/* </StyledBadge> */}
            </Box>
        ) : (
            <Box
                sx={{
                    bgcolor: 'background.default',
                    borderRadius: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    p: 1,
                    border: '1px solid'
                }}
                onClick={() => selectprovider(item)}
            >
                {item.name}
            </Box>
        )}
    </Tooltip>
);
