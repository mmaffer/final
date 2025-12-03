import { useState, useEffect } from 'react';

// Este tipo genérico 'T' será reemplazado por IUser[] o IPost[]
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useFetchData<T>(fetchFunction: () => Promise<T>): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    // Definimos una función interna asíncrona
    const loadData = async () => {
      try {
        // No reseteamos el estado aquí, solo al inicio
        // setState({ data: null, loading: true, error: null }); 
        const data = await fetchFunction();
        setState({ data: data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error as Error });
      }
    };

    loadData();
    
    
  }, []); 

  return state;
}