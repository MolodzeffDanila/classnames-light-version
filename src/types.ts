export type ClassnamesObjType = Record<string, boolean | undefined | null>;
export type ClassnamesProps = string | ClassnamesObjType;
export type ClassnamesReturnType = string;
export type ClassnamesType = (
  ...props: ClassnamesProps[]
) => ClassnamesReturnType;
