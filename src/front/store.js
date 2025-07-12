import { json } from "react-router-dom";

export const initialStore=()=>{
  return{
    token:null,
    user:null,  
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    // case 'set_hello':
    //   return {
    //     ...store,
    //     message: action.payload
    //   };
      
    // case 'add_task':

    //   const { id,  color } = action.payload

    //   return {
    //     ...store,
    //     todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
    //   };
      
      case 'login_success':
      localStorage.setItem("token", action.payload.token)
      localStorage.setItem("user", JSON.stringify(action.payload.user))

       return {
        ...store,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated:true
       }

    
    default:
      throw Error('Unknown action.');
  }    
}
