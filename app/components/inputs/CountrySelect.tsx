'use client';

import useCountries from '@/app/hooks/useCountries';
import Select from 'react-select';

export type CountrySelectValue = {
    name : string,
    id   : string;
    subregion : string;
    latlng : number[];
    value : string;
}

interface CountrySelectProps {
    value?: CountrySelectValue;
    onChange : (value : CountrySelectValue) => void;
}


const CountrySelect:React.FC<CountrySelectProps> = ({
    value,
    onChange
}) => {
    const {getAll} = useCountries();
  return (
    <div className='text-slate-800'>
        <Select 
        onChange={(value) => onChange(value as unknown as CountrySelectValue)}
        placeholder= 'AnyWhere' isClearable options={getAll()}
        formatOptionLabel={(option : any)=>(
           <div className='flex flex-row items-center gap-3'>
              <div>{option.name}</div>
              <div className='text-slate-900'>
                 {option.value}
                 
              </div>
          </div>
        )}
        classNames={{
          control : () => 'p-3 border-2',
          input: () => 'text-lg',
          option : () => 'text-lg'
        
        }}
        theme={(theme)=> ({
           ...theme,
           borderRadius : 6,
           colors: {
            ...theme.colors,
            primary : 'black',
            primary25 : '#89e4ff'
           }
        })}
        />
    </div>
  )
}

export default CountrySelect