import React, { FC } from 'react'
import useData from '../hooks/useData'
import LocationItem from './LocationItem';
import Pagination from './Pagination';

const Locations: FC = () => {
  const { data:locations, loading, changePage } = useData('location');

  console.log(locations);
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
        { locations.results.map( location => <LocationItem location={location} key={location.id} /> ) }        
      </div>
      <Pagination onChange={handleChange} next={locations.info.next} prev={locations.info.prev} />
    </section>
  )
}

export default Locations
