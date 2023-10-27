import React,{useReducer} from "react";

// ส่งออกฟังก์ชันแบบเริ่มต้น ซึ่งรับ reducer, actions, และ initialState เป็นพารามิเตอร์
export default (reducer, actions, initialState) => {

    const Context = React.createContext() // สร้าง Context ใหม่

    // คอมโพเนนต์ Provider ที่จะใช้ในการ wrap รอบคอมโพเนนต์อื่น
    const Provider = ({children}) => {

        // ใช้ hook useReducer สร้าง state และ dispatch function
        const [state, dispatch] = useReducer(reducer, initialState)

        // สร้าง object เพื่อเก็บ actions ที่ผูกกับ dispatch function
        const boundActions = {};
        for (let key in actions){ // วนลูปผ่านทุก key ใน actions
            boundActions[key] = actions[key](dispatch) // ผูก action กับ dispatch
        }

        // ส่งคืนคอมโพเนนต์ Provider ที่มี value เป็น state และ boundActions
        return (
            <Context.Provider value={{state,...boundActions}}>
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider} // ส่งคืน Context และ Provider เพื่อให้สามารถใช้งานได้ภายนอก
}
