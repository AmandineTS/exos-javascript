function crypter(source){
    chaineCryptee = "";
    //je boucle pour toutes les positions de ma chaine
    for(pos in source){
        //je récupére un caractère +1 
        let code = source.charCodeAt(pos) +1;
        //si le code est sup à 122 on revient à 97
        if(code > 122){ 
            //z remplacé par a
            code -= 26;
        }
        chaineCryptee += String.fromCharCode(code);
    }
    return chaineCryptee;
}