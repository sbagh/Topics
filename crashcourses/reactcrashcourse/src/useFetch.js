import { useState, useEffect } from "react";

const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      fetch(url)
         .then((res) => {
            if (!res.ok) {
               throw Error("cannot reach the link");
            }
            return res.json();
         })
         .then((data) => {
            setIsLoading(false);
            setData(data);
            setError(null);
         })
         .catch((err) => {
            setIsLoading(false);
            setError(err.message);
         });

      return () => console.log("cleanup");
   }, [url]);
   return { data, isLoading, error };
};

export default useFetch;
