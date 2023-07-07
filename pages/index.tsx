import React, { useEffect } from 'react';
import { useFundDetail } from './detail/hooks/useFundDetail';

export default function index() {
  const data = useFundDetail();
  useEffect(() => {
    console.log(data);
  }, []);
  return <div>index</div>;
}
