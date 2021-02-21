// import React, { useState, useContext } from 'react'

// //in Context we join the functionality from single files
// const AppContext = React.createContext();

// const AppProvider = ({children}) => {

//     const [email, setEmail] = useState('');
//     const [textArea, setTextArea] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('hello nerd');
    
//         if (!email || !textArea){
//             console.log('uzupełnij dane')
//         } else {
//             setEmail(e.value);
//             setTextArea(e.value);
//         }
    
//         console.log(setEmail);
    

//     return <AppContext.Provider value={{
//         email, setEmail, textArea, setTextArea,
//         handleSubmit
//     }}>
//         {children}</AppContext.Provider>
// }

// //custom hook 
// //react hook's name must start from use
// export const useGlobalContext = () => {
//     return useContext(AppContext)
// }}

// export {AppContext, AppProvider}

