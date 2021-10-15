import React from "react";
import {logoutUser} from '../_actions/user_action';
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {withRouter} from 'react-router-dom';

const BtnLayout = styled.div`
  cursor:pointer;
`;



function LogoutBtn(props){
    const dispatch = useDispatch();

    const onLogOut = ()=>{
        dispatch(logoutUser())
        .then(response=>{
            if(response.payload.logoutSuccess){
                localStorage.removeItem("userId");
                props.history.push('/');
            }else{
                alert("로그아웃에 실패했습니다");
            }
        })
    }

    return (
        <BtnLayout onClick={onLogOut}>로그아웃</BtnLayout>
    );
}

export default withRouter(LogoutBtn);