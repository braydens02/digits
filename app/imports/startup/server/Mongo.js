import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/contact/Contacts.js';

/* eslint-disable no-console */

const addContacts = (contact) => {
  console.log(`  Adding: ${contact.firstName} ${contact.lastName} (${contact.owner})`);
  Contacts.collection.insert(contact);
};

// Initialize the StuffsCollection if empty.
if (Contacts.collection.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating default contacts.');
    Meteor.settings.defaultContacts.forEach(data => addContacts(data));
  }
}
