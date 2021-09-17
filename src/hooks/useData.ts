import { useEffect, useState } from 'react'
import axios from 'axios';


type APIResponse = {
  info: {
    count: number,
    pages: number,
    next?: string,
    prev?: string,     
  },
  results: Array<any>
};

const INITIAL_STATE = {
  info:{
    count:0,
    pages:0
  },
  results:[]
}

const URL: string = 'https://rickandmortyapi.com/api/';

const useData = (endpoint : string = 'character') => {

  const [data, setData] = useState<APIResponse>(INITIAL_STATE);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    
    const getInfo = async () => {
      const { data: response } = await axios.get(`${URL}${endpoint}`);      
      setLoading(false);
      setData(response);
    }

    getInfo();
    
  }, [endpoint])

  const changePage = async (page: string) => {
    setLoading(true);
    const { data: response } = await axios.get(page);
    setLoading(false);
    setData(response);
  }

  return {
    data,
    loading,
    changePage
  }
}

export default useData
