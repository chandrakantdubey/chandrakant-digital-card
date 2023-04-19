import email from '../imgs/email-icon.png'
import linkedin from '../imgs/linkedin-icon.png'
export default function Button(props){
    return(
        <div className="body--button">
            <a className="email"><img src={email}/><p>Email</p></a>
            <a className="linkedin"><img src={linkedin}/><p>Linkedin</p></a>
        </div>
    )
}