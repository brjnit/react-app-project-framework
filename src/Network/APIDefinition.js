import { GET, POST, DELETE, PUT} from "./MethodType";

const apiList = {
    /*apiName: {
        path :  url,
        method : methodType,
        params : [params...]
    }*/
}    

export const getAPITemplate = (apiName) =>{
    return apiList[apiName];
}