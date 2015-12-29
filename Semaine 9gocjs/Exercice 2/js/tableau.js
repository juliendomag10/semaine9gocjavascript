$liste = document.getElementById("liste");
$texte = document.getElementById("texte");
$ajouter = document.getElementById("ajouter");
$annuler = document.getElementById("annuler");

tableau = ["Marie", "Etienne", "Jean", "Ludivine"];

function afficherListe() {
    elements = "";
    for (i = 0; i < tableau.length; i++) {
        elements += "<li>" + tableau[i] + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    tableau.push($texte.value);
    afficherListe();
}

$ajouter.onclick = ajouter;

function annuler() {
    tableau.push($texte.value);
    afficherListe();
}

$annuler.onclick = annuler;
afficherListe();