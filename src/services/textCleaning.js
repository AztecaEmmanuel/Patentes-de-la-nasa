const textCleaning = text => {

    
    if(text.includes('<span class="highlight">'))
    {
        let borrado;
        borrado = text.replace(/<span class="highlight">/gi,'');
        text = borrado.replace(/<\/span>/gi,'');
    }

    if(text.includes('<sup>'))
    {
        let borrado;
        borrado = text.replace(/<sup>/gi,'');
        text = borrado.replace(/<\/sup>/gi,'');
    }

    return text;

}

export default textCleaning;