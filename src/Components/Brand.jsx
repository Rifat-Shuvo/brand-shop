import React from 'react';

const Brand = () => {
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure><img src={brand.photo} alt="Brands" className='h-64 w-full' /></figure>
              <div className="card-body items-center">
                <h2 className="card-title text-3xl text-rose-700 font-bold">{brand.title}</h2>
              </div>
            </div>
        </div>
    );
};

export default Brand;