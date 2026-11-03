import { DivElementsDTO, InputElementReturnDTO, InputElementDTO, ImageElementReturnDTO, ImageElementDTO } from "./ElementsDTOHandler";
import { DivElementReturnDTO } from "./ElementsDTOHandler";

export function DivElement(Elements : DivElementsDTO) :DivElementReturnDTO {
    return {
        TagName : 'div',
        Children : Elements.Children,
        BindingBy : Elements.BindingBy,
        Events : Elements.Events,
        Name : Elements.Name,
        ClassName : Elements.ClassName,
        Properites : Elements.Properites,
        Styles : Elements.Styling,
    }
}


export function InputElement(Elements : InputElementDTO) : InputElementReturnDTO{
    return {
        TagName : 'input',
        BindingBy : Elements.BindingBy,
        Events : Elements.Events,
        Name : Elements.Name,
        ClassName : Elements.ClassName,
        Properites : Elements.Properites,
        Styles : Elements.Styling,
    }
}

export function ImageElement(Elements : ImageElementDTO) : ImageElementReturnDTO{
    return {
        TagName : 'img',
        BindingBy : Elements.BindingBy,
        Events : Elements.Events,
        Name : Elements.Name,
        ClassName : Elements.ClassName,
        Properites : Elements.Properites,
        Styles : Elements.Styling,
    }
}

export function BindRefrence<T>(ref : React.Ref<T>){
    return {
        ref : ref
    }
}

