import { useEffect, useState } from 'react'
import axios from 'axios';
import { Character } from '../types/Character';
import { Location } from '../types/Location';


type Detail = {
  residents:Array<Character>
}

const INITIAL_STATE = {
  residents:[]
}


const useLocation = (location: Location) => {

  const [detail, setDetail] = useState<Detail>(INITIAL_STATE);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    
    const getInfo = async () => {      
      const info = await Promise.all( location.residents.map( character => axios.get(character) ) );            
      setLoading(false);      
      setDetail({
        residents: info.map( i => i.data )
      });
    }

    getInfo();
    
  }, [location])

  return {
    detail,
    loading,
  }
}

export default useLocation
