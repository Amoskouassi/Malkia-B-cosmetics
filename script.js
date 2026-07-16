/* ===== LOCALSTORAGE WRAPPER ===== */
function lsGet(k, def){
  try{ const v = localStorage.getItem(k); return v !== null ? JSON.parse(v) : def; }catch(e){ return def; }
}
function lsSet(k, v){
  try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){}
}
function lsGetRaw(k, def){
  try{ const v = localStorage.getItem(k); return v !== null ? v : def; }catch(e){ return def; }
}
function lsSetRaw(k, v){
  try{ localStorage.setItem(k, v); }catch(e){}
}

/* ===== I18N ===== */
const LANG = { current: lsGetRaw('malkia_lang', 'fr') };
const TR = {
  fr: {
    nav: { home:'Accueil', products:'Produits', story:'Notre histoire', shops:'Boutiques', contact:'Contact',
      body:'Corps', face:'Visage', fragrance:'Parfums', wellness:'Bien-être', account:'Mon compte',
      cart:'Panier', team:'Équipe' },
    hero: { title:["L'Éclat de la","Reine en Vous"], subtitle:"Des rituels de beauté artisanaux, inspirés par la richesse de l'Afrique.",
      cta:"Découvrir la collection", s1:"Rituel Corps", s2:"Soin Visage", s3:"Parfums Signature", s4:"Bien-être Essentiel",
      cta1:"Découvrir", cta2:"En savoir plus",
      slide0_tag:"Since 2015 · Livraison mondiale", slide0_title:"L'Art de la Beauté Africaine",
      slide0_text:"Des soins premium inspirés des rituels ancestraux.",
      slide1_tag:"Nouvelle Collection", slide1_title:"Soin Visage & Corps",
      slide1_text:"Une gamme complète pour révéler votre éclat naturel.",
      slide2_tag:"Parfums Signature", slide2_title:"L'Élégance en Flacon",
      slide2_text:"Des fragrances inspirées par les notes envoûtantes de l'Afrique.",
      slide3_tag:"Rituels Bien-être", slide3_title:"Prenez Soin de Vous",
      slide3_text:"Des rituels de beauté pensés pour votre bien-être au quotidien." },
    home: { latest:"Dernières Créations", see_all:"Voir toute la boutique", story:"Notre histoire",
      story_h:"Un visionnaire, une mission", story_p1:"Je suis Hamin Banga, fondateur de Malkia B Cosmetics. Mon parcours m'a appris que la vraie beauté réside dans la confiance en soi. J'ai créé cette marque pour offrir à chaque femme les clés de son éclat, à travers des soins premium, authentiques et accessibles. Aujourd'hui, Malkia B rayonne depuis Bukavu jusqu'à l'international.",
      story_p2:"Chaque produit que nous proposons est le fruit d'une sélection rigoureuse. Mon équipe et moi mettons un point d'honneur à choisir des formules qui allient efficacité, sécurité et élégance. Notre succès, je le dois à la confiance de milliers de femmes qui ont choisi la beauté souveraine.",
      since:"Depuis", delivery:"Livraison",
      join:"Rejoignez le Cercle Malkia", join_p:"Inscrivez-vous pour recevoir nos rituels de beauté exclusifs, nos nouvelles collections et des invitations pour nos évènements privés.",
      subscribe:"S'inscrire", thanks:"Merci, vous êtes inscrit(e) !",
      find:"Retrouvez-nous", contacts:"Nos Contacts & Représentations", contacts_p:"Notre équipe est à votre écoute dans le monde entier.",
      email:"Email", write:"Écrivez-nous", phone:"Téléphone", service:"Service client",
      wa_sub:"Réponse sous 24h", hours:"Horaires", hours_week:"Lundi — Samedi", hours_time:"9h00 — 18h00",
      hours_sun:"Dimanche : Sur rendez-vous", siège:"Siège", intl:"International",
      map:"Ouvrir dans Google Maps", map_hint:"Cliquez pour voir notre boutique sur Google Maps",
      see_more:"Voir plus" },
    story: { title:"Notre Histoire", subtitle:"L'héritage d'une beauté souveraine",
      p1:"Je suis Hamin Banga, fondateur de Malkia B Cosmetics. Tout est parti d'une conviction simple : chaque femme a le droit de se sentir souveraine. J'ai voulu créer des soins qui ne transforment pas seulement la peau, mais aussi la confiance.",
      p2:"Mon parcours m'a amené à sélectionner les meilleurs ingrédients — du karité du Burkina à l'huile d'argan du Maroc — pour offrir des formules d'une efficacité rare. Chaque produit est le fruit d'une quête d'excellence.",
      p3:"Aujourd'hui, Malkia B rayonne depuis Bukavu et Kigali, portée par une équipe passionnée qui partage ma vision : célébrer la beauté authentique et souveraine de chaque femme.",
      sig:"— Hamin Banga, Fondateur" },

    shops: { title:"Nos Boutiques", subtitle:"Des espaces dédiés à votre beauté",
      bukavu:{ name:"Boutique Bukavu", tag:"Beauty Specialists", addr:"Mosquée Nyawera — Bukavu, DRCongo",
        phone:"+243 995 945 889", hours:"Lun – Sam : 8h00 – 20h00", route:"Voir l'itinéraire", wa:"Contacter via WhatsApp",
        lat:"-2.4917", lng:"28.8487", q:"Nyawera+Mosque,Bukavu,DRC" },
      kigali:{ name:"Boutique Kigali", tag:"Flagship Store", addr:"KG 123 St — Kigali, Rwanda",
        phone:"+250 788 000 000", hours:"Lun – Sam : 9h00 – 19h00", route:"Voir l'itinéraire", wa:"Contacter via WhatsApp",
        lat:"-1.9441", lng:"30.0619", q:"Kigali,Rwanda" } },
    contact: { title:"Contactez-nous", heading:"Une question sur nos rituels de beauté ?",
      desc:"Que vous recherchiez un conseil personnalisé ou des informations sur nos ingrédients, notre équipe est à votre écoute.",
      form:{ name:"Nom complet", email:"Email", subject:"Sujet", msg:"Message", send:"Envoyer le message",
        sent:"Message envoyé, merci !" },
      direct:"Contact direct", offices:"Nos Représentations",
      hours:"Lun – Sam : 9h00 – 18h00<br>Dim : Sur rendez-vous", map:"Voir sur Google Maps",
      wa:"Contactez-nous via WhatsApp", wa_sub:"Réponse sous 24h" },
    footer: { tagline:"L'excellence de la cosmétique artisanale, inspirée par la souveraineté de la femme moderne.",
      shop:"Boutique", support:"Assistance", follow:"Suivez-nous", delivery:"Livraison & retours",
      copyright:"© 2026 Malkia B Cosmetics. Fabrication artisanale." },
    team: { title:"Notre Équipe", subtitle:"Des passionnés à votre service", boss:"Fondatrice & Directrice Artistique",
      ceo:"CEO & Fondateur", emp:"Spécialiste Beauté",
      desc:"Derrière chaque soin se cache une équipe passionnée, unie par la même vision : révéler la souveraine en chaque femme." },
    cat: { all:"Tous", body:"Corps", face:"Visage", fragrance:"Parfums", wellness:"Bien-être" },
    product: { add:"Ajouter au panier", added:"Ajouté au panier !", desc:"Description", ing:"Ingrédients", use:"Comment utiliser",
      all_products:"Tous nos produits", subtitle:"Découvrez notre sélection complète de soins",
      shop:"Boutique", reviews:"Avis", rating:"Note" },
    cart: { title:"Votre Panier", empty:"Votre panier est vide", cta:"Découvrir nos produits", total:"Total",
      checkout:"Commander", remove:"Retirer", qty:"Qté", sub:"Sous-total", delivery:"Livraison",
      free:"Gratuite", promo:"Code promo", apply:"Appliquer", secure:"Paiement sécurisé" },
    checkout: { title:"Paiement", place:"Confirmer et payer", card:"Carte bancaire", or:"ou",
      summary:"Récapitulatif", info_title:"Informations de livraison", name:"Nom complet",
      address:"Adresse", city:"Ville", country:"Pays", zip:"Code postal", confirm:"Commande confirmée — merci !",
      mpresa:"M-PESA", airtel:"Airtel Money", orange:"Orange Money", cod:"Paiement à la livraison",
      mpresa_num:"+243 99 594 5889", airtel_num:"+243 81 715 0000", orange_num:"+243 89 850 0000",
      pay_info:"Envoyez le montant exact au numéro ci-dessus, puis confirmez la commande." },
    account: { title:"Mon Compte", orders:"Historique des commandes", info:"Informations personnelles", logout:"Déconnexion",
      order:"Commande", delivered:"Livrée", pending:"En cours", items:"articles", share:"Partager",
      also:"Découvrez aussi", members:"Les autres membres", not_found:"Membre introuvable", back:"Retour à l'équipe",
      all_team:"Toute l'équipe", team_sub:"Notre équipe",
      yes:"Oui", no:"Non", addresses:"Adresses", payments:"Paiements" },
    new_arrivals:"Nouveautés", view_all:"Voir tout", categories:"Nos Catégories",
    ui:{
      ui_001:"À venir", ui_002:"Page non trouvée. La page que vous recherchez n'existe pas ou a été déplacée.",
      ui_003:"Retour à l'accueil", ui_004:"Rechercher un produit...",
      ui_005:"Aucun produit ne correspond à votre recherche.", ui_006:"Produit introuvable",
      ui_007:"Acheter Maintenant", ui_008:"Complétez Votre Rituel",
      ui_009:"À partir de 10 $", ui_010:"Prénom", ui_011:"Prénom",
      ui_012:"Nom", ui_013:"Nom", ui_014:"Téléphone",
      ui_015:"Livraison", ui_016:"Souhaitez-vous une livraison ?",
      ui_017:"Ville de livraison :", ui_018:"1-2 jours", ui_019:"2-4 jours",
      ui_020:"Autre ville", ui_021:"3-7 jours", ui_022:"À partir de 10 $",
      ui_023:"Paiement à la réception", ui_024:"Veuillez remplir tous les champs obligatoires",
      ui_025:"Pas de livraison", ui_026:"Autre ville", ui_027:"À partir de 10 $",
      ui_028:"Bienvenue, ", ui_029:"Profil effacé",
      ui_030:"Aucune commande pour le moment.", ui_031:"Commencer vos achats",
      ui_032:"Image commande", ui_033:"fr-FR", ui_034:"article",
      ui_035:"Nom", ui_036:"Téléphone", ui_037:"Adresse", ui_038:"Ville",
      ui_039:"Aucune adresse enregistrée.",
      ui_040:"Les paiements sont traités via WhatsApp ou à la livraison.",
      ui_041:"Rechercher un produit...",
      ui_042:"Aucun produit ne correspond à votre recherche.",
      ui_043:"Adresse", ui_044:"Téléphone", ui_045:"Horaires",
      ui_046:"Derrière chaque soin se cache une équipe passionnée, unie par la même vision : révéler la souveraine en chaque femme.",
      ui_047:"Message envoyé, merci !", ui_048:"Horaires",
      ui_049:"Nous recrutons actuellement un photographe talentueux pour capturer l'essence de Malkia B. Si vous êtes passionné par la beauté et l'image, rejoignez-nous !"
    }
  },
  en: {
    nav: { home:'Home', products:'Products', story:'Our Story', shops:'Shops', contact:'Contact',
      body:'Body', face:'Face', fragrance:'Fragrances', wellness:'Wellness', account:'My Account',
      cart:'Cart', team:'Team' },
    hero: { title:["The Radiance of the","Queen Within You"], subtitle:"Handcrafted beauty rituals, inspired by Africa's richness.",
      cta:"Discover the Collection", s1:"Body Ritual", s2:"Face Care", s3:"Signature Fragrances", s4:"Essential Wellness",
      cta1:"Discover", cta2:"Learn More",
      slide0_tag:"Since 2015 · Worldwide Delivery", slide0_title:"The Art of African Beauty",
      slide0_text:"Premium care inspired by ancestral rituals.",
      slide1_tag:"New Collection", slide1_title:"Face & Body Care",
      slide1_text:"A complete range to reveal your natural glow.",
      slide2_tag:"Signature Fragrances", slide2_title:"Elegance in a Bottle",
      slide2_text:"Fragrances inspired by Africa's captivating notes.",
      slide3_tag:"Wellness Rituals", slide3_title:"Take Care of Yourself",
      slide3_text:"Beauty rituals designed for your daily well-being." },
    home: { latest:"Latest Creations", see_all:"View All Products", story:"Our Story",
      story_h:"A visionary, a mission", story_p1:"I am Hamin Banga, founder of Malkia B Cosmetics. My journey taught me that true beauty lies in self-confidence. I created this brand to offer every woman the keys to her radiance, through premium, authentic and accessible care. Today, Malkia B shines from Bukavu to the international stage.",
      story_p2:"Every product we offer is the result of rigorous selection. My team and I take great care in choosing formulas that combine effectiveness, safety and elegance. Our success I owe to the trust of thousands of women who have chosen sovereign beauty.",
      since:"Since", delivery:"Delivery",
      join:"Join the Malkia Circle", join_p:"Sign up to receive our exclusive beauty rituals, new collections, and invitations to our private events.",
      subscribe:"Subscribe", thanks:"Thank you for subscribing!",
      find:"Find Us", contacts:"Our Contacts & Locations", contacts_p:"Our team is here for you worldwide.",
      email:"Email", write:"Write us", phone:"Phone", service:"Customer service",
      wa_sub:"Reply within 24h", hours:"Hours", hours_week:"Monday — Saturday", hours_time:"9:00 AM — 6:00 PM",
      hours_sun:"Sunday: By appointment", siège:"Head Office", intl:"International",
      map:"Open in Google Maps", map_hint:"Click to view our store on Google Maps",
      see_more:"View More" },
    story: { title:"Our Story", subtitle:"The legacy of sovereign beauty",
      p1:"I am Hamin Banga, founder of Malkia B Cosmetics. It all started with a simple belief: every woman deserves to feel sovereign. I wanted to create products that don't just transform the skin, but also transform confidence.",
      p2:"My journey led me to select the finest ingredients — from Burkina’s shea butter to Morocco’s argan oil — to deliver formulas of exceptional efficacy. Every product is the result of a pursuit of excellence.",
      p3:"Today, Malkia B shines from Bukavu and Kigali, driven by a passionate team that shares my vision: celebrating the authentic and sovereign beauty of every woman.",
      sig:"— Hamin Banga, Founder" },
    shops: { title:"Our Boutiques", subtitle:"Dedicated spaces for your beauty",
      bukavu:{ name:"Bukavu Boutique", tag:"Beauty Specialists", addr:"Nyawera Mosque — Bukavu, DRCongo",
        phone:"+243 995 945 889", hours:"Mon – Sat: 8:00 AM – 8:00 PM", route:"View Directions", wa:"Contact via WhatsApp",
        lat:"-2.4917", lng:"28.8487", q:"Nyawera+Mosque,Bukavu,DRC" },
      kigali:{ name:"Kigali Boutique", tag:"Flagship Store", addr:"KG 123 St — Kigali, Rwanda",
        phone:"+250 788 000 000", hours:"Mon – Sat: 9:00 AM – 7:00 PM", route:"View Directions", wa:"Contact via WhatsApp",
        lat:"-1.9441", lng:"30.0619", q:"Kigali,Rwanda" } },
    contact: { title:"Contact Us", heading:"A question about your beauty rituals?",
      desc:"Whether you need personalized advice or information about our ingredients, our team is here to help.",
      form:{ name:"Full Name", email:"Email", subject:"Subject", msg:"Message", send:"Send Message",
        sent:"Message sent, thank you!" },
      direct:"Direct Contact", offices:"Our Locations",
      hours:"Mon – Sat: 9:00 AM – 6:00 PM<br>Sun: By appointment", map:"View on Google Maps",
      wa:"Contact us via WhatsApp", wa_sub:"Reply within 24h" },
    footer: { tagline:"The excellence of artisanal cosmetics, inspired by the sovereignty of the modern woman.",
      shop:"Shop", support:"Support", follow:"Follow Us", delivery:"Shipping & Returns",
      copyright:"© 2026 Malkia B Cosmetics. Handmade with care." },
    team: { title:"Our Team", subtitle:"Passionate people at your service", boss:"Founder & Art Director",
      ceo:"CEO & Founder", emp:"Beauty Specialist",
      desc:"Behind every product is a passionate team, united by the same vision: revealing the sovereign in every woman." },
    cat: { all:"All", body:'Body', face:'Face', fragrance:'Fragrances', wellness:'Wellness' },
    product: { add:"Add to Cart", added:"Added to cart!", desc:"Description", ing:"Ingredients", use:"How to Use",
      all_products:"All Products", subtitle:"Discover our complete selection of beauty care",
      shop:"Shop", reviews:"Reviews", rating:"Rating" },
    cart: { title:"Your Cart", empty:"Your cart is empty", cta:"Discover our products", total:"Total",
      checkout:"Checkout", remove:"Remove", qty:"Qty", sub:"Subtotal", delivery:"Shipping",
      free:"Free", promo:"Promo Code", apply:"Apply", secure:"Secure Payment" },
    checkout: { title:"Checkout", place:"Confirm & Pay", card:"Credit Card", or:"or",
      summary:"Order Summary", info_title:"Shipping Information", name:"Full Name",
      address:"Address", city:"City", country:"Country", zip:"ZIP Code", confirm:"Order confirmed — thank you!",
      mpresa:"M-PESA", airtel:"Airtel Money", orange:"Orange Money", cod:"Cash on Delivery",
      mpresa_num:"+243 99 594 5889", airtel_num:"+243 81 715 0000", orange_num:"+243 89 850 0000",
      pay_info:"Send the exact amount to the number above, then confirm your order." },
    account: { title:"My Account", orders:"Order History", info:"Personal Information", logout:"Log Out",
      order:"Order", delivered:"Delivered", pending:"Pending", items:"items", share:"Share",
      also:"Also discover", members:"Other members", not_found:"Member not found", back:"Back to team",
      all_team:"All team", team_sub:"Our team",
      yes:"Yes", no:"No", addresses:"Addresses", payments:"Payments" },
    new_arrivals:"New Arrivals", view_all:"View All", categories:"Our Categories",
    ui:{
      ui_001:"Coming soon", ui_002:"Page not found. The page you are looking for does not exist or has been moved.",
      ui_003:"Back to home", ui_004:"Search a product...",
      ui_005:"No product matches your search.", ui_006:"Product not found",
      ui_007:"Buy Now", ui_008:"Complete Your Ritual",
      ui_009:"From 10 $", ui_010:"First Name", ui_011:"First Name",
      ui_012:"Last Name", ui_013:"Last Name", ui_014:"Phone",
      ui_015:"Delivery", ui_016:"Do you want delivery?",
      ui_017:"Delivery city:", ui_018:"1-2 days", ui_019:"2-4 days",
      ui_020:"Other city", ui_021:"3-7 days", ui_022:"From 10 $",
      ui_023:"Pay upon delivery", ui_024:"Please fill in all required fields",
      ui_025:"No delivery", ui_026:"Other city", ui_027:"From 10 $",
      ui_028:"Welcome, ", ui_029:"Profile cleared",
      ui_030:"No orders yet.", ui_031:"Start shopping",
      ui_032:"Order image", ui_033:"en-US", ui_034:"item",
      ui_035:"Name", ui_036:"Phone", ui_037:"Address", ui_038:"City",
      ui_039:"No saved address.",
      ui_040:"Payments are processed via WhatsApp or cash on delivery.",
      ui_041:"Search a product...",
      ui_042:"No product matches your search.",
      ui_043:"Address", ui_044:"Phone", ui_045:"Hours",
      ui_046:"Behind every product is a passionate team, united by the same vision.",
      ui_047:"Message sent, thank you!", ui_048:"Hours",
      ui_049:"We are currently hiring a talented photographer to capture the essence of Malkia B. If you are passionate about beauty and imagery, join us!"
    }
  }
};
function t(key){ return key.split('.').reduce((o,i)=>o&&o[i]!==undefined?o[i]:null, TR[LANG.current]) || key; }
function setLang(l){ LANG.current=l; lsSetRaw('malkia_lang',l); renderHeaderFooter(); navigate(); }

