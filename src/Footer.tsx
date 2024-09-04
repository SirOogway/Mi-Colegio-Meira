const manualDeConv = (
  <p>
    Accede a nuestro manual de convivencia en{" "}
    <a
      href="https://drive.google.com/file/d/1cVejnd6fUcberg_mcKvH29TT1AYZaysy/view"
      target="_blank"
      className="footerEnlace"
    >
      formato online.
    </a>
  </p>
);
const acercaDe = (
  <p>
    Somos una institución educativa pública, contamos con una respetable
    trayectoria de más de <span className="footerAcercaDe">59 años</span>, y nos
    enorgullece trabajar para formar líderes en Barranquilla, Colombia.
  </p>
);
interface RedSocialProps {
  rutaLogo: string;
  enlace: string;
  texto: string;
}
const redesSociales: RedSocialProps[] = [
  {
    rutaLogo: "./public/facebook.png",
    enlace: "https://www.facebook.com/antonio.mercado.14268769",
    texto: "Meira Delmar",
  },
  {
    rutaLogo: "./public/instagram.png",
    enlace: "https://www.instagram.com/colegiomeiradelmar/",
    texto: "colegiomeiradelmar",
  },
];
function RedSocial({ rutaLogo, enlace, texto }: RedSocialProps) {
  return (
    <li className="footerRedSocial">
      <img src={rutaLogo} width={30} />
      <a href={enlace} target="_blank" className="footerEnlace">
        {texto}
      </a>
    </li>
  );
}
function renderRedesSociales(redesSociales: RedSocialProps[]) {
  return (
    <ul className="footerRedesSociales">
      {redesSociales.map(({ rutaLogo, enlace, texto }) => (
        <RedSocial
          rutaLogo={rutaLogo}
          enlace={enlace}
          texto={texto}
          key={enlace}
        />
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="footerFlexContainer">
      <div className="footerInfoFlexContainer">
        <div className="footerInfo">
          <h3>Acerca del Colegio</h3>
          {acercaDe}
        </div>
        <div className="footerInfo">
          <h3>Manual de Convivencia</h3>
          {manualDeConv}
        </div>
        <div className="footerInfo">
          <h3>Nuestras Redes Sociales</h3>
          {renderRedesSociales(redesSociales)}
        </div>
      </div>
      <h4 className="footerDeveloperContactLink">
        <a href="" target="_blank">
          Contacta al desarrollador
        </a>
      </h4>
    </footer>
  );
}
