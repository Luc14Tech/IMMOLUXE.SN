console.log("Script chargé !");
// Données pour la galerie photos
const galleryPhotos = [
    {
        url: "assets/images/IMMOLUXE.png",
        title: "IMMOLUXE.SN"
    },
    {
        url: "assets/images/grand-hotel-saint-louis.png",
        title: "Grand Hôtel à vendre sises à Saint Louis"
    },
    {
        url: "assets/images/img1.png",
        title: "Grand Hôtel"
    },
    {
        url: "assets/images/img2.png",
        title: "Immeuble en pleine ville"
    },
    {
        url: "assets/images/img3.png",
        title: "Villa R+2 de luxe à vendre sises aux Almadies, derrière Philippe Morris, à proximité de l'École Américaine"
    },
    {
        url: "assets/images/img4.png",
        title: "Résidence Sécurisée"
    },
    {
        url: "assets/images/img5.png",
        title: "Propriété Exclusive 5"
    },
    {
        url: "assets/images/img6.png",
        title: "Propriété Exclusive 6"
    },
    {
        url: "assets/images/img7.png",
        title: "Propriété Exclusive 7"
    },
    {
        url: "assets/images/img8.png",
        title: "Propriété Exclusive 8"
    },
    {
        url: "assets/images/img9.png",
        title: "Propriété Exclusive 9"
    },
    {
        url: "assets/images/img10.png",
        title: "Propriété Exclusive 10"
    },
];

// Données pour la galerie vidéos
const galleryVideos = [
    {
        url: "assets/videos/video.mp4",
        title: "Nous avons le plaisir de vous présenter notre nouveau programme immobilier Maison Merveille en cours de commercialisation sur Nguerigne. Ce complexe de prestige sera composé de sept villas haut de gamme allant de 537 à 1138 m2 sur deux niveaux. Ce projet répondant aux standards de qualité les plus élevés sera réalisé avec un très haut niveau de finition . La livraison est prévues au second semestre 2026 . Les appels de fond se feront au fur et à mesure de l'état d'avancement des travaux . Nous sommes à votre disposition pour vous procurer toutes les informations nécessaires et vous faire une présentation du projet à votre convenance."
    },
];

// Données pour les produits
const products = [
    {
        image: "assets/images/img17.jpg",
        zone: "Nguerigne",
        description: "Nous avons le plaisir de vous présenter notre nouveau programme immobilier Maison Merveille en cours de commercialisation sur Nguerigne. Ce complexe de prestige sera composé de sept villas haut de gamme allant de 537 à 1138 m2 sur deux niveaux. Ce projet répondant aux standards de qualité les plus élevés sera réalisé avec un très haut niveau de finition . La livraison est prévues au second semestre 2026 . Les appels de fond se feront au fur et à mesure de l'état d'avancement des travaux . Nous sommes à votre disposition pour vous procurer toutes les informations nécessaires et vous faire une présentation du projet à votre convenance."
    }
];

// Get DOM elements
const productsGrid = document.getElementById('productsGrid');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const whatsappBtn = document.getElementById('whatsappBtn');
const photoGallery = document.getElementById('photoGallery');
const videoGallery = document.getElementById('videoGallery');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeImageModal = document.getElementById('closeImageModal');
const partnerButtons = document.querySelectorAll('.partner-btn');
const partnerModal = document.getElementById('partnerModal');
const closePartnerModal = document.getElementById('closePartnerModal');
const partnerModalTitle = document.getElementById('partnerModalTitle');
const partnerForms = {
    commercial: document.getElementById('partnerFormCommercial'),
    promoteur: document.getElementById('partnerFormPromoteur'),
    proprietaire: document.getElementById('partnerFormProprietaire')
};
const clientForm = document.getElementById('clientForm');
const choosePaymentMethod = document.getElementById('choosePaymentMethod');
const paymentModal = document.getElementById('paymentModal');
const closeModal = document.getElementById('closeModal');
const paymentOptions = document.querySelectorAll('.payment-option');
const confirmPayment = document.getElementById('confirmPayment');
const paymentForm = document.getElementById('paymentForm');
const aiChatBtn = document.getElementById('aiChatBtn');
const aiChatModal = document.getElementById('aiChatModal');
const closeAiChat = document.getElementById('closeAiChat');
const aiChatMessages = document.getElementById('aiChatMessages');
const aiChatInput = document.getElementById('aiChatInput');
const sendAiMessage = document.getElementById('sendAiMessage');

