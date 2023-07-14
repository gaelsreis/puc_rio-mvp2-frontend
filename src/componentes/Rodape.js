import * as React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";

export default function Rodape() {
    return (
        <footer>
            <div className='rodape'><ShoppingBasketIcon/><Link to='/promocao'>Promoção</Link></div>
            <div><WhatsAppIcon/>+55 (21) 93210-3257</div>
            <div><address><LocationOnIcon/>Av. Pres. Vargas, 1930, Centro, Rio de Janeiro - RJ</address></div>
        </footer>
    );
}