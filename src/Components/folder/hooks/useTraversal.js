



const useTraversal=()=>{

    const insertNode=(tree,folderId,item,isFolder)=>{


             console.log(tree,folderId,item,isFolder)
        if(tree.id ===  folderId  && tree.isFolder){
           
          tree.children.unshift({
            id: new Date().getTime(),
            name:item,
            children:[],
            isFolder:isFolder
          })



          console.log(tree)
          return tree
        }


        let latestNode =[]

        latestNode=  tree.children.map((childTree)=>{

            return insertNode(childTree,folderId,item,isFolder)
        })

        return {...tree,children:latestNode}
    }

    
    return {insertNode}
}

export default useTraversal