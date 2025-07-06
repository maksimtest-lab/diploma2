import { Title } from "../components";
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/actions/actions';
import { useEffect } from 'react';

export function NewsPage() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setPageTitle('News'));
    }, [dispatch]); 

    return (
        <>
            <Title />
        </>
    )
}