// Form Blur Event Listeners
document.getElementById("first-name").addEventListener("blur", validatefName)
document.getElementById("last-name").addEventListener("blur", validatelName)
document.getElementById("zip").addEventListener("blur", validateZip)
document.getElementById("email").addEventListener("blur", validateEmail)
document.getElementById("phone").addEventListener("blur", validatePhone)

function validatefName() {
  const fname = document.getElementById("first-name")

  const re = /^[a-zA-Z]{2,10}$/

  if (!re.test(fname.value)) {
    fname.classList.add("is-invalid")
  } else {
    fname.classList.remove("is-invalid")
  }
}
function validatelName() {
  const lname = document.getElementById("last-name")
  const re = /^[a-zA-Z]{2,10}$/

  if (!re.test(lname.value)) {
    lname.classList.add("is-invalid")
  } else {
    lname.classList.remove("is-invalid")
  }
}

function validateZip() {
  const zip = document.getElementById("zip")
  const re = /^[0-9]{5}(-[0-9]{4})?$/

  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid")
  } else {
    zip.classList.remove("is-invalid")
  }
}
function validateEmail() {
  const email = document.getElementById("email")
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

  if (!re.test(email.value)) {
    email.classList.add("is-invalid")
  } else {
    email.classList.remove("is-invalid")
  }
}
function validatePhone() {
  const phone = document.getElementById("phone")
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/
  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid")
  } else {
    phone.classList.remove("is-invalid")
  }
}
