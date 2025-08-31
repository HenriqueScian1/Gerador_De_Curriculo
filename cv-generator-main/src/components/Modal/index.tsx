import { createPortal } from "react-dom";
import { getOpen, getChildren, setOpen, setChildren, setItemEdit } from "../../store/reducers/modal.reducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Layout, Container, Backrop } from "./styles";
import { useEffect } from "react";

const Modal = () => {
    const isOpen = useAppSelector(getOpen)
    const children = useAppSelector(getChildren)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isOpen) {
            dispatch(setChildren(undefined))
            dispatch(setItemEdit(undefined))
        }
    }, [isOpen])


    const handleClose = () => {
        dispatch(setOpen(false))
    }

    return isOpen ? createPortal(
        <Layout>
            <Backrop onClick={() => handleClose()} />
            <Container>
                {children}
            </Container>
        </Layout>,
        document.body
    ) : undefined
}

export default Modal;