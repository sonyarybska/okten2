import {Geo} from "./geo/Geo";

export function Address({address}){
    let {street,suite,city,zipcode,geo}=address;
    let arrayGeo=[geo];
    return(
        <div>
           <h3>{street}, {suite}, {city}, {zipcode}</h3>
            {
                arrayGeo.map(value => <Geo geo={value}/>)
            }
        </div>
    )
}