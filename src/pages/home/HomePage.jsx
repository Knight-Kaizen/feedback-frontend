import styles from './HomePage.module.css'
export default
function HomePage(){

    return(
        <>
            <div className={styles.header}>
                <span className={styles.text1}>Feedback</span>
                <span className={styles.text2}>Login</span>
                <span className={styles.text2}>Sign up</span>
            </div>
            <div className={styles.bodyUpper}>
                <div className={styles.upLeft}>
                    <img src='../../Images/image1.png' className={styles.image1}></img>
                </div>
                <div className={styles.upRight}>
                    <span className={styles.text3}>Add your products and give your valuable feedback</span>
                    <span className={styles.text4}>Easily give your feedback in a matter of minutes. Access your audience on all platforms. Observe result manually in real time</span>
                </div>
            </div>
            <div>Body-lower </div>
        </>
    )
}