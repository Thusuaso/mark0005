  import Clarity from '@microsoft/clarity';


  export default defineNuxtPlugin((nuxtApp)=>{
    const projectId = "rqnl9u3tud"

    Clarity.init(projectId);
  });
