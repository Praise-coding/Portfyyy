import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

export function usePagination(dataArray: Array<unknown>, param: string) {
    const searchParams = useSearchParams()
    const page = Number(searchParams.get(param))
    const length = dataArray.length
    const [smallestIndex, setSmallestIndex] = useState(0)
    const [largestIndex, setLargestIndex] = useState(5)

    useEffect(() => {
        if (page == 0) {
            setSmallestIndex(0)
            setLargestIndex(5)
            return
        }
        setSmallestIndex((page - 1) * 5)
        setLargestIndex(5 * page)
    }, [page]);

    return {
        pages: Math.ceil((length / 5) < 1 ? 1 : length / 5),
        dataArray: dataArray.slice(smallestIndex, largestIndex + 1),
        currentPage: page || 1,
        smallestIndex,
        largestIndex
    }
}