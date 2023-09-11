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
  fs.readFile(contactsPath, (error, data) => {
    if (error) {
      console.error("Error reading contacts.json file.");
      return;
    }
    const contacts = JSON.parse(data);
    const index = contacts.find((contact) => contact.id === contactId);

    if (index === -1) {
      console.error(`Contact under id: ${contactId} doesn't exist.`);
      return;
    }
    const removedContact = contacts.splice(index, 1);
    fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), (error) => {
      if (error) {
        console.error(`Error saving file`);
        return;
      }
      console.log("Deleted contact:");
      console.table(removedContact);
    });
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, (error, data) => {
    if (error) {
      console.error("Error reading contacts.json file.");
      return;
    }
    const contacts = JSON.parse(data);
    const newContact = { name, email, phone };
    contacts.push(newContact);

    fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), (error) => {
      if (error) {
        console.error("Error saving file");
        return;
      }
      console.log("Contact added:");
      console.table(newContact);
    });
  });
}

module.exports = { listContacts, getContactById, removeContact, addContact };
