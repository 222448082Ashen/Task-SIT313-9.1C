import React from 'react';
import { Input, Button, Menu } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const HeaderBar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Failed to log out', error);
        }
    };

    return (
        <Menu secondary style={{
            top: '0px',
            margin: '0px',
            padding: '0px 15px',
            zIndex: '10',
            backgroundColor: 'white',
            borderBottom: '1px solid #abc'
        }}>
            <Menu.Item header as={"h3"}>
                <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                    DEV@Deakin
                </Link>
            </Menu.Item>
            <Menu.Menu style={{ padding: '10px 10px' }} position='right'>
                <Link to="/find-questions">
                    <Button style={{ margin: '0 5px' }} size='small'>Find Questions</Button>
                </Link>
                <Input style={{ margin: '0 5px' }} action={{ icon: 'search' }} size='small' placeholder='Search any item...' />
                {user ? (
                    <>
                        <Link to="/new-post">
                            <Button style={{ margin: '0 5px' }} size='small'>Post</Button>
                        </Link>
                        <Button style={{ margin: '0 5px' }} onClick={handleLogout} primary size='small'>Logout</Button>
                    </>
                ) : (
                    <Link to="/login">
                        <Button style={{ margin: '0 5px' }} primary size='small'>Login</Button>
                    </Link>
                )}
            </Menu.Menu>
        </Menu>
    );
}

export default HeaderBar;