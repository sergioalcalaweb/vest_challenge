import React, { FC, useState } from 'react'
import useLocation from '../hooks/useLocation'
import { Location } from '../shared/Location'
import CharacterItem from './CharacterItem'


type Props = {
  location: Location
}


const LocationItem: FC<Props> = ({location}) => {

  const {detail, loading} = useLocation(location);
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => setOpen(!open);

  return (
    <div className='column is-full'>
      <div className='card'>
        <header className="card-header is-clickable" onClick={handleClick}>
          <p className="card-header-title">
            <span>{location.name}</span>
            -
            <small className='subtitle is-6'>{location.type}</small>
          </p>
          <button className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="material-icons">expand_more</i>
            </span>
          </button>
        </header>
        { open && !loading && (
          <div className='card-content'>
            <h3 className='title'>Residents</h3>
            <div className='columns is-multiline is-centered'>
              { detail.residents.map( character => {
                return(
                  <div className='column is-half' key={character.id}>
                    <CharacterItem character={character} />
                  </div>                  
                )
              })}        
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LocationItem
