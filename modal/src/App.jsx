import { useState } from "react"
import CustomModal from "./CustomModal"
import { DialogModal } from "./DialogModal"

const App = () => {
  const [showCustomModal, setShowCustomModal] = useState(false)
  const [showDialogModal, setshowDialogModal] = useState(false)

  return (
    <>
      <button onClick={() => setShowCustomModal(true)}>
        Show Custom Modal
      </button>
      <br />
      <button onClick={() => setshowDialogModal(true)}>
        Show Dialog Modal
      </button>

      <CustomModal
        closeModal={() => setShowCustomModal(false)}
        isShown={showCustomModal}
      >
        <p>
          This is a <strong>CUSTOM</strong> modal
        </p>
        <button onClick={() => setShowCustomModal(false)}>Close</button>
      </CustomModal>

      <DialogModal
        closeModal={() => setshowDialogModal(false)}
        isShown={showDialogModal}
      >
        <p>
          This is a <strong>DIALOG</strong> modal
        </p>
        <button onClick={() => setshowDialogModal(false)}>Close</button>
      </DialogModal>
    </>
  )
}

export default App
