function viewCertificate(type) {
    const frame = document.getElementById('pdfFrame');
    const image = document.getElementById('certificateImage');
    const placeholder = document.getElementById('pdfPlaceholder');
    const certificates = {
        falah: {
            type: 'image',
            url: '../assets/images/certificates/falah-internship-certificate.png',
            alt: 'Sertifikat Praktik Kerja Industri Fayi Adli Nugroho dari PT Falah Inovasi Teknologi'
        },
        internship: {
            type: 'image',
            url: '../assets/images/certificates/pupr-praktik-kerja-lapangan.png',
            alt: 'Sertifikat Praktik Kerja Lapangan Fayi Adli Nugroho di Pusdatin PU'
        },
        cybermedia: {
            type: 'pdf',
            url: 'https://pdfobject.com/pdf/sample.pdf'
        }
    };

    if (!frame || !image || !placeholder) return;

    const placeholderText = placeholder.querySelector('span');
    const certificate = certificates[type];
    if (!certificate) {
        frame.removeAttribute('src');
        frame.classList.add('hidden');
        image.removeAttribute('src');
        image.classList.add('hidden');
        placeholderText.textContent = type === 'falah'
            ? 'File sertifikat belum ditambahkan'
            : 'Sertifikat tidak ditemukan';
        placeholder.classList.remove('hidden');
        document.querySelector('.pdf-viewer-container')
            ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }

    placeholderText.textContent = 'Pilih sertifikat untuk pratinjau';
    placeholder.classList.add('hidden');

    if (certificate.type === 'image') {
        frame.removeAttribute('src');
        frame.classList.add('hidden');
        image.src = certificate.url;
        image.alt = certificate.alt;
        image.classList.remove('hidden');
    } else {
        image.removeAttribute('src');
        image.classList.add('hidden');
        frame.src = certificate.url;
        frame.classList.remove('hidden');
    }

    document.querySelector('.pdf-viewer-container')
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
