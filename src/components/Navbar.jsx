export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <h1>Sa-zón</h1>
        <span className="navbar-tag">Grupo Nutresa</span>
      </div>
      <nav>
        <ul className="navbar-links">
          <li>Catálogo</li>
          <li>Recetario</li>
          <li>Mi Despensa</li>
        </ul>
      </nav>
    </header>
  );
}