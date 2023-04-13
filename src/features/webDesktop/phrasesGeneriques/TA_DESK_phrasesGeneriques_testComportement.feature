@SAUCELABS @PHRASESGENERIQUE
Feature: TA_DESK_phrasesGeneriques_testComportement

        Scenario: TA_DESK_phrasesGeneriques_testComportement_OK_AvecUserEtMotDePasse

            Given J'accede a la page "Test Authentification"
             Then Je verifie que j'accede a la page des resultats lorsque je m'authentifie avec le user "standard_user" et le mot de passe "secret_sauce"

        Scenario: TA_DESK_phrasesGeneriques_testComportement_OK_SansUserEtMotDePasse
            
            Given J'accede a la page "Test Authentification"
             Then Je verifie que j'accede a la page des resultats lorsque je m'authentifie avec un compte valide

        Scenario: TA_DESK_phrasesGeneriques_testComportement_KO_AvecUserEtMotDePasse

            
            Given J'accede a la page "Test Authentification"
             Then Je verifie que je n'accede pas a la page des resultats lorsque je m'authentifie avec le user "fake_user" et le mot de passe "Abcd1234"


        Scenario: TA_DESK_phrasesGeneriques_testComportement_KO_SansUserEtMotDePasse

            
            Given J'accede a la page "Test Authentification"
             Then Je verifie que je n'accede pas a la page des resultats lorsque je m'authentifie avec un compte invalide
              And Je verifie que je n'accede pas a la page des resultats lorsque je m'authentifie avec un compte desactive