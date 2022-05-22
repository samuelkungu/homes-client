import "./mailList.scss"

function MailList() {
    return (
        <div className='mail'>
            <h1 className="mail-title">Save time, save money!</h1>
            <span className="mail-desc">Sign up and we'll send the best deals to you</span>
            <div className="mail-input">
                <input type="text" placeholder='Enter your email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList