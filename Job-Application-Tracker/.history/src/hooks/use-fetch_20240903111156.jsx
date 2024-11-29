const { useState } = require("react");

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

              const respo
        } catch (error) {

        }
    }
};