let selectedPaymentMethod = null;

// Populate Products Grid
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'service-card';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.zone}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
        <h4 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.5rem;">${product.zone}</h4>
        <p style="font-size: 0.9rem; line-height: 1.4; color: var(--dark-color);">${product.description}</p>
    `;
    productsGrid.appendChild(productCard);
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// WhatsApp Button
whatsappBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const message = encodeURIComponent("Bonjour IMMOLUXE.SN ! Puis-je discuter avec quelqu'un ?");
    window.open(`https://wa.me/221772185138?text=${message}`, '_blank');
});

// Populate Photo Gallery
galleryPhotos.forEach(photo => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
        <img src="${photo.url}" alt="${photo.title}">
        <div class="gallery-overlay">
            <h4>${photo.title}</h4>
        </div>
    `;

    galleryItem.addEventListener('click', () => {
        openImageModal(photo.url, photo.title);
    });

    photoGallery.appendChild(galleryItem);
});

// Populate Video Gallery
galleryVideos.forEach(video => {
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';
    videoItem.innerHTML = `
        <video muted loop>
            <source src="${video.url}" type="video/mp4">
        </video>
        <div class="video-play-btn">
            <i class="fas fa-play"></i>
        </div>
    `;

    const videoElement = videoItem.querySelector('video');
    const playBtn = videoItem.querySelector('.video-play-btn');

    playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (videoElement.paused) {
            videoElement.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            videoElement.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    videoGallery.appendChild(videoItem);
});

// Image Modal Functions
function openImageModal(src, caption) {
    modalImage.src = src;
    modalCaption.textContent = caption;
    imageModal.style.display = 'flex';
}

closeImageModal.addEventListener('click', () => {
    imageModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        imageModal.style.display = 'none';
    }
});

// Partner Modal Logic
partnerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const partnerType = button.getAttribute('data-type');

        // Hide all forms
        Object.values(partnerForms).forEach(form => {
            form.classList.remove('active');
        });

        // Show the correct form and set title
        if (partnerType === 'commercial') {
            partnerForms.commercial.classList.add('active');
            partnerModalTitle.textContent = 'Devenir Partenaire Commercial';
        } else if (partnerType === 'promoteur') {
            partnerForms.promoteur.classList.add('active');
            partnerModalTitle.textContent = 'Devenir Partenaire Promoteur';
        } else if (partnerType === 'proprietaire') {
            partnerForms.proprietaire.classList.add('active');
            partnerModalTitle.textContent = 'Devenir Partenaire Propriétaire';
        }

        partnerModal.style.display = 'flex';
    });
});

closePartnerModal.addEventListener('click', () => {
    partnerModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === partnerModal) {
        partnerModal.style.display = 'none';
    }
});

// Partner Form Submissions
document.getElementById('commercialPartnerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    submitPartnerForm('commercial', this);
});

document.getElementById('promoteurPartnerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    submitPartnerForm('promoteur', this);
});

document.getElementById('proprietairePartnerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    submitPartnerForm('proprietaire', this);
});

function submitPartnerForm(type, form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Define labels for each form type
    const labels = {
        commercial: {
            company_name: 'Nom de l\'entreprise',
            contact_person: 'Personne de contact',
            company_phone: 'Téléphone',
            company_email: 'Email',
            company_website: 'Site web',
            company_experience: 'Expérience dans l\'immobilier',
            company_message: 'Message'
        },
        promoteur: {
            promoteur_name: 'Nom du promoteur',
            promoteur_phone: 'Téléphone',
            promoteur_email: 'Email',
            project_type: 'Type de projet',
            project_location: 'Localisation du projet',
            investment_amount: 'Montant d\'investissement prévu (FCFA)',
            promoteur_message: 'Message'
        },
        proprietaire: {
            owner_name: 'Nom du propriétaire',
            owner_phone: 'Téléphone',
            owner_email: 'Email',
            property_type: 'Type de bien',
            property_location: 'Localisation du bien',
            property_status: 'État du bien',
            owner_message: 'Message'
        }
    };

    const subject = encodeURIComponent(`Demande de partenariat ${type} - ${data.company_name || data.promoteur_name || data.owner_name}`);
    const body = encodeURIComponent(`
Bonjour IMMOLUXE.SN,

Je souhaite devenir partenaire ${type} avec les informations suivantes :

${Object.entries(data).map(([key, value]) => `${labels[type][key] || key}: ${value}`).join('\n')}

Je vous prie de bien vouloir examiner ma demande et me recontacter pour discuter des opportunités de collaboration.

Cordialement,
${data.contact_person || data.promoteur_name || data.owner_name}
    `);

    window.location.href = `mailto:smoctar729@gmail.com?subject=${subject}&body=${body}`;

    alert(`Merci pour votre demande de partenariat! Vous allez être redirigé vers votre client email. Veuillez valider l'envoi du message.`);

    form.reset();
    partnerModal.style.display = 'none';
}

