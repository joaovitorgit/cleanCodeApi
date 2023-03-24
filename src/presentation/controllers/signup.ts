import { HttpRequest, HttpResponse, EmailValidator, Controller} from '../protocols'
import { MissingParamError, InvalidParamError  } from '../erros'
import { badRequest, serverError } from '../helpers/http-helper'

export class SignUpController implements Controller{
    private readonly emailValidator: EmailValidator
    constructor ( emailValidator: EmailValidator){
        this.emailValidator = emailValidator
    }
    handle (httpRequest: HttpRequest): HttpResponse {
        try{
            const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
            for (const field of requiredFields){
                if(!httpRequest.body[field]){
                    return badRequest( new MissingParamError(field))
                }
            }
            const isValid = this.emailValidator.isValid(httpRequest.body.email)
            if(!isValid){
                return badRequest(new InvalidParamError('email'))
            }
            return {
                statusCode: 500,
                body: serverError()
            }
        } catch(error){
            return serverError()
        }  
        
    }
} 
