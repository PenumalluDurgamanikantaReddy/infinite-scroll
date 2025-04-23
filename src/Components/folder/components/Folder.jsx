import React, { useState } from "react";
import './folder.css'
function Folder({ item,handleInsertNode }) {
  const [expand, setExpand] = useState(false);

  const [input, setInput] = useState({
    visible: false,
    isFolder: null,
  });


  const addFolderorFile=(e)=>{

    if(e.keyCode === 13 && input.visible){

        handleInsertNode(item.id,e.target.value,input.isFolder)
        setInput({...input,visible:false})
        
    }
  }

  if (item.isFolder) {
    return (
      <div>
        <div
          className="folder"
          onClick={() => {
           
            setExpand(!expand);
          }}
          style={{ cursor: "pointer", display: "flex",gap:2 }}
        >
          <span>📁{item?.name}</span>
          <div>
            <button
              onClick={() => {
                setInput({ visible: true, isFolder: false });
              }}
              
            >
              Add File
            </button>
            <button
              onClick={() => {
                setInput({ visible: true, isFolder: true });
              }}
            >
              Add Folder
            </button>
          </div>
        </div>
        {input.visible && (
          <input
            onBlur={(e) => {
              setInput({ ...input, visible: false });
              console.log(e.target.value.length)
              if(e.target.value.length > 0){
                // addFolderorFile(e)
              }
            
            }}
            onKeyDown={addFolderorFile}
            autoFocus
          />
        )}

        <div
          style={
            expand ? { display: "block", marginLeft: 6 } : { display: "none" }
          }
        >
          {item.children.map((child) => {
            return <Folder item={child} handleInsertNode={handleInsertNode}   />;
          })}
        </div>
      </div>
    );
  }
  else {
    return <div className="file">📄 {item?.name}</div>;
  }
}

export default Folder;
