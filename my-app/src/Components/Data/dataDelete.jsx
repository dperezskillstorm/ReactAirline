import { useState ,useEffect} from 'react';
import axios from 'axios';
//Will be use to delete any record in my tables
//Just Adjust the url to match controllers in db
export function dataDelete(url)
{
     axios.delete(url)
         .then(res => (res.data));
       


 }
