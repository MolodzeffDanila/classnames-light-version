export type ClassnamesObjType = Record<string, boolean>;
export type ClassnamesProps = string | ClassnamesObjType;
export type ClassnamesReturnType = string;
export type ClassnamesType = (...props: ClassnamesProps[]) => ClassnamesReturnType;