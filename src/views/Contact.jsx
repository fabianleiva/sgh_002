import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="absolute inset-0 flex items-center justify-center overflow-hidden px-3 tracking-wider uppercase font-[supreme-book] ">
      <section className="text-left">
        <div>
          <p>Andres de Fuenzalida 17, oficina 52</p>
          <p>Providencia, Santiago. CHILE</p>
          <p>Zip 7510077</p>
        </div>
        <div className="mt-6">
          <p>contacto@sgh.cl</p>
          <a
            href="https://www.instagram.com/schwembergarciahuidobro/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#adadad] hover:text-[#242424]"
          >
            <FaInstagram className="text-lg mr-1" />
            schwembergarciahuidobro
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
