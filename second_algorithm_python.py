def convertScores(score):
    scoreValues = score.split(' ')
    return [int(scoreValues[0]),int(scoreValues[1])]

def whoIsTheWinner(file):
    try:
        path = './scores/{}'
        file = open(path.format(file))
        scores = file.read().split('\n')[1:]
        numericScores = list(map(convertScores,scores))
        differences = {}
        for score in numericScores:
            difference = score[0]-score[1]
            
            if difference >=0:
                winner=1
            else:
                winner=2
            score.append(winner)
            differences[abs(difference)]=score
        differencesKeys = differences.keys()
        maxKey = max(differencesKeys)
        output = str(differences[maxKey][2]) +" "+ str(maxKey)
        f= open("./scores/output.txt", "w") 
        f.write(output)
    finally:
        file.close()

whoIsTheWinner('score1.txt')