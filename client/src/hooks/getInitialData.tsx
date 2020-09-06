import  {  useState, useEffect } from "react";
import axios from "axios";

interface TimeResponse {
    properties: {
        epoch: {
            description: number;
            type: string;
        }
    },
    required: Array<string>,
    type: string;
}

export const useInitialData = (): [TimeResponse, string | null, boolean, boolean] => {
    const [currentServerTime, setCurrentServerTime] = useState<TimeResponse>({
        properties: {
            epoch: {
                description: 0,
                type: "",
            }
        },
        required: [""],
        type: "",
    });
    const [apiMetrics, setApiMetrics] = useState<string | null>(null);
    const [hasError, setHasError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasLoaded, setHasLoaded] = useState<boolean>(false);

    const fetchData = async () => {
        const options = {
            headers: {
                "Authorization": "mysecrettoken"
            }
        };
        try {
            setIsLoading(true);
            const time = await (await axios.get('http://localhost:3000/time', options)).data;
            const metrics = await (await axios.get('http://localhost:3000/metrics', options)).data;

            setCurrentServerTime(time);
            setApiMetrics(metrics);
            setIsLoading(false);
            setHasLoaded(true);
        } catch (error) {
            console.log(error);
            setHasError(true);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData()
        }, 30000)
        return () => clearInterval(interval);
    }, [hasLoaded])

    return [currentServerTime, apiMetrics, hasError, isLoading];
};