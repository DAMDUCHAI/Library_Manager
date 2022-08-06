import Axios from "axios"
import { DOMAIN_LIBRARY } from "../util/constants/settingSystem"

export class baseServices {
    put = (url,model) => {
        return  Axios({
            url:`${DOMAIN_LIBRARY}/${url}`,
            method:'PUT',
            data:model,
            headers: {
                token: localStorage.getItem("token"),
              },
        }) 
    }

    post = (url,model) => {
        return Axios({
            url:`${DOMAIN_LIBRARY}/${url}`,
            method:'POST',
            data:model,
            headers: {
                token: localStorage.getItem("token"),
              },
        }) 
    }


    get = (url) => {
        return Axios({
            url:`${DOMAIN_LIBRARY}/${url}`,
            method:'GET',
            headers: {
                token: localStorage.getItem("token"),
              },
        })
    }

    delete = (url) => {
        return Axios({
            url:`${DOMAIN_LIBRARY}/${url}`,
            method:'DELETE',
            headers: {
                token: localStorage.getItem("token"),
              },
        })
    }
}