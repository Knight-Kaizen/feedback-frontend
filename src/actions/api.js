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
        return({
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
    if(response.data.token){
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
    console.log('checking add Products details', productDetails);
    return ({
        success: true,
        message: 'Product added successfully'
    });
}

const getAllProducts = async () => {
    try {
        const response = await api.get('/product/view');
        console.log('check response', response);
        return ({
            success: true,
            data: [
                {
                    name: 'Cred Club',
                    image_url: 'this is image url',
                    tags: ['Fintech', 'B2B'],
                    comments: [
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, praesentium.',
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, praesentium maiores tempore velit tenetur provident.',
                        'maiores tempore velit tenetur provident.maiores tempore velit tenetur provident.'
                    ]
                },
                {
                    name: 'Cred Club2',
                    image_url: 'image url 2',
                    tags: ['Agritech'],
                    comments: [
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, praesentium.',
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, praesentium maiores tempore velit tenetur provident.',
                        'maiores tempore velit tenetur provident.maiores tempore velit tenetur provident.'
                    ]

                }
            ]
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



export {
    getUserRegistered,
    getUserLoggedIn,
    addProduct,
    getAllProducts,
    getAllFilters
}