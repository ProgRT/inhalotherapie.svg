---
title: Inhalothérapie.svg
subtitle: Ensemble d'icones au sujet des soins respiratoires
layout: default
icones: 
  - Stéthoscope
  - BoitierNébuliseur
  - MasqueAérosol
  - Poumons
  - PoumonsAvecBronches
  - HumidificateurChauffant
  - Souflet
  - CourbesDeVentilation
  - simvent.js
  - DébitConstant
  - CourbePV
  - TubeEndotrachéal
  - Trachéotomie
---

<div id='icones'>

	{% for icone in page.icones %}
	<svg viewBox='0 0 180 180' >
		<title>{{ icone }}</title>
		<use xlink:href="Inhalothérapie.svg#{{ icone }}"></use>
	</svg>
	{% endfor %}

</div>

```{html}
<svg viewBox='0 0 180 180' >
    <use xlink:href="Inhalothérapie.svg#Nébuliseur"></use>
</svg>
```

<a download href='Inhalothérapie.svg'>
	<svg viewBox='0 0 180 180' style='height: 1.5em; fill: black'>
		<title>{{ icone }}</title>
		<use xlink:href="Inhalothérapie.svg#Télécharger"></use>
	</svg>
	Télécharger
</a>
