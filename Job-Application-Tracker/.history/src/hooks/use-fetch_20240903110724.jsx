const { useState } = require("react");

const useFetch = (cb, Option = []) => {
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(null);
    const [error, setError]

    const { session } =useSession();
}
