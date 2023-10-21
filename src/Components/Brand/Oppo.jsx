import React from 'react';
import Slider from '../Slider';
import { useLoaderData } from 'react-router-dom';

const Oppo = () => {
    const all = useLoaderData()
    return (
        <div>
            <Slider></Slider>

            <h1 className='m-8 p-8 text-5xl font-bold text-center text-rose-600'> Popular Product of Oppo</h1>

            <div className='grid gap-4 md:grid-cols-2 mb-5 p-5'>

{
    all.map(all => <div key={all._id}>
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={all.imgurl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{all.name}</h2>
                <p>Brand: {all.brand}</p>
                <p>Type: {all.type}</p>
                <p>Price: $ {all.price}k</p>
                <p>Rating:{all.rating}/10</p>
                <div className="card-actions ">
                    <button className="btn btn-error text-white justify-end">Update</button>
                   <button className="btn btn-error text-white justify-start">Details</button>
                </div>
            </div>
        </div>
    </div>)
}
</div>

        </div>
    );
};

export default Oppo;