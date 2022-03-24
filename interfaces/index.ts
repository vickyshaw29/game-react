export interface IRoute {
    name: string;
    path: string;
    exact: boolean;
    component: (props: any) => any
    props?: any
}

export interface ButtonProps {
    name : string;
    color:string;
    variant : string;
    disabled : boolean;
    className : string;
    onClick :()=>void
}