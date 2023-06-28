(function () {

  const selectors = {
    wrapperSuccess: '[data-form-success]',
    wrapperError: '[data-form-error]',
  };

  const init = () => {
    // if the hash #success is set, scroll to the success message
    if (window.location.hash === '#success') {
      const wrapperSuccess = document.querySelector(selectors.wrapperSuccess);
      wrapperSuccess.scrollIntoView();
    }

    // if the hash #error is set, scroll to the error message
    if (window.location.hash === '#error') {
      const wrapperError = document.querySelector(selectors.wrapperError);
      wrapperError.scrollIntoView();
    }
  };
  init();
  
})();