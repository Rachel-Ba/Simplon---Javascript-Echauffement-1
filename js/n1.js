var nom = prompt("Entrez votre nom :");

while ((nom.length < 1) || (nom.length > 10))
{
	alert("Votre nom doit etre compris entre 0 et 10, recommencer");
	nom = prompt("Entrez votre nom :");
}


alert("Bonjour, " + nom);


