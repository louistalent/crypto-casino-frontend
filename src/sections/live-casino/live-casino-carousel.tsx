import { useEffect } from 'react';
// @mui
import Box from '@mui/material/Box';
// config
import { ASSETS_API } from 'src/config-global';

// components
import Image from 'src/components/image';
import Carousel, { CarouselDots, CarouselArrows, useCarousel } from 'src/components/carousel';
import { useResponsive } from 'src/hooks/use-responsive';

import { useGameContext } from '../casino/context';

// ----------------------------------------------------------------------

const LiveCasinoCarousel = () => {
    const isMobile = useResponsive('down', 'md');
    const { initGetGame } = useGameContext();
    const _carousels = [
        `${ASSETS_API}/live-casino/${isMobile ? 'mobile' : 'desktop'}/bg1.png`,
        `${ASSETS_API}/live-casino/${isMobile ? 'mobile' : 'desktop'}/bg2.png`,
        `${ASSETS_API}/live-casino/${isMobile ? 'mobile' : 'desktop'}/bg3.png`
    ];
    const carousel = useCarousel({
        autoplay: true,
        ...CarouselDots({
            rounded: true,
            sx: { mt: 1 }
        })
    });

    useEffect(() => {
        initGetGame('livecasino');
    }, [initGetGame]);

    return (
        <Box
            sx={{
                mt: {
                    xs: -3,
                    lg: -5
                },
                position: 'relative'
            }}
        >
            <CarouselArrows filled shape="rounded" onNext={carousel.onNext} onPrev={carousel.onPrev}>
                <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                    {_carousels.map((item, index: number) => (
                        <CarouselItem key={item} item={item} />
                    ))}
                </Carousel>
            </CarouselArrows>
        </Box>
    );
};

export default LiveCasinoCarousel;

// ----------------------------------------------------------------------

function CarouselItem({ item }: { item: string }) {
    return (
        <Box sx={{ maxHeight: 500 }}>
            <Image alt={item} src={item} sx={{ borderRadius: 0, '& img': { minHeight: 200 } }} />
        </Box>
    );
}
