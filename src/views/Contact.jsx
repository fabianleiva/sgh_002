import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="absolute inset-0 flex items-center justify-center overflow-hidden px-3 tracking-wider uppercase font-light ">
      <section className="text-left">
        <div>
          <p>Málaga 888 Of 33, Las Condes</p>
          <p>Santiago, Chile</p>
        </div>
        <div className="mt-6">
          <p>info@sgharquitectos.cl</p>
          <p>+562 2206 2101</p>
          <a
            href="https://www.instagram.com/schwember_garciahuidobro_arq/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#adadad] hover:text-[#242424]"
          >
            <FaInstagram className="text-lg mr-1" />
            schwember_garciahuidobro_arq
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
