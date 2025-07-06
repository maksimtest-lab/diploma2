import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/actions/actions';
import { useEffect } from 'react';

export function Settings() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setPageTitle('Settings'));
    }, [dispatch]);

    return (
        <>
            settings
        </>
    )
}