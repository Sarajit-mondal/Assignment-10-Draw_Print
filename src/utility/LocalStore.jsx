const setLocalStoreThem = (data) =>{
 localStorage.setItem("them", JSON.stringify(data))
}

const getLocalStoreThem=()=>{
    return localStorage.getItem("them")
}



export {setLocalStoreThem,getLocalStoreThem}