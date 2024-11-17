// @mui
import Box from '@mui/material/Box';
// config
import { ASSETS_API } from 'src/config-global';

// components
import Image from 'src/components/image';
import Carousel, { CarouselDots, CarouselArrows, useCarousel } from 'src/components/carousel';

import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

const HomeCarousel = () => {
    const isMobile = useResponsive('down', 'md');

    const carousel = useCarousel({
        autoplay: true,
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

    const _carousels = [
        `${ASSETS_API}/home/carousel/${isMobile ? 'mobile' : 'desktop'}/1.jpg`,
        `${ASSETS_API}/home/carousel/${isMobile ? 'mobile' : 'desktop'}/2.jpg`,
        `${ASSETS_API}/home/carousel/${isMobile ? 'mobile' : 'desktop'}/3.jpg`,
        `${ASSETS_API}/home/carousel/${isMobile ? 'mobile' : 'desktop'}/4.jpg`,
        `${ASSETS_API}/home/carousel/${isMobile ? 'mobile' : 'desktop'}/5.jpg`
    ];

    return (
        <Box
            sx={{
                mt: {
                    xs: -3,
                    lg: -5
                },
                position: 'relative',
                '& .component-image.MuiBox-root': {
                    width: '100%'
                }
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

export default HomeCarousel;

// ----------------------------------------------------------------------

function CarouselItem({ item }: { item: string }) {
    return (
        <Box>
            <Image
                alt={item}
                src={item}
                sx={{
                    borderRadius: 0,
                    '& img': { minHeight: 200 }
                }}
            />
        </Box>
    );
}
