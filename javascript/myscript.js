

let app = new Vue ({
    el : '#app',

    data : {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
        
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        selectedContact: 0,

        inputLine: {
            date : "22/09/2021 15:30:55",
            text: "",
            status : 'sent'
        },

        automaticReply : {
            date : "22/09/2021 15:30:56",
            text : "ok",
            status : 'received'
        },

        inputContactSearch : ""
    },

    methods: {

        //metodo per il click sulla chat attiva che permette di selezionare l'indice "corrente"
        selectContact(elementIndex) {
            this.selectedContact = elementIndex;
        },

        //metodo per selezionare l'indice dell'ultimo messaggio inviato
        renderLastElement(index) {
            let contactMessages = this.contacts[index].messages;
            
            return contactMessages[contactMessages.length -1]

        },

        //metodo per aggiungere il messaggio input dell'utente nell'array messaggi
        addTextToChat() {
            if (this.inputLine.text.trim('').length > 0) {
                this.contacts[this.selectedContact].messages.push(this.inputLine);
                this.inputLine = '';
            }
        },

        //metodo per aggiungere risposta automatica in seguito al messaggio input dell'utente
        createReplyToChat() {
            if (this.contacts[this.selectedContact].messages.push(this.inputLine)) {
            this.contacts[this.selectedContact].messages.push(this.automaticReply)
            }
        },

        //funzione che richiama la funzione della risposta automatica e la fa partire dopo 1 secondo
        addReplyToChat() {
            setTimeout(this.createReplyToChat, 1000);
        },   
    },

    computed : { //property: data that needs to change based on some other data
        
        /**
         * il filterScript ?? un array "aggiornato" in base all'inputContactSearch(cio?? l'input utente),
         * dove tutto ci?? che non corrisponde all'input utente (nella propriet?? richiesta, in questo caso .name)
         * viene "filtrato via"
         * 
         * @returns prima di tutto il current array (this.contacts), a cui si applica il filtro che
         * a ciascun ciclo ritorner?? il "valore" (input); 
         * l'arrow function viene performata ogni giro del ciclo per ogni item "valore" (input);
         * viene specificata la propriet?? dentro cui controllare (attraverso match() ) l'input;
         * in caso ritorni "true" mantiene questo "valore" nell'array filtrato;
         */

        filterScript: function(){
            return this.contacts.filter((input) => { 
                return input.name.toLowerCase().match(this.inputContactSearch);
            });
        }
    }


})