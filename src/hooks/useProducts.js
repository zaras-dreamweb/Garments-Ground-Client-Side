import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://whispering-badlands-42201.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return [products, setProducts];
}

export default useProducts;