/* ===== DATA ===== */
const CATS = { body:"Corps", face:"Visage", fragrance:"Parfums", wellness:"Wellness" };

const PRODUCTS = [
  {id:'b1', cat:'body', name:"Lotion Corps AHA 3 Jours (Lovska)", subtitle:"Lait", price:15, img:'images/S1944c55855ca4c9b97e3a6d9c185f47aO.webp', seed:'body-aha', desc:"Exfoliation chimique douce et efficace. Résultats visibles en 3 jours. Texture onctueuse et absorbante. Parfaite pour une peau lisse et éclatante.", ingredients:"Acide glycolique 5%, aloe vera, extrait de camomille.", rating:4.8, reviews:24, badge:'Vedette'},
  {id:'b2', cat:'body', name:"Extra Strong Whitening Molato Scrub", subtitle:"Corps", price:20, img:'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=750&fit=crop&q=80', seed:'body-scrub', desc:"Gommage exfoliant intensif aux grains fins naturels. Éclaircissant progressif. Révèle une peau uniforme, douce et radieuse.", ingredients:"Extrait de molato, beurre de karité bio, vitamine E.", rating:4.7, reviews:19},
  {id:'f1', cat:'face', name:"Kojic Glow Skin — Set Complet", subtitle:"Visage", price:35, img:'images/15d056d007a32fae0eb37fbd8826e419.webp', seed:'face-biovene', desc:"Soin visage éclat premium. Texture divine et nourrissante. Résultats visibles rapidement. Pour une peau lumineuse, hydratée et protégée.", ingredients:"Vitamine C stabilisée, niacinamide, beurre de karité bio.", rating:4.9, reviews:31, badge:'Vedette'},
  {id:'f2', cat:'face', name:"Anti acné _ set complet", subtitle:"Visage", price:40, img:'images/img_0001.webp', seed:'face-serum', desc:"Sérum concentré pour sublimer l'éclat naturel du teint. Améliore la texture et raffermit. Anti-âge haute performance.", ingredients:"Acide hyaluronique haut & bas poids moléculaire, extrait de rose, panthénol.", rating:4.7, reviews:22},
  {id:'b3', cat:'body', name:"Almond Glow Korea Glow", subtitle:"Lait", price:28, img:'images/Home-Health-Almond-Glow-Skin-Lotion-Jasmine-8-Oz_7f817bcb-e801-4572-a216-c4ac195291bc.8c76c4c5d6b9a1ddb44667509aa1cf03.avif', seed:'body-glow', desc:"Illuminant corps effet glowy. Texture légère et sublimante. Donne un effet de peau lumineuse et nacré à effet glassé coréen.", ingredients:"Extrait d'amande, huile de jojoba, pigments minéraux.", rating:4.6, reviews:15},
  /* ===== PARFUMS ===== */
  {id:'r3', cat:'fragrance', name:"Sauvage Dior", subtitle:"Parfums", price:100, img:'images/Sauvage Dior.webp', seed:'parfum-sauvage-dior', desc:"Eau de toilette iconique Dior. Fraîcheur épicée et virile. Notes de bergamote, poivre et ambre.", ingredients:"Bergamote, poivre de Sichuan, ambre gris.", rating:4.9, reviews:45, badge:'Premium'},
  {id:'r4', cat:'fragrance', name:"Baccarat Rouge 540 — Francis Kurkdjian", subtitle:"Parfums", price:100, img:'images/baccarat rouge.webp', seed:'parfum-baccarat-rouge', desc:"Fragrance légendaire signée Francis Kurkdjian. Note safranée et boisée inoubliable.", ingredients:"Safran, cèdre, ambre gras, ciste.", rating:5.0, reviews:62, badge:'Premium'},
  {id:'r5', cat:'fragrance', name:"Baccarat Blanc — Francis Kurkdjian", subtitle:"Parfums", price:100, img:'images/Baccarat blanc.webp', seed:'parfum-baccarat-blanc', desc:"Version lumineuse du Baccarat. Notes fraîches et florales. Élégance pure.", ingredients:"Fleur d'oranger, musc blanc, vanille.", rating:4.8, reviews:28, badge:'Premium'},
  {id:'r6', cat:'fragrance', name:"Baccarat Noire — Francis Kurkdjian", subtitle:"Parfums", price:100, img:'images/Baccarat noir.webp', seed:'parfum-baccarat-noire', desc:"Variation intense et mystérieuse du Baccarat. Profondeur envoûtante.", ingredients:"Oud, cuir, bois de santal, safran.", rating:4.9, reviews:34, badge:'Premium'},
  {id:'r7', cat:'fragrance', name:"Terre d'Hermès", subtitle:"Parfums", price:100, img:'images/Terre-d-Hermes.webp', seed:'parfum-terre-hermes', desc:"Parfum emblématique Hermès aux notes minérales et boisées. Élégance intemporelle.", ingredients:"Pamplemousse, silex, cèdre, vétiver.", rating:4.8, reviews:41},
  {id:'r8', cat:'fragrance', name:"Badel Al Oud", subtitle:"Parfums", price:100, img:'images/Badee al oud.webp', seed:'parfum-badel-al-oud', desc:"Parfum oriental riche au oud noble. Sillage envoûtant et tenue exceptionnelle.", ingredients:"Oud naturel, musc, ambre, bois de santal.", rating:4.7, reviews:23},
  {id:'r9', cat:'fragrance', name:"Scandal", subtitle:"Parfums", price:100, img:'images/Scandal.webp', seed:'parfum-scandal', desc:"Parfum audacieux aux notes de miel et de fleur d'oranger. Gourmand et sensuel.", ingredients:"Miel, fleur d'oranger, patchouli, vanille.", rating:4.6, reviews:19},
  {id:'r10', cat:'fragrance', name:"Dubai Chocolat", subtitle:"Parfums", price:100, img:'images/Dubai chocolat.webp', seed:'parfum-dubai-chocolat', desc:"Fragrance gourmande au cacao et aux épices orientales. Un parfum réconfortant et luxueux.", ingredients:"Cacao, cannelle, vanille, musc.", rating:4.5, reviews:16},
  {id:'r11', cat:'fragrance', name:"Teriaq", subtitle:"Parfums", price:100, img:'images/Teriaq.webp', seed:'parfum-teriaq', desc:"Parfum oriental captivant. Notes épicées et boisées pour une signature forte.", ingredients:"Cardamome, cuir, oud, ambre.", rating:4.6, reviews:14},
  {id:'r12', cat:'fragrance', name:"Yara Rouge", subtitle:"Parfums", price:100, img:'images/Yara rouge.webp', seed:'parfum-yara-rouge', desc:"Yara dans sa version rouge passion. Notes fruitées et florales vibrantes.", ingredients:"Fraise, framboise, rose, musc blanc.", rating:4.5, reviews:18},
  {id:'r13', cat:'fragrance', name:"Yara Jaune", subtitle:"Parfums", price:100, img:'images/Yara jaune.webp', seed:'parfum-yara-jaune', desc:"Yara version solaire. Lumière et joie dans un flacon. Notes exotiques enveloppantes.", ingredients:"Mangue, ylang-ylang, vanille, santal.", rating:4.6, reviews:15},
  {id:'r14', cat:'fragrance', name:"Yara Rose", subtitle:"Parfums", price:100, img:'images/yara rose.webp', seed:'parfum-yara-rose', desc:"Yara version florale. Bouquet romantique de roses et de fruits rouges.", ingredients:"Rose bulgare, litchi, musc doux.", rating:4.7, reviews:20},
  {id:'r27', cat:'fragrance', name:"Yara Gris", subtitle:"Parfums", price:100, img:'images/yara gris.webp', seed:'parfum-yara-gris', desc:"Yara version grisée. Élégance sobre et sophistiquée. Notes boisées et épicées.", ingredients:"Poivre rose, iris, cèdre, musc.", rating:4.6, reviews:10},
  {id:'r15', cat:'fragrance', name:"Nine Noire", subtitle:"Parfums", price:100, img:'images/Nine noir.webp', seed:'parfum-nine-noire', desc:"Nine en version sombre et intense. Mystère et élégance.", ingredients:"Cuir, oud, poivre noir, ambre.", rating:4.6, reviews:13},
  {id:'r16', cat:'fragrance', name:"Nine Beige", subtitle:"Parfums", price:100, img:'images/Nine beige.webp', seed:'parfum-nine-beige', desc:"Nine en version douce et lumineuse. Élégance minimaliste.", ingredients:"Musc blanc, fleur d'oranger, vanille.", rating:4.5, reviews:11},
  {id:'r17', cat:'fragrance', name:"Nine Blue", subtitle:"Parfums", price:100, img:'images/Nine blue.webp', seed:'parfum-nine-blue', desc:"Nine en version aquatique et fraîche. Brise marine et liberté.", ingredients:"Notes marines, bergamote, cèdre.", rating:4.6, reviews:14},
  {id:'r18', cat:'fragrance', name:"Club de Nuit Homme", subtitle:"Parfums", price:100, img:'images/Club de nuit homme.webp', seed:'parfum-club-nuit-homme', desc:"Parfum masculin puissant. Sillage longue durée. Notes fumées et boisées.", ingredients:"Bergamote, ananas, bouleau, ambre.", rating:4.7, reviews:29},
  {id:'r19', cat:'fragrance', name:"Club de Nuit Femme", subtitle:"Parfums", price:100, img:'images/Club de nuit femme.webp', seed:'parfum-club-nuit-femme', desc:"Parfum féminin envoûtant. Notes fruitées et florales intenses.", ingredients:"Fraise, rose, patchouli, musc.", rating:4.7, reviews:25},
  {id:'r20', cat:'fragrance', name:"Bleu de Chanel", subtitle:"Parfums", price:100, img:'images/Blue Chanel.webp', seed:'parfum-bleu-chanel', desc:"Parfum emblématique Chanel. Fraîcheur boisée et aromatique. Signature masculine sophistiquée.", ingredients:"Pamplemousse, gingembre, cèdre, santal.", rating:4.9, reviews:55, badge:'Premium'},
  {id:'r21', cat:'fragrance', name:"La Vie Est Belle", subtitle:"Parfums", price:100, img:'images/La ville est belle.webp', seed:'parfum-vie-est-belle', desc:"Parfum iconique Lancôme. Bonheur en flacon. Notes de gourmandise et de floral.", ingredients:"Iris, jasmin, praline, vanille, patchouli.", rating:4.8, reviews:38},
  {id:'r22', cat:'fragrance', name:"Moussuf Bleu", subtitle:"Parfums", price:25, img:'images/Mousuf Aswad.webp', seed:'parfum-moussuf-bleu', desc:"Moussuf version bleue. Fraîcheur aquatique et florale.", ingredients:"Notes marines, lavande, musc.", rating:4.4, reviews:12},
  {id:'r23', cat:'fragrance', name:"Moussuf Rouge", subtitle:"Parfums", price:25, img:'images/Mousuf Sexy.webp', seed:'parfum-moussuf-rouge', desc:"Moussuf version rouge. Passion et intensité.", ingredients:"Fraise, rose rouge, ambre.", rating:4.5, reviews:10},
  {id:'r24', cat:'fragrance', name:"Moussuf Rose", subtitle:"Parfums", price:25, img:'images/Mousuf Wardi.webp', seed:'parfum-moussuf-rose', desc:"Moussuf version rose. Douceur florale et romantique.", ingredients:"Rose, pivoine, musc blanc.", rating:4.4, reviews:9},
  {id:'r25', cat:'fragrance', name:"Moussuf Chocolat", subtitle:"Parfums", price:25, img:'images/Mousuf Chocolat.webp', seed:'parfum-moussuf-choco', desc:"Moussuf version chocolatée. Gourmandise addictive.", ingredients:"Cacao, vanille, caramel.", rating:4.5, reviews:11},
  {id:'r26', cat:'fragrance', name:"Moussuf Blanc", subtitle:"Parfums", price:25, img:'images/Mousf Musk.webp', seed:'parfum-moussuf-blanc', desc:"Moussuf version blanche. Pureté et élégance minimaliste.", ingredients:"Fleur d'oranger, musc, vanille.", rating:4.3, reviews:8},
  {id:'r30', cat:'fragrance', name:"Moussuf Gris", subtitle:"Parfums", price:25, img:'images/Mousuf Ramadi.webp', seed:'parfum-moussuf-ramadi', desc:"Moussuf version grise. Élégance sobre et moderne.", ingredients:"Cèdre, poivre rose, musc gris.", rating:4.3, reviews:6},
  {id:'w1', cat:'wellness', name:"Flat Tummy Tea", subtitle:"Wellness", price:30, img:'images/Flat tummy tea.webp', seed:'wellness-tea', desc:"Infusion minceur naturelle aux actifs puissants. Formule douce et efficace. Saveur agréable et relaxante.", ingredients:"Thé vert bio, gingembre, menthe, cannelle, aneth.", rating:4.6, reviews:27},
  /* ===== BIEN-ÊTRE ===== */
  {id:'w2', cat:'wellness', name:"Masques de Visage", subtitle:"Wellness", price:5, img:'images/Mask.webp', gallery:['images/Mask.webp','images/Mask (2).webp'], seed:'wellness-masques', desc:"Masques visage hydratants et purifiants. Selon votre type de peau pour un teint frais et lumineux.", ingredients:"Argile verte, aloe vera, extrait de concombre.", rating:4.5, reviews:18},
  {id:'w3', cat:'wellness', name:"Orange Gel Exfoliant", subtitle:"Wellness", price:25, img:'images/orange.webp', seed:'wellness-orange-gel', desc:"Gel exfoliant doux à l'orange. Élimine les impuretés et laisse la peau fraîche et revitalisée.", ingredients:"Extrait d'orange, acide glycolique doux, glycérine.", rating:4.4, reviews:13},
  {id:'w4', cat:'wellness', name:"Adeus Cream", subtitle:"Wellness", price:30, img:'images/Adeus cream.webp', seed:'wellness-adeus', desc:"Crème minceur Adeus. Formule thermo-active pour affiner la silhouette.", ingredients:"Caféine, L-carnitine, extrait d'algues.", rating:4.3, reviews:11},
  {id:'w5', cat:'wellness', name:"Gluthamax White", subtitle:"Wellness", price:50, img:'images/Gluthamax white.webp', seed:'wellness-gluthamax', desc:"Complément éclat au glutathion max. Blanchissant et antioxydant puissant.", ingredients:"Glutathion 500mg, vitamine C 100mg, acide folique.", rating:4.6, reviews:22},
  {id:'w6', cat:'wellness', name:"Multi Collagen Peptides", subtitle:"Wellness", price:50, img:'images/Multi collagene peptides.webp', seed:'wellness-multi-collagen', desc:"Collagène multi-peptides pour peau, cheveux et articulations. Haute biodisponibilité.", ingredients:"Collagène hydrolysé type I, II, III, V, X, acide hyaluronique.", rating:4.7, reviews:29},
  {id:'w7', cat:'wellness', name:"Glutathione Gummies", subtitle:"Wellness", price:50, img:'images/Glutathione gummies.webp', seed:'wellness-gluta-gummies', desc:"Gommes au glutathion. Sublimez votre éclat de l'intérieur. Format pratique et gourmand.", ingredients:"Glutathion, vitamine C, pectine naturelle.", rating:4.4, reviews:15},
  {id:'w8', cat:'wellness', name:"Vitamine Gummies", subtitle:"Wellness", price:50, img:'images/Vitamie C gummies.webp', seed:'wellness-vita-gummies', desc:"Gommes multivitaminées. Énergie quotidienne et renforcement immunitaire.", ingredients:"Vitamines A, C, D, E, B6, B12, zinc.", rating:4.5, reviews:20},
  {id:'w9', cat:'wellness', name:"Vitamine Ascorbic Acid", subtitle:"Wellness", price:100, img:'images/Vitamine C absorbic.webp', seed:'wellness-vitamine-c', desc:"Vitamine C pure en poudre ou comprimés. Antioxydant essentiel pour l'éclat de la peau.", ingredients:"Acide ascorbique 1000mg, bioflavonoïdes.", rating:4.6, reviews:17},
  {id:'w10', cat:'wellness', name:"Curves Extreme", subtitle:"Wellness", price:50, img:'images/curves extreme.webp', seed:'wellness-curves', desc:"Complément alimentaire pour galbe et courbes. Formule enrichie en plantes et vitamines.", ingredients:"Fenugrec, maca, collagène, biotine.", rating:4.3, reviews:24},
  {id:'w11', cat:'wellness', name:"Super Collagène Peptides", subtitle:"Wellness", price:50, img:'images/Collagen peptides.webp', seed:'wellness-super-collagen', desc:"Super collagène hydrolysé haute concentration. Rajeunissement cutané et articulaire.", ingredients:"Collagène marin type I, III, acide hyaluronique, vitamine C.", rating:4.7, reviews:31},
  {id:'w12', cat:'wellness', name:"Fit Tea", subtitle:"Wellness", price:25, img:'images/Fit tea.webp', seed:'wellness-fit-tea', desc:"Infusion minceur detox. Purifie l'organisme et favorise la perte de poids.", ingredients:"Thé vert, guarana, maté, gingembre.", rating:4.4, reviews:16},
  {id:'w13', cat:'wellness', name:"Keto Tea", subtitle:"Wellness", price:25, img:'images/Keto tea.webp', seed:'wellness-keto-tea', desc:"Thé adapté au régime cétogène. Booste le métabolisme et l'énergie.", ingredients:"Thé oolong, MCT, électrolytes naturels.", rating:4.3, reviews:12},
  {id:'w14', cat:'wellness', name:"Breas Tea", subtitle:"Wellness", price:25, img:'images/Breas tea.webp', seed:'wellness-breas-tea', desc:"Infusion bien-être aux plantes exotiques. Favorise la détente et l'équilibre.", ingredients:"Feuilles de bred, miel, gingembre, citronnelle.", rating:4.4, reviews:10},
  {id:'w15', cat:'wellness', name:"Acne Treatment", subtitle:"Wellness", price:40, img:'images/Acne treatment.webp', seed:'wellness-acne', desc:"Soin anti-acné complet. Purifie la peau et prévient les imperfections.", ingredients:"Acide salicylique, niacinamide, tea tree, zinc.", rating:4.6, reviews:27},
  {id:'w16', cat:'wellness', name:"Super Collagène", subtitle:"Wellness", price:50, img:'images/Super collagene.webp', seed:'wellness-super-collagen-2', desc:"Collagène pur haute dose. Pour une peau ferme, des cheveux forts et des ongles solides.", ingredients:"Collagène hydrolysé type I, vitamine C, biotine.", rating:4.6, reviews:23},
  {id:'w17', cat:'wellness', name:"FemFresh", subtitle:"Wellness", price:10, img:'images/Femfresh.webp', seed:'wellness-femfresh', gallery:['images/Femfresh.webp','images/Femfresh (2).webp','images/femfresh (3).webp','images/femfresh (4).webp'], desc:"Soin d'hygiène intime doux. Équilibre le pH et respecte la flore naturelle.", ingredients:"Extrait de camomille, acide lactique, aloe vera.", rating:4.5, reviews:19},
  {id:'w18', cat:'wellness', name:"Vital Proteins Collagen", subtitle:"Wellness", price:100, img:'images/Vital Protein Collagene.webp', seed:'wellness-vital-proteins', desc:"Collagène premium Vital Proteins. La référence américaine pour beauté intérieure.", ingredients:"Collagène bovin type I, III, acide hyaluronique, vitamine C.", rating:4.8, reviews:35, badge:'Premium'},
  {id:'w19', cat:'wellness', name:"Stretch Marks & Scar Oil", subtitle:"Wellness", price:30, img:'images/Strech marks and scars oil.webp', seed:'wellness-stretch-oil', desc:"Huile anti-vergetures et cicatrices. Régénère et estompe les marques cutanées.", ingredients:"Huile de rose musquée, vitamine E, beurre de cacao, centella.", rating:4.5, reviews:21},
  {id:'w20', cat:'wellness', name:"Small Molecule Collagen Solid Drink", subtitle:"Wellness", price:150, img:'images/Small molecule collagen solid drink.webp', seed:'wellness-collagen-drink', desc:"Boisson solide au collagène petite molécule. Absorption maximale pour un résultat visible.", ingredients:"Collagène tripeptide, céramides, extrait de raisin.", rating:4.7, reviews:26, badge:'Premium'},
  /* ===== LAITS (BODY LOTIONS) ===== */
  {id:'b4', cat:'body', name:"Déla Yellow", subtitle:"Lait", price:50, img:'images/Dela yellow.webp', seed:'lait-dela-yellow', desc:"Lait corporel éclat à l'extrait de curcuma. Illumine et unifie le teint progressivement. Texture légère et non collante.", ingredients:"Curcuma bio, beurre de karité, vitamine E.", rating:4.5, reviews:12},
  {id:'b5', cat:'body', name:"Biovène Éclat Suprême", subtitle:"Lait", price:40, seed:'lait-biovene', desc:"Soin corps illuminant à la vitamine C. Éclat suprême et hydratation longue durée. Pénètre rapidement.", ingredients:"Vitamine C stabilisée, acide hyaluronique, huile d'amande douce.", rating:4.7, reviews:18, badge:'Vedette'},
  {id:'b6', cat:'body', name:"Hi Glow", subtitle:"Lait", price:50, img:'images/Hi glow.webp', seed:'lait-hi-glow', desc:"Lotion éclatante pour un teint glowy. Hydrate et illumine dès la première application.", ingredients:"Niacinamide, extrait de réglisse, glycérine.", rating:4.4, reviews:9},
  {id:'b7', cat:'body', name:"Lait Vietnam", subtitle:"Lait", price:30, seed:'lait-vietnam', desc:"Lotion corporelle légère venue du Vietnam. Absorption rapide, senteur subtile et fraîcheur durable.", ingredients:"Extrait de riz, huile de coco, aloe vera.", rating:4.3, reviews:7},
  {id:'b8', cat:'body', name:"Lait Thaï", subtitle:"Lait", price:30, img:'images/Thai.webp', seed:'lait-thai', desc:"Lait corporel à la tradition thaïlandaise. Hydratation intense et senteur exotique enveloppante.", ingredients:"Huile de coco, extrait de mangue, beurre de karité.", rating:4.5, reviews:11},
  {id:'b9', cat:'body', name:"Final Glow Cast", subtitle:"Lait", price:40, seed:'lait-final-glow', desc:"Lotion finalisante pour un glow parfait. Scelle l'hydratation et sublime l'éclat naturel de la peau.", ingredients:"Complexe éclat, huile de jojoba, vitamine E.", rating:4.6, reviews:14},
  {id:'b10', cat:'body', name:"Alpha Arbutin Lotion", subtitle:"Lait", price:50, img:'images/Alpha arbutin.webp', seed:'lait-alpha-arbutin', desc:"Lait éclaircissant à l'alpha arbutine. Estompe les taches et unifie le teint en douceur.", ingredients:"Alpha arbutine 2%, niacinamide, acide kojique.", rating:4.7, reviews:16},
  {id:'b11', cat:'body', name:"Cindella Lotion", subtitle:"Lait", price:60, img:'images/Cindella Lotion.webp', seed:'lait-cindella', desc:"Lotion éclat à la formule exclusive. Illumine la peau et laisse un fini satiné.", ingredients:"Complexe Cindella, huile d'argan, beurre de karité.", rating:4.5, reviews:10},
  {id:'b12', cat:'body', name:"Kojic Lotion", subtitle:"Lait", price:15, img:'images/Kojic lotion.webp', seed:'lait-kojic', desc:"Lait corporel à l'acide kojique. Éclaircissant progressif et uniforme. Texture onctueuse.", ingredients:"Acide kojique 2%, extrait de mûrier, vitamine C.", rating:4.6, reviews:13},
  {id:'b13', cat:'body', name:"Advanced Korean Skin", subtitle:"Lait", price:40, seed:'lait-korean-skin', desc:"Lait corporel premium à la coréenne. Technologie avancée pour une peau glass-skin. Hydratation profonde.", ingredients:"Essence de riz fermenté, niacinamide, peptides.", rating:4.8, reviews:21, badge:'Premium'},
  {id:'b14', cat:'body', name:"Piment Doux Lotion", subtitle:"Lait", price:40, seed:'lait-piment-doux', desc:"Lotion chauffante au piment doux. Stimule la microcirculation et réchauffe la peau.", ingredients:"Extrait de piment doux, huile de sésame, vitamine E.", rating:4.2, reviews:8},
  {id:'b15', cat:'body', name:"Maakari Lotion", subtitle:"Lait", price:40, seed:'lait-maakari', desc:"Lait corporel traditionnel aux ingrédients naturels. Hydrate et adoucit durablement.", ingredients:"Beurre de karité, huile de palme rouge, extrait de miel.", rating:4.4, reviews:9},
  {id:'b16', cat:'body', name:"AHA Lotion Corps", subtitle:"Lait", price:20, img:'images/S1944c55855ca4c9b97e3a6d9c185f47aO.webp', seed:'lait-aha', desc:"Exfoliation chimique douce aux AHA pour un corps lisse et lumineux. Renouvelle la peau en profondeur.", ingredients:"Acide glycolique 5%, acide lactique, aloe vera.", rating:4.6, reviews:15},
  {id:'b17', cat:'body', name:"Vitamine C Lotion", subtitle:"Lait", price:20, img:'images/Vitamine C lotion.webp', seed:'lait-vitamine-c', desc:"Lotion illuminatrice riche en vitamine C stabilisée. Éclat immédiat et protection antioxydante.", ingredients:"Vitamine C 10%, extrait d'orange, vitamine E.", rating:4.5, reviews:12},
  {id:'b18', cat:'body', name:"Françoise Bedon Lotion", subtitle:"Lait", price:60, seed:'lait-fb', desc:"Lait corporel de la célèbre marque ivoirienne. Formule originale pour une peau éclatante.", ingredients:"Beurre de karité bio, extrait de cacao, vitamine E.", rating:4.6, reviews:17},
  {id:'b19', cat:'body', name:"Advanced Whitening Lotion", subtitle:"Lait", price:50, seed:'lait-advanced-whitening', desc:"Lotion éclaircissante avancée. Technologie double action pour un teint uniforme et radieux.", ingredients:"Arbutine, niacinamide, extrait de citron.", rating:4.7, reviews:19},
  {id:'b20', cat:'body', name:"Glutathione Lotion", subtitle:"Lait", price:10, seed:'lait-glutathione', desc:"Lait corporel au glutathion. Antioxydant puissant pour une peau lumineuse et protégée.", ingredients:"Glutathion, vitamine C, acide férulique.", rating:4.5, reviews:11},
  {id:'b21', cat:'body', name:"Olay Lotion", subtitle:"Lait", price:40, img:'images/Olay.webp', seed:'lait-olay', desc:"Lotion hydratante Olay. Hydratation 24h et soin anti-âge pour le corps.", ingredients:"Vitamine B3, acide hyaluronique, pro-vitamine B5.", rating:4.6, reviews:14},
  {id:'b22', cat:'body', name:"Medix 5.5 Lotion", subtitle:"Lait", price:40, img:'images/Medix lait.webp', seed:'lait-medix', desc:"Lait corporel dermatologique Medix 5.5. Équilibre le pH et hydrate en douceur.", ingredients:"Complexe Medix 5.5, aloe vera, panthénol.", rating:4.4, reviews:8},
  {id:'b23', cat:'body', name:"Bride Cream Lotion", subtitle:"Lait", price:50, img:'images/Bride Cream.webp', seed:'lait-bride-cream', desc:"Préparation intense pour future mariée. Éclat extrême et peau de velours pour le grand jour.", ingredients:"Collagène, élastine, extrait de perle, vitamine E.", rating:4.8, reviews:22, badge:'Vedette'},
  {id:'b24', cat:'body', name:"Skin Doctor Lotion", subtitle:"Lait", price:30, seed:'lait-skin-doctor', desc:"Lotion professionnelle Skin Doctor. Soin expert pour une peau saine et radieuse.", ingredients:"Complexe dermatologique, céramides, acide hyaluronique.", rating:4.5, reviews:10},
  {id:'b25', cat:'body', name:"Vaseline Lotion", subtitle:"Lait", price:20, seed:'lait-vaseline', desc:"Lotion hydratante intense à la vaseline pure. Protection et nutrition longue durée.", ingredients:"Vaseline pure, glycérine, vitamine E.", rating:4.3, reviews:7},
  {id:'b26', cat:'body', name:"Roushun Beauty Lotion", subtitle:"Lait", price:19, img:'images/Roushum.webp', seed:'lait-roushun', desc:"Lait de beauté Roushun. Formule douce et efficace pour un corps sublimé au quotidien.", ingredients:"Beurre de mangue, huile d'amande, niacinamide.", rating:4.4, reviews:9},
  /* ===== SAVONS ===== */
  {id:'b27', cat:'body', name:"Molato Soap", subtitle:"Savon", price:20, img:'images/Savon molato.webp', seed:'savon-molato', desc:"Savon éclaircissant extra fort au molato. Nettoie en profondeur tout en unifiant le teint.", ingredients:"Extrait de molato, beurre de karité bio, glycérine.", rating:4.6, reviews:18},
  {id:'b28', cat:'body', name:"Savon Noir", subtitle:"Savon", price:30, img:'images/savon noir.webp', seed:'savon-noir', desc:"Savon noir traditionnel africain. Purifie, exfolie et nettoie en douceur. Utilisé depuis des siècles.", ingredients:"Cendre de néré, beurre de karité, huile de palme rouge.", rating:4.4, reviews:12},
  {id:'b29', cat:'body', name:"Pure Egyptian Soap", subtitle:"Savon", price:15, img:'images/Pure egyptian soap.webp', seed:'savon-egyptian', desc:"Savon égyptien pur. Tradition ancestrale pour une peau nette et lumineuse.", ingredients:"Huile d'olive, miel, lait de chèvre.", rating:4.5, reviews:14},
  {id:'b30', cat:'body', name:"Moroccan Argan Soap", subtitle:"Savon", price:15, img:'images/Morrocan soap.webp', seed:'savon-argan', desc:"Savon marocain à l'huile d'argan. Nourrit et nettoie sans agresser la peau.", ingredients:"Huile d'argan, huile d'olive, argile ghassoul.", rating:4.6, reviews:16},
  {id:'b31', cat:'body', name:"AHA Savon", subtitle:"Savon", price:15, img:'images/AHA soap.webp', seed:'savon-aha', desc:"Savon exfoliant aux AHA. Nettoie et renouvelle la peau en douceur.", ingredients:"Acide glycolique, aloe vera, glycérine.", rating:4.5, reviews:11},
  {id:'b32', cat:'body', name:"Advanced Whitening Soap", subtitle:"Savon", price:15, img:'images/Advanced whitening soap.webp', seed:'savon-advanced-whitening', desc:"Savon éclaircissant avancé. Formule concentrée pour un résultat visible.", ingredients:"Arbutine, vitamine C, extrait de citron.", rating:4.6, reviews:15},
  {id:'b33', cat:'body', name:"Half Cast Soap", subtitle:"Savon", price:15, img:'images/Half cast soap.webp', seed:'savon-half-cast', desc:"Savon éclaircissant Half Cast. Nettoie et atténue les taches pigmentaires.", ingredients:"Extrait de citron, huile de coco, glycérine.", rating:4.3, reviews:8},
  {id:'b34', cat:'body', name:"Cindella Soap", subtitle:"Savon", price:20, img:'images/Cindella soap.webp', seed:'savon-cindella', desc:"Savon Cindella à la formule exclusive. Laisse la peau propre, douce et éclatante.", ingredients:"Complexe Cindella, huile d'amande, beurre de karité.", rating:4.5, reviews:10},
  {id:'b35', cat:'body', name:"Kojic San Soap", subtitle:"Savon", price:10, img:'images/Kojic san.webp', seed:'savon-kojic-san', desc:"Savon japonais à l'acide kojique. Éclaircissant doux et efficace pour le visage et le corps.", ingredients:"Acide kojique 2%, extrait de riz, collagène.", rating:4.6, reviews:17},
  {id:'b36', cat:'body', name:"Savon Œuf", subtitle:"Savon", price:20, img:'images/Savon oeuf.webp', seed:'savon-oeuf', desc:"Savon à l'œuf. Riche en protéines pour une peau nourrie et régénérée.", ingredients:"Extrait d'œuf, huile d'olive, glycérine naturelle.", rating:4.3, reviews:7},
  {id:'b37', cat:'body', name:"CeraVe Cleanser", subtitle:"Savon", price:20, img:'images/CeraVe Cleanser.webp', seed:'savon-cerave', desc:"Nettoyant doux CeraVe aux céramides. Respecte la barrière cutanée. Sans parfum.", ingredients:"Céramides, acide hyaluronique, niacinamide.", rating:4.7, reviews:20},
  {id:'b38', cat:'body', name:"Medix Soap", subtitle:"Savon", price:10, seed:'savon-medix', desc:"Savon dermatologique Medix. Nettoie en douceur tout en respectant l'équilibre de la peau.", ingredients:"Complexe Medix, aloe vera, panthénol.", rating:4.4, reviews:9},
  {id:'b39', cat:'body', name:"Pure Glow Soap", subtitle:"Savon", price:15, seed:'savon-pure-glow', desc:"Savon éclat pur. Illumine la peau dès la première utilisation.", ingredients:"Extrait de perle, vitamine C, huile de jojoba.", rating:4.5, reviews:13},
  {id:'b40', cat:'body', name:"Arbutin Glutathione Soap", subtitle:"Savon", price:15, seed:'savon-arbutin-gluta', desc:"Savon double action arbutine et glutathion. Puissant éclaircissant et antioxydant.", ingredients:"Alpha arbutine, glutathion, vitamine E.", rating:4.6, reviews:15},
  {id:'b41', cat:'body', name:"L-Gluta Soap", subtitle:"Savon", price:15, seed:'savon-l-gluta', desc:"Savon au L-glutathion. Blanchissant et antioxydant pour une peau lumineuse.", ingredients:"L-glutathion, vitamine C, extrait de papaye.", rating:4.5, reviews:11},
  /* ===== CRÈMES VISAGE ===== */
  {id:'f3', cat:'face', name:"Cindella Cream", subtitle:"Visage", price:25, img:'images/cindella cream.webp', seed:'face-cindella-cream', desc:"Crème visage Cindella. Formule riche pour un teint uniforme et lumineux.", ingredients:"Complexe Cindella, acide hyaluronique, beurre de karité.", rating:4.6, reviews:16},
  {id:'f4', cat:'face', name:"Malkia Cream", subtitle:"Visage", price:20, seed:'face-malkia-cream', desc:"Crème signature Malkia B. Soin complet visage éclat. Texture veloutée et parfum subtil.", ingredients:"Beurre de karité bio, huile d'argan, vitamine E, niacinamide.", rating:4.8, reviews:24, badge:'Vedette'},
  {id:'f5', cat:'face', name:"Jennie Moon Pro Derma", subtitle:"Visage", price:30, img:'images/Jennie MOON PRO DERMA.webp', seed:'face-jennie-moon', desc:"Crème coréenne Jennie Moon. Technologie pro-derma pour une peau parfaite.", ingredients:"Peptides, céramides, extrait de centella asiatica.", rating:4.7, reviews:19, badge:'Premium'},
  {id:'f6', cat:'face', name:"Parley Beauty Cream", subtitle:"Visage", price:20, img:'images/Parley.webp', seed:'face-parley', desc:"Crème visage Parley Beauty. Nutrition intense et éclat durable.", ingredients:"Huile de coco, beurre de mangue, vitamine E.", rating:4.5, reviews:12},
  {id:'f7', cat:'face', name:"Dr. Althea 345", subtitle:"Visage", price:25, img:'images/Dr. Althea 345.webp', seed:'face-dr-althea-345', desc:"Crème apaisante Dr. Althea 345. Calme les irritations et renforce la barrière cutanée.", ingredients:"Centella asiatica, panthénol, niacinamide.", rating:4.7, reviews:18},
  {id:'f8', cat:'face', name:"Dr. Althea 147", subtitle:"Visage", price:25, img:'images/Dr. ALTHEA 147.webp', seed:'face-dr-althea-147', desc:"Crème régénérante Dr. Althea 147. Reparation et nutrition intense.", ingredients:"Miel de manuka, propolis, beurre de karité.", rating:4.6, reviews:15},
  {id:'f9', cat:'face', name:"Skin Light Cream", subtitle:"Visage", price:20, img:'images/Anti-taches.webp', seed:'face-skin-light', desc:"Crème éclaircissante visage. Estompe les taches et unifie le teint progressivement.", ingredients:"Acide kojique, extrait de réglisse, vitamine C.", rating:4.5, reviews:13},
  {id:'f10', cat:'face', name:"Saam Cream", subtitle:"Visage", price:30, img:'images/Saam.webp', seed:'face-saam', desc:"Crème visage Saam. Soin quotidien pour une peau saine et éclatante.", ingredients:"Beurre de karité, huile d'amande douce, glycérine.", rating:4.4, reviews:10},
  {id:'f11', cat:'face', name:"Kojic Cream", subtitle:"Visage", price:10, img:'images/Kojic-creme.webp', seed:'face-kojic-cream', desc:"Crème visage à l'acide kojique. Éclaircissante et protectrice.", ingredients:"Acide kojique 2%, niacinamide, filtres UV.", rating:4.6, reviews:14},
  {id:'f12', cat:'face', name:"Medicube", subtitle:"Visage", price:35, img:'images/MEDICUBE.webp', seed:'face-medicube', desc:"Crème coréenne Medicube. Soin anti-âge avancé pour une peau rajeunie.", ingredients:"Adénosine, collagène marin, acide hyaluronique.", rating:4.7, reviews:20, badge:'Premium'},
  {id:'f13', cat:'face', name:"COSRX Crème", subtitle:"Visage", price:35, img:'images/COSRX.webp', seed:'face-cosrx', desc:"Crème COSRX. Soin apaisant et réparateur à la mucine d'escargot.", ingredients:"Mucine d'escargot 96%, extrait de feuille d'olivier.", rating:4.8, reviews:23},
  {id:'f14', cat:'face', name:"CeraVe Crème Visage", subtitle:"Visage", price:35, img:'images/Cerave-creme.webp', seed:'face-cerave', desc:"Crème hydratante CeraVe aux céramides. Hydratation longue durée.", ingredients:"Céramides, acide hyaluronique, niacinamide.", rating:4.7, reviews:19},
  {id:'f15', cat:'face', name:"La Roche Posay", subtitle:"Visage", price:35, img:'images/La roche Posay.webp', seed:'face-lrp', desc:"Crème dermatologique La Roche Posay. Tolérance maximale et efficacité prouvée.", ingredients:"Eau thermale de La Roche Posay, niacinamide, shea butter.", rating:4.8, reviews:25, badge:'Premium'},
  {id:'f16', cat:'face', name:"Golden Glow Cream", subtitle:"Visage", price:25, seed:'face-golden-glow', desc:"Crème éclat doré. Sublime le teint avec un fini lumineux naturel.", ingredients:"Extrait de miel, or colloïdal, vitamine E.", rating:4.5, reviews:11},
  {id:'f17', cat:'face', name:"Joseon Beauty Cream", subtitle:"Visage", price:25, img:'images/Joseon Beauty cream.webp', seed:'face-jeason', desc:"Crème Joseon Beauty. Soin visage complet pour un teint frais et unifié.", ingredients:"Complexe Joseon, huile de jojoba, aloe vera.", rating:4.4, reviews:9},
  {id:'f18', cat:'face', name:"Anua 77%", subtitle:"Visage", price:35, img:'images/Anua 77.webp', seed:'face-anua-77', desc:"Sérum-crème Anua 77% à l'extrait d'huile d'olive. Hydratation coréenne intense.", ingredients:"Extrait d'huile d'olive 77%, squalane, panthénol.", rating:4.7, reviews:17},
  {id:'f19', cat:'face', name:"Anua 70%", subtitle:"Visage", price:35, img:'images/Anua 70.webp', seed:'face-anua-70', desc:"Crème Anua 70% à la centella. Apaise et répare les peaux sensibles.", ingredients:"Extrait de centella asiatica 70%, niacinamide, madecassoside.", rating:4.6, reviews:15},
];

