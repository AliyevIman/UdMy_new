export const ChangeColorreducer =  (state={reng:"#000"},dispatch)=>{
    switch (dispatch.type) {
        case "Reng_Black":
            
           return {...state,reng:dispatch.payload}
    
        default:
            return state;
    }   
}

