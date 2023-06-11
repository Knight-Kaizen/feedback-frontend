import { useEffect, useState } from 'react'
import styles from './ProductBox.module.css'
export default
    function ProductBox(props) {

    const [displayChips, setDisplayChips] = useState();
    const [displayComments, setDisplayComments] = useState();
    const [showCommentBox, setShowCommentBox] = useState();

    useEffect(() => {
        const tempDisplayChips = props.tags.map((item) => {
            return (
                <span className={styles.chipItems}>{item}</span>
            )
        })

        const tempDisplayComments = props.comments.map((item) => {
            return (
                <span className={styles.comments}>{item}</span>
            )
        })

        setDisplayComments(tempDisplayComments);
        setDisplayChips(tempDisplayChips);
        setShowCommentBox(false);
    }, [])


    const handleCommentBox = () => {
        console.log('comment box loading');
        setShowCommentBox(showCommentBox ? false : true);
    }


    return (
        <>
            <div className={styles.main}>
                <img src='../../Images/sample.png' className={styles.image1}></img>
                <div className={styles.box2}>
                    <span className={styles.text1}>{props.name}</span>
                    <span className={styles.text2}> It is good for credit card payments,it is fast,secure</span>
                    <div className={styles.box21}>
                        {displayChips}
                        <img src="../../Images/comment2.png" alt="" className={styles.image3} onClick={handleCommentBox} />
                        <span className={styles.text4} onClick={handleCommentBox}>Comment</span>
                    </div>
                </div>
                object<div className={styles.box3}>
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
            {showCommentBox && <div className={styles.main2}>
                <div className={styles.top}>
                    <input className={styles.commentBox} placeholder='Add a comment...'></input>
                    <img src="../../Images/send.png" alt="" className={styles.image4} />
                </div>
                <div className={styles.bottom}>
                    {displayComments}
                </div>
            </div>}
        </>
    )
}