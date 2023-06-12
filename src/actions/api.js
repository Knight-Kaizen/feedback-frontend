import axios from 'axios';

const api = axios.create({
    // baseURL: "http://localhost:8000"
    baseURL: "https://feedback-h6w1.onrender.com"
});

const getUserRegistered = async (UserDetails) => {
    try {
        const { name, email, mobile, password } = UserDetails;
        const response = await api.post('/user/register', {
            name, mobile, email, password
        })
        return (
            {
                success: response.data.success,
                message: response.data.message
            }
        );

    }
    catch (err) {
        console.log('error in user register', err);
        return ({
            success: false,
            message: 'Error in registering user, try again'
        })
    }
}

const getUserLoggedIn = async (UserDetails) => {

    const { email, password } = UserDetails;
    const response = await api.post('/user/login', {
        email, password
    })
    if (response.data.token) {
        localStorage.setItem('feedbackUser', JSON.stringify(response.data.token));
    }
    return (
        {
            success: response.data.success,
            message: response.data.message,
            token: response.data.token
        }
    );

}

const addProduct = async (productDetails) => {
    try {
        console.log('checking add Products details', productDetails);
        const token = JSON.parse(localStorage.getItem('feedbackUser'));
        const product_category = productDetails.category.split(/\s*,\s*/);
        const response = await api.post('/product/add', {
            product_name: productDetails.name,
            logo_url: productDetails.logoUrl,
            product_link: productDetails.productLink,
            product_description: productDetails.productDescription,
            product_category
        }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log('response check', response);

        return ({
            success: response.data.success,
            message: response.data.message
        });
    }
    catch (err) {
        console.log('error in adding product', err);
        return({
            success: false,
            message: 'Network error! try again'
        })
    }
}

const getAllProducts = async () => {
    try {
        const response = await api.get('/product/view');
        console.log('check response', response);
        return({
            success: response.data.success,
            data: response.data.data 
        })
    }
    catch (err) {
        console.log('error in getting products', err);
    }
}

const getAllFilters = async () => {

    return ({
        success: true,
        data: [
            'All', 'B2B', 'Fintech', 'Check3'
        ]
    })
}

const addLike = async(ObjId)=>{
    try{
        const response = await api.patch(`/product/like/${ObjId}`);
        console.log('checking response in addlike function', response);
        return ({
            success: response.data.success,
            message: response.data.message
        });
    }
    catch(err){
        console.log('chck error in like', err);
        return({
            success: false,
            message: 'Could not add like, try again'
        })
    }
}

const addComment = async(productObj)=>{
    try{
        const response = await api.patch(`/product/comment/${productObj.id}`,{
            comment: productObj.comment
        })
        return ({
            success: response.data.success,
            message: response.data.message
        });
        
    }
    catch(err){
        console.log('chck error in comment', err);
        return({
            success: false,
            message: 'Could not add comment, try again'
        })

    }
}


export {
    getUserRegistered,
    getUserLoggedIn,
    addProduct,
    getAllProducts,
    getAllFilters,
    addLike,
    addComment
}