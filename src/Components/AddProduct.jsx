import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {

    const handleAddproduct = e =>{
        e.preventDefault()
        const form = e.target
        const imgurl = form.image.value
        const name = form.name.value 
        const brand = form.brand.value 
        const type = form.type.value 
        const price = form.price.value 
        const description = form.description.value 
        const rating = form.rating.value 
       const newc ={imgurl, name,brand,type,price,description,rating}
       console.log(newc);
    fetch('http://localhost:5000/brands',{
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newc)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if (data.insertedId) {
            Swal.fire({
                title: 'Sucess!',
                text: 'You have sucessfully add the products',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        }
    })
    
        
    }

    return (
        <div>
            <div className='my-10'>
                
                <h1 className='m-8 p-8 text-5xl font-bold text-center text-rose-600'> Add Your Products</h1>
                   
                        <form onSubmit={handleAddproduct} className="md:w-3/4 lg:w-1/2 mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" placeholder="Image Url" className="input input-bordered" name='image' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" name='name' required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" placeholder="Brand name(case sensitive:please write in lower case)" className="input input-bordered" name='brand' required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <input type="text" placeholder="Type" className="input input-bordered" name='type' required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Price" className="input input-bordered" name='price' required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short description</span>
                                </label>
                                <input type="text" placeholder="Short description" className="input input-bordered" name='description' required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" placeholder="Rating" className="input input-bordered" name='rating' required />
                            </div>

                            

                            {/* <div className="form-control mt-6">
                                <button className="btn btn-error text-white">Add products</button>
                            </div> */}
                            <input type="submit" value="add product" className='btn btn-block btn-error text-white mt-3' />
                        </form>
                    
                
            </div>
        </div>
    );
};

export default AddProduct;