function img(seed, w=600, h=750){ return `https://picsum.photos/seed/${seed}/${w}/${h}`; }
function ti(m, w=500, h=500){ return m.img && m.img.startsWith('images/') ? m.img : img(m.img, w, h); }
function pi(p, w, h){ return p.img ? p.img : (p.seed ? img(p.seed, w, h) : 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w='+w+'&h='+h+'&fit=crop&q=80'); }
function findProduct(id){ return PRODUCTS.find(p=>p.id===id); }
function fmt(n){ return n.toFixed(2).replace('.', ','); }

/* ===== HERO CAROUSEL ===== */
const HERO_SLIDES = [
  {
    img: 'images/pexels-jayrinho-16559618.webp',
    tag: 'Since 2015 · Livraison mondiale',
    title: 'Votre Beauté, Notre Priorité',
    text: 'True Beauty Comes From Within — Des soins de beauté premium conçus pour révéler votre éclat avec élégance, douceur et efficacité.',
    cta1: { text: 'Découvrir nos produits', link: '#/category/fragrance' },
    cta2: { text: 'Commander via WhatsApp', link: '#/contact' }
  },
  {
    img: 'images/pexels-angela-roma-7479882.webp',
    tag: 'Soins Corps · Éclat Naturel',
    title: 'Des Soins d\'Exception',
    text: 'Des textures onctueuses et des actifs précieux pour nourrir, hydrater et illuminer votre peau au quotidien.',
    cta1: { text: 'Explorer la collection Corps', link: '#/category/body' },
    cta2: { text: 'Nos engagements', link: '#/home' }
  },
  {
    img: 'images/pexels-innamykytas-8510231.webp',
    tag: 'Visage · Rituel Beauté',
    title: 'L\'Éclat de la Reine',
    text: 'Révélez la luminescence de votre peau avec nos soins visage enrichis en actifs naturels d\'exception.',
    cta1: { text: 'Découvrir les soins Visage', link: '#/category/face' },
    cta2: { text: 'Nos nouveautés', link: '#/category/face' }
  },
  {
    img: 'images/laura-chouette-4sKdeIMiFEI-unsplash.webp',
    tag: 'Parfums · Signature Olfactive',
    title: 'L\'Art de la Parfumerie',
    text: 'Des fragrances envoûtantes qui laissent une trace mémorable, inspirées par la richesse des senteurs africaines.',
    cta1: { text: 'Découvrir nos Parfums', link: '#/category/fragrance' },
    cta2: { text: 'Commander via WhatsApp', link: '#/contact' }
  }
];

let heroInterval = null;

function initHeroCarousel(){
  if(heroInterval){ clearInterval(heroInterval); heroInterval = null; }
  const track = document.getElementById('heroTrack');
  if(!track) return;
  const slides = track.children;
  if(slides.length === 0) return;
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.querySelector('.hero-prev');
  const nextBtn = document.querySelector('.hero-next');
  let current = 0;

  function goTo(idx){
    current = ((idx % slides.length) + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d,i) => d.classList.toggle('bg-primary', i===current));
    dots.forEach((d,i) => d.classList.toggle('bg-outline-variant', i!==current));
  }

  function next(){ goTo(current + 1); }
  function prev(){ goTo(current - 1); }

  function startAuto(){ heroInterval = setInterval(next, 5500); }
  function stopAuto(){ clearInterval(heroInterval); heroInterval = null; }

  if(dots.length) dots.forEach((d,i) => d.addEventListener('click', ()=>{ goTo(i); stopAuto(); startAuto(); }));
  if(prevBtn) prevBtn.addEventListener('click', ()=>{ prev(); stopAuto(); startAuto(); });
  if(nextBtn) nextBtn.addEventListener('click', ()=>{ next(); stopAuto(); startAuto(); });

  goTo(0);
  startAuto();

  const hero = document.getElementById('heroCarousel');
  if(hero){ hero.addEventListener('mouseenter', stopAuto); hero.addEventListener('mouseleave', startAuto); }
}

/* ===== STATE ===== */
let cart = lsGet('malkia_cart', []);

function saveCart(){
  lsSet('malkia_cart', cart);
}
let activeTab = 'desc';
let activeThumb = 0;

function addToCart(id, qty=1){
  const existing = cart.find(c=>c.id===id);
  if(existing) existing.qty += qty; else cart.push({id, qty});
  saveCart();
  updateCartCount();
  showToast(t('product.added'));
}
function removeFromCart(id){ cart = cart.filter(c=>c.id!==id); saveCart(); updateCartCount(); navigate(); }
function changeQty(id, delta){
  const item = cart.find(c=>c.id===id);
  if(!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  navigate(); updateCartCount();
}
function updateCartCount(){
  const cartCount = document.getElementById('cartCount');
  if (!cartCount) return;
  const count = cart.reduce((s,c)=>s+c.qty,0);
  cartCount.textContent = count;
  if(count > 0){ cartCount.classList.add('bump'); setTimeout(()=>cartCount.classList.remove('bump'), 200); }
}
function showToast(msg){
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.remove('translate-y-24');
  setTimeout(()=>t.classList.add('translate-y-24'), 2200);
}
function toggleMobileMenu(){
  const m = document.getElementById('mobileMenu');
  if (m) {
    m.classList.toggle('hidden');
    m.classList.toggle('flex');
  }
}

/* ===== TEAM ===== */
const TEAM = [
  { id:'hamin', name:'Hamin Banga', role:'CEO & Fondateur', roleEn:'CEO & Founder', roleKey:'ceo', bio:"Visionnaire et fondateur de Malkia B Cosmetics, Hamin incarne l'ambition de rendre la beauté premium accessible à toutes. Sous sa direction, la marque rayonne depuis Bukavu et Kigali vers le monde.", bioEn:"Visionary and founder of Malkia B Cosmetics, Hamin embodies the ambition to make premium beauty accessible to all. Under his leadership, the brand shines from Bukavu and Kigali to the world.", img:'images/CEO.webp' },
  { id:'samuel', name:'Samuel Buhendwa', role:'Sales & Marketing', roleEn:'Sales & Marketing', bio:"Samuel est le moteur commercial de Malkia B. Stratège dans l'âme, il développe les marchés et fidélise une clientèle exigeante grâce à un accompagnement personnalisé.", bioEn:"Samuel is the commercial engine of Malkia B. A strategist at heart, he develops markets and builds loyalty among discerning clients through personalized support.", img:'images/samuel.webp' },
  { id:'wema', name:'Wema Birindwa', role:'Sales & Marketing', roleEn:'Sales & Marketing', bio:"Wema allie écoute et expertise pour conseiller chaque cliente. Son énergie positive et sa connaissance des produits font d'elle une ambassadrice de choix.", bioEn:"Wema combines listening and expertise to advise every client. Her positive energy and product knowledge make her a valued ambassador.", img:'images/Wema.webp' },
  { id:'fadhili', name:'Fadhili Mushikazi', role:'Sales & Marketing', roleEn:'Sales & Marketing', bio:"Fadhili excelle dans l'art de la relation client. Passionnée par la cosmétique, elle met son sens du service au service de l'expérience Malkia B.", bioEn:"Fadhili excels in the art of customer relations. Passionate about cosmetics, she dedicates her service mindset to the Malkia B experience.", img:'images/Fadhili.webp' },
  { id:'julia', name:'Wani Mugaruka Julia', role:'Sales & Marketing', roleEn:'Sales & Marketing', bio:"Julia est une force de vente naturelle. Sa détermination et sa chaleur humaine créent un lien unique avec chaque cliente qui franchit les portes de la boutique.", bioEn:"Julia is a natural sales force. Her determination and warmth create a unique bond with every client who walks through the store doors.", img:'images/Wani Julia.webp' },
  { id:'narcisse', name:'Narcisse Baderhe', role:'Sales & Marketing', roleEn:'Sales & Marketing', bio:"Narcisse apporte rigueur et professionnalisme à l'équipe commerciale. Son expertise des marchés locaux contribue à l'ancrage régional de la marque.", bioEn:"Narcisse brings rigor and professionalism to the commercial team. Her expertise in local markets contributes to the brand's regional roots.", img:'images/Narcisse-Baderhe.webp' },
  { id:'esther', name:'Esther Birindwa', role:'Janitor', roleEn:'Janitor', bio:"Esther veille à ce que chaque espace Malkia B soit impeccable. Son travail discret mais essentiel garantit un cadre d'exception pour nos clients et nos équipes.", bioEn:"Esther ensures every Malkia B space is spotless. Her discreet yet essential work guarantees an exceptional environment for our clients and teams.", img:'images/Janitor.webp' },
  { id:'guillaine', name:'Guillaine Kuchirabwinja', role:'Sécurité', roleEn:'Security', bio:"Guillaine assure la sécurité et la sérénité de nos boutiques. Vigilant et bienveillant, il accueille chaque visiteur avec professionnalisme.", bioEn:"Guillaine ensures the security and serenity of our boutiques. Vigilant and caring, he welcomes every visitor with professionalism.", img:'team-guillaine' },
  { id:'elie', name:'Elie Binwa', role:'Sécurité', roleEn:'Security', bio:"Elie est le garant de la tranquillité de nos espaces. Son sérieux et sa disponibilité font de lui un membre essentiel de la famille Malkia B.", bioEn:"Elie is the guarantor of tranquility in our spaces. His seriousness and availability make him an essential member of the Malkia B family.", img:'team-elie' },
  { id:'photo', name:'Photographer', roleEn:'Coming soon', role: t('ui.ui_001'), bio:t('ui.ui_049'), bioEn:"We are currently hiring a talented photographer to capture the essence of Malkia B. If you are passionate about beauty and imagery, join us!", img:'team-photo' },
];

function renderTeam(){
  const tm = t('team');
  return `
  <div class="px-5 md:px-margin-desktop pb-24">
    <div class="text-center mb-16">
      <span class="text-[11px] text-primary uppercase tracking-widest mb-3 block">${tm.subtitle}</span>
      <h1 class="font-display text-3xl md:text-5xl mb-4">${tm.title}</h1>
      <p class="text-sm md:text-base text-on-background/70 max-w-xl mx-auto">${t('team.desc')}</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
      ${TEAM.map((m,i)=>`
      <a href="#/team/${m.id}" class="group text-center ${i>0 ? 'mt-0 md:mt-8' : ''}">
        <div class="aspect-square overflow-hidden mb-4 border border-outline-variant/10 bg-surface-container-low transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg">
          <img loading="lazy" src="${ti(m,500,500)}" class="w-full h-full object-cover" alt="${m.name}">
        </div>
        <h3 class="font-display text-base md:text-lg font-medium">${m.name}</h3>
        <p class="text-[11px] text-primary uppercase tracking-widest mt-1">${m.roleKey ? t('team.'+m.roleKey) : (LANG.current==='en' && m.roleEn ? m.roleEn : m.role)}</p>
      </a>`).join('')}
    </div>
  </div>`;
}

function renderTeamMember(id){
  const tm = t('team'), m = TEAM.find(t=>t.id===id);
  if(!m) return `<div class="px-5 text-center py-20"><h1 class="font-display text-2xl">${t('account.not_found')}</h1><a href="#/team" class="inline-block mt-6 text-primary border-b border-primary/30">${t('account.back')}</a></div>`;
  const others = TEAM.filter(t=>t.id!==id); const startIdx = TEAM.findIndex(t=>t.id===id) % others.length; const rot = [...others.slice(startIdx), ...others.slice(0, startIdx)].slice(0, 5);
  return `
  <div class="px-5 md:px-margin-desktop pb-24">
    <a href="#/team" class="flex items-center gap-2 text-primary luxury-underline w-fit text-sm mb-10"><span class="material-symbols-outlined text-base">arrow_back</span> ${t('account.all_team')}</a>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
      <div class="md:col-span-5">
        <div class="aspect-square overflow-hidden border border-outline-variant/10 shadow-lg">
          <img loading="lazy" src="${ti(m,700,700)}" class="w-full h-full object-cover" alt="${m.name}">
        </div>
      </div>
      <div class="md:col-span-7">
        <span class="text-[11px] text-primary uppercase tracking-widest block mb-3">${tm.subtitle}</span>
        <h1 class="font-display text-3xl md:text-5xl mb-2">${m.name}</h1>
        <p class="text-sm text-primary uppercase tracking-widest mb-8 border-b border-outline-variant/20 pb-6">${m.roleKey ? t('team.'+m.roleKey) : (LANG.current==='en' ? m.roleEn : m.role)}</p>
        <p class="text-base text-on-surface-variant leading-relaxed mb-10">${LANG.current==='en' ? m.bioEn : m.bio}</p>
        <div class="border-t border-outline-variant/10 pt-6">
          <h3 class="text-xs uppercase tracking-widest font-semibold mb-4">${t('account.share')}</h3>
          <div class="flex gap-4 text-outline">
            <span class="material-symbols-outlined cursor-pointer hover:text-primary">alternate_email</span>
            <span class="material-symbols-outlined cursor-pointer hover:text-primary">link</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div class="text-center mb-10">
        <span class="text-[11px] text-primary uppercase tracking-widest mb-2 block">${t('account.also')}</span>
        <h2 class="font-display text-2xl md:text-3xl">${t('account.members')}</h2>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-6">
        ${rot.map(m=>`
        <a href="#/team/${m.id}" class="group text-center">
          <div class="aspect-square overflow-hidden mb-2 border border-outline-variant/10 transition-transform duration-500 group-hover:scale-105">
            <img loading="lazy" src="${ti(m,300,300)}" class="w-full h-full object-cover" alt="${m.name}">
          </div>
          <h4 class="font-display text-sm md:text-base font-medium">${m.name}</h4>
          <p class="text-[10px] text-primary uppercase tracking-widest mt-1">${m.roleKey ? t('team.'+m.roleKey) : (LANG.current==='en' && m.roleEn ? m.roleEn : m.role)}</p>
        </a>`).join('')}
      </div>
    </div>
  </div>`;
}

/* ===== PRODUCT SEARCH ===== */
function initProductSearch(){
  const input = document.getElementById('productSearch');
  const grid = document.getElementById('productGrid');
  const noResults = document.getElementById('noResults');
  if(!input || !grid) return;
  input.addEventListener('input', function(){
    const q = this.value.toLowerCase().trim();
    let visible = 0;
    Array.from(grid.children).forEach(card => {
      const name = card.getAttribute('data-name') || '';
      if(!q || name.includes(q)){ card.style.display = ''; visible++; }
      else{ card.style.display = 'none'; }
    });
    if(noResults) noResults.classList.toggle('hidden', visible>0);
  });
}

/* ===== SCROLL REVEAL ===== */
function initScrollReveal(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold:0.1, rootMargin:'0px 0px -40px 0px' });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => obs.observe(el));
}

