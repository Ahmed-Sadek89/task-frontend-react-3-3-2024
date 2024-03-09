import { jwtDecode } from "jwt-decode";

export function getDecodedToken(token: string) {
    let decoded = {
        user: {
            id: 0,
            username: "",
            email: "",
            URLImage: "",
            created_at: ""
          }
      };
      try {
        decoded = jwtDecode(token) || {};
      } catch (error) {
        // console.log('JWT decoding error:', error);
        decoded.user =  {
            id: 0,
            username: "",
            email: "",
            URLImage: "",
            created_at: ""
          }
      }
      return decoded
}