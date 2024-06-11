function find(tagName, aria) {
  return document.querySelector(`${tagName}[aria-label='${aria}']`);
}

if ((connecté = find('span', 'Connecté')) !== null) {
  console.log('On est connecté, tout va bien.')
} else if ((checkbox = document.querySelector('span.checkmark')) !== null && (submitFormLink = find('a', 'Submit form to access wi-fi')) !== null) {
  console.log('On est pas connecté, mais on a trouvé la checkbox et le bouton de soumission du formulaire.');
  console.log('on coche la checkbox');
  checkbox.click();
  console.log('on envoie le formulaire');
  submitFormLink.click();
} else if ((seConnecter = find('a', 'Se Connecter')) !== null) {
  console.log('On est pas connecté, on cherche à se connecter.');
  console.log('Bouton "Se Connecter trouvé", on clique dessus.');
  seConnecter.click();
} else {
  alert("On est dans un cas non prévu.");
}
