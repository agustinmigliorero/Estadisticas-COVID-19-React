import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries])


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(evt) => handleCountryChange(evt.target.value)}>
                <option value="">Global</option>
                <option value="Afghanistan">Afganistan</option>
                <option value="Albania">Albania</option>
                <option value="Germany">Alemania</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Antigua and Barbuda">Antigua y Barbuda</option>
                <option value="Saudi Arabia">Arabia Saudita</option>
                <option value="Algeria">Argelia</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaiyan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Bahrain">Barein</option>
                <option value="Belgium">Belgica</option>
                <option value="Belize">Belice</option>
                <option value="Benin">Benin</option>
                <option value="Belarus">Bielorrusia</option>
                <option value="Burma">Birmania</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia y Herzegovina</option>
                <option value="Botswana">Botsuana</option>
                <option value="Brazil">Brasil</option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Bhutan">Butan</option>
                <option value="Cabo Verde">Cabo Verde</option>
                <option value="Cambodia">Camboya</option>
                <option value="Cameroon">Camerun</option>
                <option value="Canada">Canada</option>
                <option value="Qatar">Catar</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Cyprus">Chipre</option>
                <option value="Holy See">Ciudad del Vaticano</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoras</option>
                <option value="Korea, South">Corea del Sur</option>
                <option value="Cote d'Ivoire">Costa de Marfil</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Croatia">Croacia</option>
                <option value="Cuba">Cuba</option>
                <option value="Denmark">Dinamarca</option>
                <option value="Dominica">Dominica</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egipto</option>
                <option value="El Salvador">El Salvador</option>
                <option value="United Arab Emirates">Emiratos Arabes Unidos</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Slovakia">Eslovaquia</option>
                <option value="Slovenia">Eslovenia</option>
                <option value="Spain">España</option>
                <option value="US">Estados Unidos</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Etiopia</option>
                <option value="Philippines">Filipinas</option>
                <option value="Finland">Finlandia</option>
                <option value="Fiji">Fiyi</option>
                <option value="France">Francia</option>
                <option value="Gabon">Gabon</option>
                <option value="Georgia">Georgia</option>
                <option value="Ghana">Ghana</option>
                <option value="Grenada">Granada</option>
                <option value="Greece">Grecia</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bisau</option>
                <option value="Equatorial Guinea">Guinea Ecuatorial</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hungary">Hungria</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iraq">Irak</option>
                <option value="Iran">Iran</option>
                <option value="Ireland">Irlanda</option>
                <option value="Iceland">Islandia</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italia</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japon</option>
                <option value="Jordan">Jordania</option>
                <option value="Kazakhstan">Kazajistan</option>
                <option value="Kenya">Kenia</option>
                <option value="Kyrgyzstan">Kirguistan</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Laos">Laos</option>
                <option value="Lesotho">Lesoto</option>
                <option value="Latvia">Letonia</option>
                <option value="Lebanon">Libano</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libia</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lituania</option>
                <option value="Luxembourg">Luxemburgo</option>
                <option value="North Macedonia">Macedonia del Norte</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malaysia">Malasia</option>
                <option value="Malawi">Malaui</option>
                <option value="Maldives">Maldivas</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Morocco">Marruecos</option>
                <option value="Mauritius">Mauricio</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mexico">Mexico</option>
                <option value="Moldova">Moldavia</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Namibia">Namibia</option>
                <option value="Nepal">Nepal</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Norway">Noruega</option>
                <option value="New Zealand">Nueva Zelanda</option>
                <option value="Oman">Oman</option>
                <option value="Netherlands">Paises Bajos</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua Nueva Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Poland">Polonia</option>
                <option value="Portugal">Portugal</option>
                <option value="United Kingdom">Reino Unido</option>
                <option value="Central African Republic">Republica Centroafricana</option>
                <option value="Czechia">Republica Checa</option>
                <option value="Congo (Brazzaville)">Republica del Congo</option>
                <option value="Congo (Kinshasa)">Republica Democratica del Congo</option>
                <option value="Dominican Republic">Republica Dominicana</option>
                <option value="Rwanda">Ruanda</option>
                <option value="Romania">Rumania</option>
                <option value="Russia">Rusia</option>
                <option value="Saint Kitts and Nevis">San Cristobal y Nieves</option>
                <option value="San Marino">San Marino</option>
                <option value="Saint Vincent and the Grenadines">San Vicente y las Granadinas</option>
                <option value="Saint Lucia">Santa Lucia</option>
                <option value="Sao Tome and Principe">Santo Tome y Principe</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leona</option>
                <option value="Singapore">Singapur</option>
                <option value="Syria">Siria</option>
                <option value="Somalia">Somalia</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Eswatini">Suazilandia</option>
                <option value="South Africa">Sudafrica</option>
                <option value="Sudan">Sudan</option>
                <option value="South Sudan">Sudan del Sur</option>
                <option value="Sweden">Suecia</option>
                <option value="Switzerland">Suiza</option>
                <option value="Suriname">Surinam</option>
                <option value="Thailand">Tailandia</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Tajikistan">Tayikistan</option>
                <option value="Timor-Leste">Timor Oriental</option>
                <option value="Togo">Togo</option>
                <option value="Trinidad and Tobago">Trinidad y Tobago</option>
                <option value="Tunisia">Tunez</option>
                <option value="Turkey">Turquia</option>
                <option value="Ukranie">Ucrania</option>
                <option value="Uganda">Uganda</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Yemen">Yemen</option>
                <option value="Djibouti">Yibuti</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabue</option>

            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;