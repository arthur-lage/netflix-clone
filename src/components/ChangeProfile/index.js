import React from 'react';
import './styles.css'

//eslint-disable-next-line
export default () => {
    return(
        <div className="changeProfile">
            <h2>Quem está assistindo?</h2>

            <div className="profiles">
                <div className="profile">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                    <span>User 1</span>
                </div>
                <div className="profile">
                    <img src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg" alt="" />
                    <span>User 2</span>
                </div>
                <div className="profile">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" />
                    <span>User 3</span>
                </div>
                <div className="profile">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="" />
                    <span>User 4</span>
                </div>
                <div className="addProfile">
                    <i className="fas fa-plus-circle"></i>
                    <p>Add Profile</p>
                </div>
            </div>

            <a className="manageProfiles" href="/profiles">MANAGE PROFILES</a>
        </div>
    )
}