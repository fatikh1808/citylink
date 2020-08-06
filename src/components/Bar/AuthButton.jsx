import React from "react";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import {orange} from "@material-ui/core/colors";
import {Link} from "react-router-dom";

const AuthButton = (props) => {

    const {
        isAuthenticated,
        handleLogout
    } = props;

    if (isAuthenticated) {
        return (
            <button className={'auth_icon'} onClick={handleLogout}>
                <PermIdentityIcon style={{fontSize: 30, color: orange[500]}}/>
            </button>
        )
    } else {
        return (
            <Link className={'header_inner_section_auth'} to={'/auth'}>
                Вход | Регистрация
            </Link>
        )
    }
}
export default AuthButton;