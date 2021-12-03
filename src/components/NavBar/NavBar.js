import React from "react"
import "./NavBar.css"

const NavBar = () => {

    return (
        <div>
<nav>
     
     <label class="logo">Vinoteca</label>
     <ul>
     <li><a class="activo" href="../html/index.html">Inicio</a></li>
     <li><a class="activo" href="#">Contacto</a></li>
     <li><a class="activo" href="#">Tienda</a></li>
     <li><a class="activo" href="#">Nosotros</a></li>
   </ul>
   </nav>
   
        </div>

    )
 }

 export default NavBar
