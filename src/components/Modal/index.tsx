import { useEffect } from "react"
import { IoMdClose } from "react-icons/io"
import { styled } from "styled-components"

// Tipos
type ModalProps = {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  alt?: string
}

const Modal = ({ isOpen, onClose, imageUrl, alt = "Imagen" }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <IoMdClose />
        </CloseButton>
        <ModalImage src={imageUrl} alt={alt} />
      </ModalContent>
    </ModalBackdrop>
  )
}

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  position: relative;
  max-width: 1200px;
  width: 90%;
  background-color: #0f1417;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  border: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;

  &:hover {
    background-color: #333;
  }
`

export { Modal }
