import React, { FC } from 'react'
import { Episode } from '../types/Episode'


type Props = {
  episode: Episode
}


const EpisodeItem: FC<Props> = ({episode}) => {

  return (
    <div className='box'>
      <p className='title'>
        {episode.name}
      </p>
      <p className='subtitle'>
        {episode.episode} air on {episode.air_date}
      </p>
      
      
    </div>
  )
}

export default EpisodeItem
