import {HttpRequest} from '../protocols/http'
import {HttpResponse} from '../protocols/http'

export class SignUpController {
    handle (httpRequest: HttpRequest): HttpResponse {
        if(!httpRequest.body.name){
            return {
                statusCode: 400,
                body: new Error('Missing param: name')
            }
        }
        if(!httpRequest.body.email){
            return {
                statusCode: 400,
                body: new Error('Missing param: email')
            }
        }else{
            return {
                statusCode: 200,
                body: "Sucess"
            }
        }
        
    }
}
