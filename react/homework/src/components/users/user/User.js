import {Address} from "./address/Address";
import './User.css';

export function User({oneUser}){
    let {id,name,username,email,address}=oneUser;
    let array=[address];
    return(
        <div className={'oneUser'}>
           <h1>{id}-{name}-{username}</h1><h2>{email}</h2>
            {
               array.map(value => <Address address={value}/>)
            }
        </div>
    )
}