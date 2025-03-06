import React from "react";
interface Props{
    id:number;
    image:string;
    name:string;
    types:string[];
}
export const Card: React.FC<Props>=(Props) =>{
    return <div className="w-2xs p-8">{Props.name}
        <img src ={Props.image}></img>
        </div>}