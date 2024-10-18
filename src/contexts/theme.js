import {useState , createContext , useContext} from 'react'
 
export const themeContext=createContext({
 themeMode:"light",
 darkMode: ()=>{},
 lightMode: ()=>{}
})
// create context me default value dai jae  skti h.
// craete context ki initial stage  me  bhi kuch values hm usko  de  skte h.
// we  want default value  present  in  this. object dege hm 
//jb  bhi koi  context ko call krega  hme  theme  bhi mil jayega  or  2 methods bhi mil jayege
// alsoit  clarifies  that , ki  hm createContext me  variables  function kuch  bhi  de  skte  h, sirf  states hi  nhi.

export const ThemeProvider= themeContext.Provider;
// hm themeContext.provider yha  se  bhi export kr  skte h unless usko alg class me  likhne se.
// ThemeProvider lekr  hm  components  ko  wrap kr  dege.

export const useTheme=()=>{
    return (
       useContext(themeContext)
    )
}
// apna  ek  customHook bnayege jha  hmne  useContext hook ka use kr  ke themeContext me  jo bhi h  uske  return krba  skte h.
// toh !st project me  jo 3  kam hmne  alg  alg project  me  kia  bo hm yha   ek  hi  file  me  sum up  kr ke  export kr  dege.
// jb  bhi  hme  kisi value  ka access chai themeContext ki  toh hm useTheme() ka  use kr  ke  values bha se hm extract kr lege.

// production me  kam  ese hi is  trh se kia jata h.

// this  is  also a  syntax which people  use.
