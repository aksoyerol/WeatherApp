import { ErrorModel } from "./ErrorModel";

export class ResponseModel<T>
{
 constructor(public data?:T, public error?:ErrorModel){
    
 }

 public check(datas?:T,errors?:ErrorModel){
    if(errors.code!=200){
        fail(errors)
    }
    return this.success(datas)
 }


 public success(datas:T){
    return datas
 }

 public fail(errors:ErrorModel) : ErrorModel{
    return errors
 }

 
}

