import { useContext } from 'react';
import { SportsContext } from 'src/sections/casino/sportsbook/sports-context';

import Sports from './sports';

export default function SportsBook() {
    const { active } = useContext(SportsContext);

    return <Sports active={active} />;
}
