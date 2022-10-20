import "./Footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
    return(
        <footer>
    
        <div className="footer-contenido">
            <h3>React Boostrap</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, alias!</p>
            <ul class="social">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            </ul>
        </div>
            <div class="footer-bottom">
              <p>copyright &copy;2022</p>
            </div>
    
    
    
        </footer>
    );
}

export default Footer;