import styles from './ProductBox.module.css'
export default
function ProductBox(){

    return(
        <div className={styles.main}>
            <img src='../../Images/sample.png' className={styles.image1}></img>
            <div className={styles.box2}>
                <span className={styles.text1}>Cred Club</span>
                <span className={styles.text2}> It is good for credit card payments,it is fast,secure</span>
                <div className={styles.box21}>
                    <span>Chip 1</span>
                    <span>Chip 2</span>
                    <span>Chip 3</span>
                    <img src="../../Images/comment2.png" alt="" className={styles.image3}/>
                    <span className={styles.text4}>Comment</span>
                </div>
            </div>
            <div className={styles.box3}>
                <div className={styles.box31}>
                    <img src='../../Images/likes.png' className={styles.image2}></img>
                    <span className={styles.text3}>112</span>
                </div>
                <div className={styles.box32}>
                    <span>11</span>
                    <img src="../../Images/comment.png" alt="" />
                </div>
            </div>
        </div>
    )
}