//esta funcion remueve los caracteres adjacentes duplicados
function remove_adyacent_duplicates(string){
    const without_adyacent_duplicates = Array.from(string).reduce((acum,char,index,arr)=>{
      if(char!==arr[index+1]){
        return acum+char
      }
      else return acum
    },'')
    return without_adyacent_duplicates
  }
  //esta funcion verifica si un string (una vez removidos los caracteres adyacentes duplicados) contiene un substring
  function verifyInclusion(string,substring){
    const without_adyacent_duplicates = remove_adyacent_duplicates(string)
    return without_adyacent_duplicates.includes(substring)
  }

  const fs = require('fs')

fs.access('./messages/message1.txt',err=>{
    if(err){
        throw new Error('no encontramos el archivo que desea abrir')
    }
    console.log('archivo encontrado correctamente')
    fs.readFile('./messages/message1.txt','utf-8',(err,data)=>{
        if(err){
            throw new Error('ocurrio un error al leer el archivo')
        }
        const formatedData = data.split('\n').slice(1)
        const firstInstruction = formatedData[0]
        const secondInstruction = formatedData[1]
        const message = formatedData[2]

        console.log(verifyInclusion(message,firstInstruction)?'si':'no')
        console.log(verifyInclusion(message,secondInstruction)?'si':'no')

    })
})
