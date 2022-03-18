import '../../Components/Footer/Footer.css';

function Footer() {
  return (
    <div className="container my-5">
    
    <footer className="text-center text-white">
    <div className="container pt-4">
      <section className="mb-4">
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="https://www.facebook.com/"
          role="button"
          data-mdb-ripple-color="dark"
          ><i className="fab fa-facebook-f"></i
        ></a>
  
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="https://www.gmail.com/"
          role="button"
          data-mdb-ripple-color="dark"
          ><i className="fas fa-envelope"></i
        ></a>
  
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="https://www.whatsapp.com/download"
          role="button"
          data-mdb-ripple-color="dark"
          ><i className="fab fa-whatsapp"></i
        ></a>
  
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="https://www.instagram.com/"
          role="button"
          data-mdb-ripple-color="dark"
          ><i className="fab fa-instagram"></i
        ></a>
  
      </section>
    </div>
  
    <div className="text-center text-dark p-3">
      © 2022 Copyright: DAC
    </div>
  </footer>
    
  </div>

   
  );
}
export default Footer;