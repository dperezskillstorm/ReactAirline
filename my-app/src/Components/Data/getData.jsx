import { useState ,useEffect} from 'react';
import axios from 'axios';
export function GetData(url)
{
    const [data, setData] = useState([]);

    //on mount will fetch data

    useEffect(() => {
     axios.get(url)
         .then(res => setData(res.data));


 },[''])

 return data;

}


export function GetDataById(url,key)
{
    const [data, setData] = useState([]);

    //on mount will fetch data

    useEffect(() => {
        console.log("getting url: " +url+key)
     axios.get(url+key)
         .then(res => setData(res.data));


 },[key])

 return data;

}

