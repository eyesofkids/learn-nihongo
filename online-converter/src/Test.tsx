import React, { useRef } from 'react'

function Test() {
  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          ref={inputRef}
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3"></div>
      <button
        onClick={() => {
          inputRef?.current?.focus()
        }}
      >
        focus
      </button>
    </div>
  )
}

export default Test
