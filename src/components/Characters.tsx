import React, { FC } from 'react'
import useData from '../hooks/useData'
import CharacterItem from './CharacterItem';
import Pagination from './Pagination';

const Characters: FC = () => {
  const { data:characters, loading, changePage } = useData();

  const handleChange = (page: string) => {
    changePage(page);
  }

  if(loading) {
    return (
      <progress className="progress is-small is-primary" max="100">15%</progress>
    )
  }
  return (
    <section className='section'>
      <div className='columns is-multiline is-centered'>
        { characters.results.map( character => {
          return (
            <div className='column is-one-third' key={character.id}>
              <CharacterItem character={character} />
            </div>
          )
        } ) }        
      </div>
      <Pagination onChange={handleChange} next={characters.info.next} prev={characters.info.prev} />
    </section>
  )
}

export default Characters
