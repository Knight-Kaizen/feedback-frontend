import FilterChip from '../../components/filterChip/FilterChip'
import ProductBox from '../../components/product/ProductBox'
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
            <div className={styles.bodyLower}>
                <div className={styles.lowerLeft}>
                    <div className={styles.box1}>
                        <span className={styles.text6}>Apply Filter</span>
                        <span className={styles.text5}>Feedback</span>
                    </div>
                    <div className={styles.box2}>
                        <FilterChip name = {'All'}/>
                        <FilterChip name = {'Fintech'}/>
                        <FilterChip name = {'Edtech'}/>
                        <FilterChip name = {'B2B'}/>
                        <FilterChip name = {'Saas'}/>
                        <FilterChip name = {'Agritech'}/>
                        <FilterChip name = {'Medtech'}/>
                    </div>
                </div>
                <div className={styles.lowerRight}>
                    {/* box3 => upperBox */}
                    <div className={styles.box3}> 
                        <span className={styles.text7}> 10 Suggestions</span>
                        <span className={styles.text8}>Sort By: </span>
                        <div className={styles.box31}>
                            <span className={styles.innerBox1}>Upvotes</span>
                            <span className={styles.innerBox2}>Comments</span>
                            {/* <span className={styles.innerBox2}>Comments</span> */}
                        </div>
                        <div className={styles.box4}>+ Add Products</div>
                    </div>  

                    <div className={styles.box5}>
                        <ProductBox/>
                        <ProductBox/>
                    </div>
                </div>
            </div>
            
        </>
    )
}