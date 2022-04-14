import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { showModal } from '../features/cartSlice'
import { useDispatch } from 'react-redux'

const Checkout = () => {
  const dispatch = useDispatch()

  // first name
  const [firstName, setFirstName] = useState('')
  const [firstNameDirty, setFirstNameDirty] = useState(false)
  const [firstNameError, setFirstNameError] = useState(
    'First name cannot be empty'
  )

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
    if (firstName.length < 1) {
      setFirstNameError('First name should have more than 1 char')
    } else {
      setFirstNameError('')
    }
  }
  // last name
  const [lastName, setLastName] = useState('')
  const [lastNameDirty, setLastNameDirty] = useState(false)
  const [lastNameError, setLastNameError] = useState(
    'Last name cannot be empty'
  )
  const handleLastName = (e) => {
    setLastName(e.target.value)
    if (lastName.length < 1) {
      setLastNameError('Last name should have more than 1 char')
    } else {
      setLastNameError('')
    }
  }
  // email
  const [email, setEmail] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailError, setEmailError] = useState('E-mail cannot be empty')
  const handleEmail = (e) => {
    setEmail(e.target.value)
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regEx.test(String(e.target.value).toLowerCase())) {
      setEmailError('E-mail format incorrect')
    } else {
      setEmailError('')
    }
  }
  // phone
  const [phone, setPhone] = useState('')
  const [phoneDirty, setPhoneDirty] = useState(false)
  const [phoneError, setPhoneError] = useState('Phone cannot be empty')
  const handlePhone = (e) => {
    setPhone(e.target.value)
    const regEx = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/
    if (!regEx.test(String(e.target.value).toLowerCase())) {
      setPhoneError('Phone format incorrect')
    } else {
      setPhoneError('')
    }
  }
  //blur handler
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'first-name':
        setFirstNameDirty(true)
        break
      case 'last-name':
        setLastNameDirty(true)
        break
      case 'e-mail':
        setEmailDirty(true)
        break
      case 'phone':
        setPhoneDirty(true)
        break
    }
  }

  //submit btn
  const [formValid, setFormValid] = useState(true)
  useEffect(() => {
    if (lastNameError || firstNameError || emailError || phoneError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [lastNameError, firstNameError, phoneError, emailError])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Wrapper className='section-center'>
      <section className='section-form'>
        <form onSubmit={handleSubmit} className='form-order'>
          <h3 className='form-title'>Make an order</h3>
          <div className='input-wrapper'>
            {/* first name */}
            <label name='first-name'>first name</label>
            <input
              name='first-name'
              type='text'
              placeholder='first-name'
              value={firstName}
              onChange={handleFirstName}
              onBlur={(e) => blurHandler(e)}
            />
            {firstNameDirty && firstNameError && (
              <div style={{ background: 'red' }}>{firstNameError}</div>
            )}
          </div>

          {/* last name */}
          <div className='input-wrapper'>
            <label name='last-name'>Last name</label>
            <input
              name='last-name'
              type='text'
              placeholder='last-name'
              value={lastName}
              onChange={handleLastName}
              onBlur={(e) => blurHandler(e)}
            />
            {lastNameDirty && lastNameError && (
              <div style={{ background: 'red' }}>{lastNameError}</div>
            )}
          </div>
          {/* e-mail */}
          <div className='input-wrapper'>
            <label name='e-mail'>E-mail</label>
            <input
              name='e-mail'
              type='email'
              placeholder='e-mail'
              value={email}
              onChange={handleEmail}
              onBlur={(e) => blurHandler(e)}
            />
            {emailDirty && emailError && (
              <div style={{ background: 'red' }}>{emailError}</div>
            )}
          </div>
          {/* phone */}
          <div className='input-wrapper'>
            <label name='phone'>Phone</label>
            <input
              name='phone'
              type='phone'
              placeholder='89004005050'
              value={phone}
              onChange={handlePhone}
              onBlur={(e) => blurHandler(e)}
            />
            {phoneDirty && phoneError && (
              <div style={{ background: 'red' }}>{phoneError}</div>
            )}
          </div>
          <button type='submit' className='order-btn' disabled={!formValid}>
            {!formValid ? (
              'order'
            ) : (
              <Link
                to='/'
                className='order-link'
                onClick={() => dispatch(showModal())}
              >
                Order
              </Link>
            )}
          </button>
        </form>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .section-form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
  }
  .form-order {
    width: 400px;
    text-align: center;
    border: 3px solid var(--black);
    background: var(--white);
    box-shadow: var(--shadow);
  }
  .form-title {
    background: #eebc1d;
    border-bottom: 3px solid var(--black);
    padding: 2rem 1rem;
    margin-bottom: 1rem;
  }
  .input-wrapper {
    position: relative;
    display: grid;
    width: 350px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  /*
  ================
   inputs
  ================
  */

  input {
    /* height: 25px; */
    padding: 5px;
    font-weight: 700;
    font-size: 1.1rem;
  }
  input::placeholder {
    font-weight: 400;
    font-style: italic;
  }
  input:focus {
    outline: none;
  }
  /*
  ================
   errors
  ================
  */
  .error {
    text-align: start;
    color: var(--red);
    display: none;
  }
  /*
  ================
   errors
  ================
  */
  label {
    text-transform: capitalize;
    text-align: start;
  }

  .order-btn {
    cursor: pointer;
    height: 55px;
    width: 350px;
    margin: 0 auto;
    color: var(--white);
    display: block;
    font-size: 1.25rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    background: #eebc1d;
    border: 3px solid var(--black);
    padding: 0.25rem 0.5rem;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  .order-btn:hover {
    transition: var(--transition);
    background: #ffd700;
  }
  .order-btn:disabled {
    background: var(--darkGrey);
  }
  .order-link {
    color: white;
  }
`

export default Checkout
