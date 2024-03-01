import React from 'react';
import error404 from '../../assets/error404.png'
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <section className='flex-grow-1 mt-5 mt-md-4 text-center my-5'>
            <img src={error404} alt="Error 404" className='img-fluid mt-5 mt-md-3'/>
            <h1 className='display-5'>Error 404</h1>
            <p className='lead fs-4'>Lo sentimos, pero parece que la página que solicitaste no está disponible en este momento</p>
            <Link className='btn-customized' to={'/'}>Volver al Inicio</Link>
        </section>
    );
};

export default Error404;<h1 className='my-5'>Error 404</h1>