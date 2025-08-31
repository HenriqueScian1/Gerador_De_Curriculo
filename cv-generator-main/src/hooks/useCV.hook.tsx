import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { getCV, setCV } from "../store/reducers/cv.reducer";

const useCVHook = () => {
    const cv = useAppSelector(getCV)
    const dispatch = useAppDispatch();

    useEffect(() => {
        function getLocalData() {
            const item = localStorage.getItem('curriculumVitae')
            if (item == null) {
                return null;
            }

            const data = JSON.parse(item)
            dispatch(setCV(data));
        }

        if (cv.personalInfo.firstName === "") {
            getLocalData();
        }
    }, [cv.personalInfo.firstName]);

    return cv;
}

export default useCVHook;