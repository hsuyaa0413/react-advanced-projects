import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

export const DialogModal = ({ isShown, closeModal, children }) => {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog == null) return

    if (isShown) {
      dialog.showModal()
    } else {
      dialog.close()
    }
  }, [isShown])

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog == null) return

    dialog.addEventListener("close", closeModal)

    return () => {
      dialog.removeEventListener("close", closeModal)
    }
  }, [closeModal])

  return createPortal(
    <dialog ref={dialogRef}>{children}</dialog>,
    document.querySelector("#modal-container")
  )
}
