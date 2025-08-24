function applyAuthForm(form) {
  const loginText = form.dataset.authFormLoginText
  const resetText = form.dataset.authFormResetText
  const submitButton = form.querySelector('[data-auth-form-submit]')
  const showResetButton = form.querySelector('[data-auth-form-show-reset]')
  const hideResetButton = form.querySelector('[data-auth-form-hide-reset]')
  const passwordRow = form.querySelector('[data-auth-form-password-row]')
  const passwordInput = form.querySelector('[data-auth-form-password-input]')

  let isShowReset = false

  const showReset = () => {
    isShowReset = true
    passwordInput.value = ''
    passwordRow.setAttribute('hidden', '')
    showResetButton.setAttribute('hidden', '')
    hideResetButton.removeAttribute('hidden')
    submitButton.innerHTML = resetText
  }

  const hideReset = () => {
    isShowReset = false
    passwordInput.value = ''
    passwordRow.removeAttribute('hidden')
    hideResetButton.setAttribute('hidden', '')
    showResetButton.removeAttribute('hidden')
    submitButton.innerHTML = loginText
  }

  showResetButton.addEventListener('click', showReset)

  hideResetButton.addEventListener('click', hideReset)

  form.addEventListener('submit', () => {
    if (isShowReset) {
      hideReset()
    }
  })
}

function initAuthForm() {
  const elements = document.querySelectorAll('[data-auth-form]')

  if (elements) {
    elements.forEach(applyAuthForm)
  }
}

module.exports = { applyAuthForm, initAuthForm }
