import { useSelector } from "react-redux";
import type { RootState } from "../index";

export default function PageTitle() {
    const title = useSelector((state: RootState) => state.ui.title);

    return (
        <h1>{title}</h1>
    );
}
