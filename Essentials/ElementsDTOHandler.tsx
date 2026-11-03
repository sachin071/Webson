import { EventsType } from "./EventHandlers";

export type DivElementsDTO ={
    BindingBy? : boolean,
    Children : (string | any)[],
    ClassName? : string,
    Events?:EventsType,
    Name?: string,
    Properites?:HtmlElementProperties,
    Styling? : StylingProperties
}

export type DivElementReturnDTO ={
    TagName :string,
    BindingBy? : boolean,
    Children : (string | any)[],
    ClassName? : string,
    Events?:EventsType,
    Name?: string,
    Properites?:HtmlElementProperties,
    Styles? : StylingProperties
}



type HtmlElementProperties = {
    ref : React.Ref<any>
}
type StylingProperties = any;




export type InputElementDTO ={
    BindingBy? : boolean,
    ClassName? : string,
    Events?:EventsType,
    Name?: string,
    Properites?:InputElementProperties,
    Styling? : StylingProperties
}

export type InputElementReturnDTO = {
    TagName : string,
    BindingBy? : boolean,
    ClassName? : string,
    Events?:EventsType,
    Name?: string,
    Properites?:InputElementProperties,
    Styles? : StylingProperties
}


type InputElementProperties = {
    type? : "password" | "text" | "date" | "number" | "tel" | "email" | "file" ,
    ref? : React.Ref<any> ,
    placeholder? : string,
    required? : boolean,
    maxlength? : number,
    disabled? : boolean,
    accept? : string,
}






export type ImageElementDTO = {
    BindingBy? : boolean,
    ClassName? : string,
    Events?:EventsType,
    Name?: string,
    Properites:ImageElementProperties,
    Styling? : StylingProperties
}

export type ImageElementReturnDTO ={
    TagName : string,
    BindingBy? : boolean,
    ClassName? : string,
    Events?:EventsType,
    Name?: string,
    Properites:ImageElementProperties,
    Styles? : StylingProperties
}

type ImageElementProperties = {
    src : string ,
    ref? : React.Ref<any> ,
}

