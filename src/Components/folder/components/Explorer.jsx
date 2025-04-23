

import React, { useState } from 'react'
import { foldersData } from '../data'
import Folder from './Folder'
import useTraversal from '../hooks/useTraversal'
function Explorer() {


    const [data,setData]  = useState(foldersData)
   
    const {insertNode}  = useTraversal()

    const insertNodehandler=(folderId,item,isFolder)=>{


        console.log(folderId,item,isFolder)
        const newData = insertNode(data,folderId,item,isFolder)
        console.log(newData)
        setData(newData)
    }

  return (
    <div>


       

    
            <Folder  item={data}  handleInsertNode={insertNodehandler}/>
        
    
    </div>
  )
}

export default Explorer