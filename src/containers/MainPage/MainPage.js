import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './MainPage.css'

const MainPage = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const inputted = state.inputted;
    const one = () => dispatch({type:'INPUT1', value:'1'});
    const two = () => dispatch({type:'INPUT2', value:'2'});
    const three = () => dispatch({type:'INPUT3', value:'3'});
    const four = () => dispatch({type:'INPUT4', value:'4'});
    const five = () => dispatch({type:'INPUT5', value:'5'});
    const six = () => dispatch({type:'INPUT6', value:'6'});
    const seven = () => dispatch({type:'INPUT7', value:'7'});
    const eight = () => dispatch({type:'INPUT8', value:'8'});
    const nine = () => dispatch({type:'INPUT9', value:'9'});
    const zero = () => dispatch({type:'INPUT0', value:'0'});
    const match = () => dispatch({type:'MATCH', value:''});
    const remove = () => dispatch({type:'REMOVE', value:''});
    const deleteDigit = () => dispatch({type:'DELETE'})

    const refresh = () => dispatch({type:'REFRESH', value:''});

    
    if (inputted.length > 4) {
        setTimeout(()=>{
            refresh();
        },1000)
    };

    if (state.granted) {
        setTimeout(() => {
            remove()
        }, 1000);
    } 

    if (state.denied) {
        setTimeout(() => {
            remove()
        }, 1000);
    } 

    const message = (
        state.granted ? 
        
        <div style={{
            display: state.granted ? 'block' : 'none',
            backgroundColor:'green',
            color:'white'
        }}>
            <strong>Access Granted</strong>
        </div>
        :
        <div style={{
            display: state.denied ? 'block' : 'none',
            backgroundColor:'red',
            color:'white'
        }}>
            <strong>Access Denied</strong>
        </div>
    );

    return (
        <div className="border mt-3" style={{width:'423px', margin:'auto'}}>
           <div style={{
               height:'100px',
               fontSize:'30px',
               backgroundColor: inputted.length > 4 ? 'red' : 'white'
            }}>
                 <div>{state.stars}</div>
                <div
                    style={{
                        display: inputted.length > 4 ? 'block' : 'none',
                        color : 'white'
                    }}>
                        passsword must be 4 digit
                </div>

                {message}

            </div>

           <div className='d-flex flex-wrap'>
           <button onClick={match}>
               E
           </button>
           <button onClick={zero}>
               0
           </button>

           <button onClick={deleteDigit}>
               DEl.
           </button>

           <button onClick={one}>
               1
           </button>

           <button onClick={two}>
               2
           </button>

           <button onClick={three}>
               3
           </button>

           <button onClick={four}>
               4
           </button>

           <button onClick={five}>
               5
           </button>

           <button onClick={six}>
               6
           </button>

           <button onClick={seven}>
               7
           </button>

           <button onClick={eight}>
               8
           </button>

           <button onClick={nine}>
               9
           </button>
           </div>
        </div>
    );
};

export default MainPage;