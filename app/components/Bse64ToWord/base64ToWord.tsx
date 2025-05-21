import React, { useState } from 'react';
// import { saveAs } from 'file-saver';

export default function Base64ToWord(props: any) {  
  const [content, setContent] = useState('');

  const handleInputChange = (input: any) => {
    
     console.log("obj",input.target.files)
    if (input.target.files.length) {
        for (var i = 0; i < input.target.files.length; i++) {
            const reader = new FileReader();
            
            let name = input.target.files[i].name;
            let size = input.target.files[i].size;
            let visibleName = (input.target.files[i].visibleName) ? input.target.files[i].visibleName : input.target.files[i].name;
            let extension = input.target.files[i].name.split('.').pop();
            reader.readAsDataURL(input.target.files[i]);
            reader.onload = () => {
                let obj = {
                    model: {
                        name: name,
                        visibleName: visibleName,
                        size: size,
                        content: reader.result,
                        extension: extension,
                        id: 0
                    }
                }
                console.log("obj",obj)
                setContent(obj.model.content as string)
            }
        }
    }
    
  };

   const download = (content: any) => {
    // console.log("content", content)
    const base64 = content; //'application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,' + content;
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = base64;
    a.download = "s";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(base64);
    a.remove();
  }

  return (
    <div >
        <div>
        <input type="file" onChange={(e)=>handleInputChange(e)} />
      </div>
       <button type="button"></button>
         <button type="button" onClick={()=>download(content)}>Download</button>
    </div>
  );
}