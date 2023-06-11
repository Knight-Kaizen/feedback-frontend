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

const getAllProducts = async()=>{

    return({
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

const getAllFilters = async()=>{
    
    return({
        success: true,
        data: [
            'B2B', 'Fintech', 'Check3'
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