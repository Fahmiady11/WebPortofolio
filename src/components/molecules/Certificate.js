import React, { useState } from 'react';
import ruangguru from '../../assets/image/sertifikat/RG.png';
import hackerank from '../../assets/image/sertifikat/hackerank.png';
import aws from '../../assets/image/sertifikat/aws.png';
import bdpw from '../../assets/image/sertifikat/BDPW.png';
import cisco from '../../assets/image/sertifikat/cisco.png';
import dartdico from '../../assets/image/sertifikat/dartdico.png';
import fedico from '../../assets/image/sertifikat/FEDico.png';
import flutter from '../../assets/image/sertifikat/flutter.jpg';
import freecodeCamp from '../../assets/image/sertifikat/freecodeCamp.png';
import jsdico from '../../assets/image/sertifikat/jsdico.png';
import git from '../../assets/image/sertifikat/git.png';
import kursusJs from '../../assets/image/sertifikat/kursusJs.png';
import pelHim from '../../assets/image/sertifikat/pelHim.png';
import prodis from '../../assets/image/sertifikat/prodis.png';
import pythonsolo from '../../assets/image/sertifikat/Python_certificate.jpg';
import reactProgate from '../../assets/image/sertifikat/react.png';
import pythonDico from '../../assets/image/sertifikat/pythonDico.png';
import reactdico from '../../assets/image/sertifikat/reactdico.png';
import solid from '../../assets/image/sertifikat/solid.png';
import trust from '../../assets/image/sertifikat/trust.png';
import uxdesign from '../../assets/image/sertifikat/uxdesign.png';
import progateReact from '../../assets/image/sertifikat/progateReact.jpg';

import ImageCertif from '../atoms/ImageCertif';
import FsLightbox from 'fslightbox-react';
export default function Certificate() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }
  return (
    <>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          ruangguru,
          hackerank,
          aws,
          bdpw,
          cisco,
          dartdico,
          fedico,
          flutter,
          freecodeCamp,
          jsdico,
          git,
          kursusJs,
          pelHim,
          prodis,
          pythonsolo,
          reactProgate,
          pythonDico,
          reactdico,
          solid,
          trust,
          uxdesign,
        ]}
        slide={lightboxController.slide}
      />
      <div className="flex flex-col mb-20 sm:mb-0 md:flex-row flex-wrap gap-5 md:gap-7 items-center justify-center md:justify-start">
        <ImageCertif img={ruangguru} openLight={openLightboxOnSlide} no={1} />
        <ImageCertif img={hackerank} openLight={openLightboxOnSlide} no={2} />
        <ImageCertif img={aws} openLight={openLightboxOnSlide} no={3} />
        <ImageCertif img={bdpw} openLight={openLightboxOnSlide} no={4} />
        <ImageCertif img={cisco} openLight={openLightboxOnSlide} no={5} />
        <ImageCertif img={dartdico} openLight={openLightboxOnSlide} no={6} />
        <ImageCertif img={fedico} openLight={openLightboxOnSlide} no={7} />
        <ImageCertif img={flutter} openLight={openLightboxOnSlide} no={8} />
        <ImageCertif
          img={freecodeCamp}
          openLight={openLightboxOnSlide}
          no={9}
        />
        <ImageCertif img={jsdico} openLight={openLightboxOnSlide} no={10} />
        <ImageCertif img={git} openLight={openLightboxOnSlide} no={11} />
        <ImageCertif img={kursusJs} openLight={openLightboxOnSlide} no={12} />
        <ImageCertif img={pelHim} openLight={openLightboxOnSlide} no={13} />
        <ImageCertif img={prodis} openLight={openLightboxOnSlide} no={14} />
        <ImageCertif img={pythonsolo} openLight={openLightboxOnSlide} no={15} />
        <ImageCertif
          img={reactProgate}
          openLight={openLightboxOnSlide}
          no={16}
        />
        <ImageCertif img={pythonDico} openLight={openLightboxOnSlide} no={17} />
        <ImageCertif img={reactdico} openLight={openLightboxOnSlide} no={18} />
        <ImageCertif img={solid} openLight={openLightboxOnSlide} no={19} />
        <ImageCertif img={trust} openLight={openLightboxOnSlide} no={20} />
        <ImageCertif img={uxdesign} openLight={openLightboxOnSlide} no={21} />
        <ImageCertif
          img={progateReact}
          openLight={openLightboxOnSlide}
          no={22}
        />
      </div>
    </>
  );
}
