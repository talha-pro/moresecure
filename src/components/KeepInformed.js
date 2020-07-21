import React from "react"

const KeepInformed = () => {
  return (
    <div className="keep">
      <div className="keep__text">Keep me informed</div>
      <input
        className="keep__input"
        type="email"
        placeholder="Your Email"
        required
      />
    </div>
  )
}

export default KeepInformed