/* ===== HEADER / FOOTER ===== */
function renderHeader(){
  const n = t('nav');
  const isEn = LANG.current === 'en';
  document.getElementById('headerContainer').innerHTML = `
  <header class="fixed top-0 left-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-outline-variant/20">
    <div class="flex justify-between items-center px-5 md:px-margin-desktop py-5 max-w-container-max mx-auto">
      <button class="md:hidden" onclick="toggleMobileMenu()"><span class="material-symbols-outlined">menu</span></button>
      <a href="#/home" class="font-display text-xl md:text-2xl text-primary uppercase tracking-widest mx-auto md:mx-0">Malkia B <span class="italic normal-case">Cosmetics</span></a>
      <nav class="hidden md:flex gap-8 items-center" id="megaNav">
        <a href="#/home" class="font-body text-[13px] tracking-widest uppercase text-on-background/70 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">${n.home}</a>
        <a href="#/products" class="font-body text-[13px] tracking-widest uppercase text-on-background/70 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">${n.products}</a>
        <a href="#/story" class="font-body text-[13px] tracking-widest uppercase text-on-background/70 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">${n.story}</a>
        <a href="#/shops" class="font-body text-[13px] tracking-widest uppercase text-on-background/70 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">${n.shops}</a>
        <a href="#/contact" class="font-body text-[13px] tracking-widest uppercase text-on-background/70 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">${n.contact}</a>
      </nav>
      <div class="flex items-center gap-4 text-on-background">
        <button onclick="setLang('${isEn?'fr':'en'}')" class="text-[11px] uppercase tracking-widest font-semibold text-primary hover:text-primary-container transition-colors border border-primary/30 px-2.5 py-1 rounded">${isEn?'FR':'EN'}</button>
        <a href="#/account" class="hover:text-primary transition-all"><span class="material-symbols-outlined">person</span></a>
        <a href="#/cart" class="relative hover:text-primary transition-all">
          <span class="material-symbols-outlined">shopping_cart</span>
          <span id="cartCount" class="cart-badge absolute -top-2 -right-2 bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
        </a>
      </div>
    </div>
    <div id="mobileMenu" class="hidden flex-col bg-background border-t border-outline-variant/20 px-5 pb-4 overflow-y-auto max-h-[80vh]">
      <a href="#/home" onclick="toggleMobileMenu()" class="py-3 border-b border-outline-variant/10 uppercase text-[13px] tracking-widest">${n.home}</a>
      <a href="#/products" onclick="toggleMobileMenu()" class="py-3 border-b border-outline-variant/10 uppercase text-[13px] tracking-widest font-semibold">${n.products}</a>
      <a href="#/category/body" onclick="toggleMobileMenu()" class="py-3 pl-4 border-b border-outline-variant/10 uppercase text-[12px] tracking-widest text-on-surface-variant">— ${n.body}</a>
      <a href="#/category/face" onclick="toggleMobileMenu()" class="py-3 pl-4 border-b border-outline-variant/10 uppercase text-[12px] tracking-widest text-on-surface-variant">— ${n.face}</a>
      <a href="#/category/fragrance" onclick="toggleMobileMenu()" class="py-3 pl-4 border-b border-outline-variant/10 uppercase text-[12px] tracking-widest text-on-surface-variant">— ${n.fragrance}</a>
      <a href="#/category/wellness" onclick="toggleMobileMenu()" class="py-3 pl-4 border-b border-outline-variant/10 uppercase text-[12px] tracking-widest text-on-surface-variant">— ${n.wellness}</a>
      <a href="#/story" onclick="toggleMobileMenu()" class="py-3 border-b border-outline-variant/10 uppercase text-[13px] tracking-widest">${n.story}</a>
      <a href="#/shops" onclick="toggleMobileMenu()" class="py-3 border-b border-outline-variant/10 uppercase text-[13px] tracking-widest">${n.shops}</a>
      <a href="#/contact" onclick="toggleMobileMenu()" class="py-3 border-b border-outline-variant/10 uppercase text-[13px] tracking-widest">${n.contact}</a>
      <a href="#/account" onclick="toggleMobileMenu()" class="py-3 border-b border-outline-variant/10 uppercase text-[13px] tracking-widest">${n.account}</a>
      <button onclick="setLang('${isEn?'fr':'en'}')" class="py-3 uppercase text-[13px] tracking-widest text-primary">${isEn?'FR':'EN'}</button>
    </div>
  </header>`;
}
function renderFooter(){
  const n = t('nav'), f = t('footer');
  document.getElementById('footerContainer').innerHTML = `
  <footer class="bg-surface-container-lowest border-t border-outline-variant/20">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-10 px-5 md:px-margin-desktop py-16 max-w-container-max mx-auto">
      <div class="col-span-2 md:col-span-1 space-y-4">
        <div class="font-display text-xl text-primary uppercase tracking-widest">Malkia B</div>
        <p class="text-sm text-on-surface-variant max-w-xs">${f.tagline}</p>
      </div>
      <div class="space-y-4">
        <h4 class="text-xs uppercase tracking-widest text-primary font-semibold">${f.shop}</h4>
        <a href="#/category/body" class="block text-sm text-on-surface-variant hover:text-primary luxury-underline w-fit">${n.body}</a>
        <a href="#/category/face" class="block text-sm text-on-surface-variant hover:text-primary luxury-underline w-fit">${n.face}</a>
        <a href="#/category/fragrance" class="block text-sm text-on-surface-variant hover:text-primary luxury-underline w-fit">${n.fragrance}</a>
        <a href="#/category/wellness" class="block text-sm text-on-surface-variant hover:text-primary luxury-underline w-fit">${n.wellness}</a>
      </div>
      <div class="space-y-4">
        <h4 class="text-xs uppercase tracking-widest text-primary font-semibold">${f.support}</h4>
        <a href="#/contact" class="block text-sm text-on-surface-variant hover:text-primary luxury-underline w-fit">${n.contact}</a>
        <a href="#/story" class="block text-sm text-on-surface-variant hover:text-primary luxury-underline w-fit">${n.story}</a>
        <a href="#/shops" class="block text-sm text-on-surface-variant hover:text-primary luxury-underline w-fit">${n.shops}</a>
        <a href="#/account" class="block text-sm text-on-surface-variant hover:text-primary luxury-underline w-fit">${n.account}</a>
        <p class="text-sm text-on-surface-variant">${f.delivery}</p>
      </div>
      <div class="space-y-4">
        <h4 class="text-xs uppercase tracking-widest text-primary font-semibold">${f.follow}</h4>
        <div class="flex gap-4 pt-2">
          <a href="https://instagram.com/malkiabetes" target="_blank" rel="noopener" class="w-9 h-9 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all"><svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
          <a href="https://facebook.com/malkiabetes" target="_blank" rel="noopener" class="w-9 h-9 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all"><svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          <a href="https://tiktok.com/@malkiabetes" target="_blank" rel="noopener" class="w-9 h-9 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all"><svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a>
        </div>
        <p class="text-[10px] text-on-surface-variant/60 pt-2">Instagram · Facebook · TikTok</p>
      </div>
    </div>
    <div class="text-center text-xs text-on-surface-variant/60 py-6 border-t border-outline-variant/10">${f.copyright}</div>
  </footer>`;
}
function renderHeaderFooter(){ renderHeader(); renderFooter(); }

