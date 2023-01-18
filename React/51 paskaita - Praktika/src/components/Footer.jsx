const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <section id="left">
            <p>Susisiekite</p>
            <div className="address">
              <div>
                <i className="fa fa-mail-forward"></i><a
                  href="mailto:info@palapiniumagnatai.lt">info@filmumanija.lt</a>
                <br />
              </div>
              <div>
                <i className="fa fa-phone"></i><p>+370 00000</p>
                <br />
              </div>
              <div>
                <i className="fa fa-location-arrow"></i><p>Kauno g. 28, Vilnius, Lietuva</p>
                <br />
              </div>
            </div>
          </section>
          <section id="middle">
            <img src="https://images.vexels.com/media/users/3/135655/isolated/preview/c751bf3ae9cb8bfa7c2395bc05f2269f-desenhos-animados-de-claquete.png" alt="logo" />
          </section>

          <section id="right">
            <div className="soc-networks">
              <h3>Sekite mus</h3>
              <a href="#">
                <i className="fa fa-facebook-square"></i></a>
              <a href="#">
                <i className="fa fa-instagram"></i></a>
            </div>
          </section>
        </div>
        <div className="copyrights">
          <p>Copyrights © 2023 Filmanija. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;