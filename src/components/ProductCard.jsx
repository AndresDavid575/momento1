export function ProductCard({ producto }) {
    const coloresMarca = {
        Zenú: '#D8232A',
        Doria: '#E69000',
        Pietrán: '#1E7E3E',
        Noel: '#C8102E',
        Jet: '#0056B3'
    };

    const colorFondo = coloresMarca[producto.marca] || '#1B8A3F';

    return (
        <article className="product-card">
            <div>
                <div className="card-badges">
                    <span className="badge-marca" style={{ backgroundColor: colorFondo }}>
                        {producto.marca}
                    </span>
                    <span className="badge-categoria">{producto.categoria}</span>
                </div>
                <h3>{producto.nombre}</h3>
                <p className="product-desc">{producto.descripcion}</p>
            </div>
            <div className="card-footer">
                <span className="product-price">{producto.precio}</span>
                <button className="btn-agregar" type="button">
                    + Despensa
                </button>
            </div>
        </article>
    );
}