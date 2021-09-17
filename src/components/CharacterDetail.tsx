import React, { FC, Fragment, SyntheticEvent, useState } from 'react'
import useCharacter from '../hooks/useCharacter'
import { Character } from '../shared/Character'
import EpisodeItem from './EpisodeItem'

type Props = {
  character: Character,
  onClose: (e: SyntheticEvent) => void
}

const CharacterDetail: FC<Props> = ({character, onClose}) => {
  const {detail, loading} = useCharacter(character);
  const [section, setSection] = useState<string>('location');

  const changeSection = (view: string) => setSection(view);
  console.log(detail);
  return (
    <div className='modal is-active'>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img src={character.image} alt={character.name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content has-text-centered">
                <h1>
                  <strong>{character.name}</strong>                                    
                </h1>
              </div>
              <div className="level">
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Status</p>
                    <p className="title">{character.status}</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Gender</p>
                    <p className="title">{character.gender}</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Species</p>
                    <p className="title">{character.species}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          { !loading && (
            <Fragment>
              <div className="tabs is-centered">
                <ul>                        
                { detail.location && (                    
                    <li 
                    onClick={ () => changeSection('location') } 
                    className={section === 'location' ? "is-active" : ''}>
                    <a href="#section">Location</a></li>
                  )}                      
                  { detail.origin && (
                    <li
                    onClick={ () => changeSection('origin') } 
                    className={section === 'origin' ? "is-active" : ''}>
                    <a href="#section">Origin</a></li>
                  )}
                  <li 
                    onClick={ () => changeSection('episodes') } 
                    className={section === 'episodes' ? "is-active" : ''}>
                    <a href="#section">Episodes</a></li>  
                  
                </ul>
              </div>
              { section === 'origin' && (
                <section className="hero is-primary">
                  <div className="hero-body">
                    <p className="title">
                      {detail.origin?.name}
                    </p>
                    <p className="subtitle">
                      {detail.origin?.type}
                    </p>
                  </div>
                </section>
              ) }
              { section === 'location' && (
                <section className="hero is-link">
                  <div className="hero-body">
                    <p className="title">
                      {detail.location?.name}
                    </p>
                    <p className="subtitle">
                      {detail.location?.type}
                    </p>
                  </div>
                </section>
              ) }
              { section === 'episodes' && (
                detail.episodes.map( episode => <EpisodeItem key={episode.id} episode={episode} /> )
              ) }
            </Fragment>
          )}
        </div>
      </div>
      <button className="modal-close is-large" onClick={onClose} aria-label="close"></button>
    </div>
  )
}

export default CharacterDetail
