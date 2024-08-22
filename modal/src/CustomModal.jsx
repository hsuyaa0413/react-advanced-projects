import { useEffect } from "react"
import { createPortal } from "react-dom"

const CustomModal = ({ closeModal, isShown, children }) => {
  useEffect(() => {
    function handler(e) {
      if (e.key === "Escape") closeModal()
    }

    document.addEventListener("keydown", handler)

    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [closeModal])

  return createPortal(
    <div className={`modal-overlay ${isShown && "show"} `}>
      <div className="modal">{children}</div>
    </div>,
    document.querySelector("#modal-container")
  )
}

export default CustomModal
