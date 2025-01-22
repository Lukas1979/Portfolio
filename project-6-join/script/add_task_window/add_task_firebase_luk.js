const BASE_URL = `https://join-projekt-85028-default-rtdb.europe-west1.firebasedatabase.app/users/${sessionStorage.getItem('user')}`;

const kontakte = [
    { name: "Anna Müller", email: "anna.mueller@example.com", telefonnummer: "123456789" },
    { name: "Max Schneider", email: "max.schneider@example.com", telefonnummer: "987654321" },
    { name: "Lena Fischer", email: "lena.fischer@example.com", telefonnummer: "456789123" },
    { name: "Paul Weber", email: "paul.weber@example.com", telefonnummer: "654123987" },
    { name: "Julia Wagner", email: "julia.wagner@example.com", telefonnummer: "321654987" },
    { name: "Tim Becker", email: "tim.becker@example.com", telefonnummer: "159753258" },
    { name: "Lisa Hoffmann", email: "lisa.hoffmann@example.com", telefonnummer: "753951456" },
    { name: "Tom Schäfer", email: "tom.schaefer@example.com", telefonnummer: "951753654" },
    { name: "Emma Bauer", email: "emma.bauer@example.com", telefonnummer: "357951456" },
    { name: "Jan Richter", email: "jan.richter@example.com", telefonnummer: "159357852" },
    { name: "Lukasz Szymczak", email: "lukas@example.com", telefonnummer: "159357852" },
    { name: "Max Schmied", email: "max@example.com", telefonnummer: "153457852" },
    { name: "Max Schmied", email: "max2@example.com", telefonnummer: "153457852" }
];

const farben = [
    "#FF7A00", "#FF5EB3", "#6E52FF", "#9327FF", "#00BEE8",
    "#1FD7C1", "#FFC701", "#0038FF", "#C3FF2B", "#FF4646",
    "#FF745E", "#FFA35E"
];


/**
 * 
 * Function to create a contact in Firebase
 * 
 */
const erstelleKontakt = async (kontakt, farbe) => {
    const kontaktPfad = encodeURIComponent(kontakt.name); // Verwende den gesamten Namen als Pfad und kodiert ihn für URLs

    const kontaktData = {
        name: kontakt.name,
        email: kontakt.email,
        telefonnummer: kontakt.telefonnummer,
        farbe: farbe
    };

    try {
        const response = await fetch(`${BASE_URL}/contacts/${kontaktPfad}.json`, {
            method: "PUT",  // Verwendung von PUT, um einen bestimmten Pfad zu erstellen/aktualisieren
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(kontaktData)
        });

        if (response.ok) {
            const data = await response.json();
            console.log(`Kontakt erstellt:`, data);
        } else {
            console.error("Fehler beim Erstellen des Kontakts:", response.status);
        }
    } catch (error) {
        console.error("Fehler:", error);
    }
};


/**
 * 
 * Create all contacts with colors in Firebase
 * 
 */
const erstelleKontakteMitFarben = () => {
    kontakte.forEach((kontakt, index) => {
        const farbe = farben[index]; // Jeder Kontakt bekommt eine andere Farbe
        erstelleKontakt(kontakt, farbe);
    });
};


/**
 * 
 * Call function to create sample contact list
 * 
 */
//erstelleKontakteMitFarben();


/**
 * 
 * delete contact - example
 * Example: deleteContact("Anna Müller") would delete the contact named "Anna Müller" from the Firebase database.
 * 
 */
const deleteKontakt = async (name) => {
    const kontaktPfad = encodeURIComponent(name); // Kodiert den Namen für die URL

    try {
        const response = await fetch(`${BASE_URL}/contacts/${kontaktPfad}.json`, {
            method: "DELETE" // Verwendet die DELETE-Methode, um den Kontakt zu löschen
        });

        if (response.ok) {
            console.log(`Kontakt ${name} wurde erfolgreich gelöscht.`);
        } else {
            console.error("Fehler beim Löschen des Kontakts:", response.status);
        }
    } catch (error) {
        console.error("Fehler:", error);
    }
};


/**
 * 
 * create task infirebase
 * 
 */
const createTaskInFirebase = async (title, description, dueDate) => {

    const taskPfad = encodeURIComponent(title); // Verwende den gesamten Namen als Pfad und kodiert ihn für URLs
    const taskData = createTaskData(title, description, dueDate);

    try {
        const response = await fetch(`${BASE_URL}/tasks/${taskPfad}.json`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(taskData) });

        if (response.ok) {

            const data = await response.json();
            createTaskAnimation();
            setTimeout(() => { window.location.href = '../html/board.html' }, 2000);

            //console.log(`Task erstellt:`, data);

        } else { console.error("Fehler beim Erstellen des Tasks:", response.status) }

    } catch (error) { console.error("Fehler:", error) }
};


/**
 * 
 * create task data
 * 
 */
function createTaskData(title, description, dueDate) {

    let kanban = sessionStorage.getItem('kanbanId');
    if (!kanban || kanban == "") kanban = "to-do";

    return {
        title: title,
        description: description,
        assigned: selectedContacts,
        date: dueDate,
        prio: prio,
        category: selectedCategory,
        kanbanId: kanban,
        subtasks: subtaskCollection.map(item => ({ ...item, done: false, edit: undefined }))
    };
}


/**
 * 
 * get all due dates from firebase
 * 
 */
const getAllDueDatesFromFirebase = async () => {

    let dueDates = [];
    try {
        const response = await fetch(`${BASE_URL}/tasks.json`, { method: "GET", headers: { "Content-Type": "application/json" } });

        if (response.ok) {
            const data = await response.json();
            // Überprüfung, ob Daten existieren
            if (data) {
                // Iteriere über alle Tasks und sammle die dueDate-Werte
                for (const taskId in data) {
                    if (data[taskId].date) {  // Prüfen, ob das Task-Objekt ein `date`-Feld hat
                        dueDates.push(data[taskId].date);
                    }
                }
            }
        } else { console.error("Fehler beim Abrufen der Tasks:", response.status); }
    } catch (error) { console.error("Fehler:", error); }

    return dueDates;  // Rückgabe der gesammelten Fälligkeitsdaten
};












