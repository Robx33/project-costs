import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

// eslint-disable-next-line react/prop-types
function LinkButton({to, text}) {
    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default LinkButton