import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];

  load() {
    const json = jsonfile.readFileSync("./contacts.json");
    this.data = json;
  }
  getAll() {
    return this.data;
  }
  addOne(contacts: Contact) {
    this.data.push(contacts);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.data);
  }
  getOneById(id) {
    return this.data.find((i) => {
      return i.id == id;
    });
  }
}
export { ContactsCollection, Contact };
