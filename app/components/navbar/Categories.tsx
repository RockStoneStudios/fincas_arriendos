'use client'
import Container from "../Container"

import {TbBeach, TbMountain, TbPool} from 'react-icons/tb';
import {GiBarn, GiBoatFishing, GiForestCamp, GiIsland, GiWindmill} from 'react-icons/gi';
import {FaSkiing} from 'react-icons/fa';
import {IoIosAt} from 'react-icons/io'
import {MdOutlineVilla} from 'react-icons/md'
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label : 'Beach',
        icon : TbBeach,
        description : 'This property is close to the beach'
    },
     {
        label : 'Windmills',
        icon : GiWindmill,
        description : 'this property has windmills'
     },
     {
        label : 'Modern',
        icon : MdOutlineVilla,
        description : 'this property is modern!'
     },
     {
        label : 'CountrySide',
        icon : TbMountain,
        description : 'this property is the countryside!'
     },
     {
        label : 'Pools',
        icon : TbPool,
        description : 'this property has a pool!'
     },
     {
        label : 'Islands',
        icon : GiIsland,
        description : 'this property is on an island'
     },
     {
        label : 'Lake',
        icon : GiBoatFishing,
        description : 'this property is close to a Lake!'
     },
     {
        label : 'Skiing',
        icon : FaSkiing,
        description : 'this property has skiing activities'
     },
     {
        label : 'Camping',
        icon : GiForestCamp,
        description : 'this property has camping activities'
     },
     {
        label : 'Barns',
        icon : GiBarn,
        description : 'this property is in the barn'
     },
     {
        label : 'Lux',
        icon : IoIosAt,
        description : 'this property is on an island'
     },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if(!isMainPage){
        return null;
    }


  return (
//  <Container/>
    <div className="
        pt-4
        flex
        flex-row
        items-center
        justify-between
        overflow-x-auto
    ">
      {categories.map((item)=>(
         <CategoryBox key={item.label} label={item.label} selected={category=== item.label} icon={item.icon} />
      ))}
    </div>
  )
}

export default Categories