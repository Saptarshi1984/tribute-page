

import Link from "next/link";
import { ReactNode } from "react";


interface NavlinkProps {

    href: string;
    children: ReactNode;
    isActive: boolean;

}

export default function Navlink({href, children, isActive}: NavlinkProps) {

    
    return (  
        
           <li className="list-none hover:text-amber-300">
             <Link 
             href={href}
             className={`${isActive ? '!text-amber-500' : ''}`}
             >
             {children}
             </Link>
           </li>
        
                   

    )
}
