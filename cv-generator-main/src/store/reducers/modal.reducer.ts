import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface ModalProps {
    open: boolean;
    item: any;
    children: React.ReactNode;
}

const initialState: ModalProps = {
    open: false,
    item: undefined,
    children: undefined,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setOpen: (state, action: PayloadAction<boolean>) => {
            state.open = action.payload;
        },
        setItemEdit: (state, action: PayloadAction<any>) => {
            state.item = action.payload;
        },
        setChildren: (state, action: PayloadAction<React.ReactNode>) => {
            state.children = action.payload;
        }
    },
})

export const { 
    setOpen,
    setItemEdit,
    setChildren,
 } = modalSlice.actions

export const getOpen = (state: RootState) => state.modal.open;
export const getChildren = (state: RootState) => state.modal.children;
export const getItemEdit = (state: RootState) => state.modal.item;

export default modalSlice.reducer