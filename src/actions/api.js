const getUserRegistered = async (UserDetails)=>{


    return (
        {
            success: true,
            message: 'User registered successfully'
            // message: 'Email already exist'
        }
    );
}

const getUserLoggedIn = async(UserDetails)=>{

    return(
        {
            success: true,
            message: 'login success'
        }
    );
    
}

const addProduct = async(productDetails)=>{

    return({
        success: true,
        message: 'Product added successfully'
    });
}





export {
    getUserRegistered,
    getUserLoggedIn,
    addProduct
}