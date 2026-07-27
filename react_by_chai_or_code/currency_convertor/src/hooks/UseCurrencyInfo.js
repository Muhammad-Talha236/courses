import { useEffect, useState } from "react";

function useCurrencyInfo(initial) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then(res => res.json())
            .then(data => setData(data[currency]))
    }, [currency]);

    console.log(data);
    return data;
}

export default useCurrencyInfo;