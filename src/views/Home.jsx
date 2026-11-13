import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  const [productos] = useState([
    {
      id: 1,
      nombre: 'Campaña Dorada: Cupón 20% Doria',
      marca: 'Doria',
      categoria: 'Cupones Campaña',
      descripcion: 'Aplica este cupón en pastas seleccionadas y acumula doble puntaje en tu cuenta de fidelización.',
      precio: '200 Puntos'
    },
    {
      id: 2,
      nombre: 'Especial Zenú: Bono Despensa Familiar',
      marca: 'Zenú',
      categoria: 'Campañas Temporada',
      descripcion: 'Bono canjeable por compras superiores a $50.000 en el portafolio de cárnicos.',
      precio: '350 Puntos'
    },
    {
      id: 3,
      nombre: 'Kit Saludable Pietrán - 15% OFF',
      marca: 'Pietrán',
      categoria: 'Fidelización',
      descripcion: 'Descuento especial por compras recurrentes en productos balanceados y bajos en grasa.',
      precio: '150 Puntos'
    },
    {
      id: 4,
      nombre: 'Recompensa Noel: Caja Surtida',
      marca: 'Noel',
      categoria: 'Canje de Puntos',
      descripcion: 'Canjea tus puntos acumulados por una caja de galletas tradicionales para compartir.',
      precio: '500 Puntos'
    },
    {
      id: 5,
      nombre: 'Bono Sorpresa Jet Coleccionable',
      marca: 'Jet',
      categoria: 'Campañas Especiales',
      descripcion: 'Cupón habilitado para canje de láminas y golosinas en puntos aliados.',
      precio: '100 Puntos'
    },
    {
      id: 6,
      nombre: 'Pack Campaña Desayuno Antioqueño',
      marca: 'Zenú',
      categoria: 'Cupones Temporada',
      descripcion: 'Descuento cruzado al llevar frijoles y acompañamientos de la marca.',
      precio: '300 Puntos'
    }
  ]);

  return (
    <main className="main-content">
      <section className="hero-header">
        <h2>Célula 7: Mercadeo, Campañas y Fidelización</h2>
        <p>Gestiona cupones de temporada, acumula puntos y canjea recompensas de nuestras marcas.</p>
      </section>

      <section className="catalog-grid">
        {productos.map((item) => (
          <ProductCard key={item.id} producto={item} />
        ))}
      </section>
    </main>
  );
}