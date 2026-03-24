import { ClassnamesObjType, ClassnamesType } from "./types";

//const buildStrFromClassObject = (obj: ClassnamesObjType) => obj.reduce()

export const classnames : ClassnamesType = (...props) => {
    let classString = '';

    props.forEach((item) => {
        if(typeof item === "string"){
            classString += `${item} `;
        }else if(){

        }
    })

    return classString;
}

console.log(classnames("QWE", "WWDQ", "type tt", {
    "key": true
}))