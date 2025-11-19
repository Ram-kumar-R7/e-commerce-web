import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let fetchApi = async () => {
      try {
        let response = await axios.get(url);
        setProduct(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, []);
  return { product, error, isLoading };
}

export default useFetch;
