import { Navigation } from "../components";
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/actions/actions';
import { useEffect } from 'react';

export function ArticlesPage() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setPageTitle('Articles'));
    }, [dispatch]);

    return (
        <>
            <Navigation />

            1111
        </>
    )
}