import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Legal Analysis`
            ;
    }, [title])
};
export default useTitle;
