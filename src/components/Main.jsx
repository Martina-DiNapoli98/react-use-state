import { useState } from "react";

const buttons = [
    {
        "Id": 1,
        "title": "HTML",
        "description": "HTML (HyperText Markup Language) è il linguaggio standard per creare e strutturare contenuti sul web. Viene utilizzato per definire la struttura di una pagina web, come titoli, paragrafi, immagini e collegamenti."
    },
    {
        "Id": 2,
        "title": "CSS",
        "description": "CSS (Cascading Style Sheets) è un linguaggio utilizzato per definire lo stile e l'aspetto visivo di una pagina web, come colori, layout e font. Si integra con HTML per rendere le pagine web esteticamente piacevoli."
    },
    {
        "Id": 3,
        "title": "JavaScript",
        "description": "JavaScript è un linguaggio di programmazione che consente di aggiungere interattività e dinamismo alle pagine web. Può essere utilizzato per validare form, creare animazioni, gestire eventi e molto altro."
    },
    {
        "Id": 4,
        "title": "Node.js",
        "description": "Node.js è un ambiente di esecuzione JavaScript lato server. Permette di eseguire JavaScript fuori dal browser e viene utilizzato per sviluppare applicazioni web veloci e scalabili."
    },
    {
        "Id": 5,
        "title": "Express",
        "description": "React è una libreria JavaScript per costruire interfacce utente interattive. È sviluppata e mantenuta da Facebook e consente di creare applicazioni web complesse in modo modulare e performante."
    },
    {
        "Id": 6,
        "title": "React",
        "description": "React è una libreria JavaScript per costruire interfacce utente interattive. È sviluppata e mantenuta da Facebook e consente di creare applicazioni web complesse in modo modulare e performante."
    }

];

export default function Main() {
    const [isOpen, setIsOpen] = useState(1)

    return (
        <div className='container'>
            <div className='buttons'>
                {
                    buttons.map((button) => (
                        <button key={`button-${button.id}`}
                            className={isOpen.title === button.title ? "btn active" : "btn"} onClick={() => setIsOpen(button)}>
                            {button.title}
                        </button>
                    ))
                }
                <div className="info">
                    <h2>{isOpen.title}</h2>
                    <p>{isOpen.description}</p>

                </div>

            </div>
        </div>
    )
};


