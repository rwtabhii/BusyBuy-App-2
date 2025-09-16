import { useState } from "react"
import "./registerPage.css"
import { SigninForm } from "../../component/signinForm/signinForm"
import { SignupForm } from "../../component/signupForm/signupForm"

export function RegisterPage() {
    const [signinShow, setSigninShow] = useState(true);

    return (
        <div className="registerpage">
            {signinShow ? <SigninForm /> : <SignupForm />}
            {/* Toggle link below the form */}
            <div className="switch-auth">
                {signinShow ? (
                    <p>
                        Don’t have an account?{" "}
                        <span onClick={() => setSigninShow(false)}>Sign Up</span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => setSigninShow(true)}>Sign In</span>
                    </p>
                )}
            </div>
        </div>
    )
}