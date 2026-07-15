/* ===== TAILWIND CONFIG ===== */
if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "background": "#fcf9f8",
          "on-background": "#1c1b1b",
          "primary": "#735c00",
          "on-primary": "#ffffff",
          "primary-container": "#d4af37",
          "on-primary-container": "#554300",
          "secondary": "#70585b",
          "secondary-container": "#f8d8db",
          "on-secondary-container": "#755d5f",
          "outline": "#7f7663",
          "outline-variant": "#d0c5af",
          "surface-container-low": "#f6f3f2",
          "surface-container": "#f0eded",
          "surface-container-lowest": "#ffffff",
          "on-surface-variant": "#4d4635",
          "error": "#ba1a1a"
        },
        fontFamily: {
          "display": ["Playfair Display", "serif"],
          "body": ["Montserrat", "sans-serif"]
        },
        spacing: {
          "container-max": "1440px",
          "margin-desktop": "80px",
          "margin-mobile": "20px"
        }
      }
    }
  };
}

/* ===== I18N ===== */
const LANG = { current: localStorage.getItem('malkia_lang') || 'fr' };
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
      story_h:"Une passion née en 2015", story_p1:"Malkia B Cosmetics est née d'une vision simple mais puissante : offrir à chaque femme des soins de beauté premium à des prix accessibles, avec la promesse d'un résultat visible et durable.",
      story_p2:"Depuis nos débuts, nous avons accompagné des milliers de femmes avec des produits soigneusement sélectionnés, pensés pour mettre en valeur la beauté naturelle et l'éclat intérieur.",
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
      p1:"Malkia B Cosmetics est née d'une conviction : chaque femme mérite de révéler la reine qui sommeille en elle. Inspirée par les rituels de beauté ancestraux africains et les ingrédients les plus précieux du continent, notre maison allie tradition et innovation.",
      p2:"Du beurre de karité du Burkina Faso à l'huile d'argan du Maroc, en passant par le miel d'Éthiopie et le baobab du Sénégal, chaque ingrédient est sélectionné avec la plus grande exigence pour offrir des soins d'une pureté et d'une efficacité exceptionnelles.",
      p3:"Aujourd'hui, Malkia B rayonne depuis Bukavu et Kigali, portée par une équipe passionnée qui partage la même vision : célébrer la beauté authentique et souveraine de chaque femme.",
      sig:"— Malkia B, Fondatrice" },
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
      abidjan:"Siège — Cocody, Rue des Jardins", paris:"Showroom — Le Marais, 75003",
      dakar:"Point relais — Almadies", dubai:"Distributeur agréé — Dubai Mall",
      hours:"Lun – Sam : 9h00 – 18h00<br>Dim : Sur rendez-vous", map:"Voir sur Google Maps",
      wa:"Contactez-nous via WhatsApp", wa_sub:"Réponse sous 24h" },
    footer: { tagline:"L'excellence de la cosmétique artisanale, inspirée par la souveraineté de la femme moderne.",
      shop:"Boutique", support:"Assistance", follow:"Suivez-nous", delivery:"Livraison & retours",
      copyright:"© 2026 Malkia B Cosmetics. Fabrication artisanale." },
    team: { title:"Notre Équipe", subtitle:"Des passionnés à votre service", boss:"Fondatrice & Directrice Artistique",
      emp:"Spécialiste Beauté" },
    cat: { all:"Tous", body:"Corps", face:"Visage", fragrance:"Parfums", wellness:"Bien-être" },
    product: { add:"Ajouter au panier", added:"Ajouté au panier !", desc:"Description", ing:"Ingrédients", use:"Comment utiliser",
      all_products:"Tous nos produits", subtitle:"Découvrez notre sélection complète de soins",
      shop:"Boutique", reviews:"Avis", rating:"Note" },
    cart: { title:"Votre Panier", empty:"Votre panier est vide", cta:"Découvrir nos produits", total:"Total",
      checkout:"Commander", remove:"Retirer", qty:"Qté", sub:"Sous-total", delivery:"Livraison",
      free:"Gratuite", promo:"Code promo", apply:"Appliquer", secure:"Paiement sécurisé" },
    checkout: { title:"Paiement", place:"Confirmer et payer", card:"Carte bancaire", or:"ou",
      summary:"Récapitulatif", info_title:"Informations de livraison", name:"Nom complet",
      address:"Adresse", city:"Ville", country:"Pays", zip:"Code postal", confirm:"Commande confirmée — merci !" },
    account: { title:"Mon Compte", orders:"Historique des commandes", info:"Informations personnelles", logout:"Déconnexion",
      order:"Commande", delivered:"Livrée", pending:"En cours", items:"articles", share:"Partager",
      also:"Découvrez aussi", members:"Les autres membres", not_found:"Membre introuvable", back:"Retour à l'équipe",
      all_team:"Toute l'équipe", team_sub:"Notre équipe" },
    new_arrivals:"Nouveautés", view_all:"Voir tout", categories:"Nos Catégories"
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
      story_h:"A passion born in 2015", story_p1:"Malkia B Cosmetics was born from a simple yet powerful vision: to offer every woman premium beauty care at accessible prices, with the promise of visible and lasting results.",
      story_p2:"Since our beginnings, we have accompanied thousands of women with carefully selected products, designed to enhance natural beauty and inner radiance.",
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
      p1:"Malkia B Cosmetics was born from a belief: every woman deserves to reveal the queen within. Inspired by ancient African beauty rituals and the continent's most precious ingredients, our house blends tradition with innovation.",
      p2:"From shea butter from Burkina Faso to argan oil from Morocco, Ethiopian honey to Senegalese baobab, each ingredient is carefully selected to deliver products of exceptional purity and efficacy.",
      p3:"Today, Malkia B shines from Bukavu and Kigali, driven by a passionate team united by the same vision: celebrating the authentic and sovereign beauty of every woman.",
      sig:"— Malkia B, Founder" },
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
      abidjan:"Head Office — Cocody, Rue des Jardins", paris:"Showroom — Le Marais, 75003",
      dakar:"Pickup Point — Almadies", dubai:"Authorized Distributor — Dubai Mall",
      hours:"Mon – Sat: 9:00 AM – 6:00 PM<br>Sun: By appointment", map:"View on Google Maps",
      wa:"Contact us via WhatsApp", wa_sub:"Reply within 24h" },
    footer: { tagline:"The excellence of artisanal cosmetics, inspired by the sovereignty of the modern woman.",
      shop:"Shop", support:"Support", follow:"Follow Us", delivery:"Shipping & Returns",
      copyright:"© 2026 Malkia B Cosmetics. Handmade with care." },
    team: { title:"Our Team", subtitle:"Passionate people at your service", boss:"Founder & Art Director",
      emp:"Beauty Specialist" },
    cat: { all:"All", body:'Body', face:'Face', fragrance:'Fragrances', wellness:'Wellness' },
    product: { add:"Add to Cart", added:"Added to cart!", desc:"Description", ing:"Ingredients", use:"How to Use",
      all_products:"All Products", subtitle:"Discover our complete selection of beauty care",
      shop:"Shop", reviews:"Reviews", rating:"Rating" },
    cart: { title:"Your Cart", empty:"Your cart is empty", cta:"Discover our products", total:"Total",
      checkout:"Checkout", remove:"Remove", qty:"Qty", sub:"Subtotal", delivery:"Shipping",
      free:"Free", promo:"Promo Code", apply:"Apply", secure:"Secure Payment" },
    checkout: { title:"Checkout", place:"Confirm & Pay", card:"Credit Card", or:"or",
      summary:"Order Summary", info_title:"Shipping Information", name:"Full Name",
      address:"Address", city:"City", country:"Country", zip:"ZIP Code", confirm:"Order confirmed — thank you!" },
    account: { title:"My Account", orders:"Order History", info:"Personal Information", logout:"Log Out",
      order:"Order", delivered:"Delivered", pending:"Pending", items:"items", share:"Share",
      also:"Also discover", members:"Other members", not_found:"Member not found", back:"Back to team",
      all_team:"All team", team_sub:"Our team" },
    new_arrivals:"New Arrivals", view_all:"View All", categories:"Our Categories"
  }
};
function t(key){ return key.split('.').reduce((o,i)=>o&&o[i]!==undefined?o[i]:null, TR[LANG.current]) || key; }
function setLang(l){ LANG.current=l; localStorage.setItem('malkia_lang',l); renderHeaderFooter(); navigate(); }

/* ===== DATA ===== */
const CATS = { body:"Corps", face:"Visage", fragrance:"Parfums", wellness:"Wellness" };

