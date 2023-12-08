import React from "react";
import "./wellcome.css"

function Wellcome (){

    return (
        <div className="wellcome-container">
           <h3>HERZLICH WILLKOMMEN IN DER OUZERIA</h3>
           <p className="text-container"> 
                Wir laden Sie ein zu einem kulinarischen Streifzug 
                durch unsere Speisekarte mit griechisch-mediterranen 
                Spezialitäten. 
            </p>
            <p className="text-container">
                Als das etwas andere griechische Restaurant möchten wir uns empfehlen und setzen neben landestypischen Speisen, vor allem auf eine leichte, gesunde Kost mit frischen Zutaten und frischen Kräutern Eine reichhaltige Auswahl an Vorspeisen, Tapas ( Mezes = Häppchen ) und frischer Fisch gehören zu unserem Angebot Alle Grillgerichte bereitet unser Chefkoch auf dem Lavasteingrill zu. Mit sorgfältig ausgewählten Produkten und sehr kreativ gestalteten Tellervariationen überzeugt er unsere Gäste nicht nur geschmacklich sondern auch optisch
                immer wieder aufs Neue. Dazu werden exclusive griechische Qualitätsweine
                (auch offen im 0,2 l Glas), griechischer Tafelwein, sowie einige
                badische Weine ausgeschenkt.
            </p>
            <p className="text-container">
                "<b>OUZERIA</b>", das bedeutet in Griechenland bei einem Ouzo oder gutem
                Glas Wein landestypische Häppchen (Mezes, Tapas) in geselliger Runde zu genießen.
            </p>
            <div className="google-maps">
                <iframe className="besika" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481.9863936553793!2d7.895618887206002!3d47.98003272620058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911d25c5127fbf%3A0xdb0509407fcafccb!2sOuzeria!5e1!3m2!1ska!2sde!4v1702051482191!5m2!1ska!2sde"></iframe>
            </div>

        </div>
    )
};

export default Wellcome;