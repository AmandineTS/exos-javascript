var departements = [
    {
        codeDepartement: '01', departement: 'AIN', codeRegion: '82',
        region: 'RHÔNE-ALPES',
        prefecture: 'BOURG-EN-BRESSE',
    },
    {
        codeDepartement: '02', departement: 'AISNE', codeRegion: '22',
        region: 'PICARDIE',
        prefecture: 'LAON',
    },
    {
        codeDepartement: '03', departement: 'ALLIER', codeRegion: '83',
        region: 'AUVERGNE',
        prefecture: 'MOULINS',
    },
    {
        codeDepartement: '04', departement: 'ALPES-DE-HAUTE-PROVENCE', codeRegion: '93',
        region: 'PROVENCE-ALPES-CÔTE D\'AZUR',
        prefecture: 'DIGNE-LES-BAINS',
    },
    {
        codeDepartement: '05', departement: 'HAUTES-ALPES', codeRegion: '93',
        region: 'PROVENCE-ALPES-CÔTE D\'AZUR',
        prefecture: 'GAP',
    },
    {
        codeDepartement: '06', departement: 'ALPES-MARITIMES', codeRegion: '93',
        region: 'PROVENCE-ALPES-CÔTE D\'AZUR',
        prefecture: 'NICE',
    },
    {
        codeDepartement: '07', departement: 'ARDÈCHE', codeRegion: '82',
        region: 'RHÔNE-ALPES',
        prefecture: 'PRIVAS',
    },
    {
        codeDepartement: '08', departement: 'ARDENNES', codeRegion: '21',
        region: 'CHAMPAGNE-ARDENNE',
        prefecture: 'CHARLEVILLE-MÉZIÈRES',
    },
    {
        codeDepartement: '09', departement: 'ARIÈGE', codeRegion: '73',
        region: 'MIDI-PYRÉNÉES',
        prefecture: 'FOIX',
    },
    {
        codeDepartement: '10', departement: 'AUBE', codeRegion: '21',
        region: 'CHAMPAGNE-ARDENNE',
        prefecture: 'TROYES',
    },
    {
        codeDepartement: '11', departement: 'AUDE', codeRegion: '91',
        region: 'LANGUEDOC-ROUSSILLON',
        prefecture: 'CARCASSONNE',
    },
    {
        codeDepartement: '12', departement: 'AVEYRON', codeRegion: '73',
        region: 'MIDI-PYRÉNÉES',
        prefecture: 'RODEZ',
    },
    {
        codeDepartement: '13', departement: 'BOUCHES-DU-RHÔNE', codeRegion: '93',
        region: 'PROVENCE-ALPES-CÔTE D\'AZUR',
        prefecture: 'MARSEILLE',
    },
    {
        codeDepartement: '14', departement: 'CALVADOS', codeRegion: '25',
        region: 'BASSE-NORMANDIE',
        prefecture: 'CAEN',
    },
    {
        codeDepartement: '15', departement: 'CANTAL', codeRegion: '83',
        region: 'AUVERGNE',
        prefecture: 'AURILLAC',
    },
    {
        codeDepartement: '16', departement: 'CHARENTE', codeRegion: '54',
        region: 'POITOU-CHARENTES',
        prefecture: 'ANGOULÊME',
    },
    {
        codeDepartement: '17', departement: 'CHARENTE-MARITIME', codeRegion: '54',
        region: 'POITOU-CHARENTES',
        prefecture: 'LA ROCHELLE',
    },
    {
        codeDepartement: '18', departement: 'CHER', codeRegion: '24',
        region: 'CENTRE',
        prefecture: 'BOURGES',
    },
    {
        codeDepartement: '19', departement: 'CORRÈZE', codeRegion: '74',
        region: 'LIMOUSIN',
        prefecture: 'TULLE',
    },
    {
        codeDepartement: '21', departement: 'CÔTE-D\'OR', codeRegion: '26',
        region: 'BOURGOGNE',
        prefecture: 'DIJON',
    },
    {
        codeDepartement: '22', departement: 'CÔTES-D\'ARMOR', codeRegion: '53',
        region: 'BRETAGNE',
        prefecture: 'SAINT-BRIEUC',
    },
    {
        codeDepartement: '23', departement: 'CREUSE', codeRegion: '74',
        region: 'LIMOUSIN',
        prefecture: 'GUÉRET',
    },
    {
        codeDepartement: '24', departement: 'DORDOGNE', codeRegion: '72',
        region: 'AQUITAINE',
        prefecture: 'PÉRIGUEUX',
    },
    {
        codeDepartement: '25', departement: 'DOUBS', codeRegion: '43',
        region: 'FRANCHE-COMTÉ',
        prefecture: 'BESANÇON',
    },
    {
        codeDepartement: '26', departement: 'DRÔME', codeRegion: '82',
        region: 'RHÔNE-ALPES',
        prefecture: 'VALENCE',
    },
    {
        codeDepartement: '27', departement: 'EURE', codeRegion: '23',
        region: 'HAUTE-NORMANDIE',
        prefecture: 'ÉVREUX',
    },
    {
        codeDepartement: '28', departement: 'EURE-ET-LOIR', codeRegion: '24',
        region: 'CENTRE',
        prefecture: 'CHARTRES',
    },
    {
        codeDepartement: '29', departement: 'FINISTÈRE', codeRegion: '53',
        region: 'BRETAGNE',
        prefecture: 'QUIMPER',
    },
    {
        codeDepartement: '2A', departement: 'CORSE-DU-SUD', codeRegion: '94',
        region: 'CORSE',
        prefecture: 'AJACCIO',
    },
    {
        codeDepartement: '2B', departement: 'HAUTE-CORSE', codeRegion: '94',
        region: 'CORSE',
        prefecture: 'BASTIA',
    },
    {
        codeDepartement: '30', departement: 'GARD', codeRegion: '91',
        region: 'LANGUEDOC-ROUSSILLON',
        prefecture: 'NÎMES',
    },
    {
        codeDepartement: '31', departement: 'HAUTE-GARONNE', codeRegion: '73',
        region: 'MIDI-PYRÉNÉES',
        prefecture: 'TOULOUSE',
    },
    {
        codeDepartement: '32', departement: 'GERS', codeRegion: '73',
        region: 'MIDI-PYRÉNÉES',
        prefecture: 'AUCH',
    },
    {
        codeDepartement: '33', departement: 'GIRONDE', codeRegion: '72',
        region: 'AQUITAINE',
        prefecture: 'BORDEAUX',
    },
    {
        codeDepartement: '34', departement: 'HÉRAULT', codeRegion: '91',
        region: 'LANGUEDOC-ROUSSILLON',
        prefecture: 'MONTPELLIER',
    },
    {
        codeDepartement: '35', departement: 'ILLE-ET-VILAINE', codeRegion: '53',
        region: 'BRETAGNE',
        prefecture: 'RENNES',
    },
    {
        codeDepartement: '36', departement: 'INDRE', codeRegion: '24',
        region: 'CENTRE',
        prefecture: 'CHÂTEAUROUX',
    },
    {
        codeDepartement: '37', departement: 'INDRE-ET-LOIRE', codeRegion: '24',
        region: 'CENTRE',
        prefecture: 'TOURS',
    },
    {
        codeDepartement: '38', departement: 'ISÈRE', codeRegion: '82',
        region: 'RHÔNE-ALPES',
        prefecture: 'GRENOBLE',
    },
    {
        codeDepartement: '39', departement: 'JURA', codeRegion: '43',
        region: 'FRANCHE-COMTÉ',
        prefecture: 'LONS-LE-SAUNIER',
    },
    {
        codeDepartement: '40', departement: 'LANDES', codeRegion: '72',
        region: 'AQUITAINE',
        prefecture: 'MONT-DE-MARSAN',
    },
    {
        codeDepartement: '41', departement: 'LOIR-ET-CHER', codeRegion: '24',
        region: 'CENTRE',
        prefecture: 'BLOIS',
    },
    {
        codeDepartement: '42', departement: 'LOIRE', codeRegion: '82',
        region: 'RHÔNE-ALPES',
        prefecture: 'SAINT-ÉTIENNE',
    },
    {
        codeDepartement: '43', departement: 'HAUTE-LOIRE', codeRegion: '83',
        region: 'AUVERGNE',
        prefecture: 'LE PUY-EN-VELAY',
    },
    {
        codeDepartement: '44', departement: 'LOIRE-ATLANTIQUE', codeRegion: '52',
        region: 'PAYS DE LA LOIRE',
        prefecture: 'NANTES',
    },
    {
        codeDepartement: '45', departement: 'LOIRET', codeRegion: '24',
        region: 'CENTRE',
        prefecture: 'ORLÉANS',
    },
    {
        codeDepartement: '46', departement: 'LOT', codeRegion: '73',
        region: 'MIDI-PYRÉNÉES',
        prefecture: 'CAHORS',
    },
    {
        codeDepartement: '47', departement: 'LOT-ET-GARONNE', codeRegion: '72',
        region: 'AQUITAINE',
        prefecture: 'AGEN',
    },
    {
        codeDepartement: '48', departement: 'LOZÈRE', codeRegion: '91',
        region: 'LANGUEDOC-ROUSSILLON',
        prefecture: 'MENDE',
    },
    {
        codeDepartement: '49', departement: 'MAINE-ET-LOIRE', codeRegion: '52',
        region: 'PAYS DE LA LOIRE',
        prefecture: 'ANGERS',
    },
    {
        codeDepartement: '50', departement: 'MANCHE', codeRegion: '25',
        region: 'BASSE-NORMANDIE',
        prefecture: 'SAINT-LÔ',
    },
    {
        codeDepartement: '51', departement: 'MARNE', codeRegion: '21',
        region: 'CHAMPAGNE-ARDENNE',
        prefecture: 'CHÂLONS-EN-CHAMPAGNE',
    },
    {
        codeDepartement: '52', departement: 'HAUTE-MARNE', codeRegion: '21',
        region: 'CHAMPAGNE-ARDENNE',
        prefecture: 'CHAUMONT',
    },
    {
        codeDepartement: '53', departement: 'MAYENNE', codeRegion: '52',
        region: 'PAYS DE LA LOIRE',
        prefecture: 'LAVAL',
    },
    {
        codeDepartement: '54', departement: 'MEURTHE-ET-MOSELLE', codeRegion: '41',
        region: 'LORRAINE',
        prefecture: 'NANCY',
    },
    {
        codeDepartement: '55', departement: 'MEUSE', codeRegion: '41',
        region: 'LORRAINE',
        prefecture: 'BAR-LE-DUC',
    },
    {
        codeDepartement: '56', departement: 'MORBIHAN', codeRegion: '53',
        region: 'BRETAGNE',
        prefecture: 'VANNES',
    },
    {
        codeDepartement: '57', departement: 'MOSELLE', codeRegion: '41',
        region: 'LORRAINE',
        prefecture: 'METZ',
    },
    {
        codeDepartement: '58', departement: 'NIÈVRE', codeRegion: '26',
        region: 'BOURGOGNE',
        prefecture: 'NEVERS',
    },
    {
        codeDepartement: '59', departement: 'NORD', codeRegion: '31',
        region: 'NORD-PAS-DE-CALAIS',
        prefecture: 'LILLE',
    },
    {
        codeDepartement: '60', departement: 'OISE', codeRegion: '22',
        region: 'PICARDIE',
        prefecture: 'BEAUVAIS',
    },
    {
        codeDepartement: '61', departement: 'ORNE', codeRegion: '25',
        region: 'BASSE-NORMANDIE',
        prefecture: 'ALENÇON',
    },
    {
        codeDepartement: '62', departement: 'PAS-DE-CALAIS', codeRegion: '31',
        region: 'NORD-PAS-DE-CALAIS',
        prefecture: 'ARRAS',
    },
    {
        codeDepartement: '63', departement: 'PUY-DE-DÔME', codeRegion: '83',
        region: 'AUVERGNE',
        prefecture: 'CLERMONT-FERRAND',
    },
    {
        codeDepartement: '64', departement: 'PYRÉNÉES-ATLANTIQUES', codeRegion: '72',
        region: 'AQUITAINE',
        prefecture: 'PAU',
    },
    {
        codeDepartement: '65', departement: 'HAUTES-PYRÉNÉES', codeRegion: '73',
        region: 'MIDI-PYRÉNÉES',
        prefecture: 'TARBES',
    },
    {
        codeDepartement: '66', departement: 'PYRÉNÉES-ORIENTALES', codeRegion: '91',
        region: 'LANGUEDOC-ROUSSILLON',
        prefecture: 'PERPIGNAN',
    },
    {
        codeDepartement: '67', departement: 'BAS-RHIN', codeRegion: '42',
        region: 'ALSACE',
        prefecture: 'STRASBOURG',
    },
    {
        codeDepartement: '68', departement: 'HAUT-RHIN', codeRegion: '42',
        region: 'ALSACE',
        prefecture: 'COLMAR',
    },
    {
        codeDepartement: '69', departement: 'RHÔNE', codeRegion: '82',
        region: 'RHÔNE-ALPES',
        prefecture: 'LYON',
    },
    {
        codeDepartement: '70', departement: 'HAUTE-SAÔNE', codeRegion: '43',
        region: 'FRANCHE-COMTÉ',
        prefecture: 'VESOUL',
    },
    {
        codeDepartement: '71', departement: 'SAÔNE-ET-LOIRE', codeRegion: '26',
        region: 'BOURGOGNE',
        prefecture: 'MÂCON',
    },
    {
        codeDepartement: '72', departement: 'SARTHE', codeRegion: '52',
        region: 'PAYS DE LA LOIRE',
        prefecture: 'LE MANS',
    },
    {
        codeDepartement: '73', departement: 'SAVOIE', codeRegion: '82',
        region: 'RHÔNE-ALPES',
        prefecture: 'CHAMBÉRY',
    },
    {
        codeDepartement: '74', departement: 'HAUTE-SAVOIE', codeRegion: '82',
        region: 'RHÔNE-ALPES',
        prefecture: 'ANNECY',
    },
    {
        codeDepartement: '75', departement: 'PARIS', codeRegion: '11',
        region: 'ÎLE-DE-FRANCE',
        prefecture: 'PARIS',
    },
    {
        codeDepartement: '76', departement: 'SEINE-MARITIME', codeRegion: '23',
        region: 'HAUTE-NORMANDIE',
        prefecture: 'ROUEN',
    },
    {
        codeDepartement: '77', departement: 'SEINE-ET-MARNE', codeRegion: '11',
        region: 'ÎLE-DE-FRANCE',
        prefecture: 'MELUN',
    },
    {
        codeDepartement: '78', departement: 'YVELINES', codeRegion: '11',
        region: 'ÎLE-DE-FRANCE',
        prefecture: 'VERSAILLES',
    },
    {
        codeDepartement: '79', departement: 'DEUX-SÈVRES', codeRegion: '54',
        region: 'POITOU-CHARENTES',
        prefecture: 'NIORT',
    },
    {
        codeDepartement: '80', departement: 'SOMME', codeRegion: '22',
        region: 'PICARDIE',
        prefecture: 'AMIENS',
    },
    {
        codeDepartement: '81', departement: 'TARN', codeRegion: '73',
        region: 'MIDI-PYRÉNÉES',
        prefecture: 'ALBI',
    },
    {
        codeDepartement: '82', departement: 'TARN-ET-GARONNE', codeRegion: '73',
        region: 'MIDI-PYRÉNÉES',
        prefecture: 'MONTAUBAN',
    },
    {
        codeDepartement: '83', departement: 'VAR', codeRegion: '93',
        region: 'PROVENCE-ALPES-CÔTE D\'AZUR',
        prefecture: 'TOULON',
    },
    {
        codeDepartement: '84', departement: 'VAUCLUSE', codeRegion: '93',
        region: 'PROVENCE-ALPES-CÔTE D\'AZUR',
        prefecture: 'AVIGNON',
    },
    {
        codeDepartement: '85', departement: 'VENDÉE', codeRegion: '52',
        region: 'PAYS DE LA LOIRE',
        prefecture: 'LA ROCHE-SUR-YON',
    },
    {
        codeDepartement: '86', departement: 'VIENNE', codeRegion: '54',
        region: 'POITOU-CHARENTES',
        prefecture: 'POITIERS',
    },
    {
        codeDepartement: '87', departement: 'HAUTE-VIENNE', codeRegion: '74',
        region: 'LIMOUSIN',
        prefecture: 'LIMOGES',
    },
    {
        codeDepartement: '88', departement: 'VOSGES', codeRegion: '41',
        region: 'LORRAINE',
        prefecture: 'ÉPINAL',
    },
    {
        codeDepartement: '89', departement: 'YONNE', codeRegion: '26',
        region: 'BOURGOGNE',
        prefecture: 'AUXERRE',
    },
    {
        codeDepartement: '90', departement: 'TERRITOIRE DE BELFORT', codeRegion: '43',
        region: 'FRANCHE-COMTÉ',
        prefecture: 'BELFORT',
    },
    {
        codeDepartement: '91', departement: 'ESSONNE', codeRegion: '11',
        region: 'ÎLE-DE-FRANCE',
        prefecture: 'ÉVRY',
    },
    {
        codeDepartement: '92', departement: 'HAUTS-DE-SEINE', codeRegion: '11',
        region: 'ÎLE-DE-FRANCE',
        prefecture: 'NANTERRE',
    },
    {
        codeDepartement: '93', departement: 'SEINE-SAINT-DENIS', codeRegion: '11',
        region: 'ÎLE-DE-FRANCE',
        prefecture: 'BOBIGNY',
    },
    {
        codeDepartement: '94', departement: 'VAL-DE-MARNE', codeRegion: '11',
        region: 'ÎLE-DE-FRANCE',
        prefecture: 'CRÉTEIL',
    },
    {
        codeDepartement: '95', departement: 'VAL-D\'OISE', codeRegion: '11',
        region: 'ÎLE-DE-FRANCE',
        prefecture: 'CERGY',
    },
    {
        codeDepartement: '971', departement: 'GUADELOUPE', codeRegion: '1',
        region: 'GUADELOUPE',
        prefecture: 'BASSE-TERRE',
    },
    {
        codeDepartement: '972', departement: 'MARTINIQUE', codeRegion: '2',
        region: 'MARTINIQUE',
        prefecture: 'FORT-DE-FRANCE',
    },
    {
        codeDepartement: '973', departement: 'GUYANE', codeRegion: '3',
        region: 'GUYANE',
        prefecture: 'CAYENNE',
    },
    {
        codeDepartement: '974', departement: 'RÉUNION', codeRegion: '4',
        region: 'LA RÉUNION',
        prefecture: 'SAINT-DENIS',
    },
    {
        codeDepartement: '975', departement: 'SAINT-PIERRE-ET-MIQUELON', codeRegion: '6',
        region: 'SAINT-PIERRE-ET-MIQUELON',
        prefecture: 'SAINT-PIERRE',
    },
    {
        codeDepartement: '976', departement: 'MAYOTTE', codeRegion: '5',
        region: 'MAYOTTE',
        prefecture: 'MAMOUDZOU',
    }
];
