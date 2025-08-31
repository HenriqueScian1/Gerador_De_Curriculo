import type { Identifier, XYCoord } from 'dnd-core'
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Layout } from "./styles"
import { DotsSixVertical } from 'phosphor-react'

export interface CardProps<T> {
    id: string
    index: number
    card: T,
    moveCard: (dragIndex: number, hoverIndex: number) => void
    data: (item: T, index: number) => JSX.Element
}

const ItemTypes = {
    CARD: 'card',
}

interface DragItem {
    index: number
    id: string
    type: string
}

export const Card = <T,>(props: CardProps<T>) => {
    const ref = useRef<HTMLDivElement>(null)
    const [{ handlerId }, drop] = useDrop<
        DragItem,
        void,
        { handlerId: Identifier | null }
    >({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: DragItem, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = props.index

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }

            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            // Determine mouse position
            const clientOffset = monitor.getClientOffset()

            // Get pixels to the top
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            // Time to actually perform the action
            props.moveCard(dragIndex, hoverIndex)

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { id: props.id, index: props.index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))

    return (
        <Layout style={{ opacity }} ref={ref} data-handler-id={handlerId}>
            <DotsSixVertical
                className={"move__icon"}
                size={24}
                color={"#ccc"}
            />
            {props.data(props.card, props.index)}
        </Layout>
    )
}