const PRODUCTS = [
  {id:'b1', cat:'body', name:"Lotion Corps AHA 3 Jours (Lovska)", subtitle:"Lait", price:15, img:'images/S1944c55855ca4c9b97e3a6d9c185f47aO.webp', seed:'body-aha', desc:"Exfoliation chimique douce et efficace. Résultats visibles en 3 jours. Texture onctueuse et absorbante. Parfaite pour une peau lisse et éclatante.", ingredients:"Acide glycolique 5%, aloe vera, extrait de camomille.", rating:4.8, reviews:24, badge:'Vedette'},
  {id:'b2', cat:'body', name:"Extra Strong Whitening Molato Scrub", subtitle:"Corps", price:20, img:'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=750&fit=crop&q=80', seed:'body-scrub', desc:"Gommage exfoliant intensif aux grains fins naturels. Éclaircissant progressif. Révèle une peau uniforme, douce et radieuse.", ingredients:"Extrait de molato, beurre de karité bio, vitamine E.", rating:4.7, reviews:19},
  {id:'f1', cat:'face', name:"Kojic Glow Skin — Set Complet", subtitle:"Visage", price:35, img:'images/15d056d007a32fae0eb37fbd8826e419.jpg', seed:'face-biovene', desc:"Soin visage éclat premium. Texture divine et nourrissante. Résultats visibles rapidement. Pour une peau lumineuse, hydratée et protégée.", ingredients:"Vitamine C stabilisée, niacinamide, beurre de karité bio.", rating:4.9, reviews:31, badge:'Vedette'},
  {id:'f2', cat:'face', name:"Anti acné _ set complet", subtitle:"Visage", price:40, img:'images/img_0001.jpeg', seed:'face-serum', desc:"Sérum concentré pour sublimer l'éclat naturel du teint. Améliore la texture et raffermit. Anti-âge haute performance.", ingredients:"Acide hyaluronique haut & bas poids moléculaire, extrait de rose, panthénol.", rating:4.7, reviews:22},
  {id:'r1', cat:'fragrance', name:"Malkia Intense — Parfum", subtitle:"Parfums", price:30, img:'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=600&h=750&fit=crop&q=80', seed:'fragrance-intense', desc:"Eau de Parfum audacieux et sensuel. Signature Malkia B. Notes envoûtantes qui laissent une trace mémorable et captivante.", ingredients:"Ambre, vanille gousse, bois de santal, musc blanc.", rating:5.0, reviews:41, badge:'Vedette'},
  {id:'b3', cat:'body', name:"Almond Glow Korea Glow", subtitle:"Lait", price:28, img:'images/Home-Health-Almond-Glow-Skin-Lotion-Jasmine-8-Oz_7f817bcb-e801-4572-a216-c4ac195291bc.8c76c4c5d6b9a1ddb44667509aa1cf03.avif', seed:'body-glow', desc:"Illuminant corps effet glowy. Texture légère et sublimante. Donne un effet de peau lumineuse et nacré à effet glassé coréen.", ingredients:"Extrait d'amande, huile de jojoba, pigments minéraux.", rating:4.6, reviews:15},
  {id:'r2', cat:'fragrance', name:"Malkia Floral Essence", subtitle:"Parfums", price:28, img:'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=600&h=750&fit=crop&q=80', seed:'fragrance-floral', desc:"Eau de Toilette florale. Notes fraîches et naturelles. Parfum de jour léger et élégant, idéal pour une présence subtile.", ingredients:"Bergamote, pivoine, musc blanc doux.", rating:4.8, reviews:18},
  /* ===== PARFUMS ===== */
  {id:'r3', cat:'fragrance', name:"Sauvage Dior", subtitle:"Parfums", price:89, seed:'parfum-sauvage-dior', desc:"Eau de toilette iconique Dior. Fraîcheur épicée et virile. Notes de bergamote, poivre et ambre.", ingredients:"Bergamote, poivre de Sichuan, ambre gris.", rating:4.9, reviews:45, badge:'Premium'},
  {id:'r4', cat:'fragrance', name:"Baccarat Rouge 540 — Francis Kurkdjian", subtitle:"Parfums", price:120, seed:'parfum-baccarat-rouge', desc:"Fragrance légendaire signée Francis Kurkdjian. Note safranée et boisée inoubliable.", ingredients:"Safran, cèdre, ambre gras, ciste.", rating:5.0, reviews:62, badge:'Premium'},
  {id:'r5', cat:'fragrance', name:"Baccarat Blanc — Francis Kurkdjian", subtitle:"Parfums", price:120, seed:'parfum-baccarat-blanc', desc:"Version lumineuse du Baccarat. Notes fraîches et florales. Élégance pure.", ingredients:"Fleur d'oranger, musc blanc, vanille.", rating:4.8, reviews:28, badge:'Premium'},
  {id:'r6', cat:'fragrance', name:"Baccarat Noire — Francis Kurkdjian", subtitle:"Parfums", price:125, seed:'parfum-baccarat-noire', desc:"Variation intense et mystérieuse du Baccarat. Profondeur envoûtante.", ingredients:"Oud, cuir, bois de santal, safran.", rating:4.9, reviews:34, badge:'Premium'},
  {id:'r7', cat:'fragrance', name:"Terre d'Hermès", subtitle:"Parfums", price:95, seed:'parfum-terre-hermes', desc:"Parfum emblématique Hermès aux notes minérales et boisées. Élégance intemporelle.", ingredients:"Pamplemousse, silex, cèdre, vétiver.", rating:4.8, reviews:41},
  {id:'r8', cat:'fragrance', name:"Badel Al Oud", subtitle:"Parfums", price:65, seed:'parfum-badel-al-oud', desc:"Parfum oriental riche au oud noble. Sillage envoûtant et tenue exceptionnelle.", ingredients:"Oud naturel, musc, ambre, bois de santal.", rating:4.7, reviews:23},
  {id:'r9', cat:'fragrance', name:"Scandal", subtitle:"Parfums", price:55, seed:'parfum-scandal', desc:"Parfum audacieux aux notes de miel et de fleur d'oranger. Gourmand et sensuel.", ingredients:"Miel, fleur d'oranger, patchouli, vanille.", rating:4.6, reviews:19},
  {id:'r10', cat:'fragrance', name:"Dubai Chocolat", subtitle:"Parfums", price:45, seed:'parfum-dubai-chocolat', desc:"Fragrance gourmande au cacao et aux épices orientales. Un parfum réconfortant et luxueux.", ingredients:"Cacao, cannelle, vanille, musc.", rating:4.5, reviews:16},
  {id:'r11', cat:'fragrance', name:"Teriaq", subtitle:"Parfums", price:50, seed:'parfum-teriaq', desc:"Parfum oriental captivant. Notes épicées et boisées pour une signature forte.", ingredients:"Cardamome, cuir, oud, ambre.", rating:4.6, reviews:14},
  {id:'r12', cat:'fragrance', name:"Yara Rouge", subtitle:"Parfums", price:35, seed:'parfum-yara-rouge', desc:"Yara dans sa version rouge passion. Notes fruitées et florales vibrantes.", ingredients:"Fraise, framboise, rose, musc blanc.", rating:4.5, reviews:18},
  {id:'r13', cat:'fragrance', name:"Yara Jaune", subtitle:"Parfums", price:35, seed:'parfum-yara-jaune', desc:"Yara version solaire. Lumière et joie dans un flacon. Notes exotiques enveloppantes.", ingredients:"Mangue, ylang-ylang, vanille, santal.", rating:4.6, reviews:15},
  {id:'r14', cat:'fragrance', name:"Yara Rose", subtitle:"Parfums", price:35, seed:'parfum-yara-rose', desc:"Yara version florale. Bouquet romantique de roses et de fruits rouges.", ingredients:"Rose bulgare, litchi, musc doux.", rating:4.7, reviews:20},
  {id:'r15', cat:'fragrance', name:"Nine Noire", subtitle:"Parfums", price:40, seed:'parfum-nine-noire', desc:"Nine en version sombre et intense. Mystère et élégance.", ingredients:"Cuir, oud, poivre noir, ambre.", rating:4.6, reviews:13},
  {id:'r16', cat:'fragrance', name:"Nine Beige", subtitle:"Parfums", price:40, seed:'parfum-nine-beige', desc:"Nine en version douce et lumineuse. Élégance minimaliste.", ingredients:"Musc blanc, fleur d'oranger, vanille.", rating:4.5, reviews:11},
  {id:'r17', cat:'fragrance', name:"Nine Blue", subtitle:"Parfums", price:40, seed:'parfum-nine-blue', desc:"Nine en version aquatique et fraîche. Brise marine et liberté.", ingredients:"Notes marines, bergamote, cèdre.", rating:4.6, reviews:14},
  {id:'r18', cat:'fragrance', name:"Club de Nuit Homme", subtitle:"Parfums", price:50, seed:'parfum-club-nuit-homme', desc:"Parfum masculin puissant. Sillage longue durée. Notes fumées et boisées.", ingredients:"Bergamote, ananas, bouleau, ambre.", rating:4.7, reviews:29},
  {id:'r19', cat:'fragrance', name:"Club de Nuit Femme", subtitle:"Parfums", price:50, seed:'parfum-club-nuit-femme', desc:"Parfum féminin envoûtant. Notes fruitées et florales intenses.", ingredients:"Fraise, rose, patchouli, musc.", rating:4.7, reviews:25},
  {id:'r20', cat:'fragrance', name:"Bleu de Chanel", subtitle:"Parfums", price:105, seed:'parfum-bleu-chanel', desc:"Parfum emblématique Chanel. Fraîcheur boisée et aromatique. Signature masculine sophistiquée.", ingredients:"Pamplemousse, gingembre, cèdre, santal.", rating:4.9, reviews:55, badge:'Premium'},
  {id:'r21', cat:'fragrance', name:"La Vie Est Belle", subtitle:"Parfums", price:80, seed:'parfum-vie-est-belle', desc:"Parfum iconique Lancôme. Bonheur en flacon. Notes de gourmandise et de floral.", ingredients:"Iris, jasmin, praline, vanille, patchouli.", rating:4.8, reviews:38},
  {id:'r22', cat:'fragrance', name:"Moussuf Bleu", subtitle:"Parfums", price:30, seed:'parfum-moussuf-bleu', desc:"Moussuf version bleue. Fraîcheur aquatique et florale.", ingredients:"Notes marines, lavande, musc.", rating:4.4, reviews:12},
  {id:'r23', cat:'fragrance', name:"Moussuf Rouge", subtitle:"Parfums", price:30, seed:'parfum-moussuf-rouge', desc:"Moussuf version rouge. Passion et intensité.", ingredients:"Fraise, rose rouge, ambre.", rating:4.5, reviews:10},
  {id:'r24', cat:'fragrance', name:"Moussuf Rose", subtitle:"Parfums", price:30, seed:'parfum-moussuf-rose', desc:"Moussuf version rose. Douceur florale et romantique.", ingredients:"Rose, pivoine, musc blanc.", rating:4.4, reviews:9},
  {id:'r25', cat:'fragrance', name:"Moussuf Chocolat", subtitle:"Parfums", price:30, seed:'parfum-moussuf-choco', desc:"Moussuf version chocolatée. Gourmandise addictive.", ingredients:"Cacao, vanille, caramel.", rating:4.5, reviews:11},
  {id:'r26', cat:'fragrance', name:"Moussuf Blanc", subtitle:"Parfums", price:30, seed:'parfum-moussuf-blanc', desc:"Moussuf version blanche. Pureté et élégance minimaliste.", ingredients:"Fleur d'oranger, musc, vanille.", rating:4.3, reviews:8},
  {id:'w1', cat:'wellness', name:"Flat Tummy Tea", subtitle:"Wellness", price:22, img:'images/flat-tummy-tea-beta-1.webp', seed:'wellness-tea', desc:"Infusion minceur naturelle aux actifs puissants. Formule douce et efficace. Saveur agréable et relaxante.", ingredients:"Thé vert bio, gingembre, menthe, cannelle, aneth.", rating:4.6, reviews:27},
  /* ===== BIEN-ÊTRE ===== */
  {id:'w2', cat:'wellness', name:"Masques de Visage", subtitle:"Wellness", price:15, seed:'wellness-masques', desc:"Masques visage hydratants et purifiants. Selon votre type de peau pour un teint frais et lumineux.", ingredients:"Argile verte, aloe vera, extrait de concombre.", rating:4.5, reviews:18},
  {id:'w3', cat:'wellness', name:"Orange Gel Exfoliant", subtitle:"Wellness", price:12, seed:'wellness-orange-gel', desc:"Gel exfoliant doux à l'orange. Élimine les impuretés et laisse la peau fraîche et revitalisée.", ingredients:"Extrait d'orange, acide glycolique doux, glycérine.", rating:4.4, reviews:13},
  {id:'w4', cat:'wellness', name:"Adeus Cream", subtitle:"Wellness", price:28, seed:'wellness-adeus', desc:"Crème minceur Adeus. Formule thermo-active pour affiner la silhouette.", ingredients:"Caféine, L-carnitine, extrait d'algues.", rating:4.3, reviews:11},
  {id:'w5', cat:'wellness', name:"Gluthamax White", subtitle:"Wellness", price:35, seed:'wellness-gluthamax', desc:"Complément éclat au glutathion max. Blanchissant et antioxydant puissant.", ingredients:"Glutathion 500mg, vitamine C 100mg, acide folique.", rating:4.6, reviews:22},
  {id:'w6', cat:'wellness', name:"Multi Collagen Peptides", subtitle:"Wellness", price:40, seed:'wellness-multi-collagen', desc:"Collagène multi-peptides pour peau, cheveux et articulations. Haute biodisponibilité.", ingredients:"Collagène hydrolysé type I, II, III, V, X, acide hyaluronique.", rating:4.7, reviews:29},
  {id:'w7', cat:'wellness', name:"Glutathione Gummies", subtitle:"Wellness", price:18, seed:'wellness-gluta-gummies', desc:"Gommes au glutathion. Sublimez votre éclat de l'intérieur. Format pratique et gourmand.", ingredients:"Glutathion, vitamine C, pectine naturelle.", rating:4.4, reviews:15},
  {id:'w8', cat:'wellness', name:"Vitamine Gummies", subtitle:"Wellness", price:16, seed:'wellness-vita-gummies', desc:"Gommes multivitaminées. Énergie quotidienne et renforcement immunitaire.", ingredients:"Vitamines A, C, D, E, B6, B12, zinc.", rating:4.5, reviews:20},
  {id:'w9', cat:'wellness', name:"Vitamine Ascorbic Acid", subtitle:"Wellness", price:14, seed:'wellness-vitamine-c', desc:"Vitamine C pure en poudre ou comprimés. Antioxydant essentiel pour l'éclat de la peau.", ingredients:"Acide ascorbique 1000mg, bioflavonoïdes.", rating:4.6, reviews:17},
  {id:'w10', cat:'wellness', name:"Curves Extreme", subtitle:"Wellness", price:32, seed:'wellness-curves', desc:"Complément alimentaire pour galbe et courbes. Formule enrichie en plantes et vitamines.", ingredients:"Fenugrec, maca, collagène, biotine.", rating:4.3, reviews:24},
  {id:'w11', cat:'wellness', name:"Super Collagène Peptides", subtitle:"Wellness", price:38, seed:'wellness-super-collagen', desc:"Super collagène hydrolysé haute concentration. Rajeunissement cutané et articulaire.", ingredients:"Collagène marin type I, III, acide hyaluronique, vitamine C.", rating:4.7, reviews:31},
  {id:'w12', cat:'wellness', name:"Fit Tea", subtitle:"Wellness", price:20, seed:'wellness-fit-tea', desc:"Infusion minceur detox. Purifie l'organisme et favorise la perte de poids.", ingredients:"Thé vert, guarana, maté, gingembre.", rating:4.4, reviews:16},
  {id:'w13', cat:'wellness', name:"Keto Tea", subtitle:"Wellness", price:22, seed:'wellness-keto-tea', desc:"Thé adapté au régime cétogène. Booste le métabolisme et l'énergie.", ingredients:"Thé oolong, MCT, électrolytes naturels.", rating:4.3, reviews:12},
  {id:'w14', cat:'wellness', name:"Breas Tea", subtitle:"Wellness", price:24, seed:'wellness-breas-tea', desc:"Infusion bien-être aux plantes exotiques. Favorise la détente et l'équilibre.", ingredients:"Feuilles de bred, miel, gingembre, citronnelle.", rating:4.4, reviews:10},
  {id:'w15', cat:'wellness', name:"Acne Treatment", subtitle:"Wellness", price:25, seed:'wellness-acne', desc:"Soin anti-acné complet. Purifie la peau et prévient les imperfections.", ingredients:"Acide salicylique, niacinamide, tea tree, zinc.", rating:4.6, reviews:27},
  {id:'w16', cat:'wellness', name:"Super Collagène", subtitle:"Wellness", price:35, seed:'wellness-super-collagen-2', desc:"Collagène pur haute dose. Pour une peau ferme, des cheveux forts et des ongles solides.", ingredients:"Collagène hydrolysé type I, vitamine C, biotine.", rating:4.6, reviews:23},
  {id:'w17', cat:'wellness', name:"FemFresh", subtitle:"Wellness", price:18, seed:'wellness-femfresh', desc:"Soin d'hygiène intime doux. Équilibre le pH et respecte la flore naturelle.", ingredients:"Extrait de camomille, acide lactique, aloe vera.", rating:4.5, reviews:19},
  {id:'w18', cat:'wellness', name:"Vital Proteins Collagen", subtitle:"Wellness", price:45, seed:'wellness-vital-proteins', desc:"Collagène premium Vital Proteins. La référence américaine pour beauté intérieure.", ingredients:"Collagène bovin type I, III, acide hyaluronique, vitamine C.", rating:4.8, reviews:35, badge:'Premium'},
  {id:'w19', cat:'wellness', name:"Stretch Marks & Scar Oil", subtitle:"Wellness", price:22, seed:'wellness-stretch-oil', desc:"Huile anti-vergetures et cicatrices. Régénère et estompe les marques cutanées.", ingredients:"Huile de rose musquée, vitamine E, beurre de cacao, centella.", rating:4.5, reviews:21},
  {id:'w20', cat:'wellness', name:"Small Molecule Collagen Solid Drink", subtitle:"Wellness", price:42, seed:'wellness-collagen-drink', desc:"Boisson solide au collagène petite molécule. Absorption maximale pour un résultat visible.", ingredients:"Collagène tripeptide, céramides, extrait de raisin.", rating:4.7, reviews:26, badge:'Premium'},
  /* ===== LAITS (BODY LOTIONS) ===== */
  {id:'b4', cat:'body', name:"Déla Yellow", subtitle:"Lait", price:18, seed:'lait-dela-yellow', desc:"Lait corporel éclat à l'extrait de curcuma. Illumine et unifie le teint progressivement. Texture légère et non collante.", ingredients:"Curcuma bio, beurre de karité, vitamine E.", rating:4.5, reviews:12},
  {id:'b5', cat:'body', name:"Biovène Éclat Suprême", subtitle:"Lait", price:22, seed:'lait-biovene', desc:"Soin corps illuminant à la vitamine C. Éclat suprême et hydratation longue durée. Pénètre rapidement.", ingredients:"Vitamine C stabilisée, acide hyaluronique, huile d'amande douce.", rating:4.7, reviews:18, badge:'Vedette'},
  {id:'b6', cat:'body', name:"Hi Glow", subtitle:"Lait", price:16, seed:'lait-hi-glow', desc:"Lotion éclatante pour un teint glowy. Hydrate et illumine dès la première application.", ingredients:"Niacinamide, extrait de réglisse, glycérine.", rating:4.4, reviews:9},
  {id:'b7', cat:'body', name:"Lait Vietnam", subtitle:"Lait", price:15, seed:'lait-vietnam', desc:"Lotion corporelle légère venue du Vietnam. Absorption rapide, senteur subtile et fraîcheur durable.", ingredients:"Extrait de riz, huile de coco, aloe vera.", rating:4.3, reviews:7},
  {id:'b8', cat:'body', name:"Lait Thaï", subtitle:"Lait", price:15, seed:'lait-thai', desc:"Lait corporel à la tradition thaïlandaise. Hydratation intense et senteur exotique enveloppante.", ingredients:"Huile de coco, extrait de mangue, beurre de karité.", rating:4.5, reviews:11},
  {id:'b9', cat:'body', name:"Final Glow Cast", subtitle:"Lait", price:20, seed:'lait-final-glow', desc:"Lotion finalisante pour un glow parfait. Scelle l'hydratation et sublime l'éclat naturel de la peau.", ingredients:"Complexe éclat, huile de jojoba, vitamine E.", rating:4.6, reviews:14},
  {id:'b10', cat:'body', name:"Alpha Arbutin Lotion", subtitle:"Lait", price:19, seed:'lait-alpha-arbutin', desc:"Lait éclaircissant à l'alpha arbutine. Estompe les taches et unifie le teint en douceur.", ingredients:"Alpha arbutine 2%, niacinamide, acide kojique.", rating:4.7, reviews:16},
  {id:'b11', cat:'body', name:"Cindella Lotion", subtitle:"Lait", price:18, seed:'lait-cindella', desc:"Lotion éclat à la formule exclusive. Illumine la peau et laisse un fini satiné.", ingredients:"Complexe Cindella, huile d'argan, beurre de karité.", rating:4.5, reviews:10},
  {id:'b12', cat:'body', name:"Kojic Lotion", subtitle:"Lait", price:17, seed:'lait-kojic', desc:"Lait corporel à l'acide kojique. Éclaircissant progressif et uniforme. Texture onctueuse.", ingredients:"Acide kojique 2%, extrait de mûrier, vitamine C.", rating:4.6, reviews:13},
  {id:'b13', cat:'body', name:"Advanced Korean Skin", subtitle:"Lait", price:25, seed:'lait-korean-skin', desc:"Lait corporel premium à la coréenne. Technologie avancée pour une peau glass-skin. Hydratation profonde.", ingredients:"Essence de riz fermenté, niacinamide, peptides.", rating:4.8, reviews:21, badge:'Premium'},
  {id:'b14', cat:'body', name:"Piment Doux Lotion", subtitle:"Lait", price:16, seed:'lait-piment-doux', desc:"Lotion chauffante au piment doux. Stimule la microcirculation et réchauffe la peau.", ingredients:"Extrait de piment doux, huile de sésame, vitamine E.", rating:4.2, reviews:8},
  {id:'b15', cat:'body', name:"Maakari Lotion", subtitle:"Lait", price:18, seed:'lait-maakari', desc:"Lait corporel traditionnel aux ingrédients naturels. Hydrate et adoucit durablement.", ingredients:"Beurre de karité, huile de palme rouge, extrait de miel.", rating:4.4, reviews:9},
  {id:'b16', cat:'body', name:"AHA Lotion Corps", subtitle:"Lait", price:19, seed:'lait-aha', desc:"Exfoliation chimique douce aux AHA pour un corps lisse et lumineux. Renouvelle la peau en profondeur.", ingredients:"Acide glycolique 5%, acide lactique, aloe vera.", rating:4.6, reviews:15},
  {id:'b17', cat:'body', name:"Vitamine C Lotion", subtitle:"Lait", price:18, seed:'lait-vitamine-c', desc:"Lotion illuminatrice riche en vitamine C stabilisée. Éclat immédiat et protection antioxydante.", ingredients:"Vitamine C 10%, extrait d'orange, vitamine E.", rating:4.5, reviews:12},
  {id:'b18', cat:'body', name:"Françoise Bedon Lotion", subtitle:"Lait", price:24, seed:'lait-fb', desc:"Lait corporel de la célèbre marque ivoirienne. Formule originale pour une peau éclatante.", ingredients:"Beurre de karité bio, extrait de cacao, vitamine E.", rating:4.6, reviews:17},
  {id:'b19', cat:'body', name:"Advanced Whitening Lotion", subtitle:"Lait", price:22, seed:'lait-advanced-whitening', desc:"Lotion éclaircissante avancée. Technologie double action pour un teint uniforme et radieux.", ingredients:"Arbutine, niacinamide, extrait de citron.", rating:4.7, reviews:19},
  {id:'b20', cat:'body', name:"Glutathione Lotion", subtitle:"Lait", price:21, seed:'lait-glutathione', desc:"Lait corporel au glutathion. Antioxydant puissant pour une peau lumineuse et protégée.", ingredients:"Glutathion, vitamine C, acide férulique.", rating:4.5, reviews:11},
  {id:'b21', cat:'body', name:"Olay Lotion", subtitle:"Lait", price:20, seed:'lait-olay', desc:"Lotion hydratante Olay. Hydratation 24h et soin anti-âge pour le corps.", ingredients:"Vitamine B3, acide hyaluronique, pro-vitamine B5.", rating:4.6, reviews:14},
  {id:'b22', cat:'body', name:"Medix 5.5 Lotion", subtitle:"Lait", price:18, seed:'lait-medix', desc:"Lait corporel dermatologique Medix 5.5. Équilibre le pH et hydrate en douceur.", ingredients:"Complexe Medix 5.5, aloe vera, panthénol.", rating:4.4, reviews:8},
  {id:'b23', cat:'body', name:"Bride Cream Lotion", subtitle:"Lait", price:23, seed:'lait-bride-cream', desc:"Préparation intense pour future mariée. Éclat extrême et peau de velours pour le grand jour.", ingredients:"Collagène, élastine, extrait de perle, vitamine E.", rating:4.8, reviews:22, badge:'Vedette'},
  {id:'b24', cat:'body', name:"Skin Doctor Lotion", subtitle:"Lait", price:17, seed:'lait-skin-doctor', desc:"Lotion professionnelle Skin Doctor. Soin expert pour une peau saine et radieuse.", ingredients:"Complexe dermatologique, céramides, acide hyaluronique.", rating:4.5, reviews:10},
  {id:'b25', cat:'body', name:"Vaseline Lotion", subtitle:"Lait", price:14, seed:'lait-vaseline', desc:"Lotion hydratante intense à la vaseline pure. Protection et nutrition longue durée.", ingredients:"Vaseline pure, glycérine, vitamine E.", rating:4.3, reviews:7},
  {id:'b26', cat:'body', name:"Roushun Beauty Lotion", subtitle:"Lait", price:19, seed:'lait-roushun', desc:"Lait de beauté Roushun. Formule douce et efficace pour un corps sublimé au quotidien.", ingredients:"Beurre de mangue, huile d'amande, niacinamide.", rating:4.4, reviews:9},
  /* ===== SAVONS ===== */
  {id:'b27', cat:'body', name:"Molato Soap", subtitle:"Savon", price:10, seed:'savon-molato', desc:"Savon éclaircissant extra fort au molato. Nettoie en profondeur tout en unifiant le teint.", ingredients:"Extrait de molato, beurre de karité bio, glycérine.", rating:4.6, reviews:18},
  {id:'b28', cat:'body', name:"Savon Noir", subtitle:"Savon", price:8, seed:'savon-noir', desc:"Savon noir traditionnel africain. Purifie, exfolie et nettoie en douceur. Utilisé depuis des siècles.", ingredients:"Cendre de néré, beurre de karité, huile de palme rouge.", rating:4.4, reviews:12},
  {id:'b29', cat:'body', name:"Pure Egyptian Soap", subtitle:"Savon", price:12, seed:'savon-egyptian', desc:"Savon égyptien pur. Tradition ancestrale pour une peau nette et lumineuse.", ingredients:"Huile d'olive, miel, lait de chèvre.", rating:4.5, reviews:14},
  {id:'b30', cat:'body', name:"Moroccan Argan Soap", subtitle:"Savon", price:13, seed:'savon-argan', desc:"Savon marocain à l'huile d'argan. Nourrit et nettoie sans agresser la peau.", ingredients:"Huile d'argan, huile d'olive, argile ghassoul.", rating:4.6, reviews:16},
  {id:'b31', cat:'body', name:"AHA Savon", subtitle:"Savon", price:11, seed:'savon-aha', desc:"Savon exfoliant aux AHA. Nettoie et renouvelle la peau en douceur.", ingredients:"Acide glycolique, aloe vera, glycérine.", rating:4.5, reviews:11},
  {id:'b32', cat:'body', name:"Advanced Whitening Soap", subtitle:"Savon", price:12, seed:'savon-advanced-whitening', desc:"Savon éclaircissant avancé. Formule concentrée pour un résultat visible.", ingredients:"Arbutine, vitamine C, extrait de citron.", rating:4.6, reviews:15},
  {id:'b33', cat:'body', name:"Half Cast Soap", subtitle:"Savon", price:10, seed:'savon-half-cast', desc:"Savon éclaircissant Half Cast. Nettoie et atténue les taches pigmentaires.", ingredients:"Extrait de citron, huile de coco, glycérine.", rating:4.3, reviews:8},
  {id:'b34', cat:'body', name:"Cindella Soap", subtitle:"Savon", price:11, seed:'savon-cindella', desc:"Savon Cindella à la formule exclusive. Laisse la peau propre, douce et éclatante.", ingredients:"Complexe Cindella, huile d'amande, beurre de karité.", rating:4.5, reviews:10},
  {id:'b35', cat:'body', name:"Kojic San Soap", subtitle:"Savon", price:12, seed:'savon-kojic-san', desc:"Savon japonais à l'acide kojique. Éclaircissant doux et efficace pour le visage et le corps.", ingredients:"Acide kojique 2%, extrait de riz, collagène.", rating:4.6, reviews:17},
  {id:'b36', cat:'body', name:"Savon Œuf", subtitle:"Savon", price:8, seed:'savon-oeuf', desc:"Savon à l'œuf. Riche en protéines pour une peau nourrie et régénérée.", ingredients:"Extrait d'œuf, huile d'olive, glycérine naturelle.", rating:4.3, reviews:7},
  {id:'b37', cat:'body', name:"CeraVe Cleanser", subtitle:"Savon", price:14, seed:'savon-cerave', desc:"Nettoyant doux CeraVe aux céramides. Respecte la barrière cutanée. Sans parfum.", ingredients:"Céramides, acide hyaluronique, niacinamide.", rating:4.7, reviews:20},
  {id:'b38', cat:'body', name:"Medix Soap", subtitle:"Savon", price:10, seed:'savon-medix', desc:"Savon dermatologique Medix. Nettoie en douceur tout en respectant l'équilibre de la peau.", ingredients:"Complexe Medix, aloe vera, panthénol.", rating:4.4, reviews:9},
  {id:'b39', cat:'body', name:"Pure Glow Soap", subtitle:"Savon", price:11, seed:'savon-pure-glow', desc:"Savon éclat pur. Illumine la peau dès la première utilisation.", ingredients:"Extrait de perle, vitamine C, huile de jojoba.", rating:4.5, reviews:13},
  {id:'b40', cat:'body', name:"Arbutin Glutathione Soap", subtitle:"Savon", price:13, seed:'savon-arbutin-gluta', desc:"Savon double action arbutine et glutathion. Puissant éclaircissant et antioxydant.", ingredients:"Alpha arbutine, glutathion, vitamine E.", rating:4.6, reviews:15},
  {id:'b41', cat:'body', name:"L-Gluta Soap", subtitle:"Savon", price:12, seed:'savon-l-gluta', desc:"Savon au L-glutathion. Blanchissant et antioxydant pour une peau lumineuse.", ingredients:"L-glutathion, vitamine C, extrait de papaye.", rating:4.5, reviews:11},
  /* ===== CRÈMES VISAGE ===== */
  {id:'f3', cat:'face', name:"Cindella Cream", subtitle:"Visage", price:22, seed:'face-cindella-cream', desc:"Crème visage Cindella. Formule riche pour un teint uniforme et lumineux.", ingredients:"Complexe Cindella, acide hyaluronique, beurre de karité.", rating:4.6, reviews:16},
  {id:'f4', cat:'face', name:"Malkia Cream", subtitle:"Visage", price:28, seed:'face-malkia-cream', desc:"Crème signature Malkia B. Soin complet visage éclat. Texture veloutée et parfum subtil.", ingredients:"Beurre de karité bio, huile d'argan, vitamine E, niacinamide.", rating:4.8, reviews:24, badge:'Vedette'},
  {id:'f5', cat:'face', name:"Jennie Moon Pro Derma", subtitle:"Visage", price:32, seed:'face-jennie-moon', desc:"Crème coréenne Jennie Moon. Technologie pro-derma pour une peau parfaite.", ingredients:"Peptides, céramides, extrait de centella asiatica.", rating:4.7, reviews:19, badge:'Premium'},
  {id:'f6', cat:'face', name:"Parley Beauty Cream", subtitle:"Visage", price:25, seed:'face-parley', desc:"Crème visage Parley Beauty. Nutrition intense et éclat durable.", ingredients:"Huile de coco, beurre de mangue, vitamine E.", rating:4.5, reviews:12},
  {id:'f7', cat:'face', name:"Dr. Althea 345", subtitle:"Visage", price:30, seed:'face-dr-althea-345', desc:"Crème apaisante Dr. Althea 345. Calme les irritations et renforce la barrière cutanée.", ingredients:"Centella asiatica, panthénol, niacinamide.", rating:4.7, reviews:18},
  {id:'f8', cat:'face', name:"Dr. Althea 147", subtitle:"Visage", price:30, seed:'face-dr-althea-147', desc:"Crème régénérante Dr. Althea 147. Reparation et nutrition intense.", ingredients:"Miel de manuka, propolis, beurre de karité.", rating:4.6, reviews:15},
  {id:'f9', cat:'face', name:"Skin Light Cream", subtitle:"Visage", price:20, seed:'face-skin-light', desc:"Crème éclaircissante visage. Estompe les taches et unifie le teint progressivement.", ingredients:"Acide kojique, extrait de réglisse, vitamine C.", rating:4.5, reviews:13},
  {id:'f10', cat:'face', name:"Saam Cream", subtitle:"Visage", price:18, seed:'face-saam', desc:"Crème visage Saam. Soin quotidien pour une peau saine et éclatante.", ingredients:"Beurre de karité, huile d'amande douce, glycérine.", rating:4.4, reviews:10},
  {id:'f11', cat:'face', name:"Kojic Cream", subtitle:"Visage", price:21, seed:'face-kojic-cream', desc:"Crème visage à l'acide kojique. Éclaircissante et protectrice.", ingredients:"Acide kojique 2%, niacinamide, filtres UV.", rating:4.6, reviews:14},
  {id:'f12', cat:'face', name:"Medicube", subtitle:"Visage", price:35, seed:'face-medicube', desc:"Crème coréenne Medicube. Soin anti-âge avancé pour une peau rajeunie.", ingredients:"Adénosine, collagène marin, acide hyaluronique.", rating:4.7, reviews:20, badge:'Premium'},
  {id:'f13', cat:'face', name:"COSRX Crème", subtitle:"Visage", price:28, seed:'face-cosrx', desc:"Crème COSRX. Soin apaisant et réparateur à la mucine d'escargot.", ingredients:"Mucine d'escargot 96%, extrait de feuille d'olivier.", rating:4.8, reviews:23},
  {id:'f14', cat:'face', name:"CeraVe Crème Visage", subtitle:"Visage", price:24, seed:'face-cerave', desc:"Crème hydratante CeraVe aux céramides. Hydratation longue durée.", ingredients:"Céramides, acide hyaluronique, niacinamide.", rating:4.7, reviews:19},
  {id:'f15', cat:'face', name:"La Roche Posay", subtitle:"Visage", price:33, seed:'face-lrp', desc:"Crème dermatologique La Roche Posay. Tolérance maximale et efficacité prouvée.", ingredients:"Eau thermale de La Roche Posay, niacinamide, shea butter.", rating:4.8, reviews:25, badge:'Premium'},
  {id:'f16', cat:'face', name:"Golden Glow Cream", subtitle:"Visage", price:22, seed:'face-golden-glow', desc:"Crème éclat doré. Sublime le teint avec un fini lumineux naturel.", ingredients:"Extrait de miel, or colloïdal, vitamine E.", rating:4.5, reviews:11},
  {id:'f17', cat:'face', name:"Jeason Beauty Cream", subtitle:"Visage", price:19, seed:'face-jeason', desc:"Crème Jeason Beauty. Soin visage complet pour un teint frais et unifié.", ingredients:"Complexe Jeason, huile de jojoba, aloe vera.", rating:4.4, reviews:9},
  {id:'f18', cat:'face', name:"Anua 77%", subtitle:"Visage", price:27, seed:'face-anua-77', desc:"Sérum-crème Anua 77% à l'extrait d'huile d'olive. Hydratation coréenne intense.", ingredients:"Extrait d'huile d'olive 77%, squalane, panthénol.", rating:4.7, reviews:17},
  {id:'f19', cat:'face', name:"Anua 70%", subtitle:"Visage", price:27, seed:'face-anua-70', desc:"Crème Anua 70% à la centella. Apaise et répare les peaux sensibles.", ingredients:"Extrait de centella asiatica 70%, niacinamide, madecassoside.", rating:4.6, reviews:15},
];

