import { jwtDecode } from "jwt-decode";

const decodeJwt = (token) => {
    const decoded = jwtDecode(token);
    console.log("Decoded Token:::", decoded)
    const { exp } = decoded;
    const date = new Date(exp);
    const currentTime = Date.now(); 
    console.log("TESTING", date, new Date(currentTime), currentTime > exp);
    return currentTime > exp;
}

export default decodeJwt;