import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Navbar />
            <main style={{ padding: '20px' }}>
                <h2>Catálogo de Productos</h2>
                <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                    <ProductCard titulo="Laptop Gamer" precio="3.500.000" />
                    <ProductCard titulo="Teclado Mecánico" precio="250.000" />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Home;