function img(seed, w=600, h=750){ return `https://picsum.photos/seed/${seed}/${w}/${h}`; }
function ti(m, w=500, h=500){ return m.img && m.img.startsWith('images/') ? m.img : img(m.img, w, h); }
function findProduct(id){ return PRODUCTS.find(p=>p.id===id); }
function fmt(n){ return n.toFixed(2).replace('.', ','); }

/* ===== HERO CAROUSEL ===== */
const HERO_SLIDES = [
  {
    img: 'images/pexels-jayrinho-16559618.jpg',
    tag: 'Since 2015 · Livraison mondiale',
    title: 'Votre Beauté, Notre Priorité',
    text: 'True Beauty Comes From Within — Des soins de beauté premium conçus pour révéler votre éclat avec élégance, douceur et efficacité.',
    cta1: { text: 'Découvrir nos produits', link: '#/category/fragrance' },
    cta2: { text: 'Commander via WhatsApp', link: '#/contact' }
  },
  {
    img: 'images/pexels-angela-roma-7479882.jpg',
    tag: 'Soins Corps · Éclat Naturel',
    title: 'Des Soins d\'Exception',
    text: 'Des textures onctueuses et des actifs précieux pour nourrir, hydrater et illuminer votre peau au quotidien.',
    cta1: { text: 'Explorer la collection Corps', link: '#/category/body' },
    cta2: { text: 'Nos engagements', link: '#/home' }
  },
  {
    img: 'images/pexels-innamykytas-8510231.jpg',
    tag: 'Visage · Rituel Beauté',
    title: 'L\'Éclat de la Reine',
    text: 'Révélez la luminescence de votre peau avec nos soins visage enrichis en actifs naturels d\'exception.',
    cta1: { text: 'Découvrir les soins Visage', link: '#/category/face' },
    cta2: { text: 'Nos nouveautés', link: '#/category/face' }
  },
  {
    img: 'images/laura-chouette-4sKdeIMiFEI-unsplash.jpg',
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
let cart = JSON.parse(localStorage.getItem('malkia_cart')) || [];

function saveCart(){
  localStorage.setItem('malkia_cart', JSON.stringify(cart));
}
let activeTab = 'desc';
let activeThumb = 0;

function addToCart(id, qty=1){
  const existing = cart.find(c=>c.id===id);
  if(existing) existing.qty += qty; else cart.push({id, qty});
  saveCart();
  updateCartCount();
  showToast("Ajouté au panier");
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
  { id:'hamin', name:'Hamin Banga', role:'CEO / Fondateur', roleKey:'boss', bio:"Visionnaire et fondateur de Malkia B Cosmetics, Hamin incarne l'ambition de rendre la beauté premium accessible à toutes. Sous sa direction, la marque rayonne depuis Bukavu et Kigali vers le monde.", img:'images/CEO.jpeg' },
  { id:'samuel', name:'Samuel Buhendwa', role:'Sales & Marketing', bio:"Samuel est le moteur commercial de Malkia B. Stratège dans l'âme, il développe les marchés et fidélise une clientèle exigeante grâce à un accompagnement personnalisé.", img:'images/samuel.jpeg' },
  { id:'wema', name:'Wema Birindwa', role:'Sales & Marketing', bio:"Wema allie écoute et expertise pour conseiller chaque cliente. Son énergie positive et sa connaissance des produits font d'elle une ambassadrice de choix.", img:'images/Wema.jpeg' },
  { id:'fadhili', name:'Fadhili Mushikazi', role:'Sales & Marketing', bio:"Fadhili excelle dans l'art de la relation client. Passionnée par la cosmétique, elle met son sens du service au service de l'expérience Malkia B.", img:'images/Fadhili.jpeg' },
  { id:'julia', name:'Wani Mugaruka Julia', role:'Sales & Marketing', bio:"Julia est une force de vente naturelle. Sa détermination et sa chaleur humaine créent un lien unique avec chaque cliente qui franchit les portes de la boutique.", img:'images/Wani Julia.jpeg' },
  { id:'narcisse', name:'Narcisse Baderhe', role:'Sales & Marketing', bio:"Narcisse apporte rigueur et professionnalisme à l'équipe commerciale. Son expertise des marchés locaux contribue à l'ancrage régional de la marque.", img:'images/Narcisse Baderhe.jpeg' },
  { id:'esther', name:'Esther Birindwa', role:'Janitor', bio:"Esther veille à ce que chaque espace Malkia B soit impeccable. Son travail discret mais essentiel garantit un cadre d'exception pour nos clients et nos équipes.", img:'team-esther' },
  { id:'guillaine', name:'Guillaine Kuchirabwinja', role:'Sécurité', bio:"Guillaine assure la sécurité et la sérénité de nos boutiques. Vigilante et bienveillante, elle accueille chaque visiteur avec professionnalisme.", img:'team-guillaine' },
  { id:'elie', name:'Elie Binwa', role:'Sécurité', bio:"Elie est le garant de la tranquillité de nos espaces. Son sérieux et sa disponibilité font de lui un membre essentiel de la famille Malkia B.", img:'team-elie' },
  { id:'photo', name:'Photographe', role: LANG.current==='en'?'Coming soon':'À venir', bio:LANG.current==='en'?"We are currently hiring a talented photographer to capture the essence of Malkia B. If you are passionate about beauty and imagery, join us!":"Nous recrutons actuellement un photographe talentueux pour capturer l'essence de Malkia B. Si vous êtes passionné par la beauté et l'image, rejoignez-nous !", img:'team-photo' },
];

function renderTeam(){
  const tm = t('team');
  return `
  <div class="px-5 md:px-margin-desktop pb-24">
    <div class="text-center mb-16">
      <span class="text-[11px] text-primary uppercase tracking-widest mb-3 block">${tm.subtitle}</span>
      <h1 class="font-display text-3xl md:text-5xl mb-4">${tm.title}</h1>
      <p class="text-sm md:text-base text-on-background/70 max-w-xl mx-auto">Derrière chaque soin se cache une équipe passionnée, unie par la même vision : révéler la souveraine en chaque femme.</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
      ${TEAM.map((m,i)=>`
      <a href="#/team/${m.id}" class="group text-center ${i>0 ? 'mt-0 md:mt-8' : ''}">
        <div class="aspect-square overflow-hidden mb-4 border border-outline-variant/10 bg-surface-container-low transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg">
          <img src="${ti(m,500,500)}" class="w-full h-full object-cover" alt="${m.name}">
        </div>
        <h3 class="font-display text-base md:text-lg font-medium">${m.name}</h3>
        <p class="text-[11px] text-primary uppercase tracking-widest mt-1">${m.roleKey ? t('team.'+m.roleKey) : m.role}</p>
      </a>`).join('')}
    </div>
  </div>`;
}

function renderTeamMember(id){
  const tm = t('team'), m = TEAM.find(t=>t.id===id);
  if(!m) return `<div class="px-5 text-center py-20"><h1 class="font-display text-2xl">${t('contact.form.name')!=='Full Name'?'Membre introuvable':'Member not found'}</h1><a href="#/team" class="inline-block mt-6 text-primary border-b border-primary/30">${t('contact.form.name')!=='Full Name'?'Retour à l\'équipe':'Back to team'}</a></div>`;
  const others = TEAM.filter(t=>t.id!==id).slice(0,4);
  return `
  <div class="px-5 md:px-margin-desktop pb-24">
    <a href="#/team" class="flex items-center gap-2 text-primary luxury-underline w-fit text-sm mb-10"><span class="material-symbols-outlined text-base">arrow_back</span> ${t('contact.form.name')!=='Full Name'?"Toute l'équipe":"All team"}</a>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
      <div class="md:col-span-5">
        <div class="aspect-square overflow-hidden border border-outline-variant/10 shadow-lg">
          <img src="${ti(m,700,700)}" class="w-full h-full object-cover" alt="${m.name}">
        </div>
      </div>
      <div class="md:col-span-7">
        <span class="text-[11px] text-primary uppercase tracking-widest block mb-3">${tm.subtitle}</span>
        <h1 class="font-display text-3xl md:text-5xl mb-2">${m.name}</h1>
        <p class="text-sm text-primary uppercase tracking-widest mb-8 border-b border-outline-variant/20 pb-6">${m.roleKey ? t('team.'+m.roleKey) : m.role}</p>
        <p class="text-base text-on-surface-variant leading-relaxed mb-10">${m.bio}</p>
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
        <span class="text-[11px] text-primary uppercase tracking-widest mb-2 block">${t('contact.form.name')!=='Full Name'?'Découvrez aussi':'Also discover'}</span>
        <h2 class="font-display text-2xl md:text-3xl">${t('contact.form.name')!=='Full Name'?'Les autres membres':'Other members'}</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        ${others.map(m=>`
        <a href="#/team/${m.id}" class="group text-center">
          <div class="aspect-square overflow-hidden mb-3 border border-outline-variant/10 transition-transform duration-500 group-hover:scale-105">
            <img src="${ti(m,400,400)}" class="w-full h-full object-cover" alt="${m.name}">
          </div>
          <h4 class="font-display text-sm md:text-base font-medium">${m.name}</h4>
          <p class="text-[10px] text-primary uppercase tracking-widest mt-1">${m.roleKey ? t('team.'+m.roleKey) : m.role}</p>
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
    <div id="mobileMenu" class="hidden flex-col bg-background border-t border-outline-variant/20 px-5 pb-4">
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
          <a href="#" class="w-9 h-9 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all"><span class="material-symbols-outlined text-sm">photo_camera</span></a>
          <a href="#" class="w-9 h-9 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all"><span class="material-symbols-outlined text-sm">pin_drop</span></a>
          <a href="#" class="w-9 h-9 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all"><span class="material-symbols-outlined text-sm">music_note</span></a>
        </div>
        <p class="text-[10px] text-on-surface-variant/60 pt-2">Instagram · Pinterest · TikTok</p>
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
  else if(page==='category'){ app.innerHTML = renderCategory(param||'body'); setTimeout(initScrollReveal, 50); }
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
  else{ app.innerHTML = renderHome(); setTimeout(()=>{ initHeroCarousel(); initScrollReveal(); }, 50); }
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
      <img src="${imageUrl}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="${p.name}">
      ${p.badge ? `<div class="absolute top-3 left-3 bg-primary text-on-primary text-[9px] px-3 py-1.5 uppercase tracking-widest font-semibold">${p.badge}</div>` : ''}
      <button onclick="event.preventDefault(); event.stopPropagation(); addToCart('${p.id}')" class="absolute bottom-4 right-4 bg-background/90 p-3 rounded-full opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm active:scale-90">
        <span class="material-symbols-outlined text-primary text-[20px]">add_shopping_cart</span>
      </button>
    </div>
    <div class="text-center">
      <p class="text-[11px] uppercase tracking-widest text-outline mb-1">${p.subtitle}</p>
      <h4 class="font-display text-base md:text-lg font-medium mb-1 line-clamp-2">${p.name}</h4>
      <p class="text-sm text-primary font-medium">${fmt(p.price)} €</p>
    </div>
  </a>`;
}

/* ===== HOME ===== */
function renderHome(){
  const h = t('home'), hr = t('hero'), c = t('cat');
  const newArrivals = PRODUCTS.slice(0,4);
  return `
  <section id="heroCarousel" class="relative h-[75vh] md:h-[85vh] w-full overflow-hidden mb-24 group">
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

  <section class="px-5 md:px-margin-desktop mb-24 reveal">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      ${Object.entries(CATS).map(([key,label], i)=>`
      <a href="#/category/${key}" class="relative aspect-[3/4] overflow-hidden group hover-lift border border-outline-variant/10 ${i%2===1?'md:mt-12':''} reveal reveal-d${(i%4)+1}">
        <img src="images/cat-${key}.jpg" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="${label}">
        <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        <div class="absolute bottom-6 left-6">
          <h3 class="font-display text-lg md:text-xl mb-1">${t('cat.'+key) || label}</h3>
          <span class="text-[11px] text-primary uppercase tracking-widest flex items-center gap-1">${h.see_more} <span class="material-symbols-outlined text-sm">arrow_forward</span></span>
        </div>
      </a>`).join('')}
    </div>
  </section>

  <section class="px-5 md:px-margin-desktop mb-24 reveal">
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

  <section class="bg-surface-container-low py-20 md:py-28 mb-24 reveal">
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
        <img src="${img('malkia-atelier-femme',700,875)}" class="w-full h-full object-cover" alt="Atelier Malkia B">
      </div>
    </div>
  </section>

  <section class="px-5 md:px-margin-desktop py-16 text-center">
    <div class="max-w-xl mx-auto">
      <span class="material-symbols-outlined text-primary text-3xl mb-4 block animate-float">auto_awesome</span>
      <h2 class="font-display text-2xl md:text-3xl mb-4">${h.join}</h2>
      <p class="text-sm text-on-background/70 mb-8">${h.join_p}</p>
      <form onsubmit="event.preventDefault(); showToast('${h.thanks}')" class="flex gap-4 max-w-md mx-auto border-b border-outline-variant pb-1">
        <input type="email" required placeholder="votre@email.com" class="newsletter-input flex-1 py-2 text-sm">
        <button type="submit" class="text-primary text-[12px] uppercase tracking-widest hover:tracking-[0.2em] transition-all">${h.subscribe}</button>
      </form>
    </div>
  </section>

  <section class="bg-surface-container-low py-20 md:py-28 text-center">
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
  const label = t('cat.'+catKey) || (CATS[catKey] || 'Boutique');
  const items = PRODUCTS.filter(p=>p.cat===catKey);
  return `
  <div class="px-5 md:px-margin-desktop pt-4 pb-24">
    <div class="text-center mb-14 reveal">
      <span class="text-[11px] text-primary uppercase tracking-widest mb-3 block">${t('categories')}</span>
      <h1 class="font-display text-3xl md:text-5xl mb-4">${label}</h1>
      <p class="text-sm md:text-base text-on-background/70 max-w-xl mx-auto">${t('product.subtitle')}</p>
    </div>
    <div id="productGrid" class="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
      ${items.map((p,i)=>`<div data-name="${p.name.toLowerCase()}" class="reveal reveal-d${(i%4)+1}">${productCard(p)}</div>`).join('')}
    </div>
  </div>
  `;
}

/* ===== PRODUCT ===== */
function renderProduct(id){
  const p = findProduct(id), pr = t('product');
  if(!p) return `<div class="px-5 text-center py-20"><h1 class="font-display text-2xl">${LANG.current==='en'?'Product not found':'Produit introuvable'}</h1></div>`;
  const related = PRODUCTS.filter(x=>x.cat===p.cat && x.id!==p.id).slice(0,4);
  const mainImg = p.img || img(p.seed, 700, 875);
  const thumbs = p.img ? [p.img] : [img(p.seed, 140, 175), img(p.seed+'-b', 140, 175), img(p.seed+'-c', 140, 175)];
  return `
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 px-5 md:px-margin-desktop pb-16">
    <div>
      <div class="aspect-[4/5] overflow-hidden mb-4 border border-outline-variant/10">
        <img id="mainImg" src="${mainImg}" class="w-full h-full object-cover" alt="${p.name}">
      </div>
      <div class="flex gap-3">
        ${thumbs.map((t,i)=>`<img src="${t}" onclick="activeThumb=${i}; navigate();" class="w-16 h-20 object-cover cursor-pointer ${i===activeThumb?'opacity-100 border-b-2 border-primary':'opacity-50'}">`).join('')}
      </div>
    </div>
    <div>
      <span class="text-[11px] uppercase tracking-widest text-outline">${p.subtitle}</span>
      <h1 class="font-display text-3xl md:text-4xl my-3">${p.name}</h1>
      <div class="flex items-center gap-2 mb-5">
        <div class="flex text-primary text-sm">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5-Math.round(p.rating))}</div>
        <span class="text-xs text-outline">(${p.reviews} ${pr.reviews})</span>
      </div>
      <div class="font-display text-2xl mb-6">${fmt(p.price)} €</div>
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
        <a href="#/checkout" onclick="addToCart('${p.id}', parseInt(document.getElementById('qtyVal').textContent))" class="w-full text-center border border-primary text-primary py-4 text-[12px] uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all btn-shine">${LANG.current==='en'?'Buy Now':'Acheter Maintenant'}</a>
      </div>
      <div class="flex justify-center gap-8 border-b border-outline-variant/20 mb-6">
        <button onclick="activeTab='desc'; navigate();" class="pb-3 text-[12px] uppercase tracking-widest ${activeTab==='desc'?'tab-active':'text-outline'}">${pr.desc}</button>
        <button onclick="activeTab='ing'; navigate();" class="pb-3 text-[12px] uppercase tracking-widest ${activeTab==='ing'?'tab-active':'text-outline'}">${pr.ing}</button>
        <button onclick="activeTab='avis'; navigate();" class="pb-3 text-[12px] uppercase tracking-widest ${activeTab==='avis'?'tab-active':'text-outline'}">${pr.reviews} (${p.reviews})</button>
      </div>
      <div class="text-sm text-on-surface-variant leading-relaxed">
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
      <h2 class="font-display text-2xl md:text-3xl">${LANG.current==='en'?'Complete Your Ritual':'Complétez Votre Rituel'}</h2>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">${related.map(p=>productCard(p)).join('')}</div>
  </section>
  `;
}

/* ===== CART ===== */
function renderCart(){
  const ca = t('cart');
  if(cart.length===0){
    return `<div class="px-5 text-center py-24">
      <span class="font-display text-4xl text-primary block mb-4">✦</span>
      <h1 class="font-display text-2xl mb-2">${ca.empty}</h1>
      <p class="text-sm text-on-surface-variant mb-8">${LANG.current==='en'?'The art of sovereign beauty begins here.':"L'art de la beauté souveraine commence ici."}</p>
      <a href="#/products" class="inline-block bg-primary text-on-primary px-10 py-4 text-[12px] uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all btn-shine">${ca.cta}</a>
    </div>`;
  }
  const lines = cart.map(c=>{ const p=findProduct(c.id); return {...p, qty:c.qty, lineTotal:p.price*c.qty}; });
  const subtotal = lines.reduce((s,l)=>s+l.lineTotal,0);
  const shipping = subtotal > 150 ? 0 : 6;
  const total = subtotal + shipping;
  return `
  <div class="px-5 md:px-margin-desktop pb-24">
    <h1 class="font-display text-2xl md:text-3xl text-primary mb-2">${ca.title}</h1>
    <p class="text-sm text-on-surface-variant italic mb-12">${LANG.current==='en'?'The art of sovereign beauty begins here.':"L'art de la beauté souveraine commence ici."}</p>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      <div class="lg:col-span-8">
        ${lines.map(l=>`
        <div class="grid grid-cols-[80px_1fr_auto] md:grid-cols-12 items-center gap-4 md:gap-0 border-b border-outline-variant/10 py-6">
          <div class="md:col-span-6 flex items-center gap-4 md:gap-6">
            <div class="w-16 h-20 md:w-24 md:h-32 flex-shrink-0 bg-surface-container-low overflow-hidden">
              <img src="${img(l.seed,200,250)}" class="w-full h-full object-cover" alt="${l.name}">
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
            <div class="font-medium text-primary">${fmt(l.lineTotal)} €</div>
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
            <div class="flex justify-between"><span class="text-on-surface-variant">${ca.sub}</span><span>${fmt(subtotal)} €</span></div>
            <div class="flex justify-between"><span class="text-on-surface-variant">${ca.delivery}</span><span>${shipping===0?ca.free:fmt(shipping)+' €'}</span></div>
          </div>
          <div class="border-t border-outline-variant/30 pt-4 mb-8 flex justify-between items-center">
            <span class="font-display text-lg">${ca.total}</span>
            <span class="font-display text-xl text-primary">${fmt(total)} €</span>
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
function renderCheckout(){
  const co = t('checkout'), ca = t('cart');
  if(cart.length===0){
    return `<div class="px-5 text-center py-24"><h1 class="font-display text-2xl mb-6">${ca.empty}</h1><a href="#/products" class="inline-block bg-primary text-on-primary px-10 py-4 text-[12px] uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all btn-shine">${ca.cta}</a></div>`;
  }
  const lines = cart.map(c=>{ const p=findProduct(c.id); return {...p, qty:c.qty, lineTotal:p.price*c.qty}; });
  const subtotal = lines.reduce((s,l)=>s+l.lineTotal,0);
  const shipping = subtotal > 150 ? 0 : 6;
  const total = subtotal + shipping;
  return `
  <div class="px-5 md:px-margin-desktop pb-24">
    <h1 class="font-display text-2xl md:text-3xl mb-12">${co.title}</h1>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      <div class="lg:col-span-7 space-y-16">
        <section>
          <div class="flex items-center gap-4 mb-8"><span class="font-display text-xl text-primary">01</span><h2 class="font-display text-xl">${co.info_title}</h2></div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
            <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${LANG.current==='en'?'First Name':'Prénom'}</label><input class="underline-input w-full py-2 text-sm" placeholder="${LANG.current==='en'?'First Name':'Prénom'}"></div>
            <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${LANG.current==='en'?'Last Name':'Nom'}</label><input class="underline-input w-full py-2 text-sm" placeholder="${LANG.current==='en'?'Last Name':'Nom'}"></div>
            <div class="md:col-span-2"><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${co.address}</label><input class="underline-input w-full py-2 text-sm" placeholder="${co.address}"></div>
            <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${co.city}</label><input class="underline-input w-full py-2 text-sm" placeholder="${co.city}"></div>
            <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${LANG.current==='en'?'Phone':'Téléphone'}</label><input class="underline-input w-full py-2 text-sm" placeholder="+225 ..."></div>
          </div>
        </section>
        <section>
          <div class="flex items-center gap-4 mb-8"><span class="font-display text-xl text-primary">02</span><h2 class="font-display text-xl">${LANG.current==='en'?'Delivery Method':'Mode de livraison'}</h2></div>
          <div class="space-y-3">
            <label class="flex items-center justify-between p-5 border border-primary bg-surface-container-low cursor-pointer">
              <div class="flex items-center gap-4"><input type="radio" name="delivery" checked class="accent-primary"><div><p class="text-sm font-medium">Standard</p><p class="text-xs text-on-surface-variant">${LANG.current==='en'?'3-5 business days':'3-5 jours ouvrés'}</p></div></div>
              <span class="text-sm">${ca.free}</span>
            </label>
            <label class="flex items-center justify-between p-5 border border-outline-variant/30 cursor-pointer">
              <div class="flex items-center gap-4"><input type="radio" name="delivery" class="accent-primary"><div><p class="text-sm font-medium">Express</p><p class="text-xs text-on-surface-variant">24-48h</p></div></div>
              <span class="text-sm">5 000 CFA</span>
            </label>
          </div>
        </section>
        <section>
          <div class="flex items-center gap-4 mb-8"><span class="font-display text-xl text-primary">03</span><h2 class="font-display text-xl">${co.title}</h2></div>
          <div class="grid grid-cols-3 gap-4 mb-8">
            <label class="flex flex-col items-center gap-2 p-4 border border-primary bg-surface-container-low cursor-pointer text-center"><input type="radio" name="pay" checked class="hidden"><span class="material-symbols-outlined">credit_card</span><span class="text-[11px] uppercase">${co.card}</span></label>
            <label class="flex flex-col items-center gap-2 p-4 border border-outline-variant/30 cursor-pointer text-center"><input type="radio" name="pay" class="hidden"><span class="material-symbols-outlined">smartphone</span><span class="text-[11px] uppercase">Mobile Money</span></label>
            <label class="flex flex-col items-center gap-2 p-4 border border-outline-variant/30 cursor-pointer text-center"><input type="radio" name="pay" class="hidden"><span class="material-symbols-outlined">payments</span><span class="text-[11px] uppercase">PayPal</span></label>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="md:col-span-2"><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${LANG.current==='en'?'Card Number':'Numéro de carte'}</label><input class="underline-input w-full py-2 text-sm" placeholder="0000 0000 0000 0000"></div>
            <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${LANG.current==='en'?'Expiry':'Expiration'}</label><input class="underline-input w-full py-2 text-sm" placeholder="MM/AA"></div>
            <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">CVC</label><input class="underline-input w-full py-2 text-sm" placeholder="123"></div>
          </div>
        </section>
      </div>
      <div class="lg:col-span-5">
        <div class="sticky top-28 border border-outline-variant/10 p-8 bg-surface-container-low">
          <h3 class="font-display text-xl mb-6">${co.summary}</h3>
          <div class="space-y-4 mb-6">
            ${lines.map(l=>`<div class="flex justify-between text-sm"><span>${l.name} × ${l.qty}</span><span>${fmt(l.lineTotal)} €</span></div>`).join('')}
          </div>
          <div class="border-t border-outline-variant/30 pt-4 space-y-2 mb-8 text-sm">
            <div class="flex justify-between"><span>${ca.delivery}</span><span>${shipping===0?ca.free:fmt(shipping)+' €'}</span></div>
            <div class="flex justify-between font-display text-lg text-primary pt-2"><span>${ca.total}</span><span>${fmt(total)} €</span></div>
          </div>
          <button onclick="cart=[]; saveCart(); updateCartCount(); showToast('${co.confirm}'); location.hash='#/account';" class="w-full bg-primary text-on-primary py-4 text-[12px] uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all">${co.place}</button>
          <p class="text-center mt-5 text-xs text-on-surface-variant flex items-center justify-center gap-2"><span class="material-symbols-outlined text-sm">lock</span> ${ca.secure}</p>
        </div>
      </div>
    </div>
  </div>
  `;
}

/* ===== ACCOUNT ===== */
function renderAccount(){
  const ac = t('account');
  return `
  <div class="px-5 md:px-margin-desktop pb-24">
    <h1 class="font-display text-2xl md:text-3xl mb-2">${ac.title}</h1>
    <p class="text-sm text-on-surface-variant mb-12">${LANG.current==='en'?'Welcome, [First Name Last Name]':'Bienvenue, [Prénom Nom]'}</p>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <aside class="lg:col-span-3 space-y-2">
        <button class="w-full flex items-center gap-4 py-3 px-4 bg-secondary-container text-on-secondary-container">
          <span class="material-symbols-outlined">shopping_bag</span><span class="text-sm">${ac.orders}</span>
        </button>
        <button class="w-full flex items-center gap-4 py-3 px-4 text-on-surface-variant hover:bg-surface-container-low">
          <span class="material-symbols-outlined">person</span><span class="text-sm">Informations</span>
        </button>
        <button class="w-full flex items-center gap-4 py-3 px-4 text-on-surface-variant hover:bg-surface-container-low">
          <span class="material-symbols-outlined">location_on</span><span class="text-sm">Adresses</span>
        </button>
        <button class="w-full flex items-center gap-4 py-3 px-4 text-on-surface-variant hover:bg-surface-container-low">
          <span class="material-symbols-outlined">credit_card</span><span class="text-sm">Paiements</span>
        </button>
        <button class="w-full py-4 mt-6 border border-primary text-primary text-[11px] uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all">Déconnexion</button>
      </aside>
      <div class="lg:col-span-9 space-y-8">
        <h2 class="font-display text-xl border-b border-outline-variant/20 pb-4">Historique des commandes</h2>
        <div class="border border-outline-variant/10 p-6 flex items-center justify-between flex-wrap gap-4">
          <div class="flex gap-6 items-center">
            <div class="w-20 h-20 bg-surface-container-low overflow-hidden"><img src="${img('malkia-order1',200,200)}" class="w-full h-full object-cover"></div>
            <div><p class="text-[11px] text-primary uppercase mb-1">Livré le 12 juin 2026</p><h3 class="font-display text-base">Commande #MB-10423</h3><p class="text-sm text-on-surface-variant">3 articles • 84,00 €</p></div>
          </div>
          <span class="text-[11px] border border-primary text-primary px-4 py-2 uppercase tracking-widest">Livrée</span>
        </div>
        <div class="border border-outline-variant/10 p-6 flex items-center justify-between flex-wrap gap-4">
          <div class="flex gap-6 items-center">
            <div class="w-20 h-20 bg-surface-container-low overflow-hidden"><img src="${img('malkia-order2',200,200)}" class="w-full h-full object-cover"></div>
            <div><p class="text-[11px] text-primary uppercase mb-1">2 mai 2026</p><h3 class="font-display text-base">Commande #MB-10391</h3><p class="text-sm text-on-surface-variant">1 article • 65,00 €</p></div>
          </div>
          <span class="text-[11px] border border-outline text-outline px-4 py-2 uppercase tracking-widest">En cours</span>
        </div>
        <h2 class="font-display text-xl border-b border-outline-variant/20 pb-4 pt-6">Informations personnelles</h2>
        <div class="border border-outline-variant/10 p-6 space-y-2 text-sm text-on-surface-variant">
          <p>[Placeholder Nom Prénom]</p>
          <p>[placeholder@email.com]</p>
          <p>+225 [00 00 00 00 00]</p>
        </div>
      </div>
    </div>
  </div>
  `;
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
        <input id="productSearch" type="text" placeholder="${LANG.current==='en'?'Search a product...':'Rechercher un produit...'}" class="w-full border-b border-outline-variant/30 py-3 pl-8 pr-4 text-sm bg-transparent focus:border-primary transition-colors outline-none">
      </div>
    </div>
    <div id="productGrid" class="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
      ${filtered.map((p,i)=>`<div data-name="${p.name.toLowerCase()}" class="reveal reveal-d${(i%4)+1}">${productCard(p)}</div>`).join('')}
    </div>
    <div id="noResults" class="text-center py-16 hidden">
      <span class="material-symbols-outlined text-4xl text-outline mb-4 block">search_off</span>
      <p class="text-on-surface-variant">${LANG.current==='en'?'No product matches your search.':'Aucun produit ne correspond à votre recherche.'}</p>
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
      <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&h=514&fit=crop&q=80" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700">
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
  <div class="grid md:grid-cols-2 gap-8 reveal">
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
          <div><p class="text-sm font-semibold">${LANG.current==='en'?'Address':'Adresse'}</p><p class="text-sm text-on-surface-variant">${s.addr}</p></div>
        </div>
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center flex-shrink-0"><span class="material-symbols-outlined text-primary text-base">call</span></div>
          <div><p class="text-sm font-semibold">${LANG.current==='en'?'Phone':'Téléphone'}</p><a href="tel:${s.phone.replace(/[^0-9+]/g,'')}" class="text-sm text-on-surface-variant hover:text-primary transition-colors">${s.phone}</a></div>
        </div>
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center flex-shrink-0"><span class="material-symbols-outlined text-primary text-base">schedule</span></div>
          <div><p class="text-sm font-semibold">${LANG.current==='en'?'Hours':'Horaires'}</p><p class="text-sm text-on-surface-variant">${s.hours}</p></div>
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
        <p class="text-sm md:text-base text-on-background/70 max-w-xl mx-auto mt-4">${LANG.current==='en'?'Behind every product is a passionate team, united by the same vision.':'Derrière chaque soin se cache une équipe passionnée, unie par la même vision : révéler la souveraine en chaque femme.'}</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
        ${TEAM.map((m,i)=>`
        <a href="#/team/${m.id}" class="group text-center ${i>0 ? 'mt-0 md:mt-8' : ''} reveal reveal-d${(i%5)+1}">
          <div class="aspect-square overflow-hidden mb-4 border border-outline-variant/10 bg-surface-container-low transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg">
            <img src="${ti(m,500,500)}" class="w-full h-full object-cover" alt="${m.name}">
          </div>
          <h3 class="font-display text-sm md:text-base font-medium">${m.name}</h3>
          <p class="text-[11px] text-primary uppercase tracking-widest mt-1">${m.roleKey ? t('team.'+m.roleKey) : m.role}</p>
        </a>`).join('')}
      </div>
    </section>
  </div>`;
}

/* ===== CONTACT ===== */
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
        <form onsubmit="event.preventDefault(); showToast('${f.sent}')" class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${f.name}</label><input class="underline-input w-full py-2 text-sm" placeholder="${f.name}" required></div>
            <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${f.email}</label><input type="email" class="underline-input w-full py-2 text-sm" placeholder="votre@email.com" required></div>
          </div>
          <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${f.subject}</label><input class="underline-input w-full py-2 text-sm" placeholder="${f.subject}"></div>
          <div><label class="text-[11px] uppercase tracking-widest text-on-surface-variant block mb-2">${f.msg}</label><textarea rows="4" class="underline-input w-full py-2 text-sm resize-none" placeholder="${f.msg}" required></textarea></div>
          <button type="submit" class="w-full bg-primary text-on-primary py-4 text-[12px] uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all btn-shine">${f.send}</button>
        </form>
      </div>
      <div class="lg:col-span-5 space-y-10 reveal reveal-right">
        <div>
          <h3 class="font-display text-lg border-b border-outline-variant/20 pb-3 mb-4">${c.direct}</h3>
          <div class="space-y-4">
            <div class="flex items-center gap-3"><span class="w-9 h-9 rounded-full bg-primary-container/20 flex items-center justify-center"><span class="material-symbols-outlined text-primary text-base">mail</span></span><div><a href="mailto:contact@malkiab-cosmetics.com" class="text-sm text-primary luxury-underline">contact@malkiab-cosmetics.com</a><p class="text-[10px] text-on-surface-variant uppercase tracking-widest">${f.email}</p></div></div>
            <div class="flex items-center gap-3"><span class="w-9 h-9 rounded-full bg-primary-container/20 flex items-center justify-center"><span class="material-symbols-outlined text-primary text-base">call</span></span><div><a href="tel:+243995945889" class="text-sm text-primary luxury-underline">+243 995 945 889</a><p class="text-[10px] text-on-surface-variant uppercase tracking-widest">Bukavu</p></div></div>
            <div class="flex items-center gap-3"><span class="w-9 h-9 rounded-full bg-primary-container/20 flex items-center justify-center"><span class="material-symbols-outlined text-primary text-base">call</span></span><div><a href="tel:+250788000000" class="text-sm text-primary luxury-underline">+250 788 000 000</a><p class="text-[10px] text-on-surface-variant uppercase tracking-widest">Kigali</p></div></div>
          </div>
        </div>
        <div>
          <h3 class="font-display text-lg border-b border-outline-variant/20 pb-3 mb-4">${c.offices}</h3>
          <div class="space-y-4">
            <div class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-base mt-0.5">store</span><div><p class="text-sm font-medium">Bukavu, DRCongo</p><p class="text-xs text-on-surface-variant">${t('shops.bukavu.addr')}</p></div></div>
            <div class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-base mt-0.5">store</span><div><p class="text-sm font-medium">Kigali, Rwanda</p><p class="text-xs text-on-surface-variant">${t('shops.kigali.addr')}</p></div></div>
            <div class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-base mt-0.5">location_city</span><div><p class="text-sm font-medium">Abidjan, Côte d'Ivoire</p><p class="text-xs text-on-surface-variant">${c.abidjan}</p></div></div>
            <div class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-base mt-0.5">flight</span><div><p class="text-sm font-medium">Paris, France</p><p class="text-xs text-on-surface-variant">${c.paris}</p></div></div>
            <div class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-base mt-0.5">flight</span><div><p class="text-sm font-medium">Dakar, Sénégal</p><p class="text-xs text-on-surface-variant">${c.dakar}</p></div></div>
            <div class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-base mt-0.5">flight</span><div><p class="text-sm font-medium">Dubai, UAE</p><p class="text-xs text-on-surface-variant">${c.dubai}</p></div></div>
          </div>
        </div>
        <div>
          <h3 class="font-display text-lg border-b border-outline-variant/20 pb-3 mb-4">${LANG.current==='en'?'Hours':'Horaires'}</h3>
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
