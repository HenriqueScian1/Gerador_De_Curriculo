import { useAppDispatch } from '../../../store/hooks';
import { setOpen } from '../../../store/reducers/modal.reducer';
import { Layout } from './style';

interface ModalDeleteProps<T> {
    item: T
    callback: (value: T) => void
    title: string
    description: string
}

const ModalDelete = <T,>(props: ModalDeleteProps<T>) => {
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(setOpen(false))
    }

    const handleClickItem = () => {
        props.callback(props.item);
        dispatch(setOpen(false));
    }

    return (
        <Layout>
            <h1>{props.title}</h1>
            <p dangerouslySetInnerHTML={{__html: props.description}}></p>

            <footer>
                <button onClick={() => handleClose()}>
                    Cancelar
                </button>
                <button onClick={() => handleClickItem()}>
                    Deletar
                </button>
            </footer>
        </Layout>
    )
}

export default ModalDelete;