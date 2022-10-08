import { useAtom } from 'jotai'
import { atomWithImmer } from 'jotai/immer'

const countAtom = atomWithImmer(0)

interface PlayerProps {
    totalPageCount: number;
}
export const SlidePlayer = (props: PlayerProps) => {
    const [, setCount] = useAtom(countAtom)
    const decrement = () => setCount((c) => (
        (0 < c)
            ? c = c-1
            : c
        )
    )
    const increment = () => setCount((c) => (
        (c < props.totalPageCount-1)
            ? c = c+1
            : c
        )
    )
    return (
        <div>
            <button onClick={decrement}>&larr;</button>
            <button onClick={increment}>&rarr;</button>
        </div>
    )
}

interface PreviewProps {
    pages: string[]
}
export function SlidePreview(props: PreviewProps) {
    const [currentPageNo, ] = useAtom(countAtom)
    return (
        <div>
        <div>slide page: {props.pages[currentPageNo]}</div>
        </div>
    )
}