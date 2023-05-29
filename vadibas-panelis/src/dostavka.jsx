import React, { useState } from 'react';
import './all.css/dost.css';
function TextWithButton() {
  // Состояние для определения состояния разворачивания дополнительного текста
  const [isExpanded, setIsExpanded] = useState(false);

  // Функция-обработчик для переключения состояния разворачивания дополнительного текста
  const handleToggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
        
      <p style={{marginTop: "100px", marginBottom: "201px", marginLeft: "40px", marginRight: "40px"}}>
      <h2 style={{marginTop: "0px"}}>Apmaksa un piegāde</h2>
      <p>
        Pasūtījuma apmaksa saņemot Liepājā. Pēc pasūtījuma noformēšanas un apstiprināšanas uz jūsu norādīto tālruņa numuru tiks 
        nosūtīts pasūtījuma apstiprinājuma ziņojums.
        Saņemot pasūtījumu pilsētas ietvaros, maksājums ir iespējams skaidrā naudā.
      </p>
      <h2>Pasūtījuma apmaksa saņemot Latvijā.</h2>
      <p>
        Pēc pasūtījuma noformēšanas un apstiprināšanas uz jūsu norādīto tālruņa numuru tiks nosūtīts pasūtījuma apstiprinājuma ziņojums,
        un uz e-pasta tiks nosūtīta rēķina apmaksa.
        Rēķinu var apmaksāt ar bankas pārskaitījumu, un pēc apmaksas saņemšanas pasūtījums tiks nosūtīts jums.
        Rēķina apmaksa jāveic 2 darba dienu laikā. Ja rēķins netiek apmaksāts 2 dienu laikā, tas tiks anulēts.
      </p>
      <h2>Piegāde</h2>
      <p>
Sūtījumu piegāde tiek veikta ar mūsu partneriem Omniva un DPD Latvijā, Baltijas valstīs un citās pasaules valstīs. 
Piegāde notiek katru dienu (izņemot brīvdienas).
        Piegādes cena: 
         - Omniva pakomāts Latvijā - no 2,88 EUR 
         - DPD izsniegšanas punkti - no 2,88 EUR 
         - DPD izsniegšanas punkti Lietuvā un Igaunijā - no 6,90 EUR 
         - Piegāde visā pasaulē *
        * Lai uzzinātu piegādes cenu citām pasaules valstīm, sazinieties ar mums pa e-pastu crystalino.shop@gmail.com
         Pēc maksājuma saņemšanas mēs sagatavojam un iepakojam jūsu pasūtījumu, reģistrējam to sistēmā un nosūtām jums tālruņa kodu,
         lai varētu sekot līdzi sūtījumam. Lai saņemtu sūtījumu norādītajā vietā,
         ir jāgaida paziņojums no izvēlētā pakalpojuma sniedzēja.
         Liepājā sūtījums tiek piegādāts 1-2 dienu laikā, citos Latvijas pilsētās - 1-3 dienu laikā.
         Sūtījumu piegāde uz izsniegšanas punktiem Lietuvā un Igaunijā notiek 1-2 dienu laikā, bet uz citām pasaules valstīm - 3-5 dienu laikā.
         Lai uzzinātu tuvākā pakomāta vai izsniegšanas punkta adresi,
           noklikšķiniet uz saites zemāk: - Omniva - omniva.lv/privats/adreses - DPD -
             https://www.dpd.com/lv/lv/sanemsana/pickup-tikls/pickup-punktu-saraksts/
</p>
          {/* Еще дополнительный текст */}
        </p>
      
    </div>
  );
}

export default TextWithButton;
