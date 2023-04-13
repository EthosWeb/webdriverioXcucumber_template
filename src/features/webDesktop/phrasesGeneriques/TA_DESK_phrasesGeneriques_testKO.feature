@SAUCELABS @PHRASESGENERIQUE
# Le resultat est Failed volontairement pour aider a tester le reporting
Feature: TA_DESK_phrasesGeneriques_testKO

        Scenario: TA_DESK_phrasesGeneriques_testKO

            Given J'accede a la page "Test Authentification"
             When Je m'authentifie avec le user "fake_user" et le mot de passe "secret_sauce"
             Then Je verifie que je suis sur la page "Test Resultats"
              And Je verifie que l'element "Produits" est affiche