import React from 'react'
import CertificationCard from './CertificationCard';
import CSSCertificate from "../assets/img/CSSCertificate.png";
import JavascriptCertificate from "../assets/img/JavascriptCertificate.png";
import JavascriptAlgosAndDSCertificate from "../assets/img/JavascriptAlgosAndDSCertificate.png";
import HackerRankIcon from "../assets/img/HackerRankIcon.png";
import Freecodecamplogo from "../assets/img/fcc_secondary_small.png";
import SectionHeader from './SectionHeader';

const Certifications = () => {
  return (
    <>
      <SectionHeader sectionId="certifications" title="Certifications" />
      <section        
        className="md:py-20 px-2 ">
        <div className="max-w-[1000px] mx-auto md:grid grid-cols-3 gap-5">
          <CertificationCard
            title="Javascript Algos and DS"
            cardIcon={Freecodecamplogo}
            cardImage={JavascriptAlgosAndDSCertificate}
            link={"https://www.freecodecamp.org/certification/fcccb8e99b5/javascript-algorithms-and-data-structures"}
          />
          <CertificationCard
            title="Javascript"
            cardIcon={HackerRankIcon}
            cardImage={JavascriptCertificate}
            link={JavascriptCertificate}
          />
          <CertificationCard
            title="CSS"
            cardIcon={HackerRankIcon}
            cardImage={CSSCertificate}
            link={CSSCertificate}
          />
        </div>
      </section>
    </>
  )
}

export default Certifications