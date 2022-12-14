//editTexts
export const editEmail = document.querySelector('#editEmail') //Login
export const editPassword = document.querySelector('#editPassword') //Login
export const editUsername = document.querySelector('#editUsername') //Login
export const editSendEmailTo = document.querySelector('#editSendEmailTo') //ForgotPassword
export const editSecurePassword = document.querySelector('#editSecurePassword') //ChangePassword
export const editConfirmPassword = document.querySelector('#editConfirmPassword') //ChangePassword
export const editUploadDocumentName = document.querySelector('#editUploadDocumentName') //Upload
export const editUploadDocumentUrl = document.querySelector('#editUploadDocumentUrl') //Upload
//editSelectors
export const editUploadSelect = document.querySelector('#editUploadTag'); //Upload
//buttons
export const buttonSignIn = document.querySelector('#buttonSignIn') //Login
export const buttonRegister = document.querySelector('#buttonRegister') //Login
export const buttonFPSubmit = document.querySelector('#buttonFPSubmit') //ForgotPassword
export const buttonSignOut = document.querySelector('#buttonSignOut') //Profile
export const buttonCPSubmit = document.querySelector('#buttonCPSubmit') //ChangePassword
export const buttonUploadDocument = document.querySelector('#buttonUploadDocument') //Upload
export const inputAvatar = document.querySelector('#inputAvatar') //Profile Picture
//regular text
export const textUserUsername = document.querySelector('#userUsername') //Profile
export const textUserEmail = document.querySelector('#userEmail') //Profile
export const EO1 = document.querySelector('#EO1') //OtherEssays
export const EO2 = document.querySelector('#EO2') //OtherEssays
export const EO3 = document.querySelector('#EO3') //OtherEssays
export const TRL1 = document.querySelector('#TRL1') //ToReviewList
export const TRL2 = document.querySelector('#TRL2') //ToReviewList
export const TRL3 = document.querySelector('#TRL3') //ToReviewList
export const FL1 = document.querySelector('#FL1') //FeedbackList
export const FL2 = document.querySelector('#FL2') //FeedbackList
export const FL3 = document.querySelector('#FL3') //FeedbackList
//images
export const imagePFP = document.querySelector('#imagePFP') //Profile Picture
//toast
let toastContainer;
export async function generateToast({
  message,
    background = '#00214d',
    color = '#fffffe',
    length = '3000ms',
  }){
    toastContainer.insertAdjacentHTML('beforeend', `<p class="toast" 
      style="background-color: ${background};
      color: ${color};
      animation-duration: ${length}">
      ${message}
    </p>`)
    const toast = toastContainer.lastElementChild;
    toast.addEventListener('animationend', () => toast.remove())
  }
(function initToast(){
document.body.insertAdjacentHTML('afterbegin', `<div class="toast-container"></div>
<style>
.toast-container {
position: fixed;
top: 1rem;
right: 1.5rem;
display: grid;
justify-items: end;
gap: 1.5rem;
}
.toast {
font-size: 1.5rem;
font-weight: bold;
line-height: 1;
padding: 0.5em 1em;
background-color: lightblue;
animation: toastIt 3000ms cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;
}
@keyframes toastIt {
0%,
100% {
    transform: translateY(-150%);
    opacity: 0;
}
10%,
90% {
    transform: translateY(0);
    opacity: 1;
}
}
</style>
`);
toastContainer = document.querySelector('.toast-container');
})()