// Client Form Submission
clientForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
        nom: document.getElementById('nom').value,
        prenom: document.getElementById('prenom').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value,
        adresse: document.getElementById('adresse').value,
        besoin: document.getElementById('besoin').value,
        message: document.getElementById('message').value,
        date: new Date().toLocaleString('fr-FR')
    };

    // Create email content
    const subject = encodeURIComponent(`Nouvelle demande client - ${formData.nom} ${formData.prenom}`);
    const body = encodeURIComponent(`
Bonjour IMMOLUXE.SN,

Je vous contacte via votre site web avec les informations suivantes :

Nom: ${formData.nom}
Prénom: ${formData.prenom}
Email: ${formData.email}
Téléphone: ${formData.telephone}
Adresse: ${formData.adresse}
Besoin: ${formData.besoin}
Message: ${formData.message}

Date de la demande: ${formData.date}

Je vous prie de bien vouloir me recontacter pour discuter de ma demande.

Cordialement,
${formData.nom} ${formData.prenom}
    `);

    // Redirect to email client
    window.location.href = `mailto:smoctar729@gmail.com?subject=${subject}&body=${body}`;

    // Show success message
    alert("Merci pour votre demande! Vous allez être redirigé vers votre client email. Veuillez valider l'envoi du message.");

    // Reset form
    clientForm.reset();
});

// Payment Modal Logic
choosePaymentMethod.addEventListener('click', () => {
    // Validate payment form first
    if (!paymentForm.checkValidity()) {
        alert("Veuillez remplir tous les champs obligatoires du formulaire de paiement.");
        paymentForm.reportValidity();
        return;
    }

    paymentModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    paymentModal.style.display = 'none';
});

paymentOptions.forEach(option => {
    option.addEventListener('click', () => {
        paymentOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        selectedPaymentMethod = option.getAttribute('data-method');
    });
});

confirmPayment.addEventListener('click', () => {
    if (!selectedPaymentMethod) {
        alert("Veuillez sélectionner un mode de paiement.");
        return;
    }

    // Collect payment form data
    const paymentData = {
        nom: document.getElementById('pay_nom').value,
        telephone: document.getElementById('pay_telephone').value,
        email: document.getElementById('pay_email').value,
        adresse: document.getElementById('pay_adresse').value,
        date: document.getElementById('pay_date').value,
        type: document.getElementById('pay_type').value,
        montant: document.getElementById('pay_montant').value,
        details: document.getElementById('pay_details').value,
        methode: selectedPaymentMethod
    };

    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(`
Bonjour IMMOLUXE.SN,

Je souhaite effectuer un paiement avec les détails suivants :

Nom et Prénoms: ${paymentData.nom}
Téléphone: ${paymentData.telephone}
Email: ${paymentData.email}
Adresse/Zone: ${paymentData.adresse}
Date de la demande: ${paymentData.date}
Type de transaction: ${paymentData.type}
Montant: ${paymentData.montant} FCFA
Méthode de paiement: ${paymentData.methode}
Détails: ${paymentData.details}

Je vous prie de bien vouloir me fournir les instructions pour finaliser ce paiement.

Cordialement,
${paymentData.nom}
    `);

    // Close modal
    paymentModal.style.display = 'none';

    // Open WhatsApp with the message
    window.open(`https://wa.me/221772185138?text=${whatsappMessage}`, '_blank');

    // Reset form
    paymentForm.reset();
});

