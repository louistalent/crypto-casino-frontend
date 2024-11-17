import { useCallback, useState } from 'react';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// config
import { ASSETS_API } from 'src/config-global';

// components
import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';

// apis
import { getJackpot } from 'src/api/game';

// utils
import { fcustomCurrency } from 'src/utils/format-number';

const CasinoCategories = () => {
    const mdUp = useResponsive('up', 'md');

    const [jackpot, setJackpot] = useState<any>({
        silver: 0,
        gold: 0,
        platinum: 0
    });
    const init = useCallback(async () => {
        const result = await getJackpot();
        if (result) {
            setJackpot({ silver: result.silverValue, gold: result.goldValue, platinum: result.platinumValue });
        }
        console.log(123);
    }, []);

    setTimeout(() => {
        init();
    }, 3000);

    // useEffect(() => {
    //     init();
    // }, [init]);

    return (
        <>
            {mdUp ? (
                <Stack
                    direction={{ xs: 'column', lg: 'row' }}
                    alignItems="center"
                    justifyContent="center"
                    spacing={{ xs: 2, lg: 16 }}
                    flexGrow={1}
                    sx={{ p: 1, mt: 2 }}
                >
                    <Box>
                        <Typography
                            variant="h3"
                            sx={{ mb: -8, ml: 10, position: 'relative', zIndex: 1001, fontStyle: 'italic' }}
                        >
                            {fcustomCurrency(jackpot.silver)}
                        </Typography>
                        <Image
                            alt="silver"
                            src={`${ASSETS_API}/jackpot/silver.png`}
                            sx={{ borderRadius: 0, width: 1, zIndex: 1000, '& img': { width: 250 } }}
                        />
                    </Box>
                    <Box>
                        <Typography
                            variant="h3"
                            sx={{ mb: -8, ml: 10, position: 'relative', zIndex: 1001, fontStyle: 'italic' }}
                        >
                            {fcustomCurrency(jackpot.gold)}
                        </Typography>
                        <Image
                            alt="gold"
                            src={`${ASSETS_API}/jackpot/gold.png`}
                            sx={{ borderRadius: 0, width: 1, zIndex: 1000, '& img': { width: 250 } }}
                        />
                    </Box>
                    <Box>
                        <Typography
                            variant="h3"
                            sx={{ mb: -8, ml: 10, position: 'relative', zIndex: 1001, fontStyle: 'italic' }}
                        >
                            {fcustomCurrency(jackpot.platinum)}
                        </Typography>
                        <Image
                            alt="platinum"
                            src={`${ASSETS_API}/jackpot/platinum.png`}
                            sx={{ borderRadius: 0, width: 1, zIndex: 1000, '& img': { width: 250 } }}
                        />
                    </Box>
                </Stack>
            ) : (
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    spacing={{ xs: 2, lg: 16 }}
                    flexGrow={1}
                    sx={{ p: 1, mt: 2 }}
                >
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{ mb: '-30px', ml: '36px', position: 'relative', zIndex: 1001, color: 'black' }}
                        >
                            {fcustomCurrency(jackpot.silver)}
                        </Typography>
                        <Image
                            alt="silver"
                            src={`${ASSETS_API}/jackpot/mobile/silver.png`}
                            sx={{ borderRadius: 0, zIndex: 1000 }}
                        />
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ mb: '-30px', ml: '36px', position: 'relative', zIndex: 1001 }}>
                            {fcustomCurrency(jackpot.gold)}
                        </Typography>
                        <Image
                            alt="gold"
                            src={`${ASSETS_API}/jackpot/mobile/gold.png`}
                            sx={{ borderRadius: 0, zIndex: 1000 }}
                        />
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ mb: '-30px', ml: '36px', position: 'relative', zIndex: 1001 }}>
                            {fcustomCurrency(jackpot.platinum)}
                        </Typography>
                        <Image
                            alt="platinum"
                            src={`${ASSETS_API}/jackpot/mobile/platinum.png`}
                            sx={{ borderRadius: 0, zIndex: 1000 }}
                        />
                    </Box>
                </Stack>
            )}
        </>
    );
};

export default CasinoCategories;
