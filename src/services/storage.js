export const getStorage = () => {

    let local;

    if(JSON.parse(localStorage.getItem('patents')) == null)
    {
        return local = null;
    }
    
    local = JSON.parse(localStorage.getItem('patents'));

    return local;

}

export const setStorage = (response) => {

    let contentStorage = getStorage();

    if(contentStorage == null)
    {
        localStorage.setItem('patents', JSON.stringify(response));
    }


}