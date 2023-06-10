import { useContext, useState } from 'react'
import styles from './AddProduct.module.css'
import { UserContext } from '../../App'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addProduct } from '../../actions/api';
export default
function AddProduct(){

    const [productDetails, setProductDetails] = useState({
        name: '',
        category: '',
        logoUrl: '',
        productLink: '',
        productDescription: ''
    })
    const {setShowModal} = useContext(UserContext);

    const handleChange = (e)=>{
        setProductDetails((prevDetails) => {
            return {
                ...prevDetails,
                [e.target.name]: e.target.value
            }
        })
    }
    const handleSubmit = async ()=>{
        const {name, category, logoUrl, productDescription, productLink} = productDetails;
        // console.log('Submitted successfully', productDetails);
        if(!name || !category || !logoUrl || !productDescription || !productLink){
            toast.error('All fields required', {autoclose: 3000});
            
        }
        else{
            const result = await addProduct(productDetails);
            // console.log('in else', result);
            if(result.success){
                toast.success(result.message, {autoclose: 3000});
                setShowModal(false);
                // console.log('in result->success');
            }
            else{
                toast.error(result.message, {autoclose: 3000});
                // console.log('in result->eror');
            }
        }

    }

    return(
        <div className={styles.main}>
            <span className={styles.text1}>Add your product </span>
            <input type="text" placeholder='Name of the company' name='name' className={styles.input1} onChange={handleChange}/>
            <input type="text" placeholder='Category' name='category' className={styles.input1} onChange={handleChange} />
            <input type="text" placeholder='Add logo url' name='logoUrl' className={styles.input1} onChange={handleChange} />
            <input type="text" placeholder='Link of product' name='productLink' className={styles.input1} onChange={handleChange} />
            <input type="text" placeholder='Description of product' name='productDescription' className={styles.input1} onChange={handleChange} />
            <span className={styles.button1} onClick={handleSubmit}>+ Add</span>
        </div>
    )
}
