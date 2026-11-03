"use client"
import RenderPage from "@/Essentials/Engine";
import { HtmlElements } from "@/Essentials/EngineInterface";
import { DivElement,  ImageElement, InputElement } from "@/Essentials/ElementsHandler";
import { MouseEnterEvent } from "@/Essentials/EventHandlers";
import { code, String2 } from "./String";
import { Children } from "react";



export default function Home() {


  var Logo  = ImageElement({
    Properites : {
      src : '/globe.svg'
    },
    Styling:{
      height:30,
      width:30,
      marginRight:10
    }
  })


  var Navbar : HtmlElements = DivElement({
    Children : [Logo ,"Webson"],
    Styling:{
      width:"100%",
      height:"75px",
      background:"#ffff0088",
      justifyContent:"start",
      alignItems:"center",
      display:"flex",
      paddingLeft : "20px",
      fontSize : 30,
      fontWeight : "extraBold"
    }
  })


  var BodyElement : HtmlElements = DivElement({
    Children:[ DivElement({
      Children:[
        DivElement({
          Children :[String2 ],
          ClassName : "flex-1 h-full border-r-[0.5px] border-white text-white justify-center p-[30px] whitespace-pre-wrap" 
        }),
        DivElement({
          Children : [{
            TagName:"code",
            Children :[code]
          }],
          ClassName : "flex-1 h-full justify-center p-[30px] whitespace-pre-wrap overflow-y-scroll"
        })
      ],
      ClassName : "max-w-[1200px] w-full h-full flex pt-[5%]"
    })],
    ClassName : 'w-full h-[85%] flex justify-center'
    
  })


  var elements: HtmlElements =
    DivElement({
      Children: [Navbar , BodyElement],
      Styling:{
        width:'100%',
        height:'100%',
        background:'#222222'
      },
      Events: { ...MouseEnterEvent(() => { console.log("Working") }) }
    })



  return RenderPage(elements)
}
