import React, { FC, Fragment, useState } from 'react'
import { Character } from '../shared/Character'
import CharacterDetail from './CharacterDetail'


type Props = {
  character: Character
}


const CharacterItem: FC<Props> = ({character}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {setOpen(true); console.log('entro')};
  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <div className='card is-clickable' onClick={handleClick}>
        <div className='card-content'>
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img className="image is-48x48" src={character.image} alt={character.name}/>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{character.name}</p>
            </div>
          </div>
        </div>
      </div>
      {open && <CharacterDetail onClose={handleClose} character={character} />}
    </Fragment>
  )
}

export default CharacterItem
