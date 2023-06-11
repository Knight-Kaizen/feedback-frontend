import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import FilterChip from '../../components/filterChip/FilterChip'
import Modal from '../../components/modal/Modal'
import ProductBox from '../../components/product/ProductBox'
import styles from './HomePage.module.css'
import { UserContext } from '../../App';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllFilters, getAllProducts } from '../../actions/api';

export default
function HomePage(){

    
    const navigate = useNavigate();

    const {userLoggedIn, setUserLoggedIn, modalToShow, setModalToShow, showModal, setShowModal} = useContext(UserContext);
    const [productDisplay, setProductDisplay] = useState([]);
    const [tagDisplay, setTagDisplay] = useState([]);


    useEffect(()=>{

        const getProductsAndDisplay = async()=>{
            const result = await getAllProducts();
            if(result.success){
                const tempDisplay = result.data.map((item)=>{
                    return(
                        <ProductBox 
                            name = {item.name}
                            tags = {item.tags}
                            comments = {item.comments}
                        />
                    )
                })
                setProductDisplay(tempDisplay);

            }
            else{
                toast.error('Error in getting products, please retry!', {autoClose: 3000});
            }
        }

        const getFiltersAndDisplay = async()=>{
            const result = await getAllFilters();
            if(result.success){
                const tempDisplay = result.data.map((item)=>{
                    
                    return(
                        <FilterChip 
                            name = {item}
                        />
                    )
                })

                setTagDisplay(tempDisplay);
            }
            else{
                toast.error('Error in getting filters', {autoClose: 3000});
            }
        }

        getProductsAndDisplay();
        getFiltersAndDisplay();
    }, [])






    const handleLoginLogout = ()=>{
        if(userLoggedIn){
            setUserLoggedIn(false);
            toast.success('User Logged out!');
        }
        else{
            navigate('login');        
        }
    }

    const handleAddProducts = ()=>{
        if(userLoggedIn){
            setModalToShow('AddProducts');
        }
        else{
            setModalToShow('LogIn');
        }
        setShowModal(true);
    }

    return(
        <>
            <div className={styles.header}>
                <span className={styles.text1}>Feedback</span>
                <span className={styles.text2} onClick={handleLoginLogout}>{userLoggedIn? 'Logout': 'Login'}</span>
                <span className={styles.text2} onClick={()=>navigate('signUp')}>Sign up</span>
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
                        {tagDisplay}
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
                        <div className={styles.box4} onClick={handleAddProducts}>+ Add Products</div>
                    </div>  

                    <div className={styles.box5}>
                        {productDisplay}
                        {productDisplay}
                    </div>
                </div>
            </div>
            {showModal && <Modal show = {modalToShow}/>}
            
        </>
    )
}