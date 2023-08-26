import "../styles/components/pages/Servicios.css";

const Servicios = (props) => {
  return (
    <section className="holder">
      <h2>Servicios</h2>
      <div className="servicios">
        <img src="/img/servicios/seguro-auto.jpeg" alt= "auto" />
        <div className="info">
          <h4>Seguros de Autos</h4>
          <p>
            Protege tu vehículo y viaja con tranquilidad. Nuestros seguros de
            autos te brindan la seguridad y la tranquilidad que necesitas en tus
            desplazamientos diarios.
          </p>
        </div>
      </div>
      <div className="servicios">
        <img src="/img/servicios/seguro-celular.jpeg" alt= "celular" />
        <div className="info">
          <h4>Seguros de Celular</h4>
          <p>
            Protege tu teléfono con nuestro seguro de celular y mantén tu vida
            digital a salvo. Sabemos lo importante que es tu dispositivo móvil
            en tu día a día, y es por eso que ofrecemos una cobertura integral
            para garantizar que estés protegido en caso de daños, pérdida o
            robo.
          </p>
        </div>
      </div>
      <div className="servicios">
        <img src="img/servicios/seguro-hogar.jpeg" alt= "casa"/>
        <div className="info">
          <h4>Seguros de Hogar</h4>
          <p>
            Protege tu hogar, tu refugio, con nuestro seguro de hogar y disfruta
            de la tranquilidad de saber que estás cubierto en caso de cualquier
            eventualidad.
          </p>
        </div>
      </div>
      <div className="servicios">
        <img src="img/servicios/seguro-vida.jpeg" alt= "familia"/>
        <div class="info">
          <h4>Seguros de Vida</h4>
          <p>
            Asegura el futuro de tus seres queridos con nuestro seguro de vida.
            Sabemos lo importante que es proteger a tu familia y asegurar su
            bienestar incluso en tu ausencia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
