import React from 'react'

import {Button, TextField} from '@material-ui/core'

export default function SignIn() {
    return (
        <div>
            <form>
                <h5>Sign In</h5>
                <div>
                    <TextField type="email" label="Email" />
                </div>
                <div>
                    <TextField type="password" label="Password" />
                </div>
                <div>
                    <Button variant="contained" color="primary">Log In</Button>
            <div></div>
                </div>
            </form>
        </div>
    )
}
