class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
  delete(name) {}

  print() {
    console.log(`
    Name: ${name} 
    E-Mail: ${email} 
    Phone Number: ${phone} 
    Relationship: ${relation} 
      `);
  }
}
class Contact extends AddressBook {
  constructor() {
    super(name);
    super(email);
    super(phone);
    super(relation);
  }
}

const addressBook = new AddressBook();
addressBook.add(Mom, "rjupton5@aol.com", 5857641097, Parent);
addressBook.add(Dad, "rupton@costsegs.com", 5857505799, Parent);
addressBook.add(Caroline, "uptonccc@gmail.com", 5857643479, Sibling);
addressBook.add(Danny, "dcu5001@gmail.com", 5857643962, Sibling);
addressBook.add(Connor, "connorabratten@gmail.com", 2489307122, Spouse);
addressBook.delete();
addressBook.print();
