import { useMemo, useEffect, useCallback, useState } from 'react';
// routes
import { paths } from 'src/routes/paths';
// components
import Label from 'src/components/label';
import SvgColor from 'src/components/svg-color';
// auth
import { useAuthContext } from 'src/auth/hooks';
// apis
import { getSelectCateogry } from 'src/api/game';

// ----------------------------------------------------------------------

const icon = (name: string) => (
    <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
    // OR
    // <Iconify icon="fluent:mail-24-filled" />
    // https://icon-sets.iconify.design/solar/
    // https://www.streamlinehq.com/icons
);

const ICONS = {
    sports: icon('ic_sports'),
    live_sports: icon('ic_live_sports'),
    casino: icon('ic_casino'),
    live_casino: icon('ic_live_casino'),
    virtual: icon('ic_virtual'),
    racing: icon('ic_racing'),
    e_sports: icon('ic_e_sports'),
    tournaments: icon('ic_tournaments'),
    mini_games: icon('ic_mini_games'),
    promotions: icon('ic_promotions'),
    contact_us: icon('ic_contact_us')
};

const itemArray = [
    {
        title: 'Sports + Live',
        path: '#',
        // path: paths.sports
        icon: ICONS.sports,
        id: 'sport'
    },
    {
        title: 'Casino',
        path: '#',
        // path: paths.casino
        icon: ICONS.casino
    },
    {
        title: 'Casino Vip',
        path: '#',
        // path: paths.vip_casino
        icon: ICONS.racing
    },
    {
        title: 'Live Casino',
        path: '#',
        // path: paths.live_casino
        icon: ICONS.live_casino
    },
    {
        title: 'Virtuals',
        path: '#',
        // path: paths.virtual
        icon: ICONS.virtual
    },
    {
        title: 'Aviator',
        path: '#',
        // path: paths.aviator
        icon: ICONS.tournaments
    },
    {
        title: 'Chicken',
        path: '#',
        // path: paths.chicken
        icon: ICONS.live_sports
    },
    {
        title: 'Racing',
        path: '#',
        // path: paths.racing
        icon: ICONS.racing
    }
    // { title: 'Mini Games', path: paths.mini_games, icon: ICONS.contact_us },
    // {
    //     title: 'E-Sports',
    //     path: paths.e_sports,
    //     icon: ICONS.e_sports
    // },
    // {
    //     title: 'TurboGames',
    //     path: paths.turbogame,
    //     icon: ICONS.mini_games,
    //     info: <Label color="error">HOT</Label>
    // },
    // {
    //     title: 'Italian Lottery',
    //     path: paths.italianlottery,
    //     icon: ICONS.promotions,
    //     info: <Label color="error">HOT</Label>
    // }
    // {
    //     title: 'Contact',
    //     path: paths.contact_us,
    //     icon: ICONS.contact_us
    // }
];

// ----------------------------------------------------------------------

export function useNavData() {
    const { user } = useAuthContext();
    const [initArray, setInitArray] = useState<any>([]);
    const init = useCallback(async () => {
        if (user) {
            const res = await getSelectCateogry();
            if (res.length !== 0) {
                const resItem = itemArray.filter(
                    (item, index) =>
                        (index === 0 && res.sport && item) ||
                        (index === 1 && res.casino && item) ||
                        (index === 2 && res.casinovip && item) ||
                        (index === 3 && res.livecasino && item) ||
                        (index === 4 && res.virtual && item) ||
                        (index === 5 && res.aviator && item) ||
                        (index === 6 && res.chicken && item) ||
                        (index === 7 && res.racing && item) || // Add your condition for index 7 here
                        (index === 8 && res.turbogames && item) ||
                        (index === 9 && res.italianlottery && item)
                );
                setInitArray(resItem);
            } else {
                setInitArray(itemArray);
            }
        } else {
            setInitArray(itemArray);
        }
    }, [user, setInitArray]);

    useEffect(() => {
        init();
    }, [init]);

    const data = useMemo(
        () => [
            // OVERVIEW
            // ----------------------------------------------------------------------
            {
                subheader: '',
                items: initArray
            }
        ],
        [initArray]
    );

    return data;
}
