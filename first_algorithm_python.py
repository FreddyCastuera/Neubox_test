def remove_adyacent_duplicates(string):
    aux=''
    for index in range(len(string)-1):
        if(string[index]!= string[index+1]):
            aux+=string[index]
    return aux
def containsSubstring(string,substring):
    stringWithouAdjacentDuplicates = remove_adyacent_duplicates(string)
    if(stringWithouAdjacentDuplicates.find(substring)!=-1):
        return 'si'
    return 'no'

def hiddenInstruction(file):
    try:
        path='./messages/{}'
        file=open(path.format(file))
        formatedFile = file.read().split('\n')[1:]
        firstInstruction = formatedFile[0]
        secondInstruction = formatedFile[1]
        message = formatedFile[2]
        output = containsSubstring(message,firstInstruction)+'\n'+containsSubstring(message,secondInstruction)
        f= open("./messages/output.txt", "w") 
        f.write(output)
         
    finally:
        file.close()
        f.close()
hiddenInstruction('message1.txt')