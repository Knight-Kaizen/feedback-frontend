import { useState } from 'react'
import styles from './LoginPage.module.css'
import { clientSideValidation } from '../../actions/Helper';
export default
    function LoginPage() {

    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setUserDetails((prevDetails) => {
            return {
                ...prevDetails,
                [e.target.name]: e.target.value
            }
        })
    }


    const handleSubmit = () => {
        const result = clientSideValidation({
            name: '0000000',
            email: userDetails.email,
            mobile: '0000000000',
            password: userDetails.password
        });
        if (result.success) {
            // do the API call
            console.log('client side validation success');
            console.log(userDetails);
        }
        else {
            setErrors(result.errors);
        }
    }

    const handleSignUp = () => {
        console.log('sending to signUp');
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.text1}>Feedback</h1>
            <h3 className={styles.text2}>Add your products and give us your valuable feedback</h3>
            <div className={styles.mainBox}>
                <div className={styles.box1}>
                    <img src="../../Images/Email.png" alt="img-1" className={styles.image1} />
                    <input placeholder='Email' className={styles.input1} name='email' onChange={handleChange}></input>
                </div>
                {errors.email && <span className={styles.error}>{errors.email}</span>}
                <div className={styles.box2}>
                    <img src="../../Images/Password.png" alt="img-2" className={styles.image2} />
                    <input type="password" placeholder='Password' className={styles.input2} name='password' onChange={handleChange} />
                </div>
                {errors.password && <span className={styles.error}>{errors.password}</span>}
                <span className={styles.box3}>Don’t have an account? <span className={styles.text3} onClick={handleSignUp}>Sign up?</span></span>
                <div className={styles.box4}>
                    <span className={styles.button1} onClick={handleSubmit}>Login</span>
                </div>
            </div>
        </div>
    )
}