/* ===== ROUTER ===== */
function parseRoute(){ const h = location.hash.replace('#/','') || 'home'; return h.split('/'); }
function navigate(){
  window.scrollTo(0,0);
  const [page, param] = parseRoute();
  const app = document.getElementById('app');
  if(!app) return;
  renderHeaderFooter();
  app.style.animation = 'none';
  void app.offsetHeight;
  app.style.animation = 'page-enter 0.4s ease-out';
  if(page==='home'){ app.innerHTML = renderHome(); setTimeout(()=>{ initHeroCarousel(); initScrollReveal(); }, 50); }
  else if(page==='category'){ app.innerHTML = renderCategory(param||'body'); setTimeout(()=>{ initScrollReveal(); initProductSearch(); }, 50); }
  else if(page==='product'){ activeTab='desc'; activeThumb=0; app.innerHTML = renderProduct(param); setTimeout(initScrollReveal, 50); }
  else if(page==='cart'){ app.innerHTML = renderCart(); setTimeout(initScrollReveal, 50); }
  else if(page==='checkout'){ app.innerHTML = renderCheckout(); setTimeout(initScrollReveal, 50); }
  else if(page==='account'){ app.innerHTML = renderAccount(); setTimeout(initScrollReveal, 50); }
  else if(page==='contact'){ app.innerHTML = renderContact(); setTimeout(initScrollReveal, 50); }
  else if(page==='team' && param){ app.innerHTML = renderTeamMember(param); setTimeout(initScrollReveal, 50); }
  else if(page==='team'){ app.innerHTML = renderTeam(); setTimeout(initScrollReveal, 50); }
  else if(page==='story'){ app.innerHTML = renderStory(); setTimeout(initScrollReveal, 50); }
  else if(page==='shops'){ app.innerHTML = renderShops(); setTimeout(initScrollReveal, 50); }
  else if(page==='products'){ app.innerHTML = renderProducts(param); setTimeout(()=>{ initScrollReveal(); initProductSearch(); }, 50); }
  else{ app.innerHTML = renderNotFound(); }
  updateCartCount();
}
window.addEventListener('hashchange', navigate);

