const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  fs.readFile(contactsPath, (error, data) => {
    if (error) {
      console.error("Error reading contacts.json file.");
      return;
    }
    const contacts = JSON.parse(data);
    console.log("Contacts list:");
    console.table(contacts);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, (error, data) => {
    if (error) {
      console.error("Error reading contacts.json file.");
      return;
    }
    const contacts = JSON.parse(data);
    const contactsData = contacts.find((contact) => contact.id === contactId);
    if (!contactsData) {
      console.log(`Contact under id: ${contactId} doesn't exist.`);
      return;
    }
    console.log("Searched contact:");
    console.table(contactsData);
  });
}

function removeContact(contactId) {
  // ...twój kod
}

function addContact(name, email, phone) {
  // ...twój kod
}
