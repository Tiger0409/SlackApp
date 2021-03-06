
import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SignUpForm = ({

    onSubmit,
    onChange,
    errors,
    user,
}) => (
    <Card className = "container">
        <form action="/" onSubmit={onSubmit} >
            <h2 className="card-heading">Sign Up</h2>
            {errors.summary && <p className="error-message">{errors.summary}</p>}
             }
             <div className = "field-line">
                <TextField 
                    floatingLabelText = "Name"
                    name = "name"
                    errorText={errors.name}
                    onChange={onChange}
                    value={user.email}
                />
             </div>
             <div className = "field-line">
                <TextField 
                    floatingLabelText="Password"
                    type="password"
                    name="password"
                    onChange = {onChange}
                    errorText={erors.password}
                    value={user.password}
                />
             </div>
             <div className ="button-line">
                <RaisedButton type = "submit" lavel="Create New Account"  primary/>
             </div>
             <CardText>Alredy have an account?<Link to={'/login'}>Log in </Link></CardText>
            </form>
    </Card>
);

// SignUpForm.PropTypes = {
//     onSubmit: PropTypes.func.isRequired,
//     onChange: PropTypes.func.isRequired,
//     erors: ProtoTypes.object.isRequired,
//     user: PropTypes.object.isRequired
// };

<SignUpForm
  onSubmit={(e) => console.log('submitted')}
  onChange={(e) => console.log('changed')}
  errors={{ email: 'Invalid' }}
  user={{ email: 'jane@doe.com', name: 'Jane Doe' }}
/>

export default SignUpForm;