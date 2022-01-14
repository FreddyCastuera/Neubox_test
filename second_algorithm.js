const fs = require('fs')

fs.access('./scores/score1.txt',err=>{
    if(err){
        throw new Error('no encontramos el archivo que desea abrir')
    }
    console.log('archivo encontrado correctamente')
    fs.readFile('./scores/score1.txt','utf-8',(err,data)=>{
        if(err){
            throw new Error('ocurrio un error al leer el archivo')
        }
        console.log(data.split('\n'))
        const formatedData = data.split('\n')
        const size = parseInt(formatedData[0])
        const scores = formatedData.slice(1,formatedData.length-1).map(item=>item.split(' ').map(player=>parseInt(player)))
        console.log(size)
        console.log(scores)
        const winners = scores.reduce((acum,score)=>{
            const difference = score[0]-score[1]
            let winner = (difference>=0)?'1':'2'
            const absDifference = Math.abs(difference)
            return {...acum,[absDifference]:[...score,winner]}
        },{})
        console.log(winners)
        const maxDifference = Math.max(...Object.keys(winners))
        const absoluteWinner = `${winners[maxDifference][2] } ${maxDifference} `
        console.log(absoluteWinner)
    })
})