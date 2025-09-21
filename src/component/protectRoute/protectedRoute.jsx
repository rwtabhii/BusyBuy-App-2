import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/authContext/authContext";


export function ProtectRoute({ children }) {
    const{login} = useAuthValue()
    const navigate = useNavigate()
    if (!login){
        return navigate("/")
    }
        return children;
}  