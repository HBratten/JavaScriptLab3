class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let newContact = new Contact(name, email, phone, relation);
    this.contacts.push(newContact);
  }
  delete(name) {
    const index = this.contacts.findIndex(contact => {
      return contact.name === name;
    });
    if (index >= 0) {
      this.contacts.splice(index, 1);
    }
  }

  print() {
    for (let i = 0; i < this.contacts.length; i++) {
      console.log(this.contacts[i]);
    }
  }
}
class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const addressBook = new AddressBook();
addressBook.add("Mom", "rjupton5@aol.com", 5857641097, "Parent");
addressBook.add("Dad", "rupton@costsegs.com", 5857505799, "Parent");
addressBook.add("Caroline", "uptonccc@gmail.com", 5857643479, "Sibling");
addressBook.add("Danny", "dcu5001@gmail.com", 5857643962, "Sibling");
addressBook.add("Connor", "connorabratten@gmail.com", 2489307122, "Spouse");
addressBook.delete();
addressBook.print();
