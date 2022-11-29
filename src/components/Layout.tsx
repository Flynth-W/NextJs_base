import { ThemeChanger } from "./Themes/button"
import Fth from "./ff"
export default function Layout(props:any){
  return (
  <div>
    <main>
        {props.children}
    </main>
    <ThemeChanger/>
    < Fth/ >
  </div>
      )
}

