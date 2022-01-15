const fs = require('fs')
function convertStringIntoObject(data){
    const formatedData = data.split('\n')
    const size = parseInt(formatedData[0])
    //convertimos el arreglo formado por strings("score1 score2") 
    //a un arreglo compusesto por otros arreglos con los 
    //valores numericos de dichos scores
    const scores = formatedData.slice(1,formatedData.length-1).map(item=>item.split(' ').map(player=>parseInt(player)))
    //convertimos el arreglo en un objecto donde las llaves 
    //seran el valor absoluto de la diferencias entre los scores
    // de los dos jugadores
    const winners = scores.reduce((acum,score)=>{
        const difference = score[0]-score[1]
        let winner = (difference>=0)?'1':'2'
        const absDifference = Math.abs(difference)
        return {...acum,[absDifference]:[...score,winner]}
    },{})
    return winners
}

function whoIsTheWinner(file){
    fs.access(`./scores/${file}`,err=>{
        if(err){
            throw new Error('no encontramos el archivo que desea abrir')
        }
        console.log('archivo encontrado correctamente')
        fs.readFile(`./scores/${file}`,'utf-8',(err,data)=>{
            if(err){
                throw new Error('ocurrio un error al leer el archivo')
            }
            const winners = convertStringIntoObject(data)
            const maxDifference = Math.max(...Object.keys(winners))
            const output = `${winners[maxDifference][2] } ${maxDifference} `
            
            fs.writeFile(`./scores/results.txt`, output,  (err) => {
                if (err) throw new Error('ocurrio un error al crear el archivo con los resultados');
                    console.log('Guardamos los resultados correctamente');
              }); 
        })
    })
}
whoIsTheWinner('score1.txt')