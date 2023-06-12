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
import useWindowResize from '../../hooks/useWindowResize';
export default
    function HomePage() {


    const navigate = useNavigate();

    const { userLoggedIn, setUserLoggedIn, modalToShow, setModalToShow, showModal, setShowModal, filterSelected, setFilterSelected, sortBy, setSortBy } = useContext(UserContext);
    const [productDisplay, setProductDisplay] = useState([]);
    const [tagDisplay, setTagDisplay] = useState([]);
    const [displaySortOptions, setDisplaySortOptions] = useState();
    let query = '';
    const { width } = useWindowResize();



    useEffect(()=>{
        setDisplaySortOptions(false);
    }, [])
    const getProductsAndDisplay = async () => {
        const result = await getAllProducts();
        console.log('checking result in homepage', result);
        if (result.success) {
            const tempDisplay = result.data.map((item) => {
                return (
                    <ProductBox
                        id = {item._id}
                        name={item.product_name}
                        logo = {item.logo_url}
                        tags={item.product_category}
                        comments={item.comments}
                        comments_count={item.total_comments}
                        likes = {item.likes}
                        description = {item.product_description}
                    />
                )
            })
            setProductDisplay(tempDisplay);

        }
        else {
            toast.error('Error in getting products, please retry!', { autoClose: 3000 });
        }
    }
    useEffect(() => {
        getProductsAndDisplay();

    }, [])

    useEffect(() => {

        const getFiltersAndDisplay = async () => {
            const result = await getAllFilters();
            if (result.success) {
                const tempDisplay = result.data.map((item) => {
                    let isSelected = false;
                    // console.log('checking selection', item);

                    if (item == filterSelected) {
                        isSelected = true;
                        // console.log('selected', item)
                    }

                    return (
                        <FilterChip
                            name={item}
                            isSelected={isSelected}
                            handleClick = {handleTags}
                        />
                    )
                })

                setTagDisplay(tempDisplay);
            }
            else {
                toast.error('Error in getting filters', { autoClose: 3000 });
            }
        }

        getFiltersAndDisplay();
    }, [filterSelected])





    const handleLoginLogout = () => {
        if (userLoggedIn) {
            setUserLoggedIn(false);
            toast.success('User Logged out!');
        }
        else {
            navigate('login');
        }
    }

    const handleAddProducts = () => {
        if (userLoggedIn) {
            setModalToShow('AddProducts');
        }
        else {
            setModalToShow('LogIn');
        }
        setShowModal(true);
    }

    const handleFilter = (filter)=>{
        setDisplaySortOptions(displaySortOptions?false:true)
        if(filter != 'Select'){
            setSortBy(sortBy == filter ? 'Select': filter)
            
        }        
    }
    const handleTags = (tag)=>{
        console.log('checking tag', tag);
    }

    return (
        <>
            <div className={styles.header}>
                <span className={styles.text1}>Feedback</span>
                <div className={styles.HeaderBox}>
                    <span className={styles.text2} onClick={handleLoginLogout}>{userLoggedIn ? 'Logout' : 'Login'}</span>
                    <span className={styles.text2} onClick={() => navigate('signUp')}>Sign up</span>
                </div>
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
                {width > 600 &&
                    <div className={styles.lowerLeft}>
                        <div className={styles.box1}>
                            <span className={styles.text6}>Apply Filter</span>
                            <span className={styles.text5}>Feedback</span>
                        </div>
                        <div className={styles.box2}>
                            {tagDisplay}
                        </div>
                    </div>}
                <div className={styles.lowerRight}>
                    {/* box3 => upperBox */}

                    <div className={styles.box3}>
                        <div className={styles.box31}>
                        <span className={styles.text7}> 10 Suggestions</span>
                        </div>
                        <div className={styles.box32}>
                            <div className={styles.box321}>
                            <span className={styles.text8} >Sort By: </span>
                            </div>
                            
                            <div className={styles.box322}>
                            <span className={styles.innerBox1} onClick={()=>handleFilter('Select')}>{sortBy}</span>
                            {displaySortOptions && <span className={styles.innerBox2} onClick={()=>handleFilter('UpVotes')}>Upvotes</span>}
                            {displaySortOptions && <span className={styles.innerBox2} onClick={()=>handleFilter('Comments')}>Comments</span>}
                            
                            </div>
                        </div>
                        <div className={styles.box4} onClick={handleAddProducts}>+ Add Products</div>
                    </div>

                    {
                        width < 600 &&
                        <div className={styles.box00}>
                            <div className={styles.text9}>Filters: </div>
                    <div className={styles.box2}>
                        {tagDisplay}                     
                    </div>
                        </div>

                    }

                    <div className={styles.box5}>
                        {productDisplay}
                    </div>
                </div>
            </div>
            {showModal && <Modal show = {modalToShow}/>}

        </>
    )
}