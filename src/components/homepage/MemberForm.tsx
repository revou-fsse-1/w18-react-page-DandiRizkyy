import { useState } from "react";

export const MemberForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name;
    console.log(field);

    if (field === "email") setEmail(event.target.value);
    if (field === "firstname") setFirstName(event.target.value);
    if (field === "lastname") setLastName(event.target.value);
  };
  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || email === undefined) {
      const field: string | undefined = "email must not empty";
      setEmailError(field);
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
    }

    if (!firstName || firstName === undefined) {
      const field: string | undefined = "firstname must filled in";
      setFirstNameError(field);
    }
    if (!lastName || lastName === undefined) {
      const field: string | undefined = "lastname must filled in";
      setLastNameError(field);
    }
    console.log({ email, firstName, lastName });
  };

  const isValidEmail = (value: string): boolean => {
    // Email validation logic using regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(value);
  };

  return (
    <div>
      {/* <p>state: {email}</p>
      <p>state: {firstName}</p>
      <p>state: {lastName}</p> */}
      <form onSubmit={handleForm}>
        <label htmlFor="member-email">User Email</label>
        <input
          onChange={handleInputChange}
          name="email"
          value={email}
          id="member-email"
          type="text"
        />
        {!email || !isValidEmail(email) ? (
          <span>{emailError}</span>
        ) : (
          <span></span>
        )}
        <label htmlFor="first-name">First Name</label>
        <input
          onChange={handleInputChange}
          name="firstname"
          value={firstName}
          id="first-name"
          type="text"
        />
        {!firstName ? <span>{firstNameError}</span> : <span></span>}
        <label htmlFor="last-name">Last Name</label>
        <input
          onChange={handleInputChange}
          name="lastname"
          value={lastName}
          id="last-name"
          type="text"
        />
        {!lastName ? <span>{lastNameError}</span> : <span></span>}
        <input type="submit" value="Add Member Information" />
      </form>
    </div>
  );
};
