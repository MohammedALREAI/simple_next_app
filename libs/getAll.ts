
export const getShowcaseEntryIds = async () => {

    try {
        const  res = await fetch("https://www.bigcommerce.com/actions/bcCore/interview/getShowcaseEntryIds");
    
        const json = await res.json()
        
    
      return json
        
    } catch (error) {
        throw new Error("There is som  thing  error");
        
        
    }


    
}

export const getShowcaseEntryId = async (id:string) => {

    try {
        const  res = await fetch(`https://www.bigcommerce.com/actions/bcCore/interview/getShowcaseEntryById?id=${id}`);
    
        const json = await res.json()
        
    
      return json
        
    } catch (error) {
        throw new Error("There is som  thing  error");
        
        
    }


    
}


