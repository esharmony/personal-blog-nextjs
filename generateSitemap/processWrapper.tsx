export const Path = ():string  => {
    return process.cwd().toString();
} 
export const Domain = (): string => {
    return process.env.DOMAIN || "";
}
export const NodeEnv = () => {
    return process.env.NODE_ENV;
}