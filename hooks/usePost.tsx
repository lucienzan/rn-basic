import { useEffect, useState } from "react";
import  axios from "axios";

const useGetPosts = (url: string) => {
  const [data, setData] = useState<Post[] | undefined>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setLoading(true);
    axios.get(url,{signal})
      .then(res => {
        setData(res.data);
      }).catch(err => {
        console.error(err);
        setError(true);
      }).finally(()=> {
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
};

export { useGetPosts }