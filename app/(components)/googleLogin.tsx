import { FcGoogle } from "react-icons/fc";
import { auth } from "../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GOOGLELOGIN_API } from "../(api)/auth";
import { setDataToLocalStorage } from "../utils/auth";

export default function GoogleLogin() {

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user_email = result.user.email;
      console.log("🚀 ~ handleGoogleLogin ~ user_email:", user_email);

      if (user_email) {
        GOOGLELOGIN_API({
          email: user_email,
        })
          .then((response) => {
            if (response.data.status === true) {
              setDataToLocalStorage(
                "defender_userToken",
                response.data.body.tokens.ACCESS_TOKEN,
              );

              window.location.href = "/dashboard";
              toast.success("Login successful!");
            } else {
              toast.error(response.data.message || "Login failed");
              throw new Error("Failed to login");
            }
          })
          .catch((error) => {
            if (error.response && error.response.data) {
              toast.error(error.response.data.message);
            } else {
              toast.error("An error occurred during login");
            }
          });
      } else {
        toast.error("Login failed: User name or email is missing.");
      }
    } catch (error) {
      console.log("Error during Google login:", error);
      toast.error("An error occurred during Google login.");
    }
  };

  return (
    <div
      className="flex w-full cursor-pointer items-center justify-center space-x-4 rounded-lg border-2 border-[#8F8F8F] p-3"
      onClick={handleGoogleLogin}
    >
      <FcGoogle />
      <p>Continue with Google</p>
    </div>
  );
}
