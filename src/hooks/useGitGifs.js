import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";
export const useGitGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        load: true,
    });
    useEffect(() => {
        getGifs(category).then(images => {
            setState({data:images,load:false})
        }); 
    }, [category]);

    return state;
}
