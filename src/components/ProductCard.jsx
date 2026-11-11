import React from 'react';

function ProductCard({ titulo, precio }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', width: '150px' }}>
            <h3>{titulo}</h3>
            <p>Precio: ${precio}</p>
        </div>
    );
}

export default ProductCard;