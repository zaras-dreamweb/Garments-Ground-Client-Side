import { useEffect, useState } from "react"

const usePurchase = id => {
    const [purchase, setPurchase] = useState({});
    useEffect(() => {
        const url = `https://whispering-badlands-42201.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data));
    }, [id]);
    return [purchase, setPurchase];
}

export default usePurchase;