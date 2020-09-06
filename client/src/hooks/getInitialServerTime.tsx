import { useState, useEffect } from "react";
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

export const useServerTime = (): [TimeResponse, boolean, boolean] => {
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
    const [hasSTError, setHasSTError] = useState<boolean>(false);
    const [isSTimeLoading, setIsSTimeLoading] = useState<boolean>(false);
    const [hasSTLoaded, setHasSTLoaded] = useState<boolean>(false);

    const fetchData = async () => {
        const options = {
            headers: {
                "Authorization": "mysecrettoken"
            }
        };
        try {
            setIsSTimeLoading(true);
            const time = await (await axios.get('http://localhost:3000/time', options)).data;

            setCurrentServerTime(time);
            setIsSTimeLoading(false);
            setHasSTLoaded(true);
        } catch (error) {
            console.log(error);
            setHasSTError(true);
            setIsSTimeLoading(false);
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
    }, [hasSTLoaded])

    return [currentServerTime, hasSTError, isSTimeLoading];
};