import { useEffect } from "react"

const useTitle = (title) =>{
    useEffect( ()=>{
        document.title = `Learn English - ${title}`
    }, [title])
}
export default useTitle;