// AI Chat Modal Logic
// Open AI Chat Modal
aiChatBtn.addEventListener('click', (e) => {
    e.preventDefault();
    aiChatModal.style.display = 'flex';
});

// Close AI Chat Modal
closeAiChat.addEventListener('click', () => {
    aiChatModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === aiChatModal) {
        aiChatModal.style.display = 'none';
    }
});

// Send message function
function sendMessage() {
    const message = aiChatInput.value.trim();
    if (message === '') return;

    // Add user message
    addMessage(message, 'user');

    // Clear input
    aiChatInput.value = '';

    // Generate bot response
    setTimeout(() => {
        const response = generateResponse(message);
        addMessage(response, 'bot');
    }, 500);
}

// Add message to chat
function addMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;
    aiChatMessages.appendChild(messageDiv);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
}

// Generate AI response based on keywords
function generateResponse(userMessage) {
    const message = userMessage.toLowerCase();

    // Services related
    if (message.includes('service') || message.includes('services')) {
        return "IMMOLUXE.SN offre une gamme complète de services immobiliers : vente de terrains, location d'appartements, vente de villas, négociations, conseils clients, conception architecturale, suivi des réalisations et consultation. Comment puis-je vous aider spécifiquement ?";
    }

    if (message.includes('vente') && message.includes('terrain')) {
        return "Nous proposons des terrains bien situés pour vos projets de construction. Nos terrains sont sélectionnés dans les meilleurs quartiers de Dakar et ses environs.";
    }

    if (message.includes('location') || message.includes('appartement')) {
        return "Pour la location d'appartements, nous proposons des biens modernes et bien équipés dans les meilleurs quartiers. Une avance de 3 mois de loyer est obligatoire, et une garantie locative est exigée.";
    }

    if (message.includes('villa') || message.includes('vente') && message.includes('villa')) {
        return "Nos villas de prestige offrent des équipements haut de gamme. Découvrez notre sélection exclusive de villas dans notre galerie photos.";
    }

    if (message.includes('conseil') || message.includes('conseils')) {
        return "IMMOLUXE.SN vous offre des conseils experts pour faire les bons choix immobiliers. Notre équipe vous accompagne dans toutes vos décisions.";
    }

    if (message.includes('formulaire') || message.includes('formulaires')) {
        return "IMMOLUXE.SN met à votre disposition des formulaires vous permettant de discuter avec nous en privé. Ces formulaires sont également sur le site. Notre équipe vous accompagne dans toutes vos décisions.";
    }

    if (message.includes('conception') || message.includes('architectural')) {
        return "Nous proposons des services de conception architecturale sur mesure pour vos projets de construction.";
    }

    if (message.includes('suivi') || message.includes('réalisation')) {
        return "Notre équipe assure un suivi complet de vos projets immobiliers du début à la fin.";
    }

    if (message.includes('consultation')) {
        return "Nos services de consultation incluent l'étude de marché et l'analyse de rentabilité pour vos investissements.";
    }

    // About section
    if (message.includes('vision') || message.includes('mission') || message.includes('objectif') || message.includes('à propos') || message.includes('about')) {
        return "IMMOLUXE.SN aspire à devenir la référence absolue dans l'immobilier de prestige à Dakar. Notre mission est d'accompagner nos clients avec professionnalisme et rigueur. Découvrez plus sur notre vision, mission et objectifs stratégiques dans la section 'À propos'.";
    }

    // Partners
    if (message.includes('partenaire') || message.includes('partenaires')) {
        return "IMMOLUXE.SN propose trois types de partenariats : Commercial (collaboration pour la vente), Promoteur (développement conjoint de projets), et Propriétaire (gestion professionnelle de vos biens). Contactez-nous pour en savoir plus.";
    }

    // Criteria
    if (message.includes('critère') || message.includes('criteria') || message.includes('condition')) {
        return "Pour les locations : avance de 3 mois obligatoire, garantie locative exigée, dossier complet requis. Nous acceptons les clients étrangers solvables. Visites sur rendez-vous uniquement.";
    }

    if (message.includes('avance') || message.includes('loyer')) {
        return "Pour les locations de maisons et appartements, une avance de 3 mois de loyer est obligatoire.";
    }

    if (message.includes('garantie')) {
        return "Une garantie locative est exigée pour toutes les locations chez IMMOLUXE.SN.";
    }

    if (message.includes('étranger') || message.includes('foreign')) {
        return "IMMOLUXE.SN accepte les clients étrangers solvables selon l'avis ou la décision du bailleur.";
    }

    // Contact
    if (message.includes('contact') || message.includes('téléphone') || message.includes('phone')) {
        return "Contactez-nous au +221 772185138 ou par email à smoctar729@gmail.com. Notre adresse : Liberté 6 Extension, en face de cimetière St Lazar.";
    }

    if (message.includes('email')) {
        return "Notre email : smoctar729@gmail.com";
    }

    if (message.includes('adresse') || message.includes('address')) {
        return "Notre adresse : Liberté 6 Extension, en face de cimetière St Lazar, Dakar.";
    }

    if (message.includes('pdg') || message.includes('ceo') || message.includes('directeur')) {
        return "Notre PDG est Moctar Sylla.";
    }

    if (message.includes('conciergerie')) {
        return "Découvrez notre service de conciergerie SUNRISE GROUPE : https://conciergerie.sunrise-groupe.com et le site principal : https://sunrise-groupe.com";
    }

    // Properties/Gallery
    if (message.includes('propriété') || message.includes('property') || message.includes('galerie') || message.includes('gallery')) {
        return "Découvrez notre sélection exclusive de propriétés dans la galerie photos : villas, hôtels, résidences sécurisées. Consultez également nos vidéos immobilières.";
    }

    if (message.includes('photo') || message.includes('image')) {
        return "Notre galerie photos présente nos propriétés exclusives : villas, hôtels, résidences. Cliquez sur les images pour les agrandir.";
    }

    if (message.includes('vidéo') || message.includes('video')) {
        return "Consultez nos vidéos immobilières pour des visites virtuelles de nos biens exceptionnels.";
    }

    // Payment
    if (message.includes('paiement') || message.includes('payment') || message.includes('payer')) {
        return "Pour effectuer un paiement, rendez-vous dans la section 'Paiement en Ligne'. Nous acceptons Orange Money, Wave et Carte Bancaire.";
    }

    // Default responses
    if (message.includes('bonjour') || message.includes('salut') || message.includes('hello')) {
        return "Bonjour ! Comment puis-je vous aider aujourd'hui ? Je peux vous renseigner sur nos services, propriétés, critères de location ou nos coordonnées.";
    }

    if (message.includes('merci') || message.includes('thank')) {
        return "De rien ! N'hésitez pas si vous avez d'autres questions sur IMMOLUXE.SN.";
    }

    if (message.includes('au revoir') || message.includes('bye')) {
        return "Au revoir ! À bientôt chez IMMOLUXE.SN.";
    }

    // Generic response
    return "Je suis l'assistant virtuel d'IMMOLUXE.SN. Je peux vous aider avec des informations sur nos services (vente, location, conseils), nos propriétés, nos critères de location, nos coordonnées ou nos partenariats. Quelle est votre question ?";
}

// Event listeners for sending messages
sendAiMessage.addEventListener('click', sendMessage);
aiChatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
