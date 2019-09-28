 export const required = value => {
     if(value) return undefined;
     return "Field is required"
 }
 
 export const maxLengthActionCreator = maxLength => value => {
     if (value && value.length <= maxLength) return undefined;
     return   `Max length is ${maxLength} symbols`
 }

