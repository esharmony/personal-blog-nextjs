export const Path = ():string  => {
    return process.cwd().toString();
} 
export const Domain = (): string => {
    return process.env.DOMAIN as string;
}