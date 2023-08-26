import '../../styles/components/layout/Header.css';

const Header = (props) => {
  return (
    <header>
      <div className="holder">
        <img src="/img/logo2.png" width="150"  alt="balanzadelajusticia"/>
        <div className="text">
          <h1 className="Nombre">Jorge Quevedo</h1>
          <h2 className="Servicios">Productor de Seguros - Abogado</h2>
          <h3 className="Mat">mat: 98304 - mat: 1-36467</h3>
        </div>
      </div>
      
    </header>


  );
};

export default Header;