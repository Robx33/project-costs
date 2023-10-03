import styles from './SubmitButton.module.css'

// eslint-disable-next-line react/prop-types
function SubmitButton({ text }) {
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitButton