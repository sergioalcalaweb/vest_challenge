import React, { FC } from 'react'

type Props =  {
  next: string | undefined,
  prev: string | undefined,
  onChange: (e : string) => void;
}

const Pagination : FC<Props> = ({onChange, prev, next}) => {
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <button 
        disabled={!prev}  
        onClick={ () => onChange(prev ? prev : '')  }
        className="pagination-previous">Previous</button>
      <button  
        disabled={!next}  
        onClick={ () => onChange(next ? next: '')  }
        className="pagination-next">Next page</button>
    </nav>
  )
}

export default Pagination
