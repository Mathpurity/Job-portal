const { useState } = require("react");
import second from ''

const useFetch = (cb, Option = []) => {
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const { session } =useSession();

    const fn = async(...args)=> {
        setLoading(true);
        setError(null);

        try {
            const supabaseAccessToken = await session.getToken({
                template: "supabase",
              });

              const response = await cb(supabaseAccessToken, Option, ...args);
              setData(response);
              setError(null);
        } catch (error) {
            setError(error)
        }finally {
            setLoading(false);
        }
    };

    return { fn, data, loading, error};
}