/* ===== SHARED COMPONENTS ===== */
function productCard(p){
  const imageUrl = p.img ? p.img : (p.seed ? `https://picsum.photos/seed/${p.seed}/400/500` : 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=500&fit=crop&q=80');
  const isSPA = !!document.getElementById('app');
  const link = isSPA ? `#/product/${p.id}` : `product.html?id=${p.id}`;
  return `
  <a href="${link}" class="group block">
    <div class="relative aspect-square md:aspect-[3/4] overflow-hidden mb-4 border border-outline-variant/10 bg-surface-container-low">
      <img loading="lazy" src="${imageUrl}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="${p.name}">
      ${p.badge ? `<div class="absolute top-3 left-3 bg-primary text-on-primary text-[9px] px-3 py-1.5 uppercase tracking-widest font-semibold">${p.badge}</div>` : ''}
      <button onclick="event.preventDefault(); event.stopPropagation(); addToCart('${p.id}')" class="absolute bottom-4 right-4 bg-background/90 p-3 rounded-full opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm active:scale-90">
        <span class="material-symbols-outlined text-primary text-[20px]">add_shopping_cart</span>
      </button>
    </div>
    <div class="text-center">
      <p class="text-[11px] uppercase tracking-widest text-outline mb-1">${p.subtitle}</p>
      <h4 class="font-display text-base md:text-lg font-medium mb-1 line-clamp-2">${p.name}</h4>
      <p class="text-sm text-primary font-medium">${fmt(p.price)} $</p>
    </div>
  </a>`;
}

/* ===== 404 ===== */
function renderNotFound(){
  return `
  <div class="px-5 md:px-margin-desktop pb-24 text-center py-24">
    <h1 class="font-display text-6xl md:text-8xl text-primary mb-6">404</h1>
    <p class="text-on-surface-variant mb-8 max-w-md mx-auto">${t('ui.ui_002')}</p>
    <a href="#/home" class="inline-block bg-primary text-on-primary px-8 py-4 text-[12px] uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all">${t('ui.ui_003')}</a>
  </div>`;
}

/* ===== HOME ===== */
function renderHome(){
  const h = t('home'), hr = t('hero'), c = t('cat');
  const newArrivals = PRODUCTS.slice(0,4);
  return `
  <section id="heroCarousel" class="relative h-[60vh] md:h-[85vh] w-full overflow-hidden mb-16 md:mb-24 group">
    <div id="heroTrack" class="flex h-full transition-transform duration-700 ease-in-out">
      ${HERO_SLIDES.map((s,i) => `
      <div class="relative min-w-full h-full flex-shrink-0 overflow-hidden">
        <img src="${s.img}" class="absolute inset-0 w-full h-full object-cover" alt="">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/5"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span class="text-[11px] text-primary-container uppercase tracking-[0.35em] mb-5 opacity-0 translate-y-4 animate-fade-in-up drop-shadow-sm" style="animation-delay:0.1s">${t('hero.slide'+i+'_tag')}</span>
          <h1 class="font-display text-4xl md:text-6xl text-primary-container max-w-3xl mb-6 leading-tight opacity-0 translate-y-4 animate-fade-in-up drop-shadow-lg" style="animation-delay:0.3s">${t('hero.slide'+i+'_title')}</h1>
          <p class="text-base text-primary-container/90 max-w-lg mb-10 opacity-0 translate-y-4 animate-fade-in-up drop-shadow-md" style="animation-delay:0.5s">${t('hero.slide'+i+'_text')}</p>
          <div class="flex flex-col sm:flex-row gap-4 opacity-0 translate-y-4 animate-fade-in-up" style="animation-delay:0.7s">
            <a href="${s.cta1.link}" class="bg-primary text-on-primary px-10 py-4 text-[12px] tracking-widest uppercase hover:bg-primary-container hover:text-on-primary-container transition-all btn-shine">${hr.cta1}</a>
            <a href="${s.cta2.link}" class="border border-white/40 text-white px-10 py-4 text-[12px] tracking-widest uppercase backdrop-blur-sm hover:bg-white/10 transition-all">${hr.cta2}</a>
          </div>
        </div>
      </div>`).join('')}
    </div>
    <button class="hero-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-on-background opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/80">
      <span class="material-symbols-outlined">chevron_left</span>
    </button>
    <button class="hero-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-on-background opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/80">
      <span class="material-symbols-outlined">chevron_right</span>
    </button>
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-3">
      ${HERO_SLIDES.map((_, i) => `<button class="hero-dot w-2.5 h-2.5 rounded-full bg-outline-variant transition-all duration-300 hover:scale-125"></button>`).join('')}
    </div>
  </section>

  <section class="px-5 md:px-margin-desktop mb-16 md:mb-24 reveal">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      ${Object.entries(CATS).map(([key,label], i)=>`
      <a href="#/category/${key}" class="relative aspect-[3/4] overflow-hidden group hover-lift border border-outline-variant/10 ${i%2===1?'md:mt-12':''} reveal reveal-d${(i%4)+1}">
        <img src="images/cat-${key}.webp" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="${label}">
        <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        <div class="absolute bottom-6 left-6">
          <h3 class="font-display text-lg md:text-xl mb-1">${t('cat.'+key) || label}</h3>
          <span class="text-[11px] text-primary uppercase tracking-widest flex items-center gap-1">${h.see_more} <span class="material-symbols-outlined text-sm">arrow_forward</span></span>
        </div>
      </a>`).join('')}
    </div>
  </section>

  <section class="px-5 md:px-margin-desktop mb-16 md:mb-24 reveal">
    <div class="flex justify-between items-end mb-10 md:mb-14 reveal">
      <div>
        <span class="text-[11px] text-primary uppercase tracking-widest mb-2 block">${h.latest}</span>
        <h2 class="font-display text-2xl md:text-3xl">${t('new_arrivals')}</h2>
      </div>
      <a href="#/products" class="text-[13px] text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all hidden sm:block">${h.see_all}</a>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
      ${newArrivals.map((p,i)=>`<div class="reveal reveal-d${(i%4)+1}">${productCard(p)}</div>`).join('')}
    </div>
  </section>

  <section class="bg-surface-container-low py-16 md:py-28 mb-16 md:mb-24 reveal">
    <div class="px-5 md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
      <div>
        <span class="text-[11px] text-primary uppercase tracking-widest mb-5 block">${h.story}</span>
        <h2 class="font-display text-3xl md:text-4xl mb-6 leading-tight">${h.story_h}</h2>
        <p class="text-base text-on-background/80 mb-6">${h.story_p1}</p>
        <p class="text-sm text-on-background/70 mb-10">${h.story_p2}</p>
        <div class="grid grid-cols-2 gap-8">
          <div><span class="block font-display text-2xl text-primary mb-1">2015</span><span class="text-[11px] text-outline uppercase tracking-widest">${h.since}</span></div>
          <div><span class="block font-display text-2xl text-primary mb-1">Global</span><span class="text-[11px] text-outline uppercase tracking-widest">${h.delivery}</span></div>
        </div>
      </div>
      <div class="aspect-[4/5] overflow-hidden shadow-xl">
        <img src="${'images/CEO.webp'}" class="w-full h-full object-cover" alt="Hamin Banga, fondateur de Malkia B Cosmetics">
      </div>
    </div>
  </section>

  <section class="px-5 md:px-margin-desktop py-16 text-center">
    <div class="max-w-xl mx-auto">
      <span class="material-symbols-outlined text-primary text-3xl mb-4 block animate-float">auto_awesome</span>
      <h2 class="font-display text-2xl md:text-3xl mb-4">${h.join}</h2>
      <p class="text-sm text-on-background/70 mb-8">${h.join_p}</p>
      <div class="flex justify-center gap-6">
        <a href="https://wa.me/243995945889" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:scale-110 transition-transform" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
        <a href="https://www.instagram.com/malkiabcosmetics" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:scale-110 transition-transform" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
        <a href="https://www.facebook.com/malkiabcosmetics" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:scale-110 transition-transform" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
        <a href="https://www.tiktok.com/@malkiabcosmetics" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:scale-110 transition-transform" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a>
      </div>
    </div>
  </section>

  <section class="bg-surface-container-low py-16 md:py-28 text-center">
    <div class="px-5 md:px-margin-desktop max-w-2xl mx-auto reveal">
      <span class="text-[11px] text-primary uppercase tracking-widest mb-4 block">${h.find}</span>
      <h2 class="font-display text-3xl md:text-4xl mb-6">${h.contacts}</h2>
      <p class="text-sm text-on-surface-variant mb-10">${h.contacts_p}</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#/shops" class="bg-primary text-on-primary px-10 py-4 text-[12px] uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all btn-shine">${t('nav.shops')}</a>
        <a href="#/contact" class="border border-primary text-primary px-10 py-4 text-[12px] uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all btn-shine">${t('nav.contact')}</a>
      </div>
    </div>
  </section>
  `;
}

/* ===== CATEGORY ===== */
function renderCategory(catKey){
  const label = t('cat.'+catKey) || (CATS[catKey] || t('product.shop'));
  const items = PRODUCTS.filter(p=>p.cat===catKey);
  const catHero = { body:'images/corps accueil.webp', face:'images/visage accueil.webp', fragrance:'images/cat-fragrance.webp', wellness:'images/bien etre accueil (2).webp' }[catKey];
  return `
  ${catHero ? `
  <div class="w-full h-[30vh] md:h-[45vh] overflow-hidden relative mb-10">
    <img src="${catHero}" class="w-full h-full object-cover" alt="${label}">
    <div class="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
  </div>` : ''}
  <div class="px-5 md:px-margin-desktop pb-24">
    <div class="text-center mb-10 reveal">
      <span class="text-[11px] text-primary uppercase tracking-widest mb-3 block">${t('categories')}</span>
      <h1 class="font-display text-3xl md:text-5xl mb-4">${label}</h1>
      <p class="text-sm md:text-base text-on-background/70 max-w-xl mx-auto">${t('product.subtitle')}</p>
    </div>
    <div class="mb-8 reveal">
      <div class="relative max-w-md mx-auto">
        <span class="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-outline text-base">search</span>
        <input id="productSearch" type="text" placeholder="${t('ui.ui_004')}" class="w-full border-b border-outline-variant/30 py-3 pl-8 pr-4 text-sm bg-transparent focus:border-primary transition-colors outline-none">
      </div>
    </div>
    <div id="productGrid" class="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
      ${items.map((p,i)=>`<div data-name="${p.name.toLowerCase()}" class="reveal reveal-d${(i%4)+1}">${productCard(p)}</div>`).join('')}
    </div>
    <div id="noResults" class="text-center py-16 hidden">
      <span class="material-symbols-outlined text-4xl text-outline mb-4 block">search_off</span>
      <p class="text-on-surface-variant">${t('ui.ui_005')}</p>
    </div>
  </div>
  `;
}

/* ===== PRODUCT ===== */
function renderProduct(id){
  const p = findProduct(id), pr = t('product');
  if(!p) return `<div class="px-5 text-center py-20"><h1 class="font-display text-2xl">${t('ui.ui_006')}</h1></div>`;
  const related = PRODUCTS.filter(x=>x.cat===p.cat && x.id!==p.id).slice(0,4);
  const mainImg = (p.gallery && p.gallery[0]) || p.img || img(p.seed, 700, 875);
  const thumbs = p.gallery || (p.img ? [p.img] : [img(p.seed, 140, 175), img(p.seed+'-b', 140, 175), img(p.seed+'-c', 140, 175)]);
  return `
  <div id="productView" data-pid="${p.id}" class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 px-5 md:px-margin-desktop pb-16">
    <div>
      <div class="aspect-[4/5] overflow-hidden mb-4 border border-outline-variant/10">
        <img id="mainImg" src="${mainImg}" class="w-full h-full object-cover" alt="${p.name}">
      </div>
      <div id="thumbRow" class="flex gap-3 overflow-x-auto pb-2">
        ${thumbs.map((t,i)=>`<img src="${t}" onclick="switchThumb(${i})" class="w-16 h-20 object-cover cursor-pointer ${i===activeThumb?'opacity-100 border-b-2 border-primary':'opacity-50'}" alt="${p.name}">`).join('')}
      </div>
    </div>
    <div>
      <span class="text-[11px] uppercase tracking-widest text-outline">${p.subtitle}</span>
      <h1 class="font-display text-3xl md:text-4xl my-3">${p.name}</h1>
      <div class="flex items-center gap-2 mb-5">
        <div class="flex text-primary text-sm">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5-Math.round(p.rating))}</div>
        <span class="text-xs text-outline">(${p.reviews} ${pr.reviews})</span>
      </div>
      <div class="font-display text-2xl mb-6">${fmt(p.price)} $</div>
      <p class="text-sm text-on-surface-variant leading-relaxed mb-8">${p.desc}</p>
      <div class="flex items-center justify-between border-t border-outline-variant/10 pt-6 mb-8">
        <span class="text-xs uppercase tracking-widest">${t('cart.qty')}</span>
        <div class="flex items-center border border-outline-variant/30 rounded-full">
          <button onclick="document.getElementById('qtyVal').textContent = Math.max(1, parseInt(document.getElementById('qtyVal').textContent)-1)" class="px-4 py-2">-</button>
          <span id="qtyVal" class="px-2">1</span>
          <button onclick="document.getElementById('qtyVal').textContent = parseInt(document.getElementById('qtyVal').textContent)+1" class="px-4 py-2">+</button>
        </div>
      </div>
      <div class="flex flex-col gap-4 mb-10">
        <button onclick="addToCart('${p.id}', parseInt(document.getElementById('qtyVal').textContent))" class="w-full bg-primary text-on-primary py-4 text-[12px] uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all btn-shine">${pr.add}</button>
        <a href="#/checkout" onclick="addToCart('${p.id}', parseInt(document.getElementById('qtyVal').textContent))" class="w-full text-center border border-primary text-primary py-4 text-[12px] uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all btn-shine">${t('ui.ui_007')}</a>
      </div>
      <div id="tabContainer" class="flex justify-center gap-8 border-b border-outline-variant/20 mb-6">
        <button data-tab="desc" onclick="switchTab('desc')" class="pb-3 text-[12px] uppercase tracking-widest ${activeTab==='desc'?'tab-active':'text-outline'}">${pr.desc}</button>
        <button data-tab="ing" onclick="switchTab('ing')" class="pb-3 text-[12px] uppercase tracking-widest ${activeTab==='ing'?'tab-active':'text-outline'}">${pr.ing}</button>
        <button data-tab="avis" onclick="switchTab('avis')" class="pb-3 text-[12px] uppercase tracking-widest ${activeTab==='avis'?'tab-active':'text-outline'}">${pr.reviews} (${p.reviews})</button>
      </div>
      <div id="tabContent" class="text-sm text-on-surface-variant leading-relaxed">
        ${activeTab==='desc' ? p.desc : activeTab==='ing' ? p.ingredients : `
          <div class="space-y-4">
            <div class="pb-4 border-b border-outline-variant/10"><span class="text-primary text-xs">★★★★★</span><p class="mt-1">"Une merveille, ma peau n'a jamais été aussi lumineuse." — Aïcha K.</p></div>
            <div><span class="text-primary text-xs">★★★★☆</span><p class="mt-1">"Très satisfaite, je recommande." — Fatou D.</p></div>
          </div>`}
      </div>
    </div>
  </div>
  <section class="px-5 md:px-margin-desktop pb-24">
    <div class="text-center mb-10">
      <span class="text-[11px] text-primary uppercase tracking-widest mb-2 block">${t('account.also')}</span>
      <h2 class="font-display text-2xl md:text-3xl">${t('ui.ui_008')}</h2>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">${related.map(p=>productCard(p)).join('')}</div>
  </section>
  `;
}

/* ===== PRODUCT SWITCHERS (local DOM updates) ===== */
function switchTab(tab){
  const pid = document.getElementById('productView')?.dataset?.pid;
  const p = PRODUCTS.find(x=>x.id===pid);
  if(!p) return;
  document.querySelectorAll('#tabContainer button').forEach(b=>{b.className='pb-3 text-[12px] uppercase tracking-widest text-outline';});
  const btn = document.querySelector(`#tabContainer button[data-tab="${tab}"]`);
  if(btn) btn.className='pb-3 text-[12px] uppercase tracking-widest tab-active';
  const content = tab==='desc' ? p.desc : tab==='ing' ? p.ingredients : `
    <div class="space-y-4">
      <div class="pb-4 border-b border-outline-variant/10"><span class="text-primary text-xs">★★★★★</span><p class="mt-1">"Une merveille, ma peau n'a jamais été aussi lumineuse." — Aïcha K.</p></div>
      <div><span class="text-primary text-xs">★★★★☆</span><p class="mt-1">"Très satisfaite, je recommande." — Fatou D.</p></div>
    </div>`;
  document.getElementById('tabContent').innerHTML = content;
}
function switchThumb(idx){
  const imgs = document.querySelectorAll('#thumbRow img');
  imgs.forEach((img,i)=>{img.className=`w-16 h-20 object-cover cursor-pointer ${i===idx?'opacity-100 border-b-2 border-primary':'opacity-50'}`;});
  const main = document.getElementById('mainImg');
  if(main&&imgs[idx]) main.src = imgs[idx].src;
}

/* ===== CART ===== */
function renderCart(){
  const ca = t('cart');
  if(cart.length===0){
    return `<div class="px-5 text-center py-24">
      <span class="font-display text-4xl text-primary block mb-4">✦</span>
      <h1 class="font-display text-2xl mb-2">${ca.empty}</h1>
      <p class="text-sm text-on-surface-variant mb-8">${t('ui.ui_001')}</p>
      <a href="#/products" class="inline-block bg-primary text-on-primary px-10 py-4 text-[12px] uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all btn-shine">${ca.cta}</a>
    </div>`;
  }
  const lines = cart.map(c=>{ const p=findProduct(c.id); return {...p, qty:c.qty, lineTotal:p.price*c.qty}; });
  const subtotal = lines.reduce((s,l)=>s+l.lineTotal,0);
  return `
  <div class="px-5 md:px-margin-desktop pb-24">
    <h1 class="font-display text-2xl md:text-3xl text-primary mb-2">${ca.title}</h1>
    <p class="text-sm text-on-surface-variant italic mb-12">${t('ui.ui_002')}</p>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      <div class="lg:col-span-8">
        ${lines.map(l=>`
        <div class="grid grid-cols-[80px_1fr_auto] md:grid-cols-12 items-center gap-4 md:gap-0 border-b border-outline-variant/10 py-6">
          <div class="md:col-span-6 flex items-center gap-4 md:gap-6">
            <div class="w-16 h-20 md:w-24 md:h-32 flex-shrink-0 bg-surface-container-low overflow-hidden">
              <img loading="lazy" src="${pi(l,200,250)}" class="w-full h-full object-cover" alt="${l.name}">
            </div>
            <div>
              <h3 class="font-display text-sm md:text-base mb-1">${l.name}</h3>
              <p class="text-[11px] text-outline uppercase">${t('cat.'+l.cat) || CATS[l.cat]}</p>
              <button onclick="removeFromCart('${l.id}')" class="mt-2 flex items-center gap-1 text-xs text-on-surface-variant hover:text-error transition-colors"><span class="material-symbols-outlined text-[16px]">close</span> ${ca.remove}</button>
            </div>
          </div>
          <div class="hidden md:flex md:col-span-2 justify-center">
            <div class="flex items-center border border-outline-variant/30 rounded-full px-3 py-1">
              <button onclick="changeQty('${l.id}',-1)" class="px-2">-</button>
              <span class="mx-3 text-sm">${l.qty}</span>
              <button onclick="changeQty('${l.id}',1)" class="px-2">+</button>
            </div>
          </div>
          <div class="text-right md:col-span-2">
            <div class="font-medium text-primary">${fmt(l.lineTotal)} $</div>
            <div class="flex md:hidden items-center justify-end gap-2 mt-2">
              <button onclick="changeQty('${l.id}',-1)" class="border px-2">-</button>
              <span class="text-sm">${l.qty}</span>
              <button onclick="changeQty('${l.id}',1)" class="border px-2">+</button>
            </div>
          </div>
        </div>`).join('')}
        <a href="#/products" class="flex items-center gap-2 mt-8 text-primary luxury-underline w-fit text-sm"><span class="material-symbols-outlined text-base">arrow_back</span> ${ca.cta}</a>
      </div>
      <div class="lg:col-span-4">
        <div class="bg-surface-container-low p-8 sticky top-28 border border-outline-variant/10">
          <h2 class="font-display text-xl mb-6">${ca.title}</h2>
          <div class="space-y-3 mb-6 text-sm">
            <div class="flex justify-between"><span class="text-on-surface-variant">${ca.sub}</span><span>${fmt(subtotal)} $</span></div>
          </div>
          <div class="border-t border-outline-variant/30 pt-4 mb-8 flex justify-between items-center">
            <span class="font-display text-lg">${ca.total}</span>
            <span class="font-display text-xl text-primary">${fmt(subtotal)} $</span>
          </div>
          <div class="flex gap-2 mb-8">
            <input type="text" placeholder="${ca.promo}" class="flex-1 border-b border-outline-variant py-2 text-sm bg-transparent">
            <button class="text-primary text-[11px] uppercase tracking-widest">${ca.apply}</button>
          </div>
          <a href="#/checkout" class="block text-center w-full bg-primary text-on-primary py-4 text-[12px] uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all btn-shine">${ca.checkout}</a>
        </div>
      </div>
    </div>
  </div>
  `;
}

/* ===== CHECKOUT ===== */
function toggleDelivery(yes){
  document.getElementById('deliveryCity').classList.toggle('hidden', !yes);
  const labels = document.querySelectorAll('label:has(input[name="wantDelivery"])');
  labels.forEach(l => l.className = l.className.replace('border-primary bg-surface-container-low', 'border-outline-variant/30'));
  labels[yes?0:1].className = labels[yes?0:1].className.replace('border-outline-variant/30', 'border-primary bg-surface-container-low');
  updateShipping();
}
function updateShipping(){
  const want = document.querySelector('input[name="wantDelivery"]:checked')?.value === 'yes';
  let s = 0, isOther = false;
  if(want){
    const dc = document.querySelector('input[name="deliveryCity"]:checked')?.value || 'other';
    if(dc==='bukavu'){ s = 1; }
    else if(dc==='goma'){ s = 5; }
    else { s = 10; isOther = true; }
  }
  const subtotal = cart.reduce((t,c)=>{ const p=findProduct(c.id); return t + (p?p.price*c.qty:0); }, 0);
  const total = subtotal + s;
  const shipEl = document.getElementById('shipAmount');
  const totalEl = document.getElementById('totalAmount');
  if(shipEl) shipEl.textContent = s === 0 ? t('cart.free') : (isOther ? (t('ui.ui_009')) : fmt(s)+' $');
  if(totalEl) totalEl.textContent = fmt(total) + ' $';
}

function renderCheckout(){
  const co = t('checkout'), ca = t('cart');
  if(cart.length===0){
    return `<div class="px-5 text-center py-24"><h1 class="font-display text-2xl mb-6">${ca.empty}</h1><a href="#/products" class="inline-block bg-primary text-on-primary px-10 py-4 text-[12px] uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all btn-shine">${ca.cta}</a></div>`;
  }
  const lines = cart.map(c=>{ const p=findProduct(c.id); return {...p, qty:c.qty, lineTotal:p.price*c.qty}; });
  const subtotal = lines.reduce((s,l)=>s+l.lineTotal,0);
  const shipping = 1;
  const total = subtotal + shipping;
  return `
  <div class="px-5 md:px-margin-desktop pb-24">
    <h1 class="font-display text-2xl md:text-3xl mb-12">${co.title}</h1>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      <div class="lg:col-span-7 space-y-16">
        <section>
          <div class="flex items-center gap-4 mb-8"><span class="font-display text-xl text-primary">01</span><h2 class="font-display text-xl">${co.info_title}</h2></div>
          <form id="checkoutForm" onsubmit="event.preventDefault()" class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
            <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${t('ui.ui_010')}</label><input required class="underline-input w-full py-2 text-sm" placeholder="${t('ui.ui_011')}"></div>
            <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${t('ui.ui_012')}</label><input required class="underline-input w-full py-2 text-sm" placeholder="${t('ui.ui_013')}"></div>
            <div class="md:col-span-2"><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${co.address}</label><input required class="underline-input w-full py-2 text-sm" placeholder="${co.address}"></div>
            <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${co.city}</label><input required class="underline-input w-full py-2 text-sm" placeholder="${co.city}"></div>
            <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${t('ui.ui_014')}</label><input required type="tel" class="underline-input w-full py-2 text-sm" placeholder="+243 ..."></div>
          </form>
        </section>
        <section>
          <div class="flex items-center gap-4 mb-8"><span class="font-display text-xl text-primary">02</span><h2 class="font-display text-xl">${t('ui.ui_015')}</h2></div>
          <div class="space-y-4">
            <p class="text-sm text-on-surface-variant">${t('ui.ui_016')}</p>
            <div class="flex gap-4">
              <label onclick="toggleDelivery(true)" class="flex-1 flex items-center justify-center gap-3 p-5 border border-primary bg-surface-container-low cursor-pointer text-center">
                <input type="radio" name="wantDelivery" value="yes" checked class="accent-primary"><span class="text-sm font-medium">${t("account.yes")}</span>
              </label>
              <label onclick="toggleDelivery(false)" class="flex-1 flex items-center justify-center gap-3 p-5 border border-outline-variant/30 cursor-pointer text-center">
                <input type="radio" name="wantDelivery" value="no" class="accent-primary"><span class="text-sm font-medium">${t("account.no")}</span>
              </label>
            </div>
            <div id="deliveryCity">
              <p class="text-sm text-on-surface-variant mb-3">${t('ui.ui_017')}</p>
              <div class="space-y-2">
                <label onclick="updateShipping()" class="flex items-center justify-between p-4 border border-primary bg-surface-container-low cursor-pointer">
                  <div class="flex items-center gap-4"><input type="radio" name="deliveryCity" value="bukavu" checked class="accent-primary"><div><p class="text-sm font-medium">Bukavu</p><p class="text-xs text-on-surface-variant">${t('ui.ui_018')}</p></div></div>
                  <span class="text-sm font-medium">1 $</span>
                </label>
                <label onclick="updateShipping()" class="flex items-center justify-between p-4 border border-outline-variant/30 cursor-pointer">
                  <div class="flex items-center gap-4"><input type="radio" name="deliveryCity" value="goma" class="accent-primary"><div><p class="text-sm font-medium">Goma</p><p class="text-xs text-on-surface-variant">${t('ui.ui_019')}</p></div></div>
                  <span class="text-sm font-medium">5 $</span>
                </label>
                <label onclick="updateShipping()" class="flex items-center justify-between p-4 border border-outline-variant/30 cursor-pointer">
                  <div class="flex items-center gap-4"><input type="radio" name="deliveryCity" value="other" class="accent-primary"><div><p class="text-sm font-medium">${t('ui.ui_020')}</p><p class="text-xs text-on-surface-variant">${t('ui.ui_021')}</p></div></div>
                  <span class="text-sm font-medium">${t('ui.ui_022')}</span>
                </label>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="flex items-center gap-4 mb-8"><span class="font-display text-xl text-primary">03</span><h2 class="font-display text-xl">${co.title}</h2></div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <label onclick="switchPay(this, 'mp')" class="relative flex flex-col items-center gap-2 p-4 border border-outline-variant/30 cursor-pointer text-center">
              <input type="radio" name="pay" checked class="hidden">
              <span class="pay-check absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center" style="display:none"><span class="material-symbols-outlined text-xs" style="font-size:14px">check</span></span>
              <svg class="w-8 h-8 text-on-surface-variant" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>
              <span class="text-[11px] uppercase font-medium">M-PESA</span>
              <span class="text-[10px] text-on-surface-variant">Vodacom</span>
            </label>
            <label onclick="switchPay(this, 'am')" class="relative flex flex-col items-center gap-2 p-4 border border-outline-variant/30 cursor-pointer text-center">
              <input type="radio" name="pay" class="hidden">
              <span class="pay-check absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center" style="display:none"><span class="material-symbols-outlined text-xs" style="font-size:14px">check</span></span>
              <svg class="w-8 h-8 text-on-surface-variant" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>
              <span class="text-[11px] uppercase font-medium">Airtel Money</span>
              <span class="text-[10px] text-on-surface-variant">Airtel</span>
            </label>
            <label onclick="switchPay(this, 'om')" class="relative flex flex-col items-center gap-2 p-4 border border-outline-variant/30 cursor-pointer text-center">
              <input type="radio" name="pay" class="hidden">
              <span class="pay-check absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center" style="display:none"><span class="material-symbols-outlined text-xs" style="font-size:14px">check</span></span>
              <svg class="w-8 h-8 text-on-surface-variant" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>
              <span class="text-[11px] uppercase font-medium">Orange Money</span>
              <span class="text-[10px] text-on-surface-variant">Orange</span>
            </label>
            <label onclick="switchPay(this, 'cod')" class="relative flex flex-col items-center gap-2 p-4 border border-outline-variant/30 cursor-pointer text-center">
              <input type="radio" name="pay" class="hidden">
              <span class="pay-check absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center" style="display:none"><span class="material-symbols-outlined text-xs" style="font-size:14px">check</span></span>
              <span class="material-symbols-outlined text-2xl text-on-surface-variant">payments</span>
              <span class="text-[11px] uppercase font-medium">${co.cod}</span>
              <span class="text-[10px] text-on-surface-variant">Cash</span>
            </label>
          </div>
          <div id="paymentInfo" class="p-5 bg-surface-container-low border border-outline-variant/10 rounded-lg text-sm space-y-2">
            <p class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-base">info</span> <span>${co.pay_info}</span></p>
            <div id="pay-mp" class="flex items-center gap-3 py-2">
              <span class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">MP</span>
              <div><p class="font-medium text-sm">M-PESA</p><p class="text-xs text-on-surface-variant">${co.mpresa_num}</p></div>
            </div>
            <div id="pay-am" class="flex items-center gap-3 py-2 hidden">
              <span class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">AM</span>
              <div><p class="font-medium text-sm">Airtel Money</p><p class="text-xs text-on-surface-variant">${co.airtel_num}</p></div>
            </div>
            <div id="pay-om" class="flex items-center gap-3 py-2 hidden">
              <span class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">OM</span>
              <div><p class="font-medium text-sm">Orange Money</p><p class="text-xs text-on-surface-variant">${co.orange_num}</p></div>
            </div>
            <div id="pay-cod" class="flex items-center gap-3 py-2 hidden">
              <span class="material-symbols-outlined text-primary text-base">payments</span>
              <div><p class="font-medium text-sm">${co.cod}</p><p class="text-xs text-on-surface-variant">${t('ui.ui_023')}</p></div>
            </div>
          </div>
        </section>
      </div>
      <div class="lg:col-span-5">
        <div class="sticky top-28 border border-outline-variant/10 p-8 bg-surface-container-low">
          <h3 class="font-display text-xl mb-6">${co.summary}</h3>
          <div class="space-y-4 mb-6">
            ${lines.map(l=>`<div class="flex items-center gap-3 text-sm"><img src="${pi(l,40,50)}" class="w-10 h-12 object-cover flex-shrink-0"><span class="flex-1">${l.name} × ${l.qty}</span><span>${fmt(l.lineTotal)} $</span></div>`).join('')}
          </div>
          <div class="border-t border-outline-variant/30 pt-4 space-y-2 mb-8 text-sm">
            <div class="flex justify-between"><span>${ca.delivery}</span><span id="shipAmount">${shipping===0?ca.free:fmt(shipping)+' $'}</span></div>
            <div class="flex justify-between font-display text-lg text-primary pt-2"><span>${ca.total}</span><span id="totalAmount">${fmt(total)} $</span></div>
          </div>
          <button onclick="confirmOrder()" class="w-full bg-primary text-on-primary py-4 text-[12px] uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all">${co.place}</button>
          <p class="text-center mt-5 text-xs text-on-surface-variant flex items-center justify-center gap-2"><span class="material-symbols-outlined text-sm">lock</span> ${ca.secure}</p>
        </div>
      </div>
    </div>
  </div>
  `;
}

function switchPay(el, key){
  document.querySelectorAll('label:has(input[name="pay"])').forEach(l=>{
    l.className = l.className.replace('border-primary bg-surface-container-low shadow-sm', 'border-outline-variant/30');
    const ck = l.querySelector('.pay-check');
    if(ck) ck.style.display = 'none';
  });
  el.className = el.className.replace('border-outline-variant/30', 'border-primary bg-surface-container-low shadow-sm');
  const ck = el.querySelector('.pay-check');
  if(ck) ck.style.display = '';
  document.querySelectorAll('#paymentInfo > div[id^="pay-"]').forEach(d=> d.classList.add('hidden'));
  const info = document.getElementById('pay-'+key);
  if(info) info.classList.remove('hidden');
}

function confirmOrder(){
  const inputs = document.querySelectorAll('.lg\\:col-span-7 input[required]');
  for(const inp of inputs){ if(!inp.value.trim()){ inp.focus(); showToast(t('ui.ui_024')); return; } }
  const firstName = inputs[0]?.value?.trim() || '';
  const lastName = inputs[1]?.value?.trim() || '';
  const address = inputs[2]?.value?.trim() || '';
  const city = inputs[3]?.value?.trim() || '';
  const phone = inputs[4]?.value?.trim() || '';
  const wantDelivery = document.querySelector('input[name="wantDelivery"]:checked')?.value === 'yes';
  let shipping = 0, deliveryLabel = t('ui.ui_025'), isOther = false;
  if(wantDelivery){
    const dc = document.querySelector('input[name="deliveryCity"]:checked')?.value || 'other';
    if(dc==='bukavu'){ shipping = 1; deliveryLabel = 'Bukavu'; }
    else if(dc==='goma'){ shipping = 5; deliveryLabel = 'Goma'; }
    else { shipping = 10; deliveryLabel = t('ui.ui_026'); isOther = true; }
  }
  const payLabel = document.querySelector('input[name="pay"]:checked')?.closest('label')?.querySelector('span.text-\\[11px\\].uppercase')?.textContent?.trim() || '';
  const fullName = firstName + ' ' + lastName;
  const lines = cart.map(c=>{ const p=findProduct(c.id); return {...p, qty:c.qty, lineTotal:p.price*c.qty}; });
  const subtotal = lines.reduce((s,l)=>s+l.lineTotal,0);
  const total = subtotal + shipping;
  const orderLines = lines.map(l=>`• ${l.name} × ${l.qty} = ${fmt(l.lineTotal)}$`).join('\n');
  const profile = { firstName, lastName, phone, address, city };
  const order = { id:'MB-'+Date.now().toString(36).toUpperCase(), date:new Date().toISOString(), items:lines, subtotal, shipping, total, delivery:deliveryLabel, payment:payLabel, name:fullName };
  const msg = LANG.current==='en'
    ? `*NEW ORDER — Malkia B Cosmetics*\n*Order:* ${order.id}\n\n*Customer:* ${fullName}\n*Phone:* ${phone}\n*Address:* ${address}, ${city}\n*Delivery:* ${deliveryLabel}\n*Payment:* ${payLabel}\n\n*Order:*\n${orderLines}\n\n*Subtotal:* ${fmt(subtotal)}$\n*Shipping:* ${isOther?(t('ui.ui_027')):(shipping===0?'Free':fmt(shipping)+'$')}\n*Total:* ${fmt(total)}$`
    : `*NOUVELLE COMMANDE — Malkia B Cosmetics*\n*Commande:* ${order.id}\n\n*Client:* ${fullName}\n*Téléphone:* ${phone}\n*Adresse:* ${address}, ${city}\n*Livraison:* ${deliveryLabel}\n*Paiement:* ${payLabel}\n\n*Commande:*\n${orderLines}\n\n*Sous-total:* ${fmt(subtotal)}$\n*Livraison:* ${isOther?'À partir de 10 $':(shipping===0?'Gratuite':fmt(shipping)+'$')}\n*Total:* ${fmt(total)}$`;
  const wa = `https://wa.me/243995945889?text=${encodeURIComponent(msg)}`;
  const saved = lsGet('malkia_orders', []);
  saved.unshift(order);
  lsSet('malkia_orders', saved);
  lsSet('malkia_profile', profile);
  cart = []; saveCart(); updateCartCount();
  window.open(wa, '_blank');
  location.hash = '#/account';
}

/* ===== ACCOUNT ===== */
function renderAccount(){
  const ac = t('account');
  const profile = lsGet('malkia_profile', {});
  const orders = lsGet('malkia_orders', []);
  const name = (profile.firstName || '[Prénom]') + ' ' + (profile.lastName || '[Nom]');
  return `
  <div class="px-5 md:px-margin-desktop pb-24">
    <h1 class="font-display text-2xl md:text-3xl mb-2">${ac.title}</h1>
    <p class="text-sm text-on-surface-variant mb-12">${t('ui.ui_028')}${name}</p>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <aside class="lg:col-span-3 space-y-2">
        <button onclick="switchAccount('orders')" id="tab-orders" class="w-full flex items-center gap-4 py-3 px-4 bg-secondary-container text-on-secondary-container">
          <span class="material-symbols-outlined">shopping_bag</span><span class="text-sm">${ac.orders}</span>
        </button>
        <button onclick="switchAccount('info')" id="tab-info" class="w-full flex items-center gap-4 py-3 px-4 text-on-surface-variant hover:bg-surface-container-low">
          <span class="material-symbols-outlined">person</span><span class="text-sm">${t("account.info")}</span>
        </button>
        <button onclick="switchAccount('addresses')" id="tab-addresses" class="w-full flex items-center gap-4 py-3 px-4 text-on-surface-variant hover:bg-surface-container-low">
          <span class="material-symbols-outlined">location_on</span><span class="text-sm">${t("account.addresses")}</span>
        </button>
        <button onclick="switchAccount('payments')" id="tab-payments" class="w-full flex items-center gap-4 py-3 px-4 text-on-surface-variant hover:bg-surface-container-low">
          <span class="material-symbols-outlined">credit_card</span><span class="text-sm">${t("account.payments")}</span>
        </button>
        <button onclick="lsSet('malkia_profile',{});lsSet('malkia_orders',[]);showToast('${t('ui.ui_029')}');navigate();" class="w-full py-4 mt-6 border border-primary text-primary text-[11px] uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all">${ac.logout}</button>
      </aside>
      <div id="accountContent" class="lg:col-span-9 space-y-8">
        ${renderAccountSection('orders', orders, profile)}
      </div>
    </div>
  </div>
  `;
}

function renderAccountSection(section, orders, profile){
  const ac = t('account');
  if(section==='orders'){
    if(orders.length===0) return `<div class="text-center py-16"><span class="material-symbols-outlined text-4xl text-outline mb-4 block">shopping_bag</span><p class="text-on-surface-variant">${t('ui.ui_030')}</p><a href="#/products" class="inline-block mt-6 text-primary border-b border-primary/30 text-sm">${t('ui.ui_031')}</a></div>`;
    return `
    <h2 class="font-display text-xl border-b border-outline-variant/20 pb-4">${ac.orders}</h2>
    ${orders.map((o,i)=>`
    <div class="border border-outline-variant/10 p-6 flex items-center justify-between flex-wrap gap-4">
      <div class="flex gap-6 items-center">
        <div class="w-20 h-20 bg-surface-container-low overflow-hidden"><img loading="lazy" src="${o.items && o.items[0] ? pi(o.items[0],200,200) : img('malkia-order'+(i+1),200,200)}" class="w-full h-full object-cover" alt="${t('ui.ui_032')}"></div>
        <div><p class="text-[11px] text-primary uppercase mb-1">${new Date(o.date).toLocaleDateString(t('ui.ui_033'), {year:'numeric',month:'long',day:'numeric'})}</p><h3 class="font-display text-base">${o.id}</h3><p class="text-sm text-on-surface-variant">${o.items.length} ${t('ui.ui_034')}${o.items.length>1?'s':''} • ${fmt(o.total)}$</p></div>
      </div>
      <span class="text-[11px] border border-primary text-primary px-4 py-2 uppercase tracking-widest">${ac.delivered}</span>
    </div>
    `).join('')}
    `;
  }
  if(section==='info'){
    return `
    <h2 class="font-display text-xl border-b border-outline-variant/20 pb-4">${ac.info}</h2>
    <div class="border border-outline-variant/10 p-6 space-y-2 text-sm">
      <div class="flex items-center justify-between py-2 border-b border-outline-variant/10"><span class="text-on-surface-variant">${t('ui.ui_035')}</span><span class="font-medium">${(profile.firstName||'—') + ' ' + (profile.lastName||'')}</span></div>
      <div class="flex items-center justify-between py-2 border-b border-outline-variant/10"><span class="text-on-surface-variant">${t('ui.ui_036')}</span><span class="font-medium">${profile.phone||'—'}</span></div>
      <div class="flex items-center justify-between py-2 border-b border-outline-variant/10"><span class="text-on-surface-variant">${t('ui.ui_037')}</span><span class="font-medium">${profile.address||'—'}</span></div>
      <div class="flex items-center justify-between py-2"><span class="text-on-surface-variant">${t('ui.ui_038')}</span><span class="font-medium">${profile.city||'—'}</span></div>
    </div>
    `;
  }
  if(section==='addresses'){
    return `
    <h2 class="font-display text-xl border-b border-outline-variant/20 pb-4">${t("account.addresses")}</h2>
    <div class="border border-outline-variant/10 p-6 text-sm text-on-surface-variant">
      <p>${profile.address ? profile.address + ', ' + profile.city : t('ui.ui_039')}</p>
    </div>
    `;
  }
  if(section==='payments'){
    return `
    <h2 class="font-display text-xl border-b border-outline-variant/20 pb-4">${t("account.payments")}</h2>
    <div class="border border-outline-variant/10 p-6 text-sm text-on-surface-variant">
      <p>${t('ui.ui_040')}</p>
    </div>
    `;
  }
}

function switchAccount(section){
  const tabs = ['orders','info','addresses','payments'];
  tabs.forEach(t => {
    const btn = document.getElementById('tab-'+t);
    if(btn) btn.className = btn.className.replace('bg-secondary-container text-on-secondary-container', 'text-on-surface-variant hover:bg-surface-container-low');
  });
  const active = document.getElementById('tab-'+section);
  if(active) active.className = active.className.replace('text-on-surface-variant hover:bg-surface-container-low', 'bg-secondary-container text-on-secondary-container');
  const profile = lsGet('malkia_profile', {});
  const orders = lsGet('malkia_orders', []);
  document.getElementById('accountContent').innerHTML = renderAccountSection(section, orders, profile);
}

/* ===== PRODUCTS PAGE ===== */
function renderProducts(cat){
  const p = t('product'), cats = t('cat'), n = t('nav');
  const active = cat || 'all';
  const filtered = cat ? PRODUCTS.filter(x=>x.cat===cat) : PRODUCTS;
  return `
  <div class="px-5 md:px-margin-desktop pb-24">
    <div class="max-w-2xl mb-10 reveal">
      <span class="text-[11px] text-primary uppercase tracking-widest mb-3 block">${t('categories')}</span>
      <h1 class="font-display text-3xl md:text-5xl leading-tight">${p.all_products}</h1>
      <p class="text-on-surface-variant mt-4">${p.subtitle}</p>
    </div>
    <nav class="flex flex-wrap gap-2 md:gap-4 mb-6 border-b border-outline-variant/20 pb-4 reveal" id="productFilterNav">
      ${Object.entries({all: cats.all, ...Object.fromEntries(Object.entries(CATS).map(([k,v])=>[k, t('cat.'+k)||v]))}).map(([k,v])=>`
      <a href="#/products${k==='all'?'':'/'+k}" class="text-[12px] uppercase tracking-widest px-4 py-2 transition-all ${active===k?'bg-primary text-on-primary':'text-on-surface-variant hover:text-primary border border-outline-variant/20 hover:border-primary'}">${v}</a>
      `).join('')}
    </nav>
    <div class="mb-8 reveal">
      <div class="relative max-w-md">
        <span class="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-outline text-base">search</span>
        <input id="productSearch" type="text" placeholder="${t('ui.ui_041')}" class="w-full border-b border-outline-variant/30 py-3 pl-8 pr-4 text-sm bg-transparent focus:border-primary transition-colors outline-none">
      </div>
    </div>
    <div id="productGrid" class="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
      ${filtered.map((p,i)=>`<div data-name="${p.name.toLowerCase()}" class="reveal reveal-d${(i%4)+1}">${productCard(p)}</div>`).join('')}
    </div>
    <div id="noResults" class="text-center py-16 hidden">
      <span class="material-symbols-outlined text-4xl text-outline mb-4 block">search_off</span>
      <p class="text-on-surface-variant">${t('ui.ui_042')}</p>
    </div>
  </div>`;
}

/* ===== STORY ===== */
function renderStory(){
  const s = t('story');
  return `
  <div class="px-5 md:px-margin-desktop pb-24 max-w-4xl mx-auto space-y-16">
    <div class="text-center reveal">
      <span class="text-[11px] text-primary uppercase tracking-widest mb-4 block">${s.subtitle}</span>
      <h1 class="font-display text-3xl md:text-5xl leading-tight">${s.title}</h1>
    </div>
    <div class="aspect-[21/9] overflow-hidden rounded-2xl reveal">
      <img loading="lazy" src="images/CEO.webp" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Hamin Banga, fondateur de Malkia B Cosmetics">
    </div>
    <div class="space-y-6 text-on-surface-variant leading-relaxed reveal">
      <p class="text-base md:text-lg">${s.p1}</p>
      <p class="text-base md:text-lg">${s.p2}</p>
      <p class="text-base md:text-lg">${s.p3}</p>
    </div>
    <div class="text-center reveal">
      <p class="font-display text-xl text-primary">${s.sig}</p>
    </div>
  </div>`;
}

/* ===== SHOPS ===== */
function shopCard(key){
  const s = t(`shops.${key}`);
  const isB = key==='bukavu';
  const flag = isB ? '🇨🇩' : '🇷🇼';
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${s.lng}!3d${s.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${s.q}!5e0!3m2!1sfr!2scd!4v1`;
  const dirUrl = `https://maps.google.com/?q=${s.q}`;
  return `
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
    <div class="relative rounded-2xl overflow-hidden h-64 md:h-full min-h-[300px] shadow-xl">
      <iframe src="${mapUrl}" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="${s.name}" style="border:0;"></iframe>
      <div class="absolute top-4 left-4 bg-primary text-on-primary px-4 py-2 rounded-full flex items-center gap-2 shadow-md text-sm font-medium"><span>${flag}</span><span>${isB?'Bukavu':'Kigali'}</span></div>
    </div>
    <div class="bg-surface-container-lowest rounded-2xl p-8 shadow-sm border border-outline-variant/10 min-h-[300px]">
      <h2 class="font-display text-2xl md:text-3xl text-on-background mb-2">${s.name}</h2>
      <p class="font-display text-primary-container text-base mb-6">${s.tag}</p>
      <div class="space-y-4 mb-8">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center flex-shrink-0"><span class="material-symbols-outlined text-primary text-base">location_on</span></div>
          <div><p class="text-sm font-semibold">${t('ui.ui_043')}</p><p class="text-sm text-on-surface-variant">${s.addr}</p></div>
        </div>
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center flex-shrink-0"><span class="material-symbols-outlined text-primary text-base">call</span></div>
          <div><p class="text-sm font-semibold">${t('ui.ui_044')}</p><a href="tel:${s.phone.replace(/[^0-9+]/g,'')}" class="text-sm text-on-surface-variant hover:text-primary transition-colors">${s.phone}</a></div>
        </div>
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center flex-shrink-0"><span class="material-symbols-outlined text-primary text-base">schedule</span></div>
          <div><p class="text-sm font-semibold">${t('ui.ui_045')}</p><p class="text-sm text-on-surface-variant">${s.hours}</p></div>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <a href="${dirUrl}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-on-primary font-semibold rounded-full transition-all text-sm btn-shine"><span class="material-symbols-outlined text-base">open_in_new</span>${s.route}</a>
        <a href="https://wa.me/${isB?'243995945889':'250788000000'}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 py-3 text-white font-semibold rounded-full transition-all text-sm" style="background:#25D366;"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" class="w-4 h-4"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>${s.wa}</a>
      </div>
    </div>
  </div>`;
}
function renderShops(){
  const s = t('shops'), tm = t('team');
  return `
  <div class="px-5 md:px-margin-desktop pb-24 space-y-16">
    <div class="text-center reveal">
      <span class="text-[11px] text-primary uppercase tracking-widest mb-4 block">${s.subtitle}</span>
      <h1 class="font-display text-3xl md:text-5xl leading-tight">${s.title}</h1>
    </div>
    ${shopCard('bukavu')}
    ${shopCard('kigali')}
    <section class="pt-8">
      <div class="text-center mb-12 reveal">
        <span class="text-[11px] text-primary uppercase tracking-widest mb-3 block">${tm.subtitle}</span>
        <h2 class="font-display text-2xl md:text-4xl">${tm.title}</h2>
        <p class="text-sm md:text-base text-on-background/70 max-w-xl mx-auto mt-4">${t('ui.ui_046')}</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
        ${TEAM.map((m,i)=>`
        <a href="#/team/${m.id}" class="group text-center ${i>0 ? 'mt-0 md:mt-8' : ''} reveal reveal-d${(i%5)+1}">
          <div class="aspect-square overflow-hidden mb-4 border border-outline-variant/10 bg-surface-container-low transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg">
            <img loading="lazy" src="${ti(m,500,500)}" class="w-full h-full object-cover" alt="${m.name}">
          </div>
          <h3 class="font-display text-sm md:text-base font-medium">${m.name}</h3>
          <p class="text-[11px] text-primary uppercase tracking-widest mt-1">${m.roleKey ? t('team.'+m.roleKey) : (LANG.current==='en' && m.roleEn ? m.roleEn : m.role)}</p>
        </a>`).join('')}
      </div>
    </section>
  </div>`;
}

/* ===== CONTACT ===== */
function contactWhatsApp(form){
  const n = form.querySelector('[name=name]')?.value.trim();
  const e = form.querySelector('[name=email]')?.value.trim();
  const s = form.querySelector('[name=subject]')?.value.trim();
  const m = form.querySelector('[name=msg]')?.value.trim();
  if(!n||!e||!m) return;
  const msg = LANG.current==='en'
    ? `*Contact — Malkia B Cosmetics*\n\n*Name:* ${n}\n*Email:* ${e}\n*Subject:* ${s||'-'}\n*Message:* ${m}`
    : `*Contact — Malkia B Cosmetics*\n\n*Nom:* ${n}\n*Email:* ${e}\n*Sujet:* ${s||'-'}\n*Message:* ${m}`;
  window.open(`https://wa.me/243995945889?text=${encodeURIComponent(msg)}`,'_blank');
  const sent = document.getElementById('toast');
  if(sent) showToast(t('ui.ui_047'));
}
function renderContact(){
  const c = t('contact'), f = c.form;
  return `
  <div class="px-5 md:px-margin-desktop pb-24 space-y-20">
    <div class="max-w-2xl mx-auto text-center reveal">
      <span class="text-[11px] text-primary uppercase tracking-widest mb-3 block">${c.title}</span>
      <h1 class="font-display text-3xl md:text-5xl mb-6 leading-tight">${c.heading}</h1>
      <p class="text-on-surface-variant">${c.desc}</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
      <div class="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/10 reveal reveal-left">
        <form onsubmit="event.preventDefault(); contactWhatsApp(this)" class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${f.name}</label><input name="name" class="underline-input w-full py-2 text-sm" placeholder="${f.name}" required></div>
            <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${f.email}</label><input name="email" type="email" class="underline-input w-full py-2 text-sm" placeholder="votre@email.com" required></div>
          </div>
          <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${f.subject}</label><input name="subject" class="underline-input w-full py-2 text-sm" placeholder="${f.subject}"></div>
          <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${f.msg}</label><textarea name="msg" rows="4" class="underline-input w-full py-2 text-sm resize-none" placeholder="${f.msg}" required></textarea></div>
          <button type="submit" class="w-full bg-primary text-on-primary py-4 text-[12px] uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all btn-shine">${f.send}</button>
        </form>
      </div>
      <div class="lg:col-span-5 space-y-10 reveal reveal-right">
        <div>
          <h3 class="font-display text-lg border-b border-outline-variant/20 pb-3 mb-4">${c.direct}</h3>
          <div class="space-y-4">
            <div class="flex items-center gap-3"><span class="w-9 h-9 rounded-full bg-primary-container/20 flex items-center justify-center"><span class="material-symbols-outlined text-primary text-base">mail</span></span><div><a href="mailto:contact@malkiab-cosmetics.com" class="text-sm text-primary luxury-underline">contact@malkiab-cosmetics.com</a><p class="text-[10px] text-on-surface-variant uppercase tracking-widest">${f.email}</p></div></div>
            <div class="flex items-center gap-3"><span class="w-9 h-9 rounded-full bg-primary-container/20 flex items-center justify-center"><span class="material-symbols-outlined text-primary text-base">call</span></span><div><a href="tel:+243995945889" class="text-sm text-primary luxury-underline">+243 995 945 889</a><p class="text-[10px] text-on-surface-variant uppercase tracking-widest">Bukavu</p></div></div>
          </div>
        </div>
        <div>
          <h3 class="font-display text-lg border-b border-outline-variant/20 pb-3 mb-4">${c.offices}</h3>
          <div class="space-y-4">
            <div class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-base mt-0.5">store</span><div><p class="text-sm font-medium">Bukavu, DRCongo</p><p class="text-xs text-on-surface-variant">${t('shops.bukavu.addr')}</p></div></div>
            <div class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-base mt-0.5">store</span><div><p class="text-sm font-medium">Kigali, Rwanda</p><p class="text-xs text-on-surface-variant">${t('shops.kigali.addr')}</p></div></div>
          </div>
        </div>
        <div>
          <h3 class="font-display text-lg border-b border-outline-variant/20 pb-3 mb-4">${t('ui.ui_048')}</h3>
          <p class="text-sm text-on-surface-variant">${c.hours}</p>
        </div>
        <div class="flex flex-col gap-3">
          <a href="https://wa.me/243995945889" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 py-3 map-pulse bg-primary text-on-primary text-[12px] uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all btn-shine rounded-full">
            <span class="material-symbols-outlined text-base">chat</span> ${c.wa}
          </a>
          <a href="https://www.google.com/maps/search/Malkia+B+Cosmetics/" target="_blank" rel="noopener" class="flex items-center justify-center gap-2 py-3 border border-primary text-primary text-[11px] uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all btn-shine rounded-full">
            <span class="material-symbols-outlined text-base">map</span> ${c.map}
          </a>
        </div>
      </div>
    </div>
  </div>`;
}

/* ===== INIT ===== */
navigate();
setTimeout(()=>{ const l=document.getElementById('pageLoader'); if(l) l.classList.add('hidden'); }, 400);
