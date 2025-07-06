import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/actions/actions.ts';

export function MainPage() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setPageTitle('Main Page'));
    }, [dispatch]);

    return (
        <>
            Main Page
        </>
    )
}