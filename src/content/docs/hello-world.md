---
title: Hello World con Astro
description: Una pagina dimostrativa in italiano che mostra come funziona Astro e come iniziare a costruire componenti, importare librerie e organizzare i contenuti con Starlight.
---

## Benvenuta/o in Astro 👋

Questa è una pagina dimostrativa pensata per prendere confidenza con Astro e con il tema documentazione Starlight usato in questo progetto.

In questa pagina troverai:

- Che cos'è Astro e la sua architettura “islands” in 1 minuto
- Esempi pratici di componenti `.astro`
- Come importare componenti React/Vue/Svelte e idratarli sul client
- Come leggere dati in build-time e stamparli nella pagina
- Suggerimenti su struttura contenuti e sidebar

> Nota: questo file è Markdown semplice (`.md`). Per usare importazioni e JSX/TSX in pagina, crea un file `.mdx`.

---

## 1) Che cos'è Astro (in breve)

Astro è un framework per siti veloci in cui l'HTML viene generato lato build. Il JavaScript viene inviato al browser solo quando serve, sotto forma di piccole “isole” interattive.

- Rendering di default: HTML statico, super veloce.
- Interattività on‑demand: monta solo i componenti necessari (client:load, client:idle, ecc.).
- File-based routing: la struttura delle pagine segue i file nei tuoi `src/pages` (nei siti classici) o viene gestita dal tema (qui: Starlight).

---

## 2) Un componente `.astro` minimo

Ecco un esempio di componente Astro con frontmatter (script in alto) e markup in basso. Salvalo come `src/components/Saluto.astro`:

```astro
---
const { nome = 'Mondo' } = Astro.props;
---
<section>
	<h2>Ciao {nome} 👋</h2>
	<p>Questo è un componente Astro minimale.</p>
	<style>
		section {
			border: 1px solid #e5e7eb;
			border-radius: 0.5rem;
			padding: 1rem;
			background: #fafafa;
		}
	</style>
  
</section>
```

Per usarlo in una pagina `.astro` o `.mdx`:

```astro
---
import Saluto from "../components/Saluto.astro";
---

<Saluto nome="Astro" />
```

In una pagina `.md` semplice (come questa) non puoi importare componenti: passa a `.mdx` se ti serve.

---

## 3) Importare componenti React/Vue/Svelte con idratazione

Astro supporta molte librerie UI. Ecco un esempio con React che si monta solo al bisogno:

```astro
---
// In una pagina/slot .astro o .mdx
import Contatore from "../components/Contatore.jsx";
---

<!-- Monta il componente sul client al primo paint -->
<Contatore client:load />

<!-- Altre strategie utili -->
<!-- <Contatore client:idle />  Monta quando il browser è idle -->
<!-- <Contatore client:visible /> Monta quando entra nel viewport -->
```

Esempio `Contatore.jsx` (React):

```jsx
import { useState } from 'react';

export default function Contatore() {
	const [n, setN] = useState(0);
	return (
		<div style={{ display: 'inline-flex', gap: '.5rem', alignItems: 'center' }}>
			<button onClick={() => setN((x) => x - 1)}>-</button>
			<strong>{n}</strong>
			<button onClick={() => setN((x) => x + 1)}>+</button>
		</div>
	);
}
```

> Suggerimento: se non ti serve interattività, preferisci componenti `.astro` puramente statici per massime prestazioni.

---

## 4) Dati in build-time (fetch nel frontmatter)

Dentro i file `.astro` puoi usare `await` nel frontmatter per leggere dati al momento della build e renderizzarli come HTML statico.

```astro
---
// Esempio in una pagina .astro
const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
const posts = await res.json();
---

<ul>
	{posts.map((p) => (
		<li><strong>{p.title}</strong><br />{p.body}</li>
	))}
  
</ul>
```

> In Starlight, i contenuti della documentazione vivono in `src/content/docs`. Per pagine applicative personalizzate puoi aggiungere file `.astro` in `src/pages`.

---

## 5) Organizzare la documentazione con Starlight

- Aggiungi nuove pagine in `src/content/docs/…` usando `.md` o `.mdx`.
- Imposta il frontmatter in cima al file:

```yaml
---
title: Titolo pagina
description: Descrizione breve per motori di ricerca e anteprime.
---
```

- Controlla le voci del menu nella configurazione `astro.config.mjs` (chiave `sidebar`). Puoi:
	- elencare manualmente i percorsi (`slug`) sotto una sezione, oppure
	- usare `autogenerate` per generare una sezione a partire da una cartella (es. `reference`).

Esempio di una voce sidebar manuale:

```js
// astro.config.mjs (estratto)
starlight({
	sidebar: [
		{ label: 'Guides', items: [ { label: 'Hello World', slug: 'hello-world' } ] },
	],
});
```

---

## 6) Prossimi passi

- Trasforma questa pagina in `.mdx` se vuoi importare componenti.
- Crea un piccolo componente `.astro` e usalo in una pagina.
- Aggiungi la pagina alla sidebar per renderla facilmente raggiungibile.
- Approfondisci nel sito ufficiale: https://docs.astro.build e nella documentazione del tema: https://starlight.astro.build

Buon divertimento con Astro! ✨

