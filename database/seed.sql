USE trouve_ton_artisan;

INSERT INTO categories (name, slug) VALUES
('Bâtiment', 'batiment'),
('Services', 'services'),
('Fabrication', 'fabrication'),
('Alimentation', 'alimentation');

INSERT INTO specialites (name, slug, category_id) VALUES
('Chauffagiste', 'chauffagiste', 1),
('Electricien', 'electricien', 1),
('Menuisier', 'menuisier', 1),
('Plombier', 'plombier', 1),
('Coiffeur', 'coiffeur', 2),
('Fleuriste', 'fleuriste', 2),
('Toiletteur', 'toiletteur', 2),
('Webdesign', 'webdesign', 2),
('Bijoutier', 'bijoutier', 3),
('Couturier', 'couturier', 3),
('Ferronier', 'ferronier', 3),
('Boucher', 'boucher', 4),
('Boulanger', 'boulanger', 4),
('Chocolatier', 'chocolatier', 4),
('Traiteur', 'traiteur', 4);

INSERT INTO artisans (name, note, ville, a_propos, email, site_web, top_artisan, image_url, specialite_id) VALUES
('Boucherie Dumont', 4.5, 'Lyon', 'Artisan boucher situé à Lyon, proposant des produits frais et de qualité.', 'boucherie.dumond@gmail.com', NULL, FALSE, 'https://placehold.co/600x400?text=Boucherie+Dumont', 12),
('Au pain chaud', 4.8, 'Montélimar', 'Boulangerie artisanale proposant pains, viennoiseries et spécialités locales.', 'aupainchaud@hotmail.com', NULL, TRUE, 'https://placehold.co/600x400?text=Au+pain+chaud', 13),
('Chocolaterie Labbé', 4.9, 'Lyon', 'Chocolatier artisanal reconnu pour ses créations gourmandes et locales.', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', TRUE, 'https://placehold.co/600x400?text=Chocolaterie+Labbe', 14),
('Traiteur Truchon', 4.1, 'Lyon', 'Traiteur pour événements privés et professionnels.', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', FALSE, 'https://placehold.co/600x400?text=Traiteur+Truchon', 15),
('Orville Salmons', 5.0, 'Evian', 'Chauffagiste spécialisé dans l’installation et la maintenance thermique.', 'o-salmons@live.com', NULL, TRUE, 'https://placehold.co/600x400?text=Orville+Salmons', 1),
('Mont Blanc Eléctricité', 4.5, 'Chamonix', 'Electricien pour logements, commerces et dépannage.', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', FALSE, 'https://placehold.co/600x400?text=Mont+Blanc+Electricite', 2),
('Boutot & fils', 4.7, 'Bourg-en-Bresse', 'Menuiserie artisanale intérieure et extérieure.', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', FALSE, 'https://placehold.co/600x400?text=Boutot+et+fils', 3),
('Vallis Bellemare', 4.0, 'Vienne', 'Plombier intervenant sur installations neuves et rénovations.', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', FALSE, 'https://placehold.co/600x400?text=Vallis+Bellemare', 4),
('Claude Quinn', 4.2, 'Aix-les-Bains', 'Bijoutier proposant créations sur mesure et réparations.', 'claude.quinn@gmail.com', NULL, FALSE, 'https://placehold.co/600x400?text=Claude+Quinn', 9),
('Amitee Lécuyer', 4.5, 'Annecy', 'Couturière spécialisée dans les retouches et créations textiles.', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', FALSE, 'https://placehold.co/600x400?text=Amitee+Lecuyer', 10),
('Ernest Carignan', 5.0, 'Le Puy-en-Velay', 'Ferronier réalisant des ouvrages métalliques sur mesure.', 'e-carigan@hotmail.com', NULL, FALSE, 'https://placehold.co/600x400?text=Ernest+Carignan', 11),
('Royden Charbonneau', 3.8, 'Saint-Priest', 'Salon de coiffure pour femmes, hommes et enfants.', 'r.charbonneau@gmail.com', NULL, FALSE, 'https://placehold.co/600x400?text=Royden+Charbonneau', 5),
('Leala Dennis', 3.8, 'Chambéry', 'Coiffeuse proposant coupe, coloration et soins.', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', FALSE, 'https://placehold.co/600x400?text=Leala+Dennis', 5),
('C''est sup''hair', 4.1, 'Romans-sur-Isère', 'Salon de coiffure moderne et accessible.', 'sup-hair@gmail.com', 'https://sup-hair.fr', FALSE, 'https://placehold.co/600x400?text=Cest+suphair', 5),
('Le monde des fleurs', 4.6, 'Annonay', 'Fleuriste pour bouquets, mariages et événements.', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', FALSE, 'https://placehold.co/600x400?text=Le+monde+des+fleurs', 6),
('Valérie Laderoute', 4.5, 'Valence', 'Toiletteuse pour chiens et chats.', 'v-laredoute@gmail.com', NULL, FALSE, 'https://placehold.co/600x400?text=Valerie+Laderoute', 7),
('CM Graphisme', 4.4, 'Valence', 'Webdesigner freelance pour sites vitrines et identités visuelles.', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', FALSE, 'https://placehold.co/600x400?text=CM+Graphisme', 8);