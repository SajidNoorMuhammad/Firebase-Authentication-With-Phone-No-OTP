import {
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    googleProvider,
    signInWithPopup,
    GoogleAuthProvider,
    RecaptchaVerifier,
    signInWithPhoneNumber,

} from "./firebase.js"

let sendOtp = () => {
    const appVerifier = window.recaptchaVerifier;
    let phone = document.getElementById("phone")
    signInWithPhoneNumber(auth, `+${phone.value}`, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            console.log("confirmationResult=>", confirmationResult)
        }).catch((error) => {
            console.log(error)
        });
}

let phoneBtn = document.getElementById("phoneBtn");
phoneBtn.addEventListener('click', sendOtp)

window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
    'size': 'normal',
    'callback': (response) => {
    },
    'expired-callback': () => {
    }
});




let verify = () => {
    let otp = document.getElementById("otp")
    confirmationResult.confirm(otp.value)
    .then((result) => {
        location.assign("https://sajidnoormuhammad.github.io/Quiz-App/")
    }).catch((error) => {
        console.log(error)
    });
}

let verifyBtn = document.getElementById("verifyOtp");
verifyBtn.addEventListener('click', verify)