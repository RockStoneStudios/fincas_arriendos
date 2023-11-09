import countries from 'world-countries';
import { CountrySelectValue } from '../components/inputs/CountrySelect';


const municipios = [
    {name : 'Sopetran', id : 'SOP',subregion : 'Occidente Medio', latlng : [6.5016,-75.74333]},
    {name : 'Santa fe Antioquia', id : 'STA', subregion : 'Occidente Medio',latlng : [6.5563,-75.8275]},
    {name : 'San Jeronimo' , id : 'SAJ', subregion : 'Occidente Medio',latlng : [6.433,-75.717]},
    {name : 'Liborina', id : 'LIB', subregion : 'Occidente Medio',latlng : [6.67805,-75.81222]}
]


const formattedCountries = municipios.map((municipio)=> ({
    value : municipio.name,
    label : municipio.id,
    subregion : municipio.subregion,

   
}));


const useCountries = () => {
   const getAll = () => formattedCountries;


const getByValue = (value:string) =>{
    return formattedCountries.find((item)=> item.value === value)
}

return {
    getAll,
    getByValue
}
};


export default useCountries;