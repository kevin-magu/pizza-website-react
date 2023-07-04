import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact-page-container'>
        <h3>Leave Us a Message</h3>
        <form>
            <label for="name">Name</label>
            <input id='name' type="text" />
            <label>Email</label>
            <input type="text" />
            <label>Message</label>
            <textarea cols="30" rows="10"></textarea>
            <button>Send</button>
        </form>
    </div>
  )
}

export default Contact