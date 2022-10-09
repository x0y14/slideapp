import {useAtom} from 'jotai'
import {atomWithImmer} from 'jotai/immer'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const countAtom = atomWithImmer(0)

interface PlayerProps {
    totalPageCount: number;
}

export const SlidePlayer = (props: PlayerProps) => {
    const [, setCount] = useAtom(countAtom)
    const decrement = () => setCount((c) => (
            (0 < c)
                ? c = c - 1
                : c
        )
    )
    const increment = () => setCount((c) => (
            (c < props.totalPageCount - 1)
                ? c = c + 1
                : c
        )
    )
    return (
        <div className={"w-full bg-blue-800 flex justify-center"}>
            <ArrowLeftIcon  onClick={decrement} className={"fill-white"} fontSize={"large"}>&larr;</ArrowLeftIcon>
            <ArrowRightIcon onClick={increment} className={"fill-white"} fontSize={"large"}>&rarr;</ArrowRightIcon>
        </div>
    )
}

interface PreviewProps {
    pages: string[]
}

export function SlidePreview(props: PreviewProps) {
    const [currentPageNo,] = useAtom(countAtom)
    return (
        <div className={"h-full w-full flex-1 flex border-2 justify-center items-center"}>
            <div className={"flex bg-amber-100"}>
                <div className={"text-2xl"}>page: {props.pages[currentPageNo]}</div>
            </div>
        </div>
    )
}