import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCurrentPageToState} from "../../redux/reducers/userReducer";
import './PageToggler.scss'

const PageToggler = () => {

    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.users.currentPage)

    const totalPages = useSelector(state => state.users.totalPages)
    const pageToggler = (action) => {

        if(currentPage > totalPages) {
            dispatch(addCurrentPageToState(1))
        } else if (currentPage >= totalPages) {
            dispatch(addCurrentPageToState(totalPages))
        }

        switch (action){
            case 'plus':
                dispatch(addCurrentPageToState(currentPage + 1))
                break
            case 'minus':
                dispatch(addCurrentPageToState(currentPage - 1))
                break
            default:
                dispatch(addCurrentPageToState(1))
        }
    }

    return (
        <div className='page-togglers'>
            {currentPage !== 1
                ? <div className={'previous-page'} onClick={() => pageToggler('minus')}>Previous</div>
                : null
            }
            {currentPage !== totalPages
                ? <div className={'next-page'} style={{'marginLeft': 'auto'}} onClick={() => pageToggler('plus')}>Next</div>
                : null
            }
        </div>
    );
};

export default PageToggler;