import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const brands = useLoaderData()

  return (
    <div>
      <div className="h-[80vh] text-center grid bg-cover bg-[url('/banners.jpg')]">
        <div className="col-start-1 row-start-1 bg-black bg-opacity-20 w-full h-full"></div>
        <div className="col-start-1 row-start-1 mx-auto my-auto">
          <h1 className='text-7xl font-bold mb-7 text-orange-500'>RS BRAND SHOP</h1>
          <p className='text-orange-700 font-bold
                 text-3xl mb-5 p-5'>We Are the Best brand shop work with Multiple popular brands. We have more than 10 years of experienced. We have more than 200k+ happy clients.</p>
          <button className='btn font-bold bg-rose-500 text-white border-none'><Link to="/contact">Shop now</Link></button>
        </div>
      </div>

      <h1 className='m-8 p-8 text-5xl font-bold text-center text-rose-600'> Popular Brands We Work With</h1>

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-5 p-5'>

        {
          brands.map(brand => <div key={brand.id}>
            <Link to={brand.link}><div className="card card-compact bg-base-100 shadow-xl">
              <figure><img src={brand.photo} alt="Brands" className='h-64 w-full' /></figure>
              <div className="card-body items-center">
                <h2 className="card-title text-3xl text-rose-700 font-bold">{brand.title}</h2>
              </div>
            </div>
            </Link>
          </div>)
        }


      </div>


      <div className='mb-5 pb-5 bg-rose-100'>
        <div className='py-32'>
          <h1 className='m-8 p-5 text-5xl font-bold text-center text-rose-600'>Why Choose Us???</h1>
          <ul className='text-xl text-center text-slate-600'>
            <li> We are experienced who have a proven track record of success.</li>
            <li> We offer a wide range of services for our customers as stress-free as possible.</li>
            <li> We have access to a large network of venues and vendors, which allows us to negotiate the best prices for our customers.</li>
            <li> We are passionate about our products and we love helping our clients create unforgettable experiences.</li>
          </ul>
        </div>
      </div>

      <div className='py-24'>
        <h1 className='m-8 p-5 text-5xl font-bold text-center text-rose-600'>TESTIMONIALS !!!</h1>

        <p className='text-center px-12'>I am so grateful for the services of my products, RS BRAND SHOP. She was with me every step of the way, from helping me choose a venue to coordinating all of the vendors. She was always professional, responsive, and organized, and she made sure that my wedding day was everything I had ever dreamed of. I highly recommend RS EVENT PLANNER to anyone products!</p>

        <h3 className='text-3xl font-bold text-center mb-5'>-Rosalin</h3>
      </div>

    </div>
  );
};

export default Home;