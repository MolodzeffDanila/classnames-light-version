import { ClassnamesObjType, ClassnamesType } from "./types";

const buildStrFromClassObject = (obj: ClassnamesObjType) => {
  let classString = "";

  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      classString += `${key} `;
    }
  });

  return classString;
};

export const classnames: ClassnamesType = (...props) => {
  let classString = "";

  props.forEach((item) => {
    if (typeof item === "string") {
      classString += `${item} `;
    } else {
      classString += buildStrFromClassObject(item);
    }
  });

  return classString;
};
