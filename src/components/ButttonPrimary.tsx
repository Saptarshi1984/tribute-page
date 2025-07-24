'use client'

import { useState } from "react"
import { Button, Stack } from "@chakra-ui/react"
import { useRouter } from "next/navigation";

interface ButtonPrimaryProps {
    btnText:string;
    src:string;
}

const ButttonPrimary = ({btnText, src}: ButtonPrimaryProps) => {

    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false);
    
  return (

    <div>
         <Button colorPalette={'teal'} variant={'outline'} loading={loading} onClick={() => {setLoading(!loading); router.push(src)}}>
            {btnText}
        </Button>      
    </div>
  )
}



export default ButttonPrimary
