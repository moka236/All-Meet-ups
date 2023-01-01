import { Link } from 'react-router-dom';
import classes from './mainNavigation.module.css';
function mainNavigation () {
return <header className={classes.header}>
    <div className={classes.logo}>MUP</div>
    <nav>
        <ul>
            <li>
                <link to='/'>AllMEETUP</link>

            </li>
            <li>
                <link to='/Favoirates'>Favoirate</link>

            </li>
            <li>
                <link to='/Newmeetups'>Newmeetups</link>

            </li>
        </ul>
    </nav>
</header>
}
export default mainNavigation;