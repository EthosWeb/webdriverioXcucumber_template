@SAUCELABS @PHRASESSIMPLES
Feature: TA_DESK_TestAuthentification

        Scenario: TA_DESK_TestAuthentification_OK

            Given J'accede a la page "Test Authentification"
              And J'attends que "Username" soit visible
             When Je saisis "standard_user" dans le champ "Username"
              And Je saisis "secret_sauce" dans le champ "Password"
              And Je clique sur "Login"

             Then Je verifie que je suis sur la page "Test Resultats"
              And Je verifie que l'element "Produits" est affiche

        Scenario: TA_DESK_TestAuthentification_KO
    #Le resultat est Failed volontairement pour aider a tester le reporting
            Given J'accede a la page "Test Authentification"
             When Je saisis "fake_user" dans le champ "Username"
              And Je saisis "secret_sauce" dans le champ "Password"
              And Je clique sur "Login"

             Then Je verifie que je suis sur la page "Test Resultats"
              And Je verifie que l'element "Produits" est affiche