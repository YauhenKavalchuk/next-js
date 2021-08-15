import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";

const Contact = ({ contact }) => (
  <>
    <Head>
      <title>Contact</title>
    </Head>
    <ContactInfo contact={contact} />
  </>
);

export default Contact;
