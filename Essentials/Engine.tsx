"use client"
import { HtmlElements } from "./EngineInterface";
import React from "react";




export default function RenderPage(elements: HtmlElements) {

    function StartChildrensRender(NodeList: (HtmlElements | string)[]) : React.ReactNode[] {
        
        var ChildrenRenderString :any = null
        
        if(NodeList){
            ChildrenRenderString = NodeList.map((innerNode,index) => {
            if (typeof innerNode === "string") {
                return innerNode
            }
            else {
                return renderElement(innerNode,index)
            }
        })
        }

        return ChildrenRenderString

    }


    function renderElement(node: HtmlElements , key? : number): React.ReactNode {
        if(node.BindingBy || node.BindingBy === undefined){
            return React.createElement(
            node.TagName,{
                key: key,
                ...node.Events,
                className : node.ClassName,
                ...node.Properites,
                name: node.Name,
                style : node.Styles
            },
            StartChildrensRender(node.Children)
            )
        }
        
    }


    return (
        <div className="w-screen h-screen">
            {renderElement(elements)}
        </div>
    );
}