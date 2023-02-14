import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Form() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const handleInputChange = (e) => {
    if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
      setIsSubmitEnabled(true);
    } else {
      setIsSubmitEnabled(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const sId = "service_8mqji76";
    const tId = "template_0j02qlf";
    const key = "XFo9QuUc1kvRO9wq3";
    emailjs.sendForm(sId, tId, form.current, key)
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        setName("");
        setEmail("");
        setMessage("");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <label>Name</label>
      <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} onBlur={handleInputChange}  />
      <label>Email</label>
      <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={handleInputChange} />
      <label>Message</label>
      <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} onBlur={handleInputChange} placeholder="Your Message" />
      <input type="submit" value="SEND" disabled={!isSubmitEnabled} className="send" />
    </form>
  );
}
