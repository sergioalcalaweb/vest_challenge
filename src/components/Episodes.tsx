import React, { FC } from 'react'
import useData from '../hooks/useData'
import EpisodeItem from './EpisodeItem';
import Pagination from './Pagination';

const Episodes: FC = () => {
  const { data:episodes, loading, changePage } = useData('episode');

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
      { episodes.results.map( episode => <EpisodeItem episode={episode} key={episode.id} /> ) }              
      <Pagination onChange={handleChange} next={episodes.info.next} prev={episodes.info.prev} />
    </section>
  )
}

export default Episodes
