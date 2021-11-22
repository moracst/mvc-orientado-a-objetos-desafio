import test from "ava";
import { ContactsController } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const contactsController = new ContactsController();
  const collection = contactsController.contacts;
  collection.load();
  const jsonContacts = jsonfile.readFileSync("./contacts.json");

  t.deepEqual(jsonContacts, collection.getAll());
});

test("Testeo el método processOptions", (t) => {
  const contactscontroller = new ContactsController();
  const getContact = contactscontroller.processOptions({
    action: "get",
    params: { id: 1, name: "ana" },
  });

  t.deepEqual(getContact, contactscontroller.contacts.getOneById(1));
});
