import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const { 
    value: enteredName, 
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedhandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '')

  const { 
    value: enteredEmail, 
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedhandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'))
  
  let formIsValid = false

  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmmisionHandler = event =>{
    event.preventDefault()

    if(!enteredNameIsValid && !enteredEmailIsValid){
      return;
    }

    console.log(enteredName)

    resetNameInput()
    resetEmailInput()
  }

  const nameInputClasses = nameInputHasError 
  ? 'form-control invalid' 
  : 'form-control'

  const emailInputClasses = emailInputHasError
  ? 'form-control invalid' 
  : 'form-control'

  return (
    <form onSubmit={formSubmmisionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' id='name' 
          onChange={nameChangedhandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
       {nameInputHasError && <p className='error-text'>Name must not be empty.</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailChangedhandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
       {emailInputHasError && <p className='error-text'>Use valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
