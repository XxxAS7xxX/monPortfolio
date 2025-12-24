// hooks/useOverflow.js
import { useEffect } from 'react';

function useOverflow(overflowValue = 'auto') {
  useEffect(() => {
    document.body.style.overflowY = overflowValue;
    
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [overflowValue]);
}

export default useOverflow;