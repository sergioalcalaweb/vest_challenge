import { useEffect, useState } from 'react'
import axios from 'axios';
import { Character } from '../shared/Character';
import { Location } from '../shared/Location';
import { Episode } from '../shared/Episode';


type Detail = {
  origin?: Location,
  location?: Location,
  episodes: Array<Episode>
}

const INITIAL_STATE = {
  episodes:[]
}


const useCharacter = (character: Character) => {

  const [detail, setDetail] = useState<Detail>(INITIAL_STATE);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    
    const getInfo = async () => {
      const { data: origin } = await axios.get(character.origin.url);      
      const { data: location } = await axios.get(character.location.url);      
      const info = await Promise.all( character.episode.map( episode => axios.get(episode) ) );            
      setLoading(false);      
      setDetail({
        origin: typeof origin === 'string' ? null : origin,
        location: typeof location === 'string' ? null : location,
        episodes: info.map( i => i.data )
      });
    }

    getInfo();
    
  }, [character])

  return {
    detail,
    loading,
  }
}

export default